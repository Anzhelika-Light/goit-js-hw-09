!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var d=r("6JpON"),i=document.querySelector("button[data-start]"),l=document.querySelector("button[data-stop]"),a=document.body,u=null;i.addEventListener("click",(function(){i.disabled=!0,l.disabled=!1,u=setInterval((function(){a.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),l.addEventListener("click",(function(){clearInterval(u),i.disabled=!1,l.disabled=!0,e(d).Notify.info("Great choice!")}))}();
//# sourceMappingURL=01-color-switcher.c9b4ab13.js.map