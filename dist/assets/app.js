(()=>{"use strict";var t,e={168:(t,e,n)=>{var a=n(566),i=(n(563),n(638));function o(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var a=0,i=function(){};return{s:i,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return s=t.done,t},e:function(t){c=!0,o=t},f:function(){try{s||null==n.return||n.return()}finally{if(c)throw o}}}}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u=1280;i((function(){if(0!==i(".header").length){var t={id:null,close:function(){i('[data-modal-id="'.concat(this.id,'"]')).removeAttr("data-modal-active"),i('[data-modal-button="'.concat(this.id,'"]')).removeAttr("data-modal-active")},open:function(){i('[data-modal-id="'.concat(this.id,'"]')).attr("data-modal-active",""),i('[data-modal-button="'.concat(this.id,'"]')).attr("data-modal-active","")},update:function(t){this.id=t},change:function(t){this.close(),this.update(t===this.id?null:t),this.open()}};i("[data-modal-button]").on("click",(function(){var e=i(this).data("modal-button");t.change(e)})),i(window).on("click",(function(e){0!==i(e.target).closest(".header__container").length&&!i(e.target).hasClass("header__container")||0!==i(e.target).closest("[data-modal-active]").length||t.change(null)})),window.matchMedia("(min-width: ".concat(u,"px)")).addListener((function(e){t.change(null)}))}})),i((function(){var t=i("[data-tabs-id]");if(0!==t.length){var e=[];t.each((function(){var t=i(this).data("tabs-id");-1===e.indexOf(t)&&e.push(t)})),e.forEach((function(t){var e=i('[data-tabs-id="'.concat(t,'"][data-tabs-tab]')),n=i('[data-tabs-id="'.concat(t,'"][data-tabs-button]'));if(0!==e.length){var a={id:null,update:function(t){this.id=t},close:function(){e.filter('[data-tabs-tab="'.concat(this.id,'"]')).slideUp(500),n.filter('[data-tabs-button="'.concat(this.id,'"]')).removeAttr("data-tabs-active")},open:function(){e.filter('[data-tabs-tab="'.concat(this.id,'"]')).slideDown(500),n.filter('[data-tabs-button="'.concat(this.id,'"]')).attr("data-tabs-active","")},change:function(t){t&&t!==this.id&&(this.close(),this.update(t),this.open())},init:function(){var t=n.filter("[data-tabs-active]").data("tabs-button");this.update(t)}};a.init(),n.on("click",(function(){var t=i(this).data("tabs-button");a.change(t)}))}}))}})),i(window).on("load",(function(){var t=i("[data-slider-id]");0!==t.length&&t.each((function(){var t=i(this),e=t.data("slider-id"),n=t.data("slider-prev"),o=t.data("slider-next"),r=i('[data-slider-button="'.concat(n,'"]')),s=i('[data-slider-button="'.concat(o,'"]')),d={slidesPerView:"auto",spaceBetween:20,breakpoints:l({},u,{spaceBetween:40})};switch(e){case 3:d=c(c({},d),{},{breakpoints:l({},u,{spaceBetween:60})});break;case 4:d=c(c({},d),{},{allowTouchMove:!1});break;case 7:d=c(c({},d),{},{breakpoints:l({},u,{spaceBetween:100,allowTouchMove:!1})});break;case 8:d=c(c({},d),{},{allowTouchMove:!1});break;case 100:d=c(c({},d),{},{allowTouchMove:!1,autoHeight:!0,loop:!0});break;case 106:d=c({},d);break;case 105:d=c(c({},d),{},{autoHeight:!0,thumbs:{swiper:106}})}var f=new a.Z(t[0],d);r.on("click",(function(){f.slidePrev()})),s.on("click",(function(){f.slideNext()}))}))})),i((function(){var t=i("[data-sticky-id]");0!==t.length&&t.each((function(){var t=i(this),e=t.data("sticky-id"),n=i('[data-sticky-end="'.concat(e,'"]')),a=t.data("sticky-top"),o=i(t).offset().top-a>=0?i(t).offset().top-a:0,r=t.data("sticky-bottom"),s=(0!==n.length?n.offset().top:i(document).height())-r-t.height()-a,c={isSticky:!1,isStickyPrev:!1,isChange:!1,init:function(){this.update(),this.isStickyPrev=this.isSticky,this.isChange=!1},update:function(){var t=window.pageYOffset;this.isStickyPrev=this.isSticky,this.isSticky=t>=o&&t<=s,this.isChange=this.isStickyPrev!==this.isSticky}};c.init(),i(window).on("scroll",(function(){c.update(),c.isChange&&(c.isSticky?t.css("position","fixed").css("top","".concat(a,"px")):t.css("position","").css("top",""))}))}))})),i((function(){i(".mission__spoiler").each((function(){var t=i(this),e=t.find(".mission__spoiler-button"),n=t.find(".mission__spoiler-drop");e.on("click",(function(){t.toggleClass("mission__spoiler--active"),n.slideToggle()}))}))}));var d=function(t){return t[0].scrollTop/(t[0].scrollHeight-t[0].clientHeight)},f=function(t,e){requestAnimationFrame((function(){t.css("top","".concat(100*e,"%"))}))},h=function(t,e,n){return t<e?0:t>n?1:(t-e)/(n-e)};i((function(){i(".block").each((function(){var t=i(this),e=t.find(".block__scroll"),n=d(e),a=t.find(".block__scrollbar-thumb"),o=t.find(".block__slide--1"),r=t.find(".block__slide--2");f(a,n);var s=function(){!function(t,e,n,a){var i=h(e,n,a);requestAnimationFrame((function(){t.css("transform","translateY(-".concat(100*i,"%)")),t.css("opacity",1-i)}))}(o,n,.2,.75),function(t,e,n,a){var i=h(e,n,a);requestAnimationFrame((function(){t.css("transform","translateY(".concat(100*(1-i),"%)")),t.css("opacity",i)}))}(r,n,.25,.8)};s(),e.on("scroll",(function(){n=d(e),f(a,n),s()}))}))})),document.addEventListener("DOMContentLoaded",(function(){var t,e=document.querySelectorAll("input[data-tel-input]"),n=function(t){return t.value.replace(/\D/g,"")},a=function(t){var e=t.target,a=n(e),i=t.clipboardData||window.clipboardData;if(i){var o=i.getData("Text");if(/\D/g.test(o))return void(e.value=a)}},i=function(t){var e=t.target,a=n(e),i=e.selectionStart,o="";if(!a)return e.value="";if(e.value.length==i){if(["7","8","9"].indexOf(a[0])>-1){"9"==a[0]&&(a="7"+a);var r="8"==a[0]?"8":"+7";o=e.value=r+" ",a.length>1&&(o+="("+a.substring(1,4)),a.length>=5&&(o+=") "+a.substring(4,7)),a.length>=8&&(o+="-"+a.substring(7,9)),a.length>=10&&(o+="-"+a.substring(9,11))}else o="+"+a.substring(0,16);e.value=o}else t.data&&/\D/g.test(t.data)&&(e.value=a)},r=function(t){var e=t.target.value.replace(/\D/g,"");8==t.keyCode&&1==e.length&&(t.target.value="")},s=o(e);try{for(s.s();!(t=s.n()).done;){var c=t.value;c.addEventListener("keydown",r),c.addEventListener("input",i,!1),c.addEventListener("paste",a,!1)}}catch(t){s.e(t)}finally{s.f()}})),ymaps.ready((function(){if(0!==i("#map").length){var t=function(){a.matches?e.controls.add(n):e.controls.remove(n)},e=new ymaps.Map("map",{center:[55.732433,37.616144],zoom:14,controls:[]}),n=new ymaps.control.ZoomControl({options:{size:"small",position:{top:205,right:10}}}),a=window.matchMedia("(min-width: ".concat(MAIN_BREAKPOINT,"px)"));t(),a.addListener(t);var o=ymaps.templateLayoutFactory.createClass(['<div class="balloon">','<div class="balloon__content">','<p class="balloon__text">',"{{properties.balloon}}","</p>","</div>",'<div class="balloon__arrow"></div>',"</div>"].join(""),{build:function(){this.constructor.superclass.build.call(this),this._$element=i(".balloon",this.getParentElement()),this.applyElementOffset()},onSublayoutSizeChange:function(){o.superclass.onSublayoutSizeChange.apply(this,arguments),this._isElement(this._$element)&&(this.applyElementOffset(),this.events.fire("shapechange"))},applyElementOffset:function(){this._$element.css({left:-this._$element[0].offsetWidth/2,top:-(this._$element[0].offsetHeight+53)})},getShape:function(){if(!this._isElement(this._$element))return o.superclass.getShape.call(this);var t=this._$element.position();return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([[t.left,t.top],[t.left+this._$element[0].offsetWidth,t.top+this._$element[0].offsetHeight]]))},_isElement:function(t){return t&&t[0]}});e.events.add("click",(function(){e.balloon.isOpen()&&e.balloon.close()}));var r=new ymaps.GeoObjectCollection;i(".placemarks__item").each((function(){var t=i(this).find(".placemarks__balloon").text().trim(),e=[i(this).find(".placemarks__latitude").text().trim(),i(this).find(".placemarks__longitude").text().trim()],n=new ymaps.Placemark(e,{balloon:t},{iconLayout:"default#image",iconImageHref:"assets/images/placemark.svg",iconImageSize:[42,53],iconImageOffset:[-21,-53],balloonLayout:o,balloonPanelMaxMapArea:0,hideIconOnBalloonOpen:!1});r.add(n)})),e.geoObjects.add(r),e.setBounds(r.getBounds(),{zoomMargin:Math.max(42,53)})}})),i((function(){var t=new a.Z(i(".development__names")[0],{freeMode:!0,slidesPerView:"auto"});new a.Z(i(".development__desc")[0],{thumbs:{swiper:t}});t.update()}))}},n={};function a(t){var i=n[t];if(void 0!==i)return i.exports;var o=n[t]={exports:{}};return e[t].call(o.exports,o,o.exports,a),o.exports}a.m=e,t=[],a.O=(e,n,i,o)=>{if(!n){var r=1/0;for(l=0;l<t.length;l++){for(var[n,i,o]=t[l],s=!0,c=0;c<n.length;c++)(!1&o||r>=o)&&Object.keys(a.O).every((t=>a.O[t](n[c])))?n.splice(c--,1):(s=!1,o<r&&(r=o));s&&(t.splice(l--,1),e=i())}return e}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[n,i,o]},a.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return a.d(e,{a:e}),e},a.d=(t,e)=>{for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={143:0,532:0};a.O.j=e=>0===t[e];var e=(e,n)=>{var i,o,[r,s,c]=n,l=0;for(i in s)a.o(s,i)&&(a.m[i]=s[i]);if(c)var u=c(a);for(e&&e(n);l<r.length;l++)o=r[l],a.o(t,o)&&t[o]&&t[o][0](),t[r[l]]=0;return a.O(u)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})();var i=a.O(void 0,[45,532],(()=>a(168)));i=a.O(i)})();