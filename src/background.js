import __browser__ from './browser'
import { getParamFromUrl } from './util/url'
import { getAuthTab } from './util/utils'
import {
  fetchToken,
  fetchSyndicationTargets,
} from './background/authentication'
import { info, error } from './util/log'
import micropub, { postBookmark } from './util/micropub'

let authTabId = null

function handleMessage(request, sender) {
  switch (request.action) {
    case 'begin-auth':
      handleBeginAuth(request.payload)
      break
    case 'focus-window':
      updateFocusedWindow(
        sender.tab.id,
        request.payload.pageEntry,
        request.payload.selectedEntry
      )
      break
    case 'select-entry':
      selectEntry(request.payload)
      break
    case 'clear-entry':
      clearEntry()
  }
}

function handleBeginAuth(payload) {
  localStorage.setItem('domain', payload.domain)
  localStorage.setItem('authEndpoint', payload.metadata.authEndpoint)
  localStorage.setItem('tokenEndpoint', payload.metadata.tokenEndpoint)
  localStorage.setItem('micropubEndpoint', payload.metadata.micropub)
  __browser__.tabs.create({ url: payload.authUrl }, (tab) => {
    authTabId = tab.id
  })
}

function updateFocusedWindow(tabId, pageEntry, selectedEntry) {
  localStorage.setItem('pageEntry', JSON.stringify(pageEntry))
  localStorage.setItem('pageTabId', tabId)
  if (selectedEntry) {
    selectEntry(selectedEntry)
  } else {
    clearEntry()
  }
}

function selectEntry(entry) {
  localStorage.setItem('itemEntry', JSON.stringify(entry))
}

function clearEntry() {
  localStorage.removeItem('itemEntry')
}

function handleTabChange(tabId, changeInfo, tab) {
  if (tabId !== authTabId || !isAuthRedirect(changeInfo)) {
    return
  }
  var code = getParamFromUrl('code', changeInfo.url)
  setTimeout(() => {
    sendAuthStatusUpdate(`Retrieving access token…`)
    fetchToken(code)
      .then(() => {
        sendAuthStatusUpdate('Fetching syndication targets…')
        return fetchSyndicationTargets()
      })
      .then(() => {
        sendAuthStatusUpdate(`Authentication complete.`)
        authTabId = null
        setTimeout(() => {
          __browser__.tabs.remove(tab.id)
        }, 500)
      })
      .catch((err) => {
        error(err.message, err)
      })
  }, 500)
}

function sendAuthStatusUpdate(message) {
  info(message)
  getAuthTab().then((tab) => {
    __browser__.tabs.sendMessage(tab.id, {
      action: 'auth-status-update',
      payload: { message },
    })
  })
}

function isAuthRedirect(changeInfo) {
  var url = 'https://omnibear.com/auth/success'
  return changeInfo.url && changeInfo.url.startsWith(url)
}

__browser__.runtime.onMessage.addListener(handleMessage)
__browser__.tabs.onUpdated.addListener(handleTabChange)
__browser__.contextMenus.create({
  title: 'Reply to entry',
  contexts: ['page', 'selection'],
  onclick: function () {
    if (typeof browser === 'undefined') {
      // Chrome
      window.open(
        'index.html?type=reply',
        'extension_popup',
        'width=450,height=580,status=no,scrollbars=yes,resizable=no,top=80,left=2000'
      )
    } else {
      // Firefox (and others?)
      browser.windows.create({
        url: 'index.html?type=reply',
        width: 450,
        height: 580,
        type: 'panel',
        left: 2000,
      })
    }
  },
})

var currentTab
var currentBookmark

// --------------
//
function createBookmark(id) {
  const token = localStorage.getItem('token')
  const microurl = localStorage.getItem('micropubEndpoint')
  if (!token || !microurl) return
  micropub.options.token = token
  micropub.options.micropubEndpoint = microurl

  return browser.bookmarks
    .get(id)
    .then((it) => it[0])
    .then((it) => {
      console.log(it)
      const res = postBookmark(
        { title: it.title, content: 'test bookmark', category: ['category'] },
        it.url,
        {}
      )
      console.log('res ', res)
    })
    .catch(console.log)
}

function updateBookmark(id) {
  const token = localStorage.getItem('token')
  if (!token) return

  return browser.bookmarks
    .get(id)
    .then((it) => it[0])
    .then(console.log)
    .catch(console.log)
}

function removeBookmark(id) {
  const token = localStorage.getItem('token')
  if (!token) return

  console.log(id)
  // try {
  //   const url = currentTab.url
  //   console.log(url)
  // } catch (e) {
  //   console.error(url)
  // }
}

__browser__.bookmarks.onCreated.addListener(createBookmark)

__browser__.bookmarks.onChanged.addListener(updateBookmark)

__browser__.bookmarks.onRemoved.addListener(removeBookmark)
