(()=>{"use strict";var t,e={168:(t,e,n)=>{var a=n(566),i=(n(563),n(917),n(164)),o=n.n(i),s=n(638);function r(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var a=0,i=function(){};return{s:i,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,r=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return s=t.done,t},e:function(t){r=!0,o=t},f:function(){try{s||null==n.return||n.return()}finally{if(r)throw o}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d=1280;s((function(){if(0!==s(".header").length){var t={id:null,close:function(){s('[data-modal-id="'.concat(this.id,'"]')).removeAttr("data-modal-active"),s('[data-modal-button="'.concat(this.id,'"]')).removeAttr("data-modal-active")},open:function(){s('[data-modal-id="'.concat(this.id,'"]')).attr("data-modal-active",""),s('[data-modal-button="'.concat(this.id,'"]')).attr("data-modal-active","")},update:function(t){this.id=t},change:function(t){this.close(),this.update(t===this.id?null:t),this.open()}};s("[data-modal-button]").on("click",(function(){var e=s(this).data("modal-button");t.change(e)})),s(window).on("click",(function(e){0!==s(e.target).closest(".header__container").length&&!s(e.target).hasClass("header__container")||0!==s(e.target).closest("[data-modal-active]").length||t.change(null)})),window.matchMedia("(min-width: ".concat(d,"px)")).addListener((function(e){t.change(null)}))}})),s((function(){var t=s("[data-tabs-id]");if(0!==t.length){var e=[];t.each((function(){var t=s(this).data("tabs-id");-1===e.indexOf(t)&&e.push(t)})),e.forEach((function(t){var e=s('[data-tabs-id="'.concat(t,'"][data-tabs-tab]')),n=s('[data-tabs-id="'.concat(t,'"][data-tabs-button]'));if(0!==e.length){var a={id:null,update:function(t){this.id=t},close:function(){e.filter('[data-tabs-tab="'.concat(this.id,'"]')).slideUp(500),n.filter('[data-tabs-button="'.concat(this.id,'"]')).removeAttr("data-tabs-active")},open:function(){e.filter('[data-tabs-tab="'.concat(this.id,'"]')).slideDown(500),n.filter('[data-tabs-button="'.concat(this.id,'"]')).attr("data-tabs-active","")},change:function(t){t&&t!==this.id&&(this.close(),this.update(t),this.open())},init:function(){var t=n.filter("[data-tabs-active]").data("tabs-button");this.update(t)}};a.init(),n.on("click",(function(){var t=s(this).data("tabs-button");a.change(t)}))}}))}})),s(window).on("load",(function(){var t=s("[data-slider-id]");0!==t.length&&t.each((function(){var t=s(this),e=t.data("slider-id"),n=t.data("slider-prev"),i=t.data("slider-next"),o=s('[data-slider-button="'.concat(n,'"]')),r=s('[data-slider-button="'.concat(i,'"]')),c={slidesPerView:"auto",spaceBetween:20,breakpoints:u({},d,{spaceBetween:40})};switch(e){case 3:c=f(f({},c),{},{breakpoints:u({},d,{spaceBetween:60})});break;case 4:c=f(f({},c),{},{allowTouchMove:!1});break;case 7:c=f(f({},c),{},{breakpoints:u({},d,{spaceBetween:100,allowTouchMove:!1})});break;case 8:c=f(f({},c),{},{loop:!0,centeredSlides:!0});break;case 100:c=f(f({},c),{},{allowTouchMove:!1,autoHeight:!0,loop:!0});break;case 106:c=f({},c);break;case 105:c=f(f({},c),{},{autoHeight:!0,thumbs:{swiper:106}})}var l=new a.Z(t[0],c);o.on("click",(function(){l.slidePrev()})),r.on("click",(function(){l.slideNext()}))}))})),s((function(){var t=s("[data-sticky-id]");0!==t.length&&t.each((function(){var t=s(this),e=t.data("sticky-id"),n=s('[data-sticky-end="'.concat(e,'"]')),a=t.data("sticky-top"),i=s(t).offset().top-a>=0?s(t).offset().top-a:0,o=t.data("sticky-bottom"),r=(0!==n.length?n.offset().top:s(document).height())-o-t.height()-a,c={isSticky:!1,isStickyPrev:!1,isChange:!1,init:function(){this.update(),this.isStickyPrev=this.isSticky,this.isChange=!1},update:function(){var t=window.pageYOffset;this.isStickyPrev=this.isSticky,this.isSticky=t>=i&&t<=r,this.isChange=this.isStickyPrev!==this.isSticky}};c.init(),s(window).on("scroll",(function(){c.update(),c.isChange&&(c.isSticky?t.css("position","fixed").css("top","".concat(a,"px")):t.css("position","").css("top",""))}))}))})),s((function(){s(".mission__spoiler").each((function(){var t=s(this),e=t.find(".mission__spoiler-button"),n=t.find(".mission__spoiler-drop");e.on("click",(function(){t.toggleClass("mission__spoiler--active"),n.slideToggle()}))}))}));var h=function(t){return t[0].scrollTop/(t[0].scrollHeight-t[0].clientHeight)},p=function(t,e){requestAnimationFrame((function(){t.css("top","".concat(100*e,"%"))}))},m=function(t,e,n){return t<e?0:t>n?1:(t-e)/(n-e)};s((function(){s(".block").each((function(){var t=s(this),e=t.find(".block__scroll"),n=h(e),a=t.find(".block__scrollbar-thumb"),i=t.find(".block__slide--1"),o=t.find(".block__slide--2");p(a,n);var r=function(){!function(t,e,n,a){var i=m(e,n,a);requestAnimationFrame((function(){t.css("transform","translateY(-".concat(100*i,"%)")),t.css("opacity",1-i)}))}(i,n,.2,.75),function(t,e,n,a){var i=m(e,n,a);requestAnimationFrame((function(){t.css("transform","translateY(".concat(100*(1-i),"%)")),t.css("opacity",i)}))}(o,n,.25,.8)};r(),e.on("scroll",(function(){n=h(e),p(a,n),r()}))}))})),document.addEventListener("DOMContentLoaded",(function(){var t,e=document.querySelectorAll("input[data-tel-input]"),n=function(t){return t.value.replace(/\D/g,"")},a=function(t){var e=t.target,a=n(e),i=t.clipboardData||window.clipboardData;if(i){var o=i.getData("Text");if(/\D/g.test(o))return void(e.value=a)}},i=function(t){var e=t.target,a=n(e),i=e.selectionStart,o="";if(!a)return e.value="";if(e.value.length==i){if(["7","8","9"].indexOf(a[0])>-1){"9"==a[0]&&(a="7"+a);var s="8"==a[0]?"8":"+7";o=e.value=s+" ",a.length>1&&(o+="("+a.substring(1,4)),a.length>=5&&(o+=") "+a.substring(4,7)),a.length>=8&&(o+="-"+a.substring(7,9)),a.length>=10&&(o+="-"+a.substring(9,11))}else o="+"+a.substring(0,16);e.value=o}else t.data&&/\D/g.test(t.data)&&(e.value=a)},o=function(t){var e=t.target.value.replace(/\D/g,"");8==t.keyCode&&1==e.length&&(t.target.value="")},s=r(e);try{for(s.s();!(t=s.n()).done;){var c=t.value;c.addEventListener("keydown",o),c.addEventListener("input",i,!1),c.addEventListener("paste",a,!1)}}catch(t){s.e(t)}finally{s.f()}})),ymaps.ready((function(){if(0!==s("#map").length){var t=function(){a.matches?e.controls.add(n):e.controls.remove(n)},e=new ymaps.Map("map",{center:[55.732433,37.616144],zoom:14,controls:[]}),n=new ymaps.control.ZoomControl({options:{size:"small",position:{top:205,right:10}}}),a=window.matchMedia("(min-width: ".concat(MAIN_BREAKPOINT,"px)"));t(),a.addListener(t);var i=ymaps.templateLayoutFactory.createClass(['<div class="balloon">','<div class="balloon__content">','<p class="balloon__text">',"{{properties.balloon}}","</p>","</div>",'<div class="balloon__arrow"></div>',"</div>"].join(""),{build:function(){this.constructor.superclass.build.call(this),this._$element=s(".balloon",this.getParentElement()),this.applyElementOffset()},onSublayoutSizeChange:function(){i.superclass.onSublayoutSizeChange.apply(this,arguments),this._isElement(this._$element)&&(this.applyElementOffset(),this.events.fire("shapechange"))},applyElementOffset:function(){this._$element.css({left:-this._$element[0].offsetWidth/2,top:-(this._$element[0].offsetHeight+53)})},getShape:function(){if(!this._isElement(this._$element))return i.superclass.getShape.call(this);var t=this._$element.position();return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([[t.left,t.top],[t.left+this._$element[0].offsetWidth,t.top+this._$element[0].offsetHeight]]))},_isElement:function(t){return t&&t[0]}});e.events.add("click",(function(){e.balloon.isOpen()&&e.balloon.close()}));var o=new ymaps.GeoObjectCollection;s(".placemarks__item").each((function(){var t=s(this).find(".placemarks__balloon").text().trim(),e=[s(this).find(".placemarks__latitude").text().trim(),s(this).find(".placemarks__longitude").text().trim()],n=new ymaps.Placemark(e,{balloon:t},{iconLayout:"default#image",iconImageHref:"assets/images/placemark.svg",iconImageSize:[42,53],iconImageOffset:[-21,-53],balloonLayout:i,balloonPanelMaxMapArea:0,hideIconOnBalloonOpen:!1});o.add(n)})),e.geoObjects.add(o),e.setBounds(o.getBounds(),{zoomMargin:Math.max(42,53)})}})),s((function(){var t=new a.Z(s(".development__names")[0],{freeMode:!0,slidesPerView:"auto"});new a.Z(s(".development__desc")[0],{thumbs:{swiper:t}});t.update()})),s((function(){var t="component";s(".".concat(t)).each((function(){var e=s(this),n=(e.find(".".concat(t,"__list")),e.find(".".concat(t,"__item"))),a={isMultiLine:!1};function i(t,e){return Math.abs(t-e)<1}function o(){var t=n.filter(":first"),e=n.filter(":last"),o=t.offset().top,s=e.offset().top;a.isMultiLine=!i(o,s),console.log(a)}o(),s(window).on("resize",o),n.on("click",(function(){var n=s(".".concat(t,"__item--active")),a=s(this),o=n.index(),r=a.index();if(o!==r){var c=o<r?"right":"left",l=n.offset().top,f=a.offset().top,u=n.offset().left,d=a.offset().left;if(i(l,f)){var h=function(){a.addClass("".concat(t,"__item--thumb")),m.remove()},p=Math.abs(u-d),m=document.createElement("div"),v=n.position().top+n.height(),b=n.position().left,g=n.width();m.style.cssText=["transform: ","translate(".concat(b,"px, ").concat(v,"px) "),"scaleX(".concat(g,") ")].join(""),m.classList.add("".concat(t,"__thumb")),e[0].append(m),n.removeClass("".concat(t,"__item--thumb"));var y=a.width(),_=(a.position().left,{FPS:60,DURATION:1e3,startTimestamp:performance.now(),time:null,progress:null});requestAnimationFrame((function t(){var e=performance.now();_.time=e-_.startTimestamp,_.progress=_.time/_.DURATION,_.progress>1&&(_.progress=1);var n=g+(y-g)*_.progress,a=b+p*_.progress*("right"===c?1:-1);m.style.cssText=["transform: ","translate(".concat(a,"px, ").concat(v,"px) "),"scaleX(".concat(n,") ")].join(""),_.progress<1?requestAnimationFrame(t):h()}))}else{e.width(),e.offset().left;if("right"===c);else;}}})),n.on("click",(function(){n.removeClass("".concat(t,"__item--active")),s(this).addClass("".concat(t,"__item--active"))}))}))})),s((function(){s(".tabs").each((function(){var t=s(this),e=t.find(".tabs__item"),n=t.find(".tabs__background"),a=function(){var t=0;e.each((function(){var e=s(this)[0].offsetLeft+s(this)[0].offsetWidth;e>t&&(t=e)})),n.css("width","".concat(t,"px"))};a(),setTimeout(a,200);var i,o,r=15;s(window).one("resize",(function t(){a(),setTimeout((function(){a(),s(window).one("resize",t)}),1e3/r)})),e.on("click",(function(){var t,e,n=s(".tabs__item--active"),a=s(this);n[0]!==a[0]&&(n.removeClass("tabs__item--active"),a.addClass("tabs__item--active"),function(t,e){console.log(t,e)}(n,a),t=n,e=a,o(),i(e),Math.abs(t[0].offsetTop-e[0].offsetTop)<1||console.log("на разных строках"))}));var c=function(t){var e=t[0],n=e.offsetTop+e.offsetHeight,a=e.offsetLeft,i=e.offsetWidth;f.style.transform="translate(".concat(a,"px, ").concat(n,"px) scaleX(").concat(i,")")},l=function e(){c(t.find(".tabs__item--active")),setTimeout((function(){c(t.find(".tabs__item--active")),window.addEventListener("resize",e,{once:!0})}),1e3/u)},f=document.createElement("div");f.classList.add("tabs__thumb"),f.style.cssText="\n          position: absolute;\n          bottom: 100%;\n          left: 0;\n          transform-origin: left;\n\n          width: 1px;\n\n          transition: none;\n        ";var u=15;i=function(t){c(t),n.append(f),window.addEventListener("resize",l,{once:!0})},o=function(){f.remove(),window.removeEventListener("resize",l)},setTimeout((function(){i(s(".tabs__item--active"))}),200)}))})),s((function(){s.fancybox.defaults.closeExisting=!0,s("[data-fancy-button]").on("click",(function(t){t.preventDefault();var e=s(this).data("fancy-button"),n=s('[data-fancy-modal="'.concat(e,'"]'));s.fancybox.open(n)}))})),s((function(){s.fn.BeerSlider=function(t){return t=t||{},this.each((function(){new(o())(this,t)}))},s(".beer-slider").BeerSlider({start:35})}))}},n={};function a(t){var i=n[t];if(void 0!==i)return i.exports;var o=n[t]={exports:{}};return e[t].call(o.exports,o,o.exports,a),o.exports}a.m=e,t=[],a.O=(e,n,i,o)=>{if(!n){var s=1/0;for(l=0;l<t.length;l++){for(var[n,i,o]=t[l],r=!0,c=0;c<n.length;c++)(!1&o||s>=o)&&Object.keys(a.O).every((t=>a.O[t](n[c])))?n.splice(c--,1):(r=!1,o<s&&(s=o));r&&(t.splice(l--,1),e=i())}return e}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[n,i,o]},a.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return a.d(e,{a:e}),e},a.d=(t,e)=>{for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={143:0,532:0};a.O.j=e=>0===t[e];var e=(e,n)=>{var i,o,[s,r,c]=n,l=0;for(i in r)a.o(r,i)&&(a.m[i]=r[i]);if(c)var f=c(a);for(e&&e(n);l<s.length;l++)o=s[l],a.o(t,o)&&t[o]&&t[o][0](),t[s[l]]=0;return a.O(f)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})();var i=a.O(void 0,[511,532],(()=>a(168)));i=a.O(i)})();