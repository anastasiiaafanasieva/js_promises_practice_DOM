parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var t=document.querySelector("body"),n=new Promise(function(t,n){document.addEventListener("mousedown",function(n){0!==n.button&&1!==n.button&&2!==n.button||t("First promise was resolved")}),setTimeout(function(){n("First promise was rejected")},3e3)}),e=new Promise(function(t){document.addEventListener("mousedown",function(n){0!==n.button&&2!==n.button||t("Second promise was resolved")})}),o=new Promise(function(t){var n=!1,e=!1;document.addEventListener("mousedown",function(o){0===o.button&&(n=!0),2===o.button&&(e=!0),n&&e&&t("Third promise was resolved")})});function i(n){var e=document.createElement("div");e.dataset.qa="notification",e.className="success",e.textContent=n,t.append(e)}function u(n){var e=document.createElement("div");e.dataset.qa="notification",e.className="warning",e.textContent=n,t.append(e)}n.then(function(t){return i(t)}).catch(function(t){return u(t)}),e.then(function(t){return i(t)}),o.then(function(t){return i(t)});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.fad36ded.js.map