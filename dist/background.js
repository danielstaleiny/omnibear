(function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=13)})({1:function(t,e,n){"use strict";function r(t,e,n){console.warn("Using deprecated function: requests.post");var r;return r="string"==typeof e?e:o(e),fetch(t+"?"+r,{method:"POST",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:n?JSON.stringify(n):null}).then(function(t){return t.text()})}function o(t){var e=[];for(var n in t)e.push(n+"="+t[n]);return e.join("&")}function a(t,e,n){return console.warn("Using deprecated function: requests.postMicropub"),fetch(t,{method:"POST",headers:{Authorization:"Bearer "+n},body:new FormData(e)}).then(function(t){return t.text()})}function i(t,e,n){return fetch(t,{method:"POST",headers:{Authorization:"Bearer "+n},body:u(e)}).then(function(t){return t.text()})}function u(t){var e=new FormData;for(var n in t)Array.isArray(t[n])?t[n].forEach(function(t,r){e.append(n,t)}):e.append(n,t[n]);return e}Object.defineProperty(e,"__esModule",{value:!0}),e.post=r,e.getParamString=o,e.postMicropub=a,e.postFormData=i,e.formDataFromObject=u},13:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n){switch(t.action){case"begin-auth":a(t.payload)}}function a(t){console.log(t),localStorage.setItem("domain",t.domain),localStorage.setItem("authEndpoint",t.metadata.authEndpoint),localStorage.setItem("tokenEndpoint",t.metadata.tokenEndpoint),localStorage.setItem("micropubEndpoint",t.metadata.micropub),chrome.tabs.create({url:t.authUrl},function(t,e,n){p=t.id})}function i(t,e,n){if(t===p&&u(e)){var r=c("code",e.url);l(r).then(function(t){var e=s("access_token",t);localStorage.setItem("token",e),chrome.tabs.remove(n.id),p=null})}}function u(t){var e="http://omnibear.com/auth/success";return"loading"===t.status&&t.url&&t.url.startsWith(e)}function c(t,e){var n=e.split("?")[1];return s(t,n)}function s(t,e){var n=e.split("&").filter(function(e){return e.startsWith(t+"=")});if(n&&n.length){var r=n[0].substr(t.length+1);return decodeURIComponent(r)}return null}function l(t){var e={code:t,redirect_uri:"http://omnibear.com/auth/success/",client_id:"http://omnibear.com",me:"http://keithjgrant.com"},n=localStorage.getItem("tokenEndpoint");return f.default.post(n,e)}var d=n(1),f=r(d),p=null;(function(){chrome.runtime.onMessage.addListener(o),chrome.tabs.onUpdated.addListener(i)})()}});
//# sourceMappingURL=background.js.map