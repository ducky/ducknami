parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Focm":[function(require,module,exports) {
"use strict";function e(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,n)}return o}function t(t){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?e(Object(n),!0).forEach(function(e){u(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):e(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function o(e){return i(e)||c(e)||r(e)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(e,t){if(e){if("string"==typeof e)return s(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?s(e,t):void 0}}function c(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function i(e){if(Array.isArray(e))return s(e)}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var l=function e(){var n=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a(this,e),u(this,"setup",function(e){n.cache=[].concat(o(n.cache),[e.keyCode]),clearTimeout(n._timer),n._timer=setTimeout(n._onSetupReset,n.options.delay),console.log("CURRENT SEQUENCE: ",n.cache.join(" "))}),u(this,"run",function(e){n.cache=[].concat(o(n.cache),[e.keyCode]).slice(-1*n.options.code.length),n.options.debug&&console.log("CURRENT SEQUENCE: ",n.cache.join(" ")),clearTimeout(n._timer),n._timer=setTimeout(n.onReset,n.options.delay),n._checkValidCode(n.cache)&&(n.options.debug&&console.log("VALID CODE ENTERED"),clearTimeout(n._timer),n._clear(),n.onSuccess())}),u(this,"_checkValidCode",function(e){return e.length===n.options.code.length&&e.every(function(e,t){return e===n.options.code[t]})}),u(this,"_clear",function(){n.cache=[]}),u(this,"_onDefaultReset",function(){n._clear()}),u(this,"_onDefaultSuccess",function(){console.log("%cPEAK NERD UNLOCKED","font-size: 36px;")}),u(this,"_onSetupReset",function(){console.log(""),console.log("HERE IS YOUR SEQUENCE"),console.log(JSON.stringify(n.cache)),console.log(""),n._clear()}),this.cache=[],this.defaults={code:[38,38,40,40,37,39,37,39,66,65],debug:!1,delay:1e3},this.options=t(t({},this.defaults),r),this.onReset="function"==typeof this.options.onReset?this.options.onReset:this._onDefaultReset,this.onSuccess="function"==typeof this.options.onSuccess?this.options.onSuccess:this._onDefaultSuccess};window.Ducknami=l;var f=l;exports.default=f;
},{}]},{},["Focm"], null)
//# sourceMappingURL=/ducknami.js.map