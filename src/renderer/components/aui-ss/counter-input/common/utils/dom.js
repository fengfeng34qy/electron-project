"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getStyle=exports.once=exports.off=exports.on=void 0;var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};exports.hasClass=hasClass,exports.addClass=addClass,exports.removeClass=removeClass,exports.setStyle=setStyle;var _vue=require("vue"),_vue2=_interopRequireDefault(_vue);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var isServer=_vue2.default.prototype.$isServer,SPECIAL_CHARS_REGEXP=/([\:\-\_]+(.))/g,MOZ_HACK_REGEXP=/^moz([A-Z])/,ieVersion=isServer?0:Number(document.documentMode),trim=function(e){return(e||"").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,"")},camelCase=function(e){return e.replace(SPECIAL_CHARS_REGEXP,function(e,t,s,r){return r?s.toUpperCase():s}).replace(MOZ_HACK_REGEXP,"Moz$1")},on=exports.on=!isServer&&document.addEventListener?function(e,t,s){e&&t&&s&&e.addEventListener(t,s,!1)}:function(e,t,s){e&&t&&s&&e.attachEvent("on"+t,s)},off=exports.off=!isServer&&document.removeEventListener?function(e,t,s){e&&t&&e.removeEventListener(t,s,!1)}:function(e,t,s){e&&t&&e.detachEvent("on"+t,s)},once=exports.once=function(e,t,s){on(e,t,function r(){s&&s.apply(this,arguments),off(e,t,r)})};function hasClass(e,t){if(!e||!t)return!1;if(-1!==t.indexOf(" "))throw new Error("className should not contain space.");return e.classList?e.classList.contains(t):(" "+e.className+" ").indexOf(" "+t+" ")>-1}function addClass(e,t){if(e){for(var s=e.className,r=(t||"").split(" "),o=0,n=r.length;o<n;o++){var a=r[o];a&&(e.classList?e.classList.add(a):hasClass(e,a)&&(s+=" "+a))}e.classList||(e.className=s)}}function removeClass(e,t){if(e&&t){for(var s=t.split(" "),r=" "+e.className+" ",o=0,n=s.length;o<n;o++){var a=s[o];a&&(e.classList?e.classList.remove(a):hasClass(e,a)&&(r=r.replace(" "+a+" "," ")))}e.classList||(e.className=trim(r))}}var getStyle=exports.getStyle=ieVersion<9?function(e,t){if(!isServer){if(!e||!t)return null;"float"===(t=camelCase(t))&&(t="styleFloat");try{switch(t){case"opacity":try{return e.filters.item("alpha").opacity/100}catch(e){return 1}default:return e.style[t]||e.currentStyle?e.currentStyle[t]:null}}catch(s){return e.style[t]}}}:function(e,t){if(!isServer){if(!e||!t)return null;"float"===(t=camelCase(t))&&(t="cssFloat");try{var s=document.defaultView.getComputedStyle(e,"");return e.style[t]||s?s[t]:null}catch(s){return e.style[t]}}};function setStyle(e,t,s){if(e&&t)if("object"===(void 0===t?"undefined":_typeof(t)))for(var r in t)t.hasOwnProperty(r)&&setStyle(e,r,t[r]);else"opacity"===(t=camelCase(t))&&ieVersion<9?e.style.filter=isNaN(s)?"":"alpha(opacity="+100*s+")":e.style[t]=s}