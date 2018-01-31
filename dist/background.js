(function(e){function t(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var r={};t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,o){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=23)})([,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.openLink=function(e){e.preventDefault(),e.target.href&&chrome.tabs.create({url:e.target.href})},t.clone=function(e){return JSON.parse(JSON.stringify(e))},t.getAuthTab=function(){return new Promise(function(e,t){chrome.tabs.query({url:"https://omnibear.com/auth/success*"},function(r){r.length?e(r[0]):t("Auth tab not found")})})},t.logout=function(){["token","domain","authEndpoint","tokenEndpoint","micropubEndpoint"].map(function(e){return localStorage.removeItem(e)})},t.generateSlug=function(e){var t=e.toLocaleLowerCase().trim();t=t.replace(/\s/g,"-");for(var r=0,s=n.length;r<s;r++)t=t.replace(new RegExp(n.charAt(r),"g"),i.charAt(r));return(t=(t=t.replace(o,"")).replace(/\-\-+/g,"-")).split("-").splice(0,6).join("-")};var o=/[^A-Za-z0-9\-]/g,n="áäâàãåčçćďéěëèêẽĕȇęėíìîïňñóöòôõøðřŕšťúůüùûýÿžþÞĐđßÆa·/_,:;",i="aaaaaacccdeeeeeeeeeeiiiinnooooooorrstuuuuuyyzbBDdBAa------"},,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){return e&&e.__esModule?e:{default:e}}(r(14));t.default=new o.default({clientId:"https://omnibear.com",redirectUri:"https://omnibear.com/auth/success/",state:"very-secret-omnibear-state",me:localStorage.getItem("domain"),authEndpoint:localStorage.getItem("authEndpoint"),tokenEndpoint:localStorage.getItem("tokenEndpoint"),micropubEndpoint:localStorage.getItem("micropubEndpoint"),token:localStorage.getItem("token")})},function(e,t,r){"use strict";var o=String.prototype.replace,n=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return o.call(e,n,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},function(e,t,r){"use strict";var o=Object.prototype.hasOwnProperty,n=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}();t.arrayToObject=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},o=0;o<e.length;++o)void 0!==e[o]&&(r[o]=e[o]);return r},t.merge=function(e,r,n){if(!r)return e;if("object"!=typeof r){if(Array.isArray(e))e.push(r);else{if("object"!=typeof e)return[e,r];(n.plainObjects||n.allowPrototypes||!o.call(Object.prototype,r))&&(e[r]=!0)}return e}if("object"!=typeof e)return[e].concat(r);var i=e;return Array.isArray(e)&&!Array.isArray(r)&&(i=t.arrayToObject(e,n)),Array.isArray(e)&&Array.isArray(r)?(r.forEach(function(r,i){o.call(e,i)?e[i]&&"object"==typeof e[i]?e[i]=t.merge(e[i],r,n):e.push(r):e[i]=r}),e):Object.keys(r).reduce(function(e,i){var s=r[i];return o.call(e,i)?e[i]=t.merge(e[i],s,n):e[i]=s,e},i)},t.assign=function(e,t){return Object.keys(t).reduce(function(e,r){return e[r]=t[r],e},e)},t.decode=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},t.encode=function(e){if(0===e.length)return e;for(var t="string"==typeof e?e:String(e),r="",o=0;o<t.length;++o){var i=t.charCodeAt(o);45===i||46===i||95===i||126===i||i>=48&&i<=57||i>=65&&i<=90||i>=97&&i<=122?r+=t.charAt(o):i<128?r+=n[i]:i<2048?r+=n[192|i>>6]+n[128|63&i]:i<55296||i>=57344?r+=n[224|i>>12]+n[128|i>>6&63]+n[128|63&i]:(o+=1,i=65536+((1023&i)<<10|1023&t.charCodeAt(o)),r+=n[240|i>>18]+n[128|i>>12&63]+n[128|i>>6&63]+n[128|63&i])}return r},t.compact=function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],o=0;o<t.length;++o)for(var n=t[o],i=n.obj[n.prop],s=Object.keys(i),a=0;a<s.length;++a){var c=s[a],u=i[c];"object"==typeof u&&null!==u&&-1===r.indexOf(u)&&(t.push({obj:i,prop:c}),r.push(u))}return function(e){for(var t;e.length;){var r=e.pop();if(t=r.obj[r.prop],Array.isArray(t)){for(var o=[],n=0;n<t.length;++n)void 0!==t[n]&&o.push(t[n]);r.obj[r.prop]=o}}return t}(t)},t.isRegExp=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},t.isBuffer=function(e){return null!==e&&void 0!==e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))}},,function(e,t,r){"use strict";var o=r(9),n=r(8),i=r(4);e.exports={formats:i,parse:n,stringify:o}},function(e,t,r){"use strict";var o=r(5),n=Object.prototype.hasOwnProperty,i={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:o.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1};e.exports=function(e,t){var r=t?o.assign({},t):{};if(null!==r.decoder&&void 0!==r.decoder&&"function"!=typeof r.decoder)throw new TypeError("Decoder has to be a function.");if(r.ignoreQueryPrefix=!0===r.ignoreQueryPrefix,r.delimiter="string"==typeof r.delimiter||o.isRegExp(r.delimiter)?r.delimiter:i.delimiter,r.depth="number"==typeof r.depth?r.depth:i.depth,r.arrayLimit="number"==typeof r.arrayLimit?r.arrayLimit:i.arrayLimit,r.parseArrays=!1!==r.parseArrays,r.decoder="function"==typeof r.decoder?r.decoder:i.decoder,r.allowDots="boolean"==typeof r.allowDots?r.allowDots:i.allowDots,r.plainObjects="boolean"==typeof r.plainObjects?r.plainObjects:i.plainObjects,r.allowPrototypes="boolean"==typeof r.allowPrototypes?r.allowPrototypes:i.allowPrototypes,r.parameterLimit="number"==typeof r.parameterLimit?r.parameterLimit:i.parameterLimit,r.strictNullHandling="boolean"==typeof r.strictNullHandling?r.strictNullHandling:i.strictNullHandling,""===e||null===e||void 0===e)return r.plainObjects?Object.create(null):{};for(var s="string"==typeof e?function(e,t){for(var r={},o=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,s=t.parameterLimit===1/0?void 0:t.parameterLimit,a=o.split(t.delimiter,s),c=0;c<a.length;++c){var u,l,p=a[c],d=p.indexOf("]="),f=-1===d?p.indexOf("="):d+1;-1===f?(u=t.decoder(p,i.decoder),l=t.strictNullHandling?null:""):(u=t.decoder(p.slice(0,f),i.decoder),l=t.decoder(p.slice(f+1),i.decoder)),n.call(r,u)?r[u]=[].concat(r[u]).concat(l):r[u]=l}return r}(e,r):e,a=r.plainObjects?Object.create(null):{},c=Object.keys(s),u=0;u<c.length;++u){var l=c[u],p=function(e,t,r){if(e){var o=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,i=/(\[[^[\]]*])/g,s=/(\[[^[\]]*])/.exec(o),a=s?o.slice(0,s.index):o,c=[];if(a){if(!r.plainObjects&&n.call(Object.prototype,a)&&!r.allowPrototypes)return;c.push(a)}for(var u=0;null!==(s=i.exec(o))&&u<r.depth;){if(u+=1,!r.plainObjects&&n.call(Object.prototype,s[1].slice(1,-1))&&!r.allowPrototypes)return;c.push(s[1])}return s&&c.push("["+o.slice(s.index)+"]"),function(e,t,r){for(var o=t,n=e.length-1;n>=0;--n){var i,s=e[n];if("[]"===s)i=(i=[]).concat(o);else{i=r.plainObjects?Object.create(null):{};var a="["===s.charAt(0)&&"]"===s.charAt(s.length-1)?s.slice(1,-1):s,c=parseInt(a,10);!isNaN(c)&&s!==a&&String(c)===a&&c>=0&&r.parseArrays&&c<=r.arrayLimit?(i=[])[c]=o:i[a]=o}o=i}return o}(c,t,r)}}(l,s[l],r);a=o.merge(a,p,r)}return o.compact(a)}},function(e,t,r){"use strict";var o=r(5),n=r(4),i={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},s=Date.prototype.toISOString,a={delimiter:"&",encode:!0,encoder:o.encode,encodeValuesOnly:!1,serializeDate:function(e){return s.call(e)},skipNulls:!1,strictNullHandling:!1};e.exports=function(e,t){var r=e,s=t?o.assign({},t):{};if(null!==s.encoder&&void 0!==s.encoder&&"function"!=typeof s.encoder)throw new TypeError("Encoder has to be a function.");var c=void 0===s.delimiter?a.delimiter:s.delimiter,u="boolean"==typeof s.strictNullHandling?s.strictNullHandling:a.strictNullHandling,l="boolean"==typeof s.skipNulls?s.skipNulls:a.skipNulls,p="boolean"==typeof s.encode?s.encode:a.encode,d="function"==typeof s.encoder?s.encoder:a.encoder,f="function"==typeof s.sort?s.sort:null,h=void 0!==s.allowDots&&s.allowDots,m="function"==typeof s.serializeDate?s.serializeDate:a.serializeDate,g="boolean"==typeof s.encodeValuesOnly?s.encodeValuesOnly:a.encodeValuesOnly;if(void 0===s.format)s.format=n.default;else if(!Object.prototype.hasOwnProperty.call(n.formatters,s.format))throw new TypeError("Unknown format option provided.");var y,b,v=n.formatters[s.format];"function"==typeof s.filter?r=(b=s.filter)("",r):Array.isArray(s.filter)&&(y=b=s.filter);var w=[];if("object"!=typeof r||null===r)return"";var k;k=s.arrayFormat in i?s.arrayFormat:"indices"in s?s.indices?"indices":"repeat":"indices";var j=i[k];y||(y=Object.keys(r)),f&&y.sort(f);for(var O=0;O<y.length;++O){var E=y[O];l&&null===r[E]||(w=w.concat(function e(t,r,n,i,s,c,u,l,p,d,f,h){var m=t;if("function"==typeof u)m=u(r,m);else if(m instanceof Date)m=d(m);else if(null===m){if(i)return c&&!h?c(r,a.encoder):r;m=""}if("string"==typeof m||"number"==typeof m||"boolean"==typeof m||o.isBuffer(m))return c?[f(h?r:c(r,a.encoder))+"="+f(c(m,a.encoder))]:[f(r)+"="+f(String(m))];var g=[];if(void 0===m)return g;var y;if(Array.isArray(u))y=u;else{var b=Object.keys(m);y=l?b.sort(l):b}for(var v=0;v<y.length;++v){var w=y[v];s&&null===m[w]||(g=Array.isArray(m)?g.concat(e(m[w],n(r,w),n,i,s,c,u,l,p,d,f,h)):g.concat(e(m[w],r+(p?"."+w:"["+w+"]"),n,i,s,c,u,l,p,d,f,h)))}return g}(r[E],E,j,u,l,p?d:null,b,f,h,m,v,g)))}var A=w.join(c),x=!0===s.addQueryPrefix?"?":"";return A.length>0?x+A:""}},function(e,t,r){"use strict";var o=r(7);r.n(o);r.o(o,"parse")&&r.d(t,"a",function(){return o.parse}),r.o(o,"stringify")&&r.d(t,"c",function(){return o.stringify});var n=r(13);r.d(t,"b",function(){return n.a});var i=r(12);r.d(t,"d",function(){return i.a});var s=r(11);r.d(t,"e",function(){return s.a})},function(e,t,r){"use strict";t.a=function(e,t){const r=-1==e.indexOf("?")?"?":"&";let o=[];for(var n in t)Array.isArray(t[n])?t[n].forEach(e=>{o.push(n+"[]="+encodeURIComponent(e))}):o.push(n+"="+encodeURIComponent(t[n]));return e+r+o.join("&")}},function(e,t,r){"use strict";function o(e,t=new FormData,r=!1){return Object.keys(e).forEach(n=>{const i=e[n];r&&(n=r+"["+n+"]"),Array.isArray(i)?t=o(i,t,n):t.append(n,i)}),t}t.a=o},function(e,t,r){"use strict";t.a=function(e,t){let r={},o=t;const n=(new DOMParser).parseFromString(e,"text/html"),i=n.querySelector("base[href]"),s=n.querySelectorAll("[rel][href]");if(i){const e=i.getAttribute("href"),r=new URL(e,t);o=r.toString()}return s.length&&s.forEach(e=>{const t=e.getAttribute("rel").toLowerCase().split("\\s+"),n=e.getAttribute("href");t.length&&null!==n&&t.forEach(e=>{r[e]||(r[e]=[]);const t=new URL(n,o).toString();-1===r[e].indexOf(t)&&r[e].push(t)})}),r}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){var o=r(10);const n=o.a,i=o.b,s=o.c,a=o.d,c=o.e;o.FormData&&!e.FormData&&(e.FormData=o.FormData),o.DOMParser&&!e.DOMParser&&(e.DOMParser=o.DOMParser),o.URL&&!e.URL&&(e.URL=o.URL);const u={me:"",scope:"post create delete update",token:"",authEndpoint:"",tokenEndpoint:"",micropubEndpoint:""},l=(e,t=null,r=null)=>({message:e,status:t,error:r});class p{constructor(e={}){this.options=Object.assign({},u,e),this.create=this.create.bind(this),this.update=this.update.bind(this),this.delete=this.delete.bind(this),this.undelete=this.undelete.bind(this),this.postMicropub=this.postMicropub.bind(this),this.checkRequiredOptions=this.checkRequiredOptions.bind(this),this.getAuthUrl=this.getAuthUrl.bind(this),this.getEndpointsFromUrl=this.getEndpointsFromUrl.bind(this)}checkRequiredOptions(e){let t=[],r=!0;for(var o=0;o<e.length;o++){const n=e[o];this.options[n]||(r=!1,t.push(n))}return{pass:r,missing:t}}getEndpointsFromUrl(e){return new Promise((t,r)=>{let o={micropub:null,authorization_endpoint:null,token_endpoint:null},n=e;fetch(e).then(e=>{if(!e.ok)return r(l("Error getting page",e.status));n=e.url;const t=e.headers.get("link");if(t){t.split(",").forEach(e=>{Object.keys(o).forEach(t=>{const r=e.match(/rel=("([^"]*)"|([^,"<]+))/);if(r&&r[1]&&r[1].indexOf(t)>=0){const r=e.match(/[^<>|\s]+/g);r&&r[0]&&(o[t]=r[0])}})})}return e.text()}).then(s=>{const a=i(s,n);return this.options.me=e,a&&Object.keys(o).forEach(e=>{a[e]&&a[e][0]&&(o[e]=a[e][0])}),o.micropub&&o.authorization_endpoint&&o.token_endpoint?(this.options.micropubEndpoint=o.micropub,this.options.tokenEndpoint=o.token_endpoint,this.options.authEndpoint=o.authorization_endpoint,t({auth:this.options.authEndpoint,token:this.options.tokenEndpoint,micropub:this.options.micropubEndpoint})):r(l("Error getting microformats data"))}).catch(e=>r(l("Error fetching url",null,e)))})}getToken(e){return new Promise((t,r)=>{const o=this.checkRequiredOptions(["me","state","scope","clientId","redirectUri","tokenEndpoint"]);if(!o.pass)return r(l("Missing required options: "+o.missing.join(", ")));const i={grant_type:"authorization_code",state:this.options.state,me:this.options.me,code:e,scope:this.options.scope,state:this.options.state,client_id:this.options.clientId,redirect_uri:this.options.redirectUri},a={method:"POST",body:s(i),headers:new Headers({"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",Accept:"application/json, application/x-www-form-urlencoded"})};fetch(this.options.tokenEndpoint,a).then(e=>{if(!e.ok)return r(l("Error getting token",e.status));const t=e.headers.get("Content-Type");return t&&0===t.indexOf("application/json")?e.json():e.text()}).then(e=>("string"==typeof e&&(e=n(e)),e.error_description?r(l(e.error_description)):e.error?r(l(e.error)):e.me&&e.scope&&e.access_token?e.me&&e.me.replace(/\/+$/,"")!==this.options.me.replace(/\/+$/,"")?r(l("The me values did not match")):(this.options.token=e.access_token,void t(e.access_token)):r(l("The token endpoint did not return the expected parameters")))).catch(e=>r(l("Error requesting token endpoint",null,e)))})}getAuthUrl(){return new Promise((e,t)=>{let r=this.checkRequiredOptions(["me","state"]);if(!r.pass)return t(l("Missing required options: "+r.missing.join(", ")));this.getEndpointsFromUrl(this.options.me).then(()=>{let r=this.checkRequiredOptions(["me","state","scope","clientId","redirectUri"]);if(!r.pass)return t(l("Missing required options: "+r.missing.join(", ")));const o={me:this.options.me,client_id:this.options.clientId,redirect_uri:this.options.redirectUri,response_type:"code",scope:this.options.scope,state:this.options.state};e(this.options.authEndpoint+"?"+s(o))}).catch(e=>t(l("Error getting auth url",null,e)))})}verifyToken(){return new Promise((e,t)=>{const r=this.checkRequiredOptions(["token","micropubEndpoint"]);if(!r.pass)return t(l("Missing required options: "+r.missing.join(", ")));const o={method:"GET",headers:new Headers({Authorization:"Bearer "+this.options.token})};fetch(this.options.micropubEndpoint,o).then(r=>r.ok?e(!0):t(l("Error verifying token",r.status))).catch(e=>t(l("Error verifying token",null,e)))})}create(e,t="json"){return this.postMicropub(e,t)}update(e,t){return this.postMicropub(Object.assign({action:"update",url:e},t))}delete(e){return this.postMicropub({action:"delete",url:e})}undelete(e){return this.postMicropub({action:"undelete",url:e})}postMicropub(e,t="json"){return new Promise((r,o)=>{const i=this.checkRequiredOptions(["token","micropubEndpoint"]);if(!i.pass)return o(l("Missing required options: "+i.missing.join(", ")));let c={method:"POST"};"json"==t?(c.body=JSON.stringify(e),c.headers=new Headers({Authorization:"Bearer "+this.options.token,"Content-Type":"application/json",Accept:"application/json, application/x-www-form-urlencoded"})):"form"==t?(c.body=s(e),c.headers=new Headers({Authorization:"Bearer "+this.options.token,"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",Accept:"application/json, application/x-www-form-urlencoded"})):"multipart"==t&&(c.body=a(e),c.headers=new Headers({Authorization:"Bearer "+this.options.token,"Content-Type":void 0,Accept:"application/json, application/x-www-form-urlencoded"})),fetch(this.options.micropubEndpoint,c).then(e=>{if(!e.ok)return o(l("Error with micropub request",e.status));const t=e.headers.get("Location")||e.headers.get("location");if(t)return r(t);const n=e.headers.get("Content-Type");return n&&0===n.indexOf("application/json")?e.json():e.text()}).then(e=>("string"==typeof e&&(e=n(e)),e.error_description?o(l(e.error_description)):e.error?o(l(e.error)):r(e))).catch(e=>o(l("Error sending request",null,e)))})}postMedia(e){return new Promise((t,r)=>{const o=this.checkRequiredOptions(["token","mediaEndpoint"]);if(!o.pass)return r(l("Missing required options: "+o.missing.join(", ")));let n={method:"POST",body:a({file:e}),headers:new Headers({Authorization:"Bearer "+this.options.token,"Content-Type":void 0,Accept:"*/*"})};fetch(this.options.mediaEndpoint,n).then(e=>{if(201!==e.status)return r(l("Error creating media",e.status));const o=e.headers.get("Location")||e.headers.get("location");return o?t(o):r(l("Media endpoint did not return a location",e.status))}).catch(e=>r(l("Error sending request")))})}query(e){return new Promise((t,r)=>{const o=this.checkRequiredOptions(["token","micropubEndpoint"]);if(!o.pass)return r(l("Missing required options: "+o.missing.join(", ")));const n=c(this.options.micropubEndpoint,{q:e}),i={method:"GET",headers:new Headers({Authorization:"Bearer "+this.options.token,"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",Accept:"application/json"})};fetch(n,i).then(t=>t.ok?t.json():r(l("Error getting "+e,t.status))).then(e=>t(e)).catch(t=>r(l("Error getting "+e,null,t)))})}querySource(e,t=[]){return new Promise((r,o)=>{const n=this.checkRequiredOptions(["token","micropubEndpoint"]);if(!n.pass)return o(l("Missing required options: "+n.missing.join(", ")));e=c(this.options.micropubEndpoint,{q:"source",url:e,properties:t});const i={method:"GET",headers:new Headers({Authorization:"Bearer "+this.options.token,"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",Accept:"application/json"})};fetch(e,i).then(e=>e.ok?e.json():o(l("Error getting source",e.status))).then(e=>r(e)).catch(e=>o(l("Error getting source",null,e)))})}}t.default=p}.call(t,r(15))},function(e,t){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t,r){"use strict";function o(e,t){var r=t.split("&").filter(function(t){return t.startsWith(e+"=")});if(r&&r.length){var o=r[0].substr(e.length+1);return decodeURIComponent(o)}return null}function n(e){var t={};for(var r in e)r.startsWith("utm_")||(t[r]=e[r]);return t}function i(e){var t=[];for(var r in e)t.push(r+"="+e[r]);return t.length?"?"+t.join("&"):""}Object.defineProperty(t,"__esModule",{value:!0}),t.getParamFromUrl=function(e,t){return o(e,t.split("?")[1])},t.getParamFromUrlString=o,t.cleanParams=n,t.paramsToQueryString=i,t.getUrlOrigin=function(e){var t=(0,s.default)(e);return[t.protocol,"://",t.host,t.port?":"+t.port:""].join("")},t.cleanUrl=function(e){var t=(0,s.default)(e);return[t.protocol,"://",t.host,t.port?":"+t.port:"",t.path,i(n(t.queryKey))].join("")};var s=function(e){return e&&e.__esModule?e:{default:e}}(r(41))},,,,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.validateMeDomainFromUrl=function(e){var t=(0,n.getParamFromUrl)("me",e);if(t){var r=localStorage.getItem("domain");return(0,n.getUrlOrigin)(r)!==(0,n.getUrlOrigin)(t)?(chrome.tabs.sendMessage(tab.id,{action:"fetch-token-error",payload:{error:new Error("'me' url domain doesn't match auth endpoint domain")}}),(0,i.logout)(),!1):(localStorage.setItem("domain",t),!0)}},t.fetchToken=function(e){return o.default.options.me=localStorage.getItem("domain"),o.default.options.tokenEndpoint=localStorage.getItem("tokenEndpoint"),o.default.options.micropubEndpoint=localStorage.getItem("micropubEndpoint"),o.default.getToken(e).then(function(e){if(!e)throw new Error("Token not found in token endpoint response. Missing expected field 'access_token'");localStorage.setItem("token",e),o.default.options.token=e}).catch(function(e){console.log("error fetching token",e),(0,i.getAuthTab)().then(function(t){chrome.tabs.sendMessage(t.id,{action:"fetch-token-error",payload:{error:e}}),(0,i.logout)()})})},t.fetchSyndicationTargets=function(){return o.default.query("syndicate-to").then(function(e){localStorage.setItem("syndicateTo",JSON.stringify(e["syndicate-to"]))})};var o=function(e){return e&&e.__esModule?e:{default:e}}(r(3)),n=r(16),i=r(1)},,,function(e,t,r){"use strict";function o(e){localStorage.setItem("selectedEntry",e)}function n(){localStorage.removeItem("selectedEntry")}var i=r(16),s=(r(1),r(20)),a=null;chrome.runtime.onMessage.addListener(function(e,t,r){switch(e.action){case"begin-auth":(function(e){localStorage.setItem("domain",e.domain),localStorage.setItem("authEndpoint",e.metadata.authEndpoint),localStorage.setItem("tokenEndpoint",e.metadata.tokenEndpoint),localStorage.setItem("micropubEndpoint",e.metadata.micropub),chrome.tabs.create({url:e.authUrl},function(e){a=e.id})})(e.payload);break;case"focus-window":(function(e,t){localStorage.setItem("pageUrl",(0,i.cleanUrl)(e)),t?o(t):n()})(t.url,e.payload.selectedEntry);break;case"select-entry":o(e.payload.url);break;case"clear-entry":n()}}),chrome.tabs.onUpdated.addListener(function(e,t,r){if(e===a&&function(e){return e.url&&e.url.startsWith("https://omnibear.com/auth/success")}(t)&&(0,s.validateMeDomainFromUrl)(t.url)){var o=(0,i.getParamFromUrl)("code",t.url);(0,s.fetchToken)(o).then(function(){return console.log("fetching syndication"),(0,s.fetchSyndicationTargets)()}).then(function(){chrome.tabs.remove(r.id),a=null}).catch(function(e){console.error(e.message,e)})}}),chrome.contextMenus.create({title:"Reply to entry",contexts:["page","selection"],onclick:function(){"undefined"==typeof browser?window.open("index.html?reply=true","extension_popup","width=450,height=510,status=no,scrollbars=yes,resizable=no,top=80,left=2000"):browser.windows.create({url:"index.html?reply=true",width:450,height:580,type:"panel",left:2e3})}})},,,,,,,,,,,,,,,,,,function(e,t,r){"use strict";e.exports=function(e,t){t=t||{};for(var r={key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}},o=r.parser[t.strictMode?"strict":"loose"].exec(e),n={},i=14;i--;)n[r.key[i]]=o[i]||"";return n[r.q.name]={},n[r.key[12]].replace(r.q.parser,function(e,t,o){t&&(n[r.q.name][t]=o)}),n}}]);