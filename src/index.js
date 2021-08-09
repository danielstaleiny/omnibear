// import { h, render } from 'preact'
// import { configure } from 'mobx'
// import { Provider } from 'mobx-preact'
// import App from './components/App'
// import store from './stores/store'
// import authStore from './stores/authStore'
// import draftStore from './stores/draftStore'
// import settingsStore from './stores/settingsStore'

import __browser__ from './browser'
import micropub from './util/micropub'

// configure({ enforceActions: true })

// const stores = {
//   store,
//   auth: authStore,
//   draft: draftStore,
//   settings: settingsStore,
// }
//

function checkAuth() {
  if (localStorage.getItem('token')) {
    document.getElementById('app').innerHTML =
      document.getElementById('logged').innerHTML
    document.getElementById('span').innerText = localStorage.getItem('domain')
  }
}

__browser__.runtime.onMessage.addListener(checkAuth)

document.addEventListener('DOMContentLoaded', function () {
  if (window.location.search.includes('location=sidebar')) {
    document.body.classList.add('sidebar')
  }

  if (localStorage.getItem('token')) {
    document.getElementById('app').innerHTML =
      document.getElementById('logged').innerHTML
    document.getElementById('span').innerText = localStorage.getItem('domain')
    return
  }

  document
    .getElementById('form-login')
    .addEventListener('submit', function (e) {
      e.preventDefault() // before the code
      const webpage = document.getElementById('input-text-webpage').value

      const domain = getNormalizedDomain(webpage)

      return login(domain).then(console.log).catch(console.log)
    })
})

function getNormalizedDomain(domain) {
  if (domain.startsWith('http://') || domain.startsWith('https://')) {
    return domain
  } else {
    return `https://${domain}`
  }
}

function getFields(domain) {
  return [
    'redirect_uri=https://omnibear.com/auth/success/',
    'client_id=https://omnibear.com',
    'response_type=code',
    'scope=create',
    `me=${domain}`,
  ].join('&')
}

async function login(domain) {
  console.log(`Begin authentication to ${domain}`)
  micropub.options.me = domain
  try {
    const url = await micropub.getAuthUrl()
    console.log(`authorization_endpoint found: ${url}`)
    __browser__.runtime.sendMessage({
      action: 'begin-auth',
      payload: {
        authUrl: url,
        domain: domain,
        metadata: {
          authEndpoint: micropub.options.authEndpoint,
          tokenEndpoint: micropub.options.tokenEndpoint,
          micropub: micropub.options.micropubEndpoint,
        },
      },
    })
  } catch (err) {
    console.log(err)
  }
}
