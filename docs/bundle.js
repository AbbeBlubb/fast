!function(n){function e(e){for(var o,a,r=e[0],l=e[1],c=e[2],d=0,p=[];d<r.length;d++)a=r[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&p.push(i[a][0]),i[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(n[o]=l[o]);for(u&&u(e);p.length;)p.shift()();return s.push.apply(s,c||[]),t()}function t(){for(var n,e=0;e<s.length;e++){for(var t=s[e],o=!0,r=1;r<t.length;r++){var l=t[r];0!==i[l]&&(o=!1)}o&&(s.splice(e--,1),n=a(a.s=t[0]))}return n}var o={},i={0:0},s=[];function a(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=n,a.c=o,a.d=function(n,e,t){a.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},a.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(n,e){if(1&e&&(n=a(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)a.d(t,o,function(e){return n[e]}.bind(null,o));return t},a.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(e,"a",e),e},a.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},a.p="";var r=window.webpackJsonp=window.webpackJsonp||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;s.push([25,1]),t()}([,,function(n,e,t){},,function(n,e,t){var o={"./1.jpg":5,"./10.jpg":6,"./11.jpg":7,"./12.jpg":8,"./13.jpg":9,"./14.jpg":10,"./15.jpg":11,"./16.jpg":12,"./17.jpg":13,"./18.jpg":14,"./19.jpg":15,"./2.jpg":16,"./20.jpg":17,"./3.jpg":18,"./4.jpg":19,"./5.jpg":20,"./6.jpg":21,"./7.jpg":22,"./8.jpg":23,"./9.jpg":24};function i(n){var e=s(n);return t(e)}function s(n){if(!t.o(o,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return o[n]}i.keys=function(){return Object.keys(o)},i.resolve=s,n.exports=i,i.id=4},function(n,e,t){n.exports=t.p+"/assets/1.jpg"},function(n,e,t){n.exports=t.p+"/assets/10.jpg"},function(n,e,t){n.exports=t.p+"/assets/11.jpg"},function(n,e,t){n.exports=t.p+"/assets/12.jpg"},function(n,e,t){n.exports=t.p+"/assets/13.jpg"},function(n,e,t){n.exports=t.p+"/assets/14.jpg"},function(n,e,t){n.exports=t.p+"/assets/15.jpg"},function(n,e,t){n.exports=t.p+"/assets/16.jpg"},function(n,e,t){n.exports=t.p+"/assets/17.jpg"},function(n,e,t){n.exports=t.p+"/assets/18.jpg"},function(n,e,t){n.exports=t.p+"/assets/19.jpg"},function(n,e,t){n.exports=t.p+"/assets/2.jpg"},function(n,e,t){n.exports=t.p+"/assets/20.jpg"},function(n,e,t){n.exports=t.p+"/assets/3.jpg"},function(n,e,t){n.exports=t.p+"/assets/4.jpg"},function(n,e,t){n.exports=t.p+"/assets/5.jpg"},function(n,e,t){n.exports=t.p+"/assets/6.jpg"},function(n,e,t){n.exports=t.p+"/assets/7.jpg"},function(n,e,t){n.exports=t.p+"/assets/8.jpg"},function(n,e,t){n.exports=t.p+"/assets/9.jpg"},function(n,e,t){"use strict";t.r(e);t(2);var o=t(0),i=t.n(o);function s(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}var a=function(){function n(e){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.subscriptions=e||{},this.getNextUniqueId=this.getIdGenerator()}var e,t,o;return e=n,(t=[{key:"getIdGenerator",value:function(){var n=0;return function(){return n+=1}}},{key:"logNextId",value:function(){var n=this.getNextUniqueId();console.log(n)}},{key:"subscribe",value:function(n,e){var t=this,o=this.getNextUniqueId();return this.subscriptions[n]||(this.subscriptions[n]={}),this.subscriptions[n][o]=e,{unsubscribe:function(){delete t.subscriptions[n][o],0===Object.keys(t.subscriptions[n]).length&&delete t.subscriptions[n]}}}},{key:"publish",value:function(n){var e=this,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.subscriptions[n]&&(null===t?Object.keys(this.subscriptions[n]).forEach((function(t){return e.subscriptions[n][t]()})):Object.keys(this.subscriptions[n]).forEach((function(o){return e.subscriptions[n][o](t)})))}}])&&s(e.prototype,t),o&&s(e,o),n}(),r="\n  <nav class='navigation'>\n    <button class='navigation__button' route='/'>Lazy</button>\n    <button class='navigation__button' route='/infinite'>Infinite</button>\n    <button class='navigation__button' route='/fastness'>Fastness</button>\n  </nav>\n",l=t(1),c=t.n(l);function u(n){return function(n){if(Array.isArray(n)){for(var e=0,t=new Array(n.length);e<n.length;e++)t[e]=n[e];return t}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var d="IntersectionObserver"in window,p=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e+n},h=0,g="\n  <div class='data' id='data'>\n    Images loaded: <span class='image-count'>0</span>\n  </div>\n",f=0,b=0,v="\n  <div class='data' id='data'>\n    Times recycled: <span class='recycling-count'>0</span> |\n    Padding top: <span class='recycling-padding'>0</span>px\n  </div>\n",y={navigationTabIsActive:{hardCoded1:function(n){!function(n){document.querySelectorAll(".navigation__button").forEach((function(n){return n.classList.remove("navigation__button--is-active")})),document.querySelector("[route='".concat(n,"']")).classList.add("navigation__button--is-active")}(n)}},oneImageHasBeenLoaded:{hardcoded2:function(){h=p(1,h),document.querySelector(".image-count").innerHTML=h}},resetImageCounter:{hardcoded3:function(){h=0}},oneRecyclingHasBeenDone:{hardcoded4:function(){f=p(1,f),document.querySelector(".recycling-count").innerHTML=f}},resetRecyclingCounter:{hardcoded5:function(){f=0}},paddingTopHasBeenSet:{hardcoded6:function(n){!function(n){b=n,document.querySelector(".recycling-padding").innerHTML=b}(n)}},resetPaddingTop:{hardcoded7:function(){b=0}}},m="\n  <section class='not-found'>\n    <span class='not-found__message'>\n      404\n    </span>\n  </section>\n";function w(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}var _=function(){function n(e){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.routes=e,this.basePath="",window.addEventListener("DOMContentLoaded",this.registerDOMRoutes.bind(this),!1),window.addEventListener("popstate",this.popStateCallback.bind(this),!1)}var e,t,o;return e=n,(t=[{key:"popStateCallback",value:function(n){n.state&&this.reactOnURLChange(window.location.pathname)}},{key:"getBaseFromCurrentPath",value:function(n){return"/lazy-loading/"===n?"/lazy-loading":""}},{key:"getRouteFromCurrentPath",value:function(n){return n.replace(/\/lazy-loading/g,"")}},{key:"loadInitialRoute",value:function(n){this.basePath=this.getBaseFromCurrentPath(n);var e=this.getRouteFromCurrentPath(n);console.log("RoutePath: ",n,"basePath: ",this.basePath,"routePath: ",e);var t=document.getElementById("app"),o=this.routes.find((function(n){return n.path===e}));console.log(o),t.innerHTML=o?o.loadInitialPage:m,$.publish("navigationTabIsActive",e)}},{key:"reactOnURLChange",value:function(n){var e=this.routes.find((function(e){return e.path===n}));e?e.navigationHandler():document.getElementById("app").innerHTML=m,$.publish("navigationTabIsActive",n)}},{key:"btnNavigate",value:function(n){var e=n.target.attributes[1].value,t=this.routes.find((function(n){return n.path===e}));t?(window.history.pushState({},"",this.basePath+t.path),this.reactOnURLChange(t.path),$.publish("navigationTabIsActive",t.path)):(window.history.pushState({},"","error"),this.reactOnURLChange("error"))}},{key:"registerDOMRoutes",value:function(){var n=this;Array.from(document.querySelectorAll("[route]")).forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault,n.btnNavigate(e)}),!1)}))}}])&&w(e.prototype,t),o&&w(e,o),n}(),j="\n  <header class='header'>\n    <h1>Blazingly Fast</h1>\n  </header>\n",x="\n  <section class='about' role='contentinfo' aria-label='About the project' id='about'>\n    ".concat(d?"<p class='about-description'>\n          This page lazy-loads the images.\n          Each Image will load when 20 % of the image height has entered the viewport.\n        </p>":"<p class='about-description--error'>\n          The browser you're using doesn't support IntersectionObserver :(\n        </p>","\n  </section>"),T=function(n){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=[],o=1;o<=n;o++)t.push(o);var i=c()(t);return[].concat(u(e),u(i))}(20,void 0).map((function(n){return"\n  <img\n    src=".concat(d?"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==":t(4)("./".concat(n,".jpg")),"\n    class='image-section__lazy-image'\n    data-src='assets/").concat(n,".jpg'\n    data-alt='Cheetahs in nature'\n    data-title='Cheetah'>\n")})).join(""),L="\n  <section class='image-section' role='contentinfo' aria-label='Section with photos' id='content'>\n    ".concat(T,"\n  </section>\n"),I='\n  <button class=\'scroll-to-top\'>\n    <svg\n      fill="white"\n      xmlns="http://www.w3.org/2000/svg"\n      width="30" height="30"\n      viewBox="0 0 24 24">\n      <path fill="none" d="M0 0h24v24H0V0z"/>\n      <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/>\n    </svg>\n  </button>\n',O=null;window.addEventListener("DOMContentLoaded",(function(){(O=document.querySelector(".scroll-to-top")).addEventListener("click",(function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}))})),window.addEventListener("scroll",(function(){window.pageYOffset>300?O.classList.contains("btn-entrance")||(O.classList.remove("btn-exit"),O.classList.add("btn-entrance"),O.style.display="block"):O.classList.contains("btn-entrance")&&(O.classList.remove("btn-entrance"),O.classList.add("btn-exit"),this.setTimeout((function(){O.style.display="none"}),250))}));var k=j+r+x+g+L+I,A="\n  <section class='about' role='contentinfo' aria-label='About the project' id='about'>\n    <p class='about-description'>\n      This infinite scroll recycles it's 20 DOM elements when scrolling: changing the contents and the positions.\n    </p>\n  </section>",S="\n  <section class='scroll-section' role='contentinfo' aria-label='Infinite scroll' id='content'>\n    <ul class='scroll-section__ul'></ul>\n  </section>\n",E="\n  <section class='about' role='contentinfo' aria-label='About the project' id='about'>\n    <p class='about-description'>\n    </p>\n  </section>",M="\n  <div class='data data--empty' id='data'>\n  </div>\n",C="\n  <section class='feature-section' role='contentinfo' aria-label='xxx' id='content'>\n\n    <h2>Features</h2>\n\n    <p>\n      The aim of this project is to give the fastest possible experience.\n      Some of the features are:\n    </p>\n\n    <ul>\n      <li>\n        The project is built in <span class='bold'>plain JavaScript</span>, meaning the code is as lightweight it can be -\n        thus avoiding the need for the client to load a framework.\n        You can look at all the files in the inspector source tab, select webpack.\n      </li>\n      <li>\n        For this reason, I built my own <span class='bold'>routing</span> and <span class='bold'>event bus</span>.\n      </li>\n      <li>\n        The image loader uses intersection observer to <span class='bold'>load images as they are needed</span>,\n        thus avoiding to load unnessesary content.\n        You can follow the loading in the inspector network tab.\n      </li>\n      <li>\n        The infinite scroll uses intersection observer to re-calculate the position of the elements cluster and to update the content of the elements;\n        a <span class='bold'>recycling of the elements</span>.\n        This way the DOM constantly only contains 20 elements - light and fast to process, in contrast to having a very large DOM full of content.\n        The user is given a seamless scrolling experience.\n        You can follow the recycling in the inspector elements panel.\n      </li>\n      <li>\n        Webpack is configured for development and production.\n        The configuration includes <span class='bold'>code-splitting</span> to facilitate browser caching and <span class='bold'>image compression</span>.\n      </li>\n    </ul>\n\n    <p>\n      All this gives the user a <span class='bold'>fast-loading experience with minimum of code loading and processing</span>.\n      The project is responsive and built as mobile first.\n    </p>\n\n    <p>\n      Focus has also been given to <span class='bold'>accessibility</span> and user friendliness.\n      The page is fully tabbable and listens to tab and mouse events to give specific styling properties.\n    </p>\n\n  </section>\n",B=function(n,e,t,o){return"\n  <li class='tile' id='tile-".concat(n,"'>\n\n    <div class='tile-placeholder'>\n      <div class='tile-placeholder__background'>\n        <div class='tile-placeholder__vertical-line'></div>\n        <div class='tile-placeholder__rectangle-first'></div>\n        <div class='tile-placeholder__horizontal-line-second'></div>\n        <div class='tile-placeholder__horizontal-line-third'></div>\n      </div>\n    </div>\n\n    <div class='tile-info'>\n      <div class='tile-info__grid'>\n        <div class='tile-info__cell-1'>Recyclable DOM element</div>\n        <div class='tile-info__cell-2 right bold'>").concat(n,"</div>\n        <div class='tile-info__cell-3'>of</div>\n        <div class='tile-info__cell-4 right'>").concat(e,"</div>\n\n        <div class='tile-info__cell-5'>Containing array index item</div>\n        <div class='tile-info__cell-6 right bold'><span class='tile-info__index'>").concat(t,"</span></div>\n        <div class='tile-info__cell-7'>of</div>\n        <div class='tile-info__cell-8 right'>").concat(o,"</div>\n\n      </div>\n    </div>\n\n  </li>\n")},H=function(n,e,t){var o,i=e/2;return(o=n?t+i:t-i)<0&&(o=0),o},P=function(n){return Number(n.substring(0,n.length-2))},F=function(n,e){var t=document.querySelector(".scroll-section__ul"),o=P(t.style.paddingTop),i=P(t.style.paddingBottom),s=e/2*190;n?(t.style.paddingTop=o+s+"px",t.style.paddingBottom=0===i?"0px":i-s+"px"):(t.style.paddingTop=0===o?"0px":o-s+"px",t.style.paddingBottom=i+s+"px"),$.publish("paddingTopHasBeenSet",P(t.style.paddingTop))},R=function(n,e){for(var t=0;t<e;t++){document.querySelector("#tile-".concat(t+1)).querySelector(".tile-info__index").innerText="".concat(n+t+1)}},z=[],D=function(){var n;z=function(n){for(var e=[],t=0;t<n;t++)e.push({indexNumber:t});return e}(200),function(n){for(var e=document.querySelector(".scroll-section__ul"),t=0;t<n;t++)e.insertAdjacentHTML("beforeend",B(t+1,20,z[t].indexNumber+1,200))}(20),(n=new IntersectionObserver((function(n){n.forEach((function(n){"tile-1"===n.target.id?G(n):n.target.id==="tile-".concat(20)&&V(n)}))}),{root:null,rootMargin:"0px",threshold:.5})).observe(document.querySelector("#tile-1")),n.observe(document.querySelector("#tile-".concat(20)))};window.onload=function(){return D()};var q=0,N=0,U=0,V=function(n){if(180!==q){var e=n.boundingClientRect.top,t=n.intersectionRatio,o=n.isIntersecting;if(console.log(e,t,o),e<N&&t>U&&o){var i=H(!0,20,q);F(!0,20),R(i,20),q=i,$.publish("oneRecyclingHasBeenDone")}N=e,U=t}},Y=0,J=0,G=function(n){var e=n.boundingClientRect.top,t=n.intersectionRatio,o=n.isIntersecting;if(e>Y&&o&&t>=J&&0!==q){var i=H(!1,20,q);F(!1,20),R(i,20),q=i,$.publish("oneRecyclingHasBeenDone")}Y=e,J=t},W=[{path:"/",name:"Root",navigationHandler:function(){document.getElementById("about").outerHTML=x,$.publish("resetImageCounter"),document.getElementById("data").outerHTML=g,document.getElementById("content").outerHTML=L,nn.onLoaded()},loadInitialPage:k},{path:"/infinite",name:"Infinite",navigationHandler:function(){document.getElementById("about").outerHTML=A,$.publish("resetRecyclingCounter"),document.getElementById("data").outerHTML=v,document.getElementById("content").outerHTML=S,D()},loadInitialPage:"\n  <header class='header'>\n    <h1>Blazingly Fast</h1>\n  </header>\n\n  <nav class='navigation'>\n    <button class='navigation__button' route='/'>Lazy</button>\n    <button class='navigation__button' route='/infinite'>Infinite</button>\n    <button class='navigation__button' route='/fastness'>Fastness</button>\n  </nav>\n\n  <section class='about' role='contentinfo' aria-label='About the project' id='about'>\n    <p class='about-description'>\n      This infinite scroll recycles it's 20 DOM elements when scrolling: changing the contents and the positions.\n    </p>\n  </section>\n  <div class='data' id='data'>\n    Times recycled: <span class='recycling-count'>0</span> |\n    Padding top: <span class='recycling-padding'>0</span>px\n  </div>\n\n  <section class='scroll-section' role='contentinfo' aria-label='Infinite scroll' id='content'>\n    <ul class='scroll-section__ul'></ul>\n  </section>\n\n  <button class='scroll-to-top'>\n    <svg\n      fill=\"white\"\n      xmlns=\"http://www.w3.org/2000/svg\"\n      width=\"30\" height=\"30\"\n      viewBox=\"0 0 24 24\">\n      <path fill=\"none\" d=\"M0 0h24v24H0V0z\"/>\n      <path d=\"M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z\"/>\n    </svg>\n  </button>\n"},{path:"/fastness",name:"Fastness",navigationHandler:function(){document.getElementById("about").outerHTML=E,document.getElementById("data").outerHTML=M,document.getElementById("content").outerHTML=C},loadInitialPage:"\n  <header class='header'>\n    <h1>Blazingly Fast</h1>\n  </header>\n\n  <nav class='navigation'>\n    <button class='navigation__button' route='/'>Lazy</button>\n    <button class='navigation__button' route='/infinite'>Infinite</button>\n    <button class='navigation__button' route='/fastness'>Fastness</button>\n  </nav>\n\n  <section class='about' role='contentinfo' aria-label='About the project' id='about'>\n    <p class='about-description'>\n    </p>\n  </section>\n  <div class='data data--empty' id='data'>\n  </div>\n\n  <section class='feature-section' role='contentinfo' aria-label='xxx' id='content'>\n\n    <h2>Features</h2>\n\n    <p>\n      The aim of this project is to give the fastest possible experience.\n      Some of the features are:\n    </p>\n\n    <ul>\n      <li>\n        The project is built in <span class='bold'>plain JavaScript</span>, meaning the code is as lightweight it can be -\n        thus avoiding the need for the client to load a framework.\n        You can look at all the files in the inspector source tab, select webpack.\n      </li>\n      <li>\n        For this reason, I built my own <span class='bold'>routing</span> and <span class='bold'>event bus</span>.\n      </li>\n      <li>\n        The image loader uses intersection observer to <span class='bold'>load images as they are needed</span>,\n        thus avoiding to load unnessesary content.\n        You can follow the loading in the inspector network tab.\n      </li>\n      <li>\n        The infinite scroll uses intersection observer to re-calculate the position of the elements cluster and to update the content of the elements;\n        a <span class='bold'>recycling of the elements</span>.\n        This way the DOM constantly only contains 20 elements - light and fast to process, in contrast to having a very large DOM full of content.\n        The user is given a seamless scrolling experience.\n        You can follow the recycling in the inspector elements panel.\n      </li>\n      <li>\n        Webpack is configured for development and production.\n        The configuration includes <span class='bold'>code-splitting</span> to facilitate browser caching and <span class='bold'>image compression</span>.\n      </li>\n    </ul>\n\n    <p>\n      All this gives the user a <span class='bold'>fast-loading experience with minimum of code loading and processing</span>.\n      The project is responsive and built as mobile first.\n    </p>\n\n    <p>\n      Focus has also been given to <span class='bold'>accessibility</span> and user friendliness.\n      The page is fully tabbable and listens to tab and mouse events to give specific styling properties.\n    </p>\n\n  </section>\n\n  <button class='scroll-to-top'>\n    <svg\n      fill=\"white\"\n      xmlns=\"http://www.w3.org/2000/svg\"\n      width=\"30\" height=\"30\"\n      viewBox=\"0 0 24 24\">\n      <path fill=\"none\" d=\"M0 0h24v24H0V0z\"/>\n      <path d=\"M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z\"/>\n    </svg>\n  </button>\n"}];function K(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}var Q=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.images,this.imageObserver,this.options={root:null,rootMargin:"0px",threshold:.2},d&&window.addEventListener("load",this.onLoaded.bind(this),!1)}var e,t,o;return e=n,(t=[{key:"createObserver",value:function(n){var e=this;this.imageObserver=new IntersectionObserver(this.onIntersectionEvent,n),this.images.forEach((function(n){e.imageObserver.observe(n)}))}},{key:"onLoaded",value:function(){this.images=document.querySelectorAll(".image-section__lazy-image"),this.createObserver(this.options)}},{key:"onIntersectionEvent",value:function(n,e){n.forEach((function(n){if(n.isIntersecting){console.log("Intersecting image: ",n);var t=n.target;t.src=t.dataset.src,t.alt=t.dataset.alt,t.title=t.dataset.title,t.classList.add("fade-in"),e.unobserve(n.target),$.publish("oneImageHasBeenLoaded")}}))}}])&&K(e.prototype,t),o&&K(e,o),n}();function X(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}var Z=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),"onkeydown"in window&&window.addEventListener("keydown",this.userIsTabbing.bind(this),!1),"onmousedown"in window&&window.addEventListener("mousedown",this.userIsClicking.bind(this),!1),this.classForCSS="user-is-tabbing"}var e,t,o;return e=n,(t=[{key:"userIsTabbing",value:function(n){9!==n.keyCode||document.body.classList.contains(this.classForCSS)||document.body.classList.add(this.classForCSS)}},{key:"userIsClicking",value:function(){document.body.classList.contains(this.classForCSS)&&document.body.classList.remove(this.classForCSS)}}])&&X(e.prototype,t),o&&X(e,o),n}();t.d(e,"eventBusSingleton",(function(){return $})),t.d(e,"imageObserverSingleton",(function(){return nn})),i.a.polyfill();var $=new a(y);new _(W).loadInitialRoute(window.location.pathname);var nn=new Q;new Z}]);
//# sourceMappingURL=bundle.js.map