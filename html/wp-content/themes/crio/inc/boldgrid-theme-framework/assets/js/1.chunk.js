(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{316:function(e,t,i){"use strict";var o=i(323).default,n=i(321).default,a=i(319).default;e.exports={jarallax:o,jarallaxElement:function(){return a(o)},jarallaxVideo:function(){return n(o)}}},318:function(e,t,i){"use strict";(function(t){var i;i="undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},e.exports=i}).call(this,i(86))},319:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.default.jarallax;if(void 0===e)return;var t=e.constructor;["initImg","canInitParallax","init","destroy","clipContainer","coverImage","isVisible","onScroll","onResize"].forEach(function(e){var i=t.prototype[e];t.prototype[e]=function(){"initImg"===e&&null!==this.$item.getAttribute("data-jarallax-element")&&(this.options.type="element",this.pureOptions.speed=this.$item.getAttribute("data-jarallax-element")||this.pureOptions.speed);for(var t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];if("element"!==this.options.type)return i.apply(this,o);switch(this.pureOptions.threshold=this.$item.getAttribute("data-threshold")||"",e){case"init":var a=this.pureOptions.speed.split(" ");this.options.speed=this.pureOptions.speed||0,this.options.speedY=a[0]?parseFloat(a[0]):0,this.options.speedX=a[1]?parseFloat(a[1]):0;var s=this.pureOptions.threshold.split(" ");this.options.thresholdY=s[0]?parseFloat(s[0]):null,this.options.thresholdX=s[1]?parseFloat(s[1]):null,i.apply(this,o);var r=this.$item.getAttribute("data-jarallax-original-styles");return r&&this.$item.setAttribute("style",r),!0;case"onResize":var l=this.css(this.$item,"transform");this.css(this.$item,{transform:""});var p=this.$item.getBoundingClientRect();this.itemData={width:p.width,height:p.height,y:p.top+this.getWindowData().y,x:p.left},this.css(this.$item,{transform:l});break;case"onScroll":var u=this.getWindowData(),d=(u.y+u.height/2-this.itemData.y-this.itemData.height/2)/(u.height/2),c=d*this.options.speedY,h=d*this.options.speedX,m=c,y=h;null!==this.options.thresholdY&&c>this.options.thresholdY&&(m=0),null!==this.options.thresholdX&&h>this.options.thresholdX&&(y=0),this.css(this.$item,{transform:"translate3d(".concat(y,"px,").concat(m,"px,0)")});break;case"initImg":case"isVisible":case"clipContainer":case"coverImage":return!0}return i.apply(this,o)}})};var o=function(e){return e&&e.__esModule?e:{default:e}}(i(318))},320:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){return e&&e.__esModule?e:{default:e}}(i(318));function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(){this.doneCallbacks=[],this.failCallbacks=[]}s.prototype={execute:function(e,t){var i=e.length;for(t=Array.prototype.slice.call(t);i;)e[i-=1].apply(null,t)},resolve:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];this.execute(this.doneCallbacks,t)},reject:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];this.execute(this.failCallbacks,t)},done:function(e){this.doneCallbacks.push(e)},fail:function(e){this.failCallbacks.push(e)}};var r=0,l=0,p=0,u=0,d=0,c=new s,h=new s,m=function(){function e(t,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);this.url=t,this.options_default={autoplay:!1,loop:!1,mute:!1,volume:100,showContols:!0,startTime:0,endTime:0},this.options=this.extend({},this.options_default,i),this.videoID=this.parseURL(t),this.videoID&&(this.ID=r,r+=1,this.loadAPI(),this.init())}return function(e,t,i){t&&a(e.prototype,t),i&&a(e,i)}(e,[{key:"extend",value:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];var o=t[0]||{};return Object.keys(t).forEach(function(e){t[e]&&Object.keys(t[e]).forEach(function(i){o[i]=t[e][i]})}),o}},{key:"parseURL",value:function(e){var t=function(e){var t=e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/);return!(!t||11!==t[1].length)&&t[1]}(e),i=function(e){var t=e.match(/https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/);return!(!t||!t[3])&&t[3]}(e),o=function(e){var t={},i=0;return e.split(/,(?=mp4\:|webm\:|ogv\:|ogg\:)/).forEach(function(e){var o=e.match(/^(mp4|webm|ogv|ogg)\:(.*)/);o&&o[1]&&o[2]&&(t["ogv"===o[1]?"ogg":o[1]]=o[2],i=1)}),!!i&&t}(e);return t?(this.type="youtube",t):i?(this.type="vimeo",i):!!o&&(this.type="local",o)}},{key:"isValid",value:function(){return!!this.videoID}},{key:"on",value:function(e,t){this.userEventsList=this.userEventsList||[],(this.userEventsList[e]||(this.userEventsList[e]=[])).push(t)}},{key:"off",value:function(e,t){var i=this;this.userEventsList&&this.userEventsList[e]&&(t?this.userEventsList[e].forEach(function(o,n){o===t&&(i.userEventsList[e][n]=!1)}):delete this.userEventsList[e])}},{key:"fire",value:function(e){for(var t=this,i=arguments.length,o=new Array(i>1?i-1:0),n=1;n<i;n++)o[n-1]=arguments[n];this.userEventsList&&void 0!==this.userEventsList[e]&&this.userEventsList[e].forEach(function(e){e&&e.apply(t,o)})}},{key:"play",value:function(e){var t=this;t.player&&("youtube"===t.type&&t.player.playVideo&&(void 0!==e&&t.player.seekTo(e||0),o.default.YT.PlayerState.PLAYING!==t.player.getPlayerState()&&t.player.playVideo()),"vimeo"===t.type&&(void 0!==e&&t.player.setCurrentTime(e),t.player.getPaused().then(function(e){e&&t.player.play()})),"local"===t.type&&(void 0!==e&&(t.player.currentTime=e),t.player.paused&&t.player.play()))}},{key:"pause",value:function(){var e=this;e.player&&("youtube"===e.type&&e.player.pauseVideo&&o.default.YT.PlayerState.PLAYING===e.player.getPlayerState()&&e.player.pauseVideo(),"vimeo"===e.type&&e.player.getPaused().then(function(t){t||e.player.pause()}),"local"===e.type&&(e.player.paused||e.player.pause()))}},{key:"mute",value:function(){this.player&&("youtube"===this.type&&this.player.mute&&this.player.mute(),"vimeo"===this.type&&this.player.setVolume&&this.player.setVolume(0),"local"===this.type&&(this.$video.muted=!0))}},{key:"unmute",value:function(){this.player&&("youtube"===this.type&&this.player.mute&&this.player.unMute(),"vimeo"===this.type&&this.player.setVolume&&this.player.setVolume(this.options.volume),"local"===this.type&&(this.$video.muted=!1))}},{key:"setVolume",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.player&&e&&("youtube"===this.type&&this.player.setVolume&&this.player.setVolume(e),"vimeo"===this.type&&this.player.setVolume&&this.player.setVolume(e),"local"===this.type&&(this.$video.volume=e/100))}},{key:"getVolume",value:function(e){this.player?("youtube"===this.type&&this.player.getVolume&&e(this.player.getVolume()),"vimeo"===this.type&&this.player.getVolume&&this.player.getVolume().then(function(t){e(t)}),"local"===this.type&&e(100*this.$video.volume)):e(!1)}},{key:"getMuted",value:function(e){this.player?("youtube"===this.type&&this.player.isMuted&&e(this.player.isMuted()),"vimeo"===this.type&&this.player.getVolume&&this.player.getVolume().then(function(t){e(!!t)}),"local"===this.type&&e(this.$video.muted)):e(null)}},{key:"getImageURL",value:function(e){var t=this;if(t.videoImage)e(t.videoImage);else{if("youtube"===t.type){var i=["maxresdefault","sddefault","hqdefault","0"],o=0,n=new Image;n.onload=function(){120!==(this.naturalWidth||this.width)||o===i.length-1?(t.videoImage="https://img.youtube.com/vi/".concat(t.videoID,"/").concat(i[o],".jpg"),e(t.videoImage)):(o+=1,this.src="https://img.youtube.com/vi/".concat(t.videoID,"/").concat(i[o],".jpg"))},n.src="https://img.youtube.com/vi/".concat(t.videoID,"/").concat(i[o],".jpg")}if("vimeo"===t.type){var a=new XMLHttpRequest;a.open("GET","https://vimeo.com/api/v2/video/".concat(t.videoID,".json"),!0),a.onreadystatechange=function(){if(4===this.readyState&&200<=this.status&&400>this.status){var i=JSON.parse(this.responseText);t.videoImage=i[0].thumbnail_large,e(t.videoImage)}},a.send(),a=null}}}},{key:"getIframe",value:function(e){this.getVideo(e)}},{key:"getVideo",value:function(e){var t=this;t.$video?e(t.$video):t.onAPIready(function(){var i,n;if(t.$video||((i=document.createElement("div")).style.display="none"),"youtube"===t.type){var a,s;t.playerOptions={},t.playerOptions.videoId=t.videoID,t.playerOptions.playerVars={autohide:1,rel:0,autoplay:0,playsinline:1},t.options.showContols||(t.playerOptions.playerVars.iv_load_policy=3,t.playerOptions.playerVars.modestbranding=1,t.playerOptions.playerVars.controls=0,t.playerOptions.playerVars.showinfo=0,t.playerOptions.playerVars.disablekb=1),t.playerOptions.events={onReady:function(e){if(t.options.mute?e.target.mute():t.options.volume&&e.target.setVolume(t.options.volume),t.options.autoplay&&t.play(t.options.startTime),t.fire("ready",e),t.options.loop&&!t.options.endTime){t.options.endTime=t.player.getDuration()-.1}setInterval(function(){t.getVolume(function(i){t.options.volume!==i&&(t.options.volume=i,t.fire("volumechange",e))})},150)},onStateChange:function(e){t.options.loop&&e.data===o.default.YT.PlayerState.ENDED&&t.play(t.options.startTime),a||e.data!==o.default.YT.PlayerState.PLAYING||(a=1,t.fire("started",e)),e.data===o.default.YT.PlayerState.PLAYING&&t.fire("play",e),e.data===o.default.YT.PlayerState.PAUSED&&t.fire("pause",e),e.data===o.default.YT.PlayerState.ENDED&&t.fire("ended",e),e.data===o.default.YT.PlayerState.PLAYING?s=setInterval(function(){t.fire("timeupdate",e),t.options.endTime&&t.player.getCurrentTime()>=t.options.endTime&&(t.options.loop?t.play(t.options.startTime):t.pause())},150):clearInterval(s)},onError:function(e){t.fire("error",e)}};var r=!t.$video;if(r){var l=document.createElement("div");l.setAttribute("id",t.playerID),i.appendChild(l),document.body.appendChild(i)}t.player=t.player||new o.default.YT.Player(t.playerID,t.playerOptions),r&&(t.$video=document.getElementById(t.playerID),t.videoWidth=parseInt(t.$video.getAttribute("width"),10)||1280,t.videoHeight=parseInt(t.$video.getAttribute("height"),10)||720)}if("vimeo"===t.type){if(t.playerOptions={id:t.videoID,autopause:0,transparent:0,autoplay:t.options.autoplay?1:0,loop:t.options.loop?1:0,muted:t.options.mute?1:0},t.options.volume&&(t.playerOptions.volume=t.options.volume),t.options.showContols||(t.playerOptions.badge=0,t.playerOptions.byline=0,t.playerOptions.portrait=0,t.playerOptions.title=0,t.playerOptions.background=1),!t.$video){var p="";Object.keys(t.playerOptions).forEach(function(e){""!==p&&(p+="&"),p+="".concat(e,"=").concat(encodeURIComponent(t.playerOptions[e]))}),t.$video=document.createElement("iframe"),t.$video.setAttribute("id",t.playerID),t.$video.setAttribute("src","https://player.vimeo.com/video/".concat(t.videoID,"?").concat(p)),t.$video.setAttribute("frameborder","0"),t.$video.setAttribute("mozallowfullscreen",""),t.$video.setAttribute("allowfullscreen",""),i.appendChild(t.$video),document.body.appendChild(i)}var u;t.player=t.player||new o.default.Vimeo.Player(t.$video,t.playerOptions),t.options.startTime&&t.options.autoplay&&t.player.setCurrentTime(t.options.startTime),t.player.getVideoWidth().then(function(e){t.videoWidth=e||1280}),t.player.getVideoHeight().then(function(e){t.videoHeight=e||720}),t.player.on("timeupdate",function(e){u||(t.fire("started",e),u=1),t.fire("timeupdate",e),t.options.endTime&&t.options.endTime&&e.seconds>=t.options.endTime&&(t.options.loop?t.play(t.options.startTime):t.pause())}),t.player.on("play",function(e){t.fire("play",e),t.options.startTime&&0===e.seconds&&t.play(t.options.startTime)}),t.player.on("pause",function(e){t.fire("pause",e)}),t.player.on("ended",function(e){t.fire("ended",e)}),t.player.on("loaded",function(e){t.fire("ready",e)}),t.player.on("volumechange",function(e){t.fire("volumechange",e)}),t.player.on("error",function(e){t.fire("error",e)})}"local"===t.type&&(t.$video||(t.$video=document.createElement("video"),t.options.showContols&&(t.$video.controls=!0),t.options.mute?t.$video.muted=!0:t.$video.volume&&(t.$video.volume=t.options.volume/100),t.options.loop&&(t.$video.loop=!0),t.$video.setAttribute("playsinline",""),t.$video.setAttribute("webkit-playsinline",""),t.$video.setAttribute("id",t.playerID),i.appendChild(t.$video),document.body.appendChild(i),Object.keys(t.videoID).forEach(function(e){!function(e,t,i){var o=document.createElement("source");o.src=t,o.type=i,e.appendChild(o)}(t.$video,t.videoID[e],"video/".concat(e))})),t.player=t.player||t.$video,t.player.addEventListener("playing",function(e){n||t.fire("started",e),n=1}),t.player.addEventListener("timeupdate",function(e){t.fire("timeupdate",e),t.options.endTime&&t.options.endTime&&this.currentTime>=t.options.endTime&&(t.options.loop?t.play(t.options.startTime):t.pause())}),t.player.addEventListener("play",function(e){t.fire("play",e)}),t.player.addEventListener("pause",function(e){t.fire("pause",e)}),t.player.addEventListener("ended",function(e){t.fire("ended",e)}),t.player.addEventListener("loadedmetadata",function(){t.videoWidth=this.videoWidth||1280,t.videoHeight=this.videoHeight||720,t.fire("ready"),t.options.autoplay&&t.play(t.options.startTime)}),t.player.addEventListener("volumechange",function(e){t.getVolume(function(e){t.options.volume=e}),t.fire("volumechange",e)}),t.player.addEventListener("error",function(e){t.fire("error",e)}));e(t.$video)})}},{key:"init",value:function(){this.playerID="VideoWorker-".concat(this.ID)}},{key:"loadAPI",value:function(){if(!l||!p){var e="";if("youtube"!==this.type||l||(l=1,e="https://www.youtube.com/iframe_api"),"vimeo"===this.type&&!p){if(p=1,void 0!==o.default.Vimeo)return;e="https://player.vimeo.com/api/player.js"}if(e){var t=document.createElement("script"),i=document.getElementsByTagName("head")[0];t.src=e,i.appendChild(t),i=null,t=null}}}},{key:"onAPIready",value:function(e){if("youtube"===this.type&&(void 0!==o.default.YT&&0!==o.default.YT.loaded||u?"object"===n(o.default.YT)&&1===o.default.YT.loaded?e():c.done(function(){e()}):(u=1,window.onYouTubeIframeAPIReady=function(){window.onYouTubeIframeAPIReady=null,c.resolve("done"),e()})),"vimeo"===this.type)if(void 0!==o.default.Vimeo||d)void 0!==o.default.Vimeo?e():h.done(function(){e()});else{d=1;var t=setInterval(function(){void 0!==o.default.Vimeo&&(clearInterval(t),h.resolve("done"),e())},20)}"local"===this.type&&e()}}]),e}();t.default=m},321:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.default.jarallax;if(void 0===e)return;var t=e.constructor,i=t.prototype.onScroll;t.prototype.onScroll=function(){var e=this;i.apply(e);var t=!e.isVideoInserted&&e.video&&(!e.options.videoLazyLoading||e.isElementInViewport)&&!e.options.disableVideo();t&&(e.isVideoInserted=!0,e.video.getVideo(function(t){var i=t.parentNode;e.css(t,{position:e.image.position,top:"0px",left:"0px",right:"0px",bottom:"0px",width:"100%",height:"100%",maxWidth:"none",maxHeight:"none",pointerEvents:"none",transformStyle:"preserve-3d",backfaceVisibility:"hidden",willChange:"transform,opacity",margin:0,zIndex:-1}),e.$video=t,"local"===e.video.type&&(e.image.src?e.$video.setAttribute("poster",e.image.src):e.image.$item&&"IMG"===e.image.$item.tagName&&e.image.$item.src&&e.$video.setAttribute("poster",e.image.$item.src)),e.image.$container.appendChild(t),i.parentNode.removeChild(i)}))};var a=t.prototype.coverImage;t.prototype.coverImage=function(){var e=a.apply(this),t=!!this.image.$item&&this.image.$item.nodeName;if(e&&this.video&&t&&("IFRAME"===t||"VIDEO"===t)){var i=e.image.height,o=i*this.image.width/this.image.height,n=(e.container.width-o)/2,s=e.image.marginTop;e.container.width>o&&(o=e.container.width,i=o*this.image.height/this.image.width,n=0,s+=(e.image.height-i)/2),"IFRAME"===t&&(i+=400,s-=200),this.css(this.$video,{width:"".concat(o,"px"),marginLeft:"".concat(n,"px"),height:"".concat(i,"px"),marginTop:"".concat(s,"px")})}return e};var s=t.prototype.initImg;t.prototype.initImg=function(){var e=s.apply(this);return this.options.videoSrc||(this.options.videoSrc=this.$item.getAttribute("data-jarallax-video")||null),this.options.videoSrc?(this.defaultInitImgResult=e,!0):e};var r=t.prototype.canInitParallax;t.prototype.canInitParallax=function(){var e=this,t=r.apply(e);if(!e.options.videoSrc)return t;var i=new o.default(e.options.videoSrc,{autoplay:!0,loop:e.options.videoLoop,showContols:!1,startTime:e.options.videoStartTime||0,endTime:e.options.videoEndTime||0,mute:e.options.videoVolume?0:1,volume:e.options.videoVolume||0});function n(){e.image.$default_item&&(e.image.$item=e.image.$default_item,e.image.$item.style.display="block",e.coverImage(),e.clipContainer(),e.onScroll())}if(i.isValid())if(this.options.disableParallax()&&(t=!0,e.image.position="absolute",e.options.type="scroll",e.options.speed=1),t){if(i.on("ready",function(){if(e.options.videoPlayOnlyVisible){var t=e.onScroll;e.onScroll=function(){t.apply(e),e.videoError||!e.options.videoLoop&&(e.options.videoLoop||e.videoEnded)||(e.isVisible()?i.play():i.pause())}}else i.play()}),i.on("started",function(){e.image.$default_item=e.image.$item,e.image.$item=e.$video,e.image.width=e.video.videoWidth||1280,e.image.height=e.video.videoHeight||720,e.coverImage(),e.clipContainer(),e.onScroll(),e.image.$default_item&&(e.image.$default_item.style.display="none")}),i.on("ended",function(){e.videoEnded=!0,e.options.videoLoop||n()}),i.on("error",function(){e.videoError=!0,n()}),e.video=i,!e.defaultInitImgResult&&(e.image.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7","local"!==i.type))return i.getImageURL(function(t){e.image.bgImage='url("'.concat(t,'")'),e.init()}),!1}else e.defaultInitImgResult||i.getImageURL(function(t){var i=e.$item.getAttribute("style");i&&e.$item.setAttribute("data-jarallax-original-styles",i),e.css(e.$item,{"background-image":'url("'.concat(t,'")'),"background-position":"center","background-size":"cover"})});return t};var l=t.prototype.destroy;t.prototype.destroy=function(){this.image.$default_item&&(this.image.$item=this.image.$default_item,delete this.image.$default_item),l.apply(this)}};var o=a(i(320)),n=a(i(318));function a(e){return e&&e.__esModule?e:{default:e}}},322:function(e,t,i){"use strict";e.exports=function(e){"complete"===document.readyState||"interactive"===document.readyState?e.call():document.attachEvent?document.attachEvent("onreadystatechange",function(){"interactive"===document.readyState&&e.call()}):document.addEventListener&&document.addEventListener("DOMContentLoaded",e)}},323:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){return e&&e.__esModule?e:{default:e}}(i(322)),n=i(318);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=[],o=!0,n=!1,a=void 0;try{for(var s,r=e[Symbol.iterator]();!(o=(s=r.next()).done)&&(i.push(s.value),!t||i.length!==t);o=!0);}catch(e){n=!0,a=e}finally{try{o||null==r.return||r.return()}finally{if(n)throw a}}return i}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var l,p,u=n.window.navigator,d=-1<u.userAgent.indexOf("MSIE ")||-1<u.userAgent.indexOf("Trident/")||-1<u.userAgent.indexOf("Edge/"),c=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(u.userAgent),h=function(){for(var e="transform WebkitTransform MozTransform".split(" "),t=document.createElement("div"),i=0;i<e.length;i+=1)if(t&&void 0!==t.style[e[i]])return e[i];return!1}();function m(){c?(!l&&document.body&&((l=document.createElement("div")).style.cssText="position: fixed; top: -9999px; left: 0; height: 100vh; width: 0;",document.body.appendChild(l)),p=(l?l.clientHeight:0)||n.window.innerHeight||document.documentElement.clientHeight):p=n.window.innerHeight||document.documentElement.clientHeight}m(),n.window.addEventListener("resize",m),n.window.addEventListener("orientationchange",m),n.window.addEventListener("load",m),(0,o.default)(function(){m()});var y=[];function f(){y.length&&(y.forEach(function(e,t){var i=e.instance,o=e.oldData,a=i.$item.getBoundingClientRect(),s={width:a.width,height:a.height,top:a.top,bottom:a.bottom,wndW:n.window.innerWidth,wndH:p},r=!o||o.wndW!==s.wndW||o.wndH!==s.wndH||o.width!==s.width||o.height!==s.height,l=r||!o||o.top!==s.top||o.bottom!==s.bottom;y[t].oldData=s,r&&i.onResize(),l&&i.onScroll()}),n.window.requestAnimationFrame(f))}var v=0,g=function(){function e(t,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var o=this;o.instanceID=v,v+=1,o.$item=t,o.defaults={type:"scroll",speed:.5,imgSrc:null,imgElement:".jarallax-img",imgSize:"cover",imgPosition:"50% 50%",imgRepeat:"no-repeat",keepImg:!1,elementInViewport:null,zIndex:-100,disableParallax:!1,disableVideo:!1,videoSrc:null,videoStartTime:0,videoEndTime:0,videoVolume:0,videoLoop:!0,videoPlayOnlyVisible:!0,videoLazyLoading:!0,onScroll:null,onInit:null,onDestroy:null,onCoverImage:null};var n=o.$item.dataset||{},r={};if(Object.keys(n).forEach(function(e){var t=e.substr(0,1).toLowerCase()+e.substr(1);t&&void 0!==o.defaults[t]&&(r[t]=n[e])}),o.options=o.extend({},o.defaults,r,i),o.pureOptions=o.extend({},o.options),Object.keys(o.options).forEach(function(e){"true"===o.options[e]?o.options[e]=!0:"false"===o.options[e]&&(o.options[e]=!1)}),o.options.speed=Math.min(2,Math.max(-1,parseFloat(o.options.speed))),"string"==typeof o.options.disableParallax&&(o.options.disableParallax=new RegExp(o.options.disableParallax)),o.options.disableParallax instanceof RegExp){var l=o.options.disableParallax;o.options.disableParallax=function(){return l.test(u.userAgent)}}if("function"!=typeof o.options.disableParallax&&(o.options.disableParallax=function(){return!1}),"string"==typeof o.options.disableVideo&&(o.options.disableVideo=new RegExp(o.options.disableVideo)),o.options.disableVideo instanceof RegExp){var p=o.options.disableVideo;o.options.disableVideo=function(){return p.test(u.userAgent)}}"function"!=typeof o.options.disableVideo&&(o.options.disableVideo=function(){return!1});var d=o.options.elementInViewport;d&&"object"===s(d)&&void 0!==d.length&&(d=a(d,1)[0]);d instanceof Element||(d=null),o.options.elementInViewport=d,o.image={src:o.options.imgSrc||null,$container:null,useImgTag:!1,position:/iPad|iPhone|iPod|Android/.test(u.userAgent)?"absolute":"fixed"},o.initImg()&&o.canInitParallax()&&o.init()}return function(e,t,i){t&&r(e.prototype,t),i&&r(e,i)}(e,[{key:"css",value:function(e,t){return"string"==typeof t?n.window.getComputedStyle(e).getPropertyValue(t):(t.transform&&h&&(t[h]=t.transform),Object.keys(t).forEach(function(i){e.style[i]=t[i]}),e)}},{key:"extend",value:function(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),o=1;o<t;o++)i[o-1]=arguments[o];return e=e||{},Object.keys(i).forEach(function(t){i[t]&&Object.keys(i[t]).forEach(function(o){e[o]=i[t][o]})}),e}},{key:"getWindowData",value:function(){return{width:n.window.innerWidth||document.documentElement.clientWidth,height:p,y:document.documentElement.scrollTop}}},{key:"initImg",value:function(){var e=this.options.imgElement;return e&&"string"==typeof e&&(e=this.$item.querySelector(e)),e instanceof Element||(this.options.imgSrc?(e=new Image).src=this.options.imgSrc:e=null),e&&(this.options.keepImg?this.image.$item=e.cloneNode(!0):(this.image.$item=e,this.image.$itemParent=e.parentNode),this.image.useImgTag=!0),!!this.image.$item||(null===this.image.src&&(this.image.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",this.image.bgImage=this.css(this.$item,"background-image")),!(!this.image.bgImage||"none"===this.image.bgImage))}},{key:"canInitParallax",value:function(){return h&&!this.options.disableParallax()}},{key:"init",value:function(){var e={position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"},t={pointerEvents:"none",transformStyle:"preserve-3d",backfaceVisibility:"hidden",willChange:"transform,opacity"};if(!this.options.keepImg){var i=this.$item.getAttribute("style");if(i&&this.$item.setAttribute("data-jarallax-original-styles",i),this.image.useImgTag){var o=this.image.$item.getAttribute("style");o&&this.image.$item.setAttribute("data-jarallax-original-styles",o)}}if("static"===this.css(this.$item,"position")&&this.css(this.$item,{position:"relative"}),"auto"===this.css(this.$item,"z-index")&&this.css(this.$item,{zIndex:0}),this.image.$container=document.createElement("div"),this.css(this.image.$container,e),this.css(this.image.$container,{"z-index":this.options.zIndex}),d&&this.css(this.image.$container,{opacity:.9999}),this.image.$container.setAttribute("id","jarallax-container-".concat(this.instanceID)),this.$item.appendChild(this.image.$container),this.image.useImgTag?t=this.extend({"object-fit":this.options.imgSize,"object-position":this.options.imgPosition,"font-family":"object-fit: ".concat(this.options.imgSize,"; object-position: ").concat(this.options.imgPosition,";"),"max-width":"none"},e,t):(this.image.$item=document.createElement("div"),this.image.src&&(t=this.extend({"background-position":this.options.imgPosition,"background-size":this.options.imgSize,"background-repeat":this.options.imgRepeat,"background-image":this.image.bgImage||'url("'.concat(this.image.src,'")')},e,t))),"opacity"!==this.options.type&&"scale"!==this.options.type&&"scale-opacity"!==this.options.type&&1!==this.options.speed||(this.image.position="absolute"),"fixed"===this.image.position){var a=function(e){for(var t=[];null!==e.parentElement;)1===(e=e.parentElement).nodeType&&t.push(e);return t}(this.$item).filter(function(e){var t=n.window.getComputedStyle(e),i=t["-webkit-transform"]||t["-moz-transform"]||t.transform;return i&&"none"!==i||/(auto|scroll)/.test(t.overflow+t["overflow-y"]+t["overflow-x"])});this.image.position=a.length?"absolute":"fixed"}t.position=this.image.position,this.css(this.image.$item,t),this.image.$container.appendChild(this.image.$item),this.onResize(),this.onScroll(!0),this.options.onInit&&this.options.onInit.call(this),"none"!==this.css(this.$item,"background-image")&&this.css(this.$item,{"background-image":"none"}),this.addToParallaxList()}},{key:"addToParallaxList",value:function(){y.push({instance:this}),1===y.length&&n.window.requestAnimationFrame(f)}},{key:"removeFromParallaxList",value:function(){var e=this;y.forEach(function(t,i){t.instance.instanceID===e.instanceID&&y.splice(i,1)})}},{key:"destroy",value:function(){this.removeFromParallaxList();var e=this.$item.getAttribute("data-jarallax-original-styles");if(this.$item.removeAttribute("data-jarallax-original-styles"),e?this.$item.setAttribute("style",e):this.$item.removeAttribute("style"),this.image.useImgTag){var t=this.image.$item.getAttribute("data-jarallax-original-styles");this.image.$item.removeAttribute("data-jarallax-original-styles"),t?this.image.$item.setAttribute("style",e):this.image.$item.removeAttribute("style"),this.image.$itemParent&&this.image.$itemParent.appendChild(this.image.$item)}this.$clipStyles&&this.$clipStyles.parentNode.removeChild(this.$clipStyles),this.image.$container&&this.image.$container.parentNode.removeChild(this.image.$container),this.options.onDestroy&&this.options.onDestroy.call(this),delete this.$item.jarallax}},{key:"clipContainer",value:function(){if("fixed"===this.image.position){var e=this.image.$container.getBoundingClientRect(),t=e.width,i=e.height;if(!this.$clipStyles)this.$clipStyles=document.createElement("style"),this.$clipStyles.setAttribute("type","text/css"),this.$clipStyles.setAttribute("id","jarallax-clip-".concat(this.instanceID)),(document.head||document.getElementsByTagName("head")[0]).appendChild(this.$clipStyles);var o="#jarallax-container-".concat(this.instanceID," {\n            clip: rect(0 ").concat(t,"px ").concat(i,"px 0);\n            clip: rect(0, ").concat(t,"px, ").concat(i,"px, 0);\n            -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n        }");this.$clipStyles.styleSheet?this.$clipStyles.styleSheet.cssText=o:this.$clipStyles.innerHTML=o}}},{key:"coverImage",value:function(){var e=this.image.$container.getBoundingClientRect(),t=e.height,i=this.options.speed,o="scroll"===this.options.type||"scroll-opacity"===this.options.type,n=0,a=t,s=0;return o&&(0>i?(n=i*Math.max(t,p),p<t&&(n-=i*(t-p))):n=i*(t+p),1<i?a=Math.abs(n-p):0>i?a=n/i+Math.abs(n):a+=(p-t)*(1-i),n/=2),this.parallaxScrollDistance=n,s=o?(p-a)/2:(t-a)/2,this.css(this.image.$item,{height:"".concat(a,"px"),marginTop:"".concat(s,"px"),left:"fixed"===this.image.position?"".concat(e.left,"px"):"0",width:"".concat(e.width,"px")}),this.options.onCoverImage&&this.options.onCoverImage.call(this),{image:{height:a,marginTop:s},container:e}}},{key:"isVisible",value:function(){return this.isElementInViewport||!1}},{key:"onScroll",value:function(e){var t=this.$item.getBoundingClientRect(),i=t.top,o=t.height,a={},s=t;if(this.options.elementInViewport&&(s=this.options.elementInViewport.getBoundingClientRect()),this.isElementInViewport=0<=s.bottom&&0<=s.right&&s.top<=p&&s.left<=n.window.innerWidth,e||this.isElementInViewport){var r=Math.max(0,i),l=Math.max(0,o+i),u=Math.max(0,-i),d=Math.max(0,i+o-p),c=Math.max(0,o-(i+o-p)),h=Math.max(0,-i+p-o),m=1-(p-i)/(p+o)*2,y=1;if(o<p?y=1-(u||d)/o:l<=p?y=l/p:c<=p&&(y=c/p),"opacity"!==this.options.type&&"scale-opacity"!==this.options.type&&"scroll-opacity"!==this.options.type||(a.transform="translate3d(0,0,0)",a.opacity=y),"scale"===this.options.type||"scale-opacity"===this.options.type){var f=1;0>this.options.speed?f-=this.options.speed*y:f+=this.options.speed*(1-y),a.transform="scale(".concat(f,") translate3d(0,0,0)")}if("scroll"===this.options.type||"scroll-opacity"===this.options.type){var v=this.parallaxScrollDistance*m;"absolute"===this.image.position&&(v-=i),a.transform="translate3d(0,".concat(v,"px,0)")}this.css(this.image.$item,a),this.options.onScroll&&this.options.onScroll.call(this,{section:t,beforeTop:r,beforeTopEnd:l,afterTop:u,beforeBottom:d,beforeBottomEnd:c,afterBottom:h,visiblePercent:y,fromViewportCenter:m})}}},{key:"onResize",value:function(){this.coverImage(),this.clipContainer()}}]),e}(),b=function(e,t){("object"===("undefined"==typeof HTMLElement?"undefined":s(HTMLElement))?e instanceof HTMLElement:e&&"object"===s(e)&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName)&&(e=[e]);for(var i,o=e.length,n=0,a=arguments.length,r=new Array(a>2?a-2:0),l=2;l<a;l++)r[l-2]=arguments[l];for(;n<o;n+=1)if("object"===s(t)||void 0===t?e[n].jarallax||(e[n].jarallax=new g(e[n],t)):e[n].jarallax&&(i=e[n].jarallax[t].apply(e[n].jarallax,r)),void 0!==i)return i;return e};b.constructor=g;var w=b;t.default=w},86:function(e,t,i){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"===("undefined"==typeof window?"undefined":o(window))&&(n=window)}e.exports=n}}]);