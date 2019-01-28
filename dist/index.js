!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}(window,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(){}return e.createContentItem=function(e,t,n){void 0===n&&(n=null);var o=document.createElement("div");return n?o.insertAdjacentHTML("beforeend",'<img src="'+n+'" alt="'+(t||"")+'" style="max-width: 100%;max-height: calc(100% - 19px);">'):o.insertAdjacentHTML("beforeend",'<img src="'+e.imgFolder+'" alt="'+(t||"")+'">'),o.insertAdjacentHTML("beforeend",'<p style="margin: 5px 0 10px;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;font-size: 11px;">'+(t||"")+"</p>"),o.style.width="10%",o.style.maxWidth="100px",o.style.height="70px",o.style.textAlign="center",o.style.margin="5px",o.style.cursor="pointer",o.id=Date.now().toString(),o},e}();t.Utils=o},function(e,t,n){"use strict";var o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var r=n(2);t.ImageManager=r.ImageManager;var i=n(0);t.Utils=i.Utils,t.default=grapesjs.plugins.add("gjs-image-manager",function(e,t){void 0===t&&(t={});var n=o({url:null,credentials:"include",beforeSend:null,beforeSetSrc:function(e){return e},afterChoosingRunOpenAssets:!1,headers:{},params:{},queryKey:"path",modalTitle:"File Explorer",btnText:"Explorer images",textEmptyFolder:"Empty folder",imgLoader:"data:image/svg+xml,%3Csvg width='38' height='38' viewBox='0 0 38 38' xmlns='http://www.w3.org/2000/svg' stroke='%23fff'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg transform='translate(1 1)' stroke-width='2'%3E%3Ccircle stroke-opacity='.5' cx='18' cy='18' r='18'/%3E%3Cpath d='M36 18c0-9.94-8.06-18-18-18'%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 18 18' to='360 18 18' dur='1s' repeatCount='indefinite'/%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E",imgFolder:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='35' height='35' viewBox='0 0 24 24'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath fill='%23ffffff' d='M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z'/%3E%3C/svg%3E",imgHome:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='15' height='15' viewBox='0 0 24 24'%3E%3Cpath fill='%23ffffff' d='M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E",imgReply:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='15' height='15' viewBox='0 0 24 24'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath fill='%23ffffff' d='M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z'/%3E%3C/svg%3E",imgChevronRight:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='15' height='15' viewBox='0 0 24 24'%3E%3Cpath fill='%23ffffff' d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E"},t);e.on("load",function(){});var i=e.getConfig("stylePrefix"),s=e.AssetManager,a=new r.ImageManager(n);e.ImageExplorer=a,e.on("run:open-assets",function(t){if(!s.getContainer().querySelector("."+i+"btn-explorer-images")){var o=document.createElement("button");o.classList.add(i+"btn-prim"),o.classList.add(i+"btn-explorer-images"),o.onclick=function(){return a.open(e)},o.textContent=n.btnText,o.style.width="100%",s.getContainer().insertAdjacentElement("beforeend",o)}})})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),r=function(){function e(e){void 0===e&&(e={}),this.options=e,this.requestHeader="X-Requested-With",this.breadcrumb=document.createElement("div"),this.modalContent=document.createElement("div"),this.loader=document.createElement("img"),this.loader.src=this.options.imgLoader,this.loader.style.position="absolute",this.loader.style.left="calc(50% - 38px)",this.loader.style.top="calc(50% - 25px)"}return e.prototype.open=function(e){var t=this;this.modal||(this.modal=e.Modal,this.modal.setTitle(this.options.modalTitle),this.breadcrumb.style.fontSize="10px",this.breadcrumb.style.display="flex",this.breadcrumb.style.alignItems="center",this.breadcrumb.style.cursor="pointer",this.breadcrumb.style.padding="0 10px 5px",this.breadcrumb.style.borderBottom="1px solid rgba(0,0,0,0.2)",this.modalContent.classList.add("content"),this.modalContent.style.minHeight="50px",this.modalContent.style.display="flex",this.modalContent.style.flexWrap="wrap"),this.editor=e,e.Commands.isActive("open-assets")&&e.Commands.stop("open-assets"),this.modal.isOpen()&&this.modal.close();var n=document.createElement("div");n.style.position="relative",n.style.padding="0 0 10px",n.append(this.breadcrumb),n.append(this.modalContent),n.append(this.loader),this.modal.open({content:n}),this.fetch("").then(function(e){t.setContent(e)}).catch(function(e){console.log(e)})},e.prototype.selectItem=function(e,t){var n=this;if(void 0===t&&(t=!0),t)this.fetch(e).then(function(e){n.setContent(e)}).catch(function(e){console.log(e)});else{var o=this.editor.getSelected(),r=this.getImageSrc(e);this.editor.AssetManager.get(r)||this.editor.AssetManager.add(r),o&&("image"===o.get("type")||"img"===o.get("tagName")?o.set("src",r):o.setStyle({"background-image":"url("+r+")"}),this.modal.close(),this.options.afterChoosingRunOpenAssets&&this.editor.runCommand("open-assets"))}},e.prototype.setContent=function(e){var t=this;void 0===e&&(e={}),e?(e.directories||[]).reduce(function(e,n){return e.then(function(){var e=n.split("/").pop()||"",r=o.Utils.createContentItem(t.options,e);return r.onclick=function(){return t.selectItem(n)},t.modalContent.appendChild(r)})},Promise.resolve()).then(function(n){(e.files||[]).reduce(function(e,n){return e.then(function(){var e=n.split("/").pop()||"",r=o.Utils.createContentItem(t.options,e,t.getImageSrc(n));return r.onclick=function(){return t.selectItem(n,!1)},t.modalContent.appendChild(r)})},Promise.resolve()).then(function(e){n||e||t.modalContent.insertAdjacentHTML("beforeend","<p>"+t.options.textEmptyFolder+"</p>")})}):this.modalContent.insertAdjacentHTML("beforeend","<p>Wrong answer</p>")},e.prototype.getImageSrc=function(e){var t=e;if("function"==typeof this.options.beforeSetSrc)try{t=this.options.beforeSetSrc(e)}catch(e){console.log(e)}return t},e.prototype.fetch=function(e){var t=this;void 0===e&&(e=""),this.loader.hidden=!1;try{for(;this.modalContent.firstChild;)this.modalContent.removeChild(this.modalContent.firstChild)}catch(e){console.log(e)}var n=e||"";if("function"==typeof this.options.beforeSend)try{e=this.options.beforeSend(e)}catch(e){throw this.loader.hidden=!0,new Error("Error function beforeSend()")}var o=e.split("/").slice(0,-1).join(' <img src="'+this.options.imgChevronRight+'"> ');if(o.length?this.breadcrumb.innerHTML='<img src="'+this.options.imgReply+'"> '+o:this.breadcrumb.innerHTML='<img src="'+this.options.imgHome+'">',this.breadcrumb.onclick=function(){return t.selectItem(n.split("/").slice(0,-1).join("/"))},!this.options.url||"string"!=typeof this.options.url)throw this.loader.hidden=!0,new Error("Unknown options url");var r,i=new URL(this.options.url),s=this.options.headers;for(r in s[this.requestHeader]||(s[this.requestHeader]="XMLHttpRequest"),this.options.params)i.searchParams.append(r,this.options.params[r]);return i.searchParams.append(this.options.queryKey,e),fetch(i.toString(),{method:"GET",credentials:this.options.credentials,headers:s}).then(function(e){if(setTimeout(function(){t.loader.hidden=!0},200),1==(e.status/200|0)){var n=void 0;try{n=e.json()}catch(t){n=e.text().then(function(e){return Promise.reject(e)})}return n}return e.text().then(function(e){return Promise.reject(e)})}).catch(function(e){return setTimeout(function(){t.loader.hidden=!0},200),t.modalContent.insertAdjacentHTML("beforeend","<p>Error connect to server - (<small>"+e.toString()+"</small>)</p>"),e.text().then(function(e){return Promise.reject(e)})})},e}();t.ImageManager=r}])});
//# sourceMappingURL=index.js.map