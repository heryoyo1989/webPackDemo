!function(A,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.MyLibrary=e():A.MyLibrary=e()}(window,(function(){return function(A){var e={};function t(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return A[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=A,t.c=e,t.d=function(A,e,n){t.o(A,e)||Object.defineProperty(A,e,{enumerable:!0,get:n})},t.r=function(A){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})},t.t=function(A,e){if(1&e&&(A=t(A)),8&e)return A;if(4&e&&"object"==typeof A&&A&&A.__esModule)return A;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:A}),2&e&&"string"!=typeof A)for(var r in A)t.d(n,r,function(e){return A[e]}.bind(null,r));return n},t.n=function(A){var e=A&&A.__esModule?function(){return A.default}:function(){return A};return t.d(e,"a",e),e},t.o=function(A,e){return Object.prototype.hasOwnProperty.call(A,e)},t.p="",t(t.s=5)}([function(A,e,t){var n=t(1);"string"==typeof n&&(n=[[A.i,n,""]]);var r={insert:"head",singleton:!1};t(3)(n,r);n.locals&&(A.exports=n.locals)},function(A,e,t){(A.exports=t(2)(!1)).push([A.i,".hello {\r\n  color: red;\r\n}",""])},function(A,e,t){"use strict";A.exports=function(A){var e=[];return e.toString=function(){return this.map((function(e){var t=function(A,e){var t=A[1]||"",n=A[3];if(!n)return t;if(e&&"function"==typeof btoa){var r=(i=n,s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(a," */")),o=n.sources.map((function(A){return"/*# sourceURL=".concat(n.sourceRoot).concat(A," */")}));return[t].concat(o).concat([r]).join("\n")}var i,s,a;return[t].join("\n")}(e,A);return e[2]?"@media ".concat(e[2],"{").concat(t,"}"):t})).join("")},e.i=function(A,t){"string"==typeof A&&(A=[[null,A,""]]);for(var n={},r=0;r<this.length;r++){var o=this[r][0];null!=o&&(n[o]=!0)}for(var i=0;i<A.length;i++){var s=A[i];null!=s[0]&&n[s[0]]||(t&&!s[2]?s[2]=t:t&&(s[2]="(".concat(s[2],") and (").concat(t,")")),e.push(s))}},e}},function(A,e,t){"use strict";var n,r={},o=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},i=function(){var A={};return function(e){if(void 0===A[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(A){t=null}A[e]=t}return A[e]}}();function s(A,e){for(var t=[],n={},r=0;r<A.length;r++){var o=A[r],i=e.base?o[0]+e.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};n[i]?n[i].parts.push(s):t.push(n[i]={id:i,parts:[s]})}return t}function a(A,e){for(var t=0;t<A.length;t++){var n=A[t],o=r[n.id],i=0;if(o){for(o.refs++;i<o.parts.length;i++)o.parts[i](n.parts[i]);for(;i<n.parts.length;i++)o.parts.push(d(n.parts[i],e))}else{for(var s=[];i<n.parts.length;i++)s.push(d(n.parts[i],e));r[n.id]={id:n.id,refs:1,parts:s}}}}function u(A){var e=document.createElement("style");if(void 0===A.attributes.nonce){var n=t.nc;n&&(A.attributes.nonce=n)}if(Object.keys(A.attributes).forEach((function(t){e.setAttribute(t,A.attributes[t])})),"function"==typeof A.insert)A.insert(e);else{var r=i(A.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}return e}var g,c=(g=[],function(A,e){return g[A]=e,g.filter(Boolean).join("\n")});function f(A,e,t,n){var r=t?"":n.css;if(A.styleSheet)A.styleSheet.cssText=c(e,r);else{var o=document.createTextNode(r),i=A.childNodes;i[e]&&A.removeChild(i[e]),i.length?A.insertBefore(o,i[e]):A.appendChild(o)}}function l(A,e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&A.setAttribute("media",r),o&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),A.styleSheet)A.styleSheet.cssText=n;else{for(;A.firstChild;)A.removeChild(A.firstChild);A.appendChild(document.createTextNode(n))}}var C=null,B=0;function d(A,e){var t,n,r;if(e.singleton){var o=B++;t=C||(C=u(e)),n=f.bind(null,t,o,!1),r=f.bind(null,t,o,!0)}else t=u(e),n=l.bind(null,t,e),r=function(){!function(A){if(null===A.parentNode)return!1;A.parentNode.removeChild(A)}(t)};return n(A),function(e){if(e){if(e.css===A.css&&e.media===A.media&&e.sourceMap===A.sourceMap)return;n(A=e)}else r()}}A.exports=function(A,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=o());var t=s(A,e);return a(t,e),function(A){for(var n=[],o=0;o<t.length;o++){var i=t[o],u=r[i.id];u&&(u.refs--,n.push(u))}A&&a(s(A,e),e);for(var g=0;g<n.length;g++){var c=n[g];if(0===c.refs){for(var f=0;f<c.parts.length;f++)c.parts[f]();delete r[c.id]}}}}},function(A,e){A.exports="data:image/png;base64,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"},function(A,e,t){"use strict";t.r(e);t(0);var n=function(){function A(){}return A.prototype.getNumber=function(){return Math.random()},A}();console.log("production"),document.body.appendChild(function(){var A=document.createElement("div"),e=document.createElement("button");A.innerHTML="hello TS",A.classList.add("hello"),e.innerHTML="Click me and check the console!",e.onclick=function(){var A=new n;console.log(A.getNumber()+" "),console.log("Message from Test 1！")};var r=t(4),o=new Image(600,500);return o.src=r,A.appendChild(o),A.appendChild(e),A}())}])}));
//# sourceMappingURL=output.js.map