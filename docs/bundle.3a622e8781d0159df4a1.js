(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+ZKE":function(n,e,t){n.exports=t.p+"/assets/18.jpg"},"00et":function(n,e,t){},"6DTx":function(n,e,t){n.exports=t.p+"/assets/12.jpg"},"78xQ":function(n,e,t){n.exports=t.p+"/assets/10.jpg"},Bo2q:function(n,e,t){n.exports=t.p+"/assets/11.jpg"},BtRL:function(n,e,t){n.exports=t.p+"/assets/6.jpg"},Cgbv:function(n,e,t){n.exports=t.p+"/assets/14.jpg"},EdkE:function(n,e,t){n.exports=t.p+"/assets/3.jpg"},FeqQ:function(n,e,t){n.exports=t.p+"/assets/8.jpg"},MqWz:function(n,e,t){n.exports=t.p+"/assets/7.jpg"},QFpd:function(n,e,t){n.exports=t.p+"/assets/2.jpg"},Qxr6:function(n,e,t){n.exports=t.p+"/assets/15.jpg"},"TQ+Z":function(n,e,t){n.exports=t.p+"/assets/5.jpg"},Tmvh:function(n,e,t){n.exports=t.p+"/assets/17.jpg"},WMHR:function(n,e,t){n.exports=t.p+"/assets/16.jpg"},bZat:function(n,e,t){n.exports=t.p+"/assets/9.jpg"},cQpN:function(n,e,t){var i={"./1.jpg":"hVQ6","./10.jpg":"78xQ","./11.jpg":"Bo2q","./12.jpg":"6DTx","./13.jpg":"wkYa","./14.jpg":"Cgbv","./15.jpg":"Qxr6","./16.jpg":"WMHR","./17.jpg":"Tmvh","./18.jpg":"+ZKE","./19.jpg":"vdFl","./2.jpg":"QFpd","./20.jpg":"qCOj","./3.jpg":"EdkE","./4.jpg":"uvtX","./5.jpg":"TQ+Z","./6.jpg":"BtRL","./7.jpg":"MqWz","./8.jpg":"FeqQ","./9.jpg":"bZat"};function o(n){var e=s(n);return t(e)}function s(n){if(!t.o(i,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return i[n]}o.keys=function(){return Object.keys(i)},o.resolve=s,n.exports=o,o.id="cQpN"},hVQ6:function(n,e,t){n.exports=t.p+"/assets/1.jpg"},qCOj:function(n,e,t){n.exports=t.p+"/assets/20.jpg"},tjUo:function(n,e,t){"use strict";t.r(e);t("00et");var i=t("dwco"),o=t.n(i);function s(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}var a=function(){function n(e){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.subscriptions=e||{},this.getNextUniqueId=this.getIdGenerator()}var e,t,i;return e=n,(t=[{key:"getIdGenerator",value:function(){var n=0;return function(){return n+=1}}},{key:"logNextId",value:function(){var n=this.getNextUniqueId();console.log(n)}},{key:"subscribe",value:function(n,e){var t=this,i=this.getNextUniqueId();return this.subscriptions[n]||(this.subscriptions[n]={}),this.subscriptions[n][i]=e,{unsubscribe:function(){delete t.subscriptions[n][i],0===Object.keys(t.subscriptions[n]).length&&delete t.subscriptions[n]}}}},{key:"publish",value:function(n){var e=this,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.subscriptions[n]&&(null===t?Object.keys(this.subscriptions[n]).forEach((function(t){return e.subscriptions[n][t]()})):Object.keys(this.subscriptions[n]).forEach((function(i){return e.subscriptions[n][i](t)})))}}])&&s(e.prototype,t),i&&s(e,i),n}(),c="\n  <nav class='navigation'>\n    <button class='navigation__button' route='/'>Lazy</button>\n    <button class='navigation__button' route='/infinite'>Infinite</button>\n    <button class='navigation__button' route='/fastness'>Fastness</button>\n  </nav>\n",r=t("4NWR"),l=t.n(r);function u(n){return function(n){if(Array.isArray(n)){for(var e=0,t=new Array(n.length);e<n.length;e++)t[e]=n[e];return t}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var d="IntersectionObserver"in window,p=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e+n},h=0,g="\n  <div class='data' id='data'>\n    Images loaded: <span class='image-count'>0</span>\n  </div>\n",f=0,b=0,v="\n  <div class='data' id='data'>\n    Times recycled: <span class='recycling-count'>0</span> |\n    Padding top: <span class='recycling-padding'>0</span>px\n  </div>\n",m={navigationTabIsActive:{hardCoded1:function(n){!function(n){document.querySelectorAll(".navigation__button").forEach((function(n){return n.classList.remove("navigation__button--is-active")})),document.querySelector("[route='".concat(n,"']")).classList.add("navigation__button--is-active")}(n)}},oneImageHasBeenLoaded:{hardcoded2:function(){h=p(1,h),document.querySelector(".image-count").innerHTML=h}},resetImageCounter:{hardcoded3:function(){h=0}},oneRecyclingHasBeenDone:{hardcoded4:function(){f=p(1,f),document.querySelector(".recycling-count").innerHTML=f}},resetRecyclingCounter:{hardcoded5:function(){f=0}},paddingTopHasBeenSet:{hardcoded6:function(n){!function(n){b=n,document.querySelector(".recycling-padding").innerHTML=b}(n)}},resetPaddingTop:{hardcoded7:function(){b=0}}},y="\n  <section class='not-found'>\n    <span class='not-found__message'>\n      404\n    </span>\n  </section>\n";function w(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}var _=function(){function n(e){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.routes=e,this.basePath="",window.addEventListener("DOMContentLoaded",this.registerDOMRoutes.bind(this),!1),window.addEventListener("popstate",this.popStateCallback.bind(this),!1)}var e,t,i;return e=n,(t=[{key:"popStateCallback",value:function(n){n.state&&this.reactOnURLChange(window.location.pathname)}},{key:"getBaseFromCurrentPath",value:function(n){return"/fast/"===n?"/fast":""}},{key:"getRouteFromCurrentPath",value:function(n){return n.replace(/\/fast/g,"")}},{key:"loadInitialRoute",value:function(n){this.basePath=this.getBaseFromCurrentPath(n);var e=this.getRouteFromCurrentPath(n);console.log("RoutePath: ",n,"basePath: ",this.basePath,"routePath: ",e);var t=document.getElementById("app"),i=this.routes.find((function(n){return n.path===e}));console.log(i),t.innerHTML=i?i.loadInitialPage:y,$.publish("navigationTabIsActive",e)}},{key:"reactOnURLChange",value:function(n){var e=this.routes.find((function(e){return e.path===n}));e?e.navigationHandler():document.getElementById("app").innerHTML=y,$.publish("navigationTabIsActive",n)}},{key:"btnNavigate",value:function(n){var e=n.target.attributes[1].value,t=this.routes.find((function(n){return n.path===e}));t?(window.history.pushState({},"",this.basePath+t.path),this.reactOnURLChange(t.path),$.publish("navigationTabIsActive",t.path)):(window.history.pushState({},"","error"),this.reactOnURLChange("error"))}},{key:"registerDOMRoutes",value:function(){var n=this;Array.from(document.querySelectorAll("[route]")).forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault,n.btnNavigate(e)}),!1)}))}}])&&w(e.prototype,t),i&&w(e,i),n}(),j="\n  <header class='header'>\n    <h1>Blazingly Fast</h1>\n  </header>\n",T="\n  <section class='about' role='contentinfo' aria-label='About the project' id='about'>\n    ".concat(d?"<p class='about-description'>\n          This page lazy-loads the images.\n          Each Image will load when 20 % of the image height has entered the viewport.\n        </p>":"<p class='about-description--error'>\n          The browser you're using doesn't support IntersectionObserver :(\n        </p>","\n  </section>"),x=function(n){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=[],i=1;i<=n;i++)t.push(i);var o=l()(t);return[].concat(u(e),u(o))}(20,void 0).map((function(n){return"\n  <img\n    src=".concat(d?"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==":t("cQpN")("./".concat(n,".jpg")),"\n    class='image-section__lazy-image'\n    data-src='assets/").concat(n,".jpg'\n    data-alt='Cheetahs in nature'\n    data-title='Cheetah'>\n")})).join(""),L="\n  <section class='image-section' role='contentinfo' aria-label='Section with photos' id='content'>\n    ".concat(x,"\n  </section>\n"),I='\n  <button class=\'scroll-to-top\'>\n    <svg\n      fill="white"\n      xmlns="http://www.w3.org/2000/svg"\n      width="30" height="30"\n      viewBox="0 0 24 24">\n      <path fill="none" d="M0 0h24v24H0V0z"/>\n      <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/>\n    </svg>\n  </button>\n',k=null;window.addEventListener("DOMContentLoaded",(function(){(k=document.querySelector(".scroll-to-top")).addEventListener("click",(function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}))})),window.addEventListener("scroll",(function(){window.pageYOffset>300?k.classList.contains("btn-entrance")||(k.classList.remove("btn-exit"),k.classList.add("btn-entrance"),k.style.display="block"):k.classList.contains("btn-entrance")&&(k.classList.remove("btn-entrance"),k.classList.add("btn-exit"),this.setTimeout((function(){k.style.display="none"}),250))}));var E=j+c+T+g+L+I,A="\n  <section class='about' role='contentinfo' aria-label='About the project' id='about'>\n    <p class='about-description'>\n      This infinite scroll recycles it's 20 DOM elements when scrolling: changing the contents and the positions.\n    </p>\n  </section>",O="\n  <section class='scroll-section' role='contentinfo' aria-label='Infinite scroll' id='content'>\n    <ul class='scroll-section__ul'></ul>\n  </section>\n",C="\n  <section class='about' role='contentinfo' aria-label='About the project' id='about'>\n    <p class='about-description'>\n    </p>\n  </section>",M="\n  <div class='data data--empty' id='data'>\n  </div>\n",S="\n  <section class='feature-section' role='contentinfo' aria-label='xxx' id='content'>\n\n    <h2>Features</h2>\n\n    <p>\n      The aim of this project is to give the fastest possible experience.\n      Some of the features are:\n    </p>\n\n    <ul>\n      <li>\n        The project is built in <span class='bold'>plain JavaScript</span>, meaning the code is as lightweight it can be -\n        thus avoiding the need for the client to load a framework.\n        You can look at all the files in the inspector source tab, select webpack.\n      </li>\n      <li>\n        For this reason, I built my own <span class='bold'>routing</span> and <span class='bold'>event bus</span>.\n      </li>\n      <li>\n        The image loader uses intersection observer to <span class='bold'>load images as they are needed</span>,\n        thus avoiding to load unnessesary content.\n        You can follow the loading in the inspector network tab.\n      </li>\n      <li>\n        The infinite scroll uses intersection observer to re-calculate the position of the elements cluster and to update the content of the elements;\n        a <span class='bold'>recycling of the elements</span>.\n        This way the DOM constantly only contains 20 elements - light and fast to process, in contrast to having a very large DOM full of content.\n        The user is given a seamless scrolling experience.\n        You can follow the recycling in the inspector elements panel.\n      </li>\n      <li>\n        Webpack is configured for development and production.\n        The configuration includes <span class='bold'>code-splitting</span> to facilitate browser caching, and <span class='bold'>image compression</span>.\n      </li>\n    </ul>\n\n    <p>\n      All this gives the user a <span class='bold'>fast-loading experience with minimum of code loading and processing</span>.\n      The project is responsive and built as mobile first.\n    </p>\n\n    <p>\n      Focus has also been given to <span class='bold'>accessibility</span> and user friendliness.\n      The page is tabbable and listens to tab and mouse events to give specific styling properties.\n    </p>\n\n  </section>\n",B=function(n,e,t,i){return"\n  <li class='tile' id='tile-".concat(n,"'>\n\n    <div class='tile-placeholder'>\n      <div class='tile-placeholder__background'>\n        <div class='tile-placeholder__vertical-line'></div>\n        <div class='tile-placeholder__rectangle-first'></div>\n        <div class='tile-placeholder__horizontal-line-second'></div>\n        <div class='tile-placeholder__horizontal-line-third'></div>\n      </div>\n    </div>\n\n    <div class='tile-info'>\n      <div class='tile-info__grid'>\n        <div class='tile-info__cell-1'>Recyclable DOM element</div>\n        <div class='tile-info__cell-2 right bold'>").concat(n,"</div>\n        <div class='tile-info__cell-3'>of</div>\n        <div class='tile-info__cell-4 right'>").concat(e,"</div>\n\n        <div class='tile-info__cell-5'>Containing array index item</div>\n        <div class='tile-info__cell-6 right bold'><span class='tile-info__index'>").concat(t,"</span></div>\n        <div class='tile-info__cell-7'>of</div>\n        <div class='tile-info__cell-8 right'>").concat(i,"</div>\n\n      </div>\n    </div>\n\n  </li>\n")},H=function(n,e,t){var i,o=e/2;return(i=n?t+o:t-o)<0&&(i=0),i},F=function(n){return Number(n.substring(0,n.length-2))},R=function(n,e){var t=document.querySelector(".scroll-section__ul"),i=F(t.style.paddingTop),o=F(t.style.paddingBottom),s=e/2*190;n?(t.style.paddingTop=i+s+"px",t.style.paddingBottom=0===o?"0px":o-s+"px"):(t.style.paddingTop=0===i?"0px":i-s+"px",t.style.paddingBottom=o+s+"px"),$.publish("paddingTopHasBeenSet",F(t.style.paddingTop))},q=function(n,e){for(var t=0;t<e;t++){document.querySelector("#tile-".concat(t+1)).querySelector(".tile-info__index").innerText="".concat(n+t+1)}},P=[],D=function(){var n;P=function(n){for(var e=[],t=0;t<n;t++)e.push({indexNumber:t});return e}(200),function(n){for(var e=document.querySelector(".scroll-section__ul"),t=0;t<n;t++)e.insertAdjacentHTML("beforeend",B(t+1,20,P[t].indexNumber+1,200))}(20),(n=new IntersectionObserver((function(n){n.forEach((function(n){"tile-1"===n.target.id?W(n):n.target.id==="tile-".concat(20)&&U(n)}))}),{root:null,rootMargin:"0px",threshold:.5})).observe(document.querySelector("#tile-1")),n.observe(document.querySelector("#tile-".concat(20)))};window.onload=function(){return D()};var z=0,Q=0,N=0,U=function(n){if(180!==z){var e=n.boundingClientRect.top,t=n.intersectionRatio,i=n.isIntersecting;if(console.log(e,t,i),e<Q&&t>N&&i){var o=H(!0,20,z);R(!0,20),q(o,20),z=o,$.publish("oneRecyclingHasBeenDone")}Q=e,N=t}},V=0,Y=0,W=function(n){var e=n.boundingClientRect.top,t=n.intersectionRatio,i=n.isIntersecting;if(e>V&&i&&t>=Y&&0!==z){var o=H(!1,20,z);R(!1,20),q(o,20),z=o,$.publish("oneRecyclingHasBeenDone")}V=e,Y=t},Z=[{path:"/",name:"Root",navigationHandler:function(){document.getElementById("about").outerHTML=T,$.publish("resetImageCounter"),document.getElementById("data").outerHTML=g,document.getElementById("content").outerHTML=L,nn.onLoaded()},loadInitialPage:E},{path:"/infinite",name:"Infinite",navigationHandler:function(){document.getElementById("about").outerHTML=A,$.publish("resetRecyclingCounter"),document.getElementById("data").outerHTML=v,document.getElementById("content").outerHTML=O,D()},loadInitialPage:"\n  <header class='header'>\n    <h1>Blazingly Fast</h1>\n  </header>\n\n  <nav class='navigation'>\n    <button class='navigation__button' route='/'>Lazy</button>\n    <button class='navigation__button' route='/infinite'>Infinite</button>\n    <button class='navigation__button' route='/fastness'>Fastness</button>\n  </nav>\n\n  <section class='about' role='contentinfo' aria-label='About the project' id='about'>\n    <p class='about-description'>\n      This infinite scroll recycles it's 20 DOM elements when scrolling: changing the contents and the positions.\n    </p>\n  </section>\n  <div class='data' id='data'>\n    Times recycled: <span class='recycling-count'>0</span> |\n    Padding top: <span class='recycling-padding'>0</span>px\n  </div>\n\n  <section class='scroll-section' role='contentinfo' aria-label='Infinite scroll' id='content'>\n    <ul class='scroll-section__ul'></ul>\n  </section>\n\n  <button class='scroll-to-top'>\n    <svg\n      fill=\"white\"\n      xmlns=\"http://www.w3.org/2000/svg\"\n      width=\"30\" height=\"30\"\n      viewBox=\"0 0 24 24\">\n      <path fill=\"none\" d=\"M0 0h24v24H0V0z\"/>\n      <path d=\"M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z\"/>\n    </svg>\n  </button>\n"},{path:"/fastness",name:"Fastness",navigationHandler:function(){document.getElementById("about").outerHTML=C,document.getElementById("data").outerHTML=M,document.getElementById("content").outerHTML=S},loadInitialPage:"\n  <header class='header'>\n    <h1>Blazingly Fast</h1>\n  </header>\n\n  <nav class='navigation'>\n    <button class='navigation__button' route='/'>Lazy</button>\n    <button class='navigation__button' route='/infinite'>Infinite</button>\n    <button class='navigation__button' route='/fastness'>Fastness</button>\n  </nav>\n\n  <section class='about' role='contentinfo' aria-label='About the project' id='about'>\n    <p class='about-description'>\n    </p>\n  </section>\n  <div class='data data--empty' id='data'>\n  </div>\n\n  <section class='feature-section' role='contentinfo' aria-label='xxx' id='content'>\n\n    <h2>Features</h2>\n\n    <p>\n      The aim of this project is to give the fastest possible experience.\n      Some of the features are:\n    </p>\n\n    <ul>\n      <li>\n        The project is built in <span class='bold'>plain JavaScript</span>, meaning the code is as lightweight it can be -\n        thus avoiding the need for the client to load a framework.\n        You can look at all the files in the inspector source tab, select webpack.\n      </li>\n      <li>\n        For this reason, I built my own <span class='bold'>routing</span> and <span class='bold'>event bus</span>.\n      </li>\n      <li>\n        The image loader uses intersection observer to <span class='bold'>load images as they are needed</span>,\n        thus avoiding to load unnessesary content.\n        You can follow the loading in the inspector network tab.\n      </li>\n      <li>\n        The infinite scroll uses intersection observer to re-calculate the position of the elements cluster and to update the content of the elements;\n        a <span class='bold'>recycling of the elements</span>.\n        This way the DOM constantly only contains 20 elements - light and fast to process, in contrast to having a very large DOM full of content.\n        The user is given a seamless scrolling experience.\n        You can follow the recycling in the inspector elements panel.\n      </li>\n      <li>\n        Webpack is configured for development and production.\n        The configuration includes <span class='bold'>code-splitting</span> to facilitate browser caching, and <span class='bold'>image compression</span>.\n      </li>\n    </ul>\n\n    <p>\n      All this gives the user a <span class='bold'>fast-loading experience with minimum of code loading and processing</span>.\n      The project is responsive and built as mobile first.\n    </p>\n\n    <p>\n      Focus has also been given to <span class='bold'>accessibility</span> and user friendliness.\n      The page is tabbable and listens to tab and mouse events to give specific styling properties.\n    </p>\n\n  </section>\n\n  <button class='scroll-to-top'>\n    <svg\n      fill=\"white\"\n      xmlns=\"http://www.w3.org/2000/svg\"\n      width=\"30\" height=\"30\"\n      viewBox=\"0 0 24 24\">\n      <path fill=\"none\" d=\"M0 0h24v24H0V0z\"/>\n      <path d=\"M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z\"/>\n    </svg>\n  </button>\n"}];function J(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}var G=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.images,this.imageObserver,this.options={root:null,rootMargin:"0px",threshold:.2},d&&window.addEventListener("load",this.onLoaded.bind(this),!1)}var e,t,i;return e=n,(t=[{key:"createObserver",value:function(n){var e=this;this.imageObserver=new IntersectionObserver(this.onIntersectionEvent,n),this.images.forEach((function(n){e.imageObserver.observe(n)}))}},{key:"onLoaded",value:function(){this.images=document.querySelectorAll(".image-section__lazy-image"),this.createObserver(this.options)}},{key:"onIntersectionEvent",value:function(n,e){n.forEach((function(n){if(n.isIntersecting){console.log("Intersecting image: ",n);var t=n.target;t.src=t.dataset.src,t.alt=t.dataset.alt,t.title=t.dataset.title,t.classList.add("fade-in"),e.unobserve(n.target),$.publish("oneImageHasBeenLoaded")}}))}}])&&J(e.prototype,t),i&&J(e,i),n}();function K(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}var X=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),"onkeydown"in window&&window.addEventListener("keydown",this.userIsTabbing.bind(this),!1),"onmousedown"in window&&window.addEventListener("mousedown",this.userIsClicking.bind(this),!1),this.classForCSS="user-is-tabbing"}var e,t,i;return e=n,(t=[{key:"userIsTabbing",value:function(n){9!==n.keyCode||document.body.classList.contains(this.classForCSS)||document.body.classList.add(this.classForCSS)}},{key:"userIsClicking",value:function(){document.body.classList.contains(this.classForCSS)&&document.body.classList.remove(this.classForCSS)}}])&&K(e.prototype,t),i&&K(e,i),n}();t.d(e,"eventBusSingleton",(function(){return $})),t.d(e,"imageObserverSingleton",(function(){return nn})),o.a.polyfill();var $=new a(m);new _(Z).loadInitialRoute(window.location.pathname);var nn=new G;new X},uvtX:function(n,e,t){n.exports=t.p+"/assets/4.jpg"},vdFl:function(n,e,t){n.exports=t.p+"/assets/19.jpg"},wkYa:function(n,e,t){n.exports=t.p+"/assets/13.jpg"}},[["tjUo",1,2]]]);
//# sourceMappingURL=bundle.3a622e8781d0159df4a1.js.map