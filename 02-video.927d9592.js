!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n=document.querySelector("iframe"),i=new Vimeo.Player(n),r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",u=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt,d="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,v=d||s||Function("return this")(),p=Object.prototype.toString,y=Math.max,m=Math.min,g=function(){return v.Date.now()};function b(e,t,n){var i,r,u,f,a,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function p(t){var n=i,o=r;return i=r=void 0,l=t,f=e.apply(o,n)}function b(e){return l=e,a=setTimeout(h,t),d?p(e):f}function T(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=u}function h(){var e=g();if(T(e))return O(e);a=setTimeout(h,function(e){var n=t-(e-c);return s?m(n,u-(e-l)):n}(e))}function O(e){return a=void 0,v&&i?p(e):(i=r=void 0,f)}function S(){var e=g(),n=T(e);if(i=arguments,r=this,c=e,n){if(void 0===a)return b(c);if(s)return a=setTimeout(h,t),p(c)}return void 0===a&&(a=setTimeout(h,t)),f}return t=w(t)||0,j(n)&&(d=!!n.leading,u=(s="maxWait"in n)?y(w(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),S.cancel=function(){void 0!==a&&clearTimeout(a),l=0,i=c=r=a=void 0},S.flush=function(){return void 0===a?f:O(g())},S}function j(e){var n=void 0===e?"undefined":t(r)(e);return!!e&&("object"==n||"function"==n)}function w(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(r)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==p.call(e)}(e))return NaN;if(j(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=j(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(u,"");var i=a.test(e);return i||c.test(e)?l(e.slice(2),i?2:8):f.test(e)?NaN:+e}var T=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError(o);return j(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),b(e,t,{leading:i,maxWait:t,trailing:r})}((function(e){localStorage.setItem("videoplayer-current-time",e.seconds),console.log(localStorage.getItem("videoplayer-current-time"))}),1e3);i.setCurrentTime(localStorage.getItem("videoplayer-current-time")||0),i.on("timeupdate",T)}();
//# sourceMappingURL=02-video.927d9592.js.map
