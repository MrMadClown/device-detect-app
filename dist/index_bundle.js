!function(e){var r={};function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=r,n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,r){if(1&r&&(e=n(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)n.d(t,o,function(r){return e[r]}.bind(null,o));return t},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="",n(n.s=1)}([function(e,r,n){window,e.exports=function(e){var r={};function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=r,n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,r){if(1&r&&(e=n(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)n.d(t,o,function(r){return e[r]}.bind(null,o));return t},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="",n(n.s=0)}([function(e,r,n){"use strict";n.r(r);var t=window.navigator.userAgent,o=function(e){return e.match(/(iPhone)/)?"iPhone":e.match(/(iPad)/)?"iPad":e.match(/(iPod)/)?"iPod":e.match(/(BlackBerry|BB10)/)?"BlackBerry":e.match(/(IEMobile)/)?"WindowsMobile":e.match(/(Android)/)?"Android":e.match(/(Macintosh)/)?"Macintosh":e.match(/(Windows)/)?"Windows":e.match(/(Linux)/)?"Linux":void 0}(t),i=function(e){return e.indexOf("OPR")>0||e.indexOf("Opera")>0?"Opera":e.indexOf("MSIE ")>0?"deprecatedIE":e.indexOf("Trident/")>0?"IE11":e.indexOf("Edge/")>0?"Edge":e.indexOf("Chrome")>0?"Chrome":e.indexOf("Firefox")>0?"Firefox":e.indexOf("Safari")>0?"Safari":void 0}(t),u="Safari"===i?parseInt(t.match(/Version\/(.*)? /)[1]):void 0;r.default={device:o,browser:i,version:u}}])},function(e,r,n){"use strict";n.r(r);var t=n(0),o=n.n(t);window.browser=o.a.browser,window.device=o.a.device}]);