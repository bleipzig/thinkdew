/*!
 * @preserve
 * riveted.js | WordPress Plugin Build | v1.1
 * Copyright (c) 2014 Rob Flaherty (@robflaherty)
 * Licensed under the MIT license
 */
var riveted=function(){function e(e){e=e||{},s=parseInt(e.reportInterval,10)||5,f=parseInt(e.idleTimeout,10)||30,m="nonInteraction"in e&&(e.nonInteraction===!1||"false"===e.nonInteraction)?!1:!0,t(document,"keydown",l),t(document,"click",l),t(window,"mousemove",n(l,500)),t(window,"scroll",n(l,500)),t(document,"visibilitychange",r),t(document,"webkitvisibilitychange",r)}function n(e,n){var t,i,a,o=null,r=0,u=function(){r=new Date,o=null,a=e.apply(t,i)};return function(){var c=new Date;r||(r=c);var d=n-(c-r);return t=this,i=arguments,0>=d?(clearTimeout(o),o=null,r=c,a=e.apply(t,i)):o||(o=setTimeout(u,d)),a}}function t(e,n,t){e.addEventListener?e.addEventListener(n,t,!1):e.attachEvent?e.attachEvent("on"+n,t):e["on"+n]=t}function i(e){y?dataLayer.push({event:"RivetedTiming",eventCategory:"Riveted",timingVar:"First Interaction",timingValue:e}):(g&&ga("send","timing","Riveted","First Interaction",e),p&&_gaq.push(["_trackTiming","Riveted","First Interaction",e,null,100]))}function a(e){y?dataLayer.push({event:"Riveted",eventCategory:"Riveted",eventAction:"Time Spent",eventLabel:"Seconds",eventValue:e,eventNonInteraction:m}):(g&&ga("send","event","Riveted","Time Spent",e.toString(),s,{nonInteraction:m}),p&&_gaq.push(["_trackEvent","Riveted","Time Spent",e.toString(),s,m]))}function o(){clearTimeout(L),c()}function r(){(document.hidden||document.webkitHidden)&&o()}function u(){h+=1,h>0&&h%s===0&&a(h)}function c(){T=!0,clearTimeout(R)}function d(){T=!1,clearTimeout(R),R=setInterval(u,1e3)}function v(){var e=new Date,n=e-w;I=!0,i(n),R=setInterval(u,1e3)}function l(){I||v(),T&&d(),clearTimeout(L),L=setTimeout(o,1e3*f+100)}var s,f,m,g,p,y,I=!1,T=!1,h=0,w=new Date,R=null,L=null;return"function"==typeof ga&&(g=!0),"undefined"!=typeof _gaq&&"function"==typeof _gaq.push&&(p=!0),"undefined"!=typeof dataLayer&&"function"==typeof dataLayer.push&&(y=!0),{init:e,trigger:l,setIdle:o}}();riveted.init(riveted_options);