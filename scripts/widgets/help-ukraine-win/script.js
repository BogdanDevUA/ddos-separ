!function(){function e(e){return e&&e.__esModule?e.default:e}function t(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},w=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(w=w.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),w.forEach((function(t){i(e,t,r[t])}))}return e}function w(e){return function(e){if(Array.isArray(e)){for(var t=0,i=new Array(e.length);t<e.length;t++)i[t]=e[t];return i}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var a='';var o="https://helpukrainewinwidget.org",n=["top-left","top-right","bottom-right","bottom-left","middle-left","middle-right"],d=["collapsed","main","expanded"],l=["one","two","three","four"],s="one",u="top-left",h="main",p="data-layout";function c(e,t,i){return e&&"string"==typeof e&&-1!==t.indexOf(e)?e:i}function g(){return document.currentScript||document.getElementById("help-ukraine-win")||Array.from(document.querySelectorAll("script")).find((function(e){var t=e.getAttribute("src");if(t){var i=new URL(t,o);return"/cdn/widget.js"===i.pathname&&i.searchParams.has("type")&&i.searchParams.has("position")}return!1}))||null}function f(){var e=arguments[0];"string"==typeof e&&(e=document.createElement(e));var t=1,i=arguments[1];if(i&&"object"==typeof i&&null==i.nodeType&&!Array.isArray(i)){for(var r in i)if(Object.prototype.hasOwnProperty.call(i,r)){var w=i[r];"string"==typeof w?e.setAttribute(r,w):null!=w&&(e[r]=w)}t++}for(;t<arguments.length;t++)b(e,arguments[t]);return e}function b(e,t){if("string"==typeof t)e.appendChild(document.createTextNode(t));else if(null==t);else if(null!=t.nodeType)e.appendChild(t);else{if(!Array.isArray(t))throw new RangeError("Unsupported child node: "+t);for(var i=0;i<t.length;i++)b(e,t[i])}}function x(e,t){return k(e,t,"vertical",f("div",{class:"huww-slide-container huww-widget-one"},E(),f("p",{class:"huww-title"},"Зупинімо росію!"),f("a",{class:"huww-link huww-trigger","data-huww-trigger":d[2],href:"#"},"Як я можу допомогти"),S()),j(),f("div",{class:"huww-expended-widget-wrapper huww-slide-container"},P(),f("div",{class:"huww-divider"}),f("div",{class:"huww-expended-widget-hide huww-trigger","data-huww-trigger":d[1]},"Сховати")))}function m(e,t){return k(e,t,"vertical",f("div",{class:"huww-slide-container huww-widget-two"},E(),f("p",{class:"huww-title"},"Зупинімо війну! Ти можеш допомогти!"),f("div",{class:"huww-divider"}),f("a",{class:"huww-link huww-trigger","data-huww-trigger":d[2],href:"#"},"Як я можу допомогти"),S()),j(),z())}function y(e,t){return k(e,t,"horizontal",f("div",{class:"huww-slide-container huww-widget-three"},f("p",{class:"huww-title"},"Стоп Війні!"),f("p",{class:"huww-subtitle"},"Допоможіть Україні!"),f("a",{class:"huww-button huww-trigger","data-huww-trigger":d[2],href:"#"},"Більше"),S()),j(),f("div",{class:"huww-expended-widget-wrapper huww-expended-widget-wrapper-small huww-slide-container"},P(),f("button",{class:"huww-expended-widget-hide-button huww-trigger","data-huww-trigger":d[1]})))}function v(e,t){return k(e,t,"vertical",f("div",{class:"huww-slide-container huww-widget-four"},f("p",{class:"huww-title"},"Допоможіть Україні🇺🇦!"),f("p",{class:"huww-hashtag"},"#StandWithUkraine"),f("a",{class:"huww-link huww-trigger","data-huww-trigger":d[2],href:"#"},"Як я можу допомогти"),S(),f("div",{class:"huww-half-flag"},f("div",{class:"huww-half-flag-top"}),f("div",{class:"huww-half-flag-bottom"}))),j(),z())}function k(e,t,i,r,w,a){return f("div",{class:"huww-widget huww-widget-".concat(e),"data-huww-slide":t},f("div",{class:"huww-slider huww-slider-direction-".concat(i),style:"width:".concat(400,"px;height:").concat(250,"px;")},A("collapsed",w),A("main",r),A("expanded",a)))}function A(e,t){return f("div",{class:"huww-slide","data-huww-slide":e},t)}function S(){return f("div",{class:"huww-button-collapse huww-trigger","data-huww-trigger":d[0]})}function E(){return f("div",{class:"huww-flag"},f("div",{class:"huww-flag-top"}),f("div",{class:"huww-flag-bottom"}))}function j(){return f("div",{class:"huww-flag-wrapper huww-trigger huww-slide-container","data-huww-trigger":d[1]},f("div",{class:"huww-separeted-flag-top"}),f("div",{class:"huww-separeted-flag-bottom"}))}function z(){return f("div",{class:"huww-expended-widget-wrapper huww-expended-widget-wrapper-small huww-slide-container"},P(),f("div",{class:"huww-divider"}),f("div",{class:"huww-expended-widget-hide huww-trigger","data-huww-trigger":d[1]},"Hide"))}function P(){return f("div",{class:"huww-action-list"},L("https://uahelp.monobank.ua","Пожертвувати","💸","Donate"),L("https://war.ukraine.ua","Допомогти Україні","❤","Info","huww-heart"),L(o,"Поділитись цим віджетом","📌","GetWidget"))}function L(e,t,i,r,w){return f("a",{class:"huww-action",target:"_blank","data-huww-action":r,href:e,rel:"nofollow noopener"},f("span",{},t),f("span",{class:w},i))}function O(){document.querySelectorAll(".huww-widget").forEach((function(e){return function(e){var t=e.querySelectorAll(".huww-trigger"),i=e.querySelectorAll(".huww-widget a"),r=T.get();!window.__HELPUKRAINEWIDGET_DISABLE_PERSISTENCE&&r&&(e.dataset.huwwSlide=r);t.forEach((function(t){t.addEventListener("click",(function(i){i.preventDefault();var r=t.dataset.huwwTrigger;e.dataset.huwwSlide=r,T.set(r);try{window.plausible&&window.plausible("ChangeState",{props:{state:r}})}catch(e){}}))})),i.forEach((function(e){e.addEventListener("click",(function(t){if(e.hasAttribute("href"))try{window.plausible&&window.plausible("Outbound Link: Click",{props:{url:e.getAttribute("href")}})}catch(e){}}))}))}(e)}))}var T=new(function(){"use strict";function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.key=t}var i,r,w;return i=e,(r=[{key:"get",value:function(){return"true"===localStorage.getItem(this.key)?"collapsed":"false"===localStorage.getItem(this.key)?"main":null}},{key:"set",value:function(e){localStorage.setItem(this.key,("collapsed"===e).toString())}}])&&t(i.prototype,r),w&&t(i,w),e}())("huww-slider-state");"loading"!==document.readyState?setTimeout(R):document.addEventListener("DOMContentLoaded",R);var C,D,I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{widgetType:s,widgetPosition:u,widgetLayout:h,widgetDomain:window.location.hostname},t=g(),i=null==t?void 0:t.getAttribute("src"),w=r({},e);if(!i)return w;try{var a=new URL(i,o);w.widgetType=c(a.searchParams.get("type"),l,e.widgetType),w.widgetPosition=c(a.searchParams.get("position"),n,e.widgetPosition),w.widgetLayout=c(a.searchParams.get("layout"),d,e.widgetLayout),w.widgetDomain=a.searchParams.get("domain")||e.widgetDomain}catch(e){console.error(e)}return w}((C=g(),D=c(null==C?void 0:C.getAttribute("data-type"),l,s),{widgetPosition:c(null==C?void 0:C.getAttribute("data-position"),n,u),widgetType:D,widgetLayout:c(null==C?void 0:C.getAttribute(p),d,h),widgetDomain:(null==C?void 0:C.getAttribute(p))||window.location.hostname}));function R(){var t,i,r,o;!function(){if(window.__HELPUKRAINEWIDGET_DISABLE_ANALYICS)return;var e=document.createElement("script");e.setAttribute("src","https://analytics.helpukrainewinwidget.org/js/script.js"),e.setAttribute("defer",""),e.setAttribute("data-domain",w(I.widgetDomain.split(",")).concat(["rollup-analytics.helpukrainewinwidget.org"]).join(",")),document.head.appendChild(e)}(),t=document.createElement("style"),document.head.appendChild(t),t.appendChild(document.createTextNode(e(a))),document.body.append((i=I.widgetType,r=I.widgetPosition,o=I.widgetLayout,{one:x,two:m,three:y,four:v}[i](r,o))),O()}}();
//# sourceMappingURL=index.js.map