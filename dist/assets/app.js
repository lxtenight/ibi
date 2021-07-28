(()=>{"use strict";var t,e={728:(t,e,a)=>{a(563);var o=a(638);o((function(){!function(){function t(){var t=[],e=o("[data-type=js-team-list]");o("[data-type=js-team-filter-tag]").each((function(){o(this).hasClass("active")&&(t[t.length]=o(this).attr("data-id"))})),console.log(t),o.ajax({method:"POST",url:window.location.href,data:{ajax:1,tags:t}}).done((function(t){e.html(t)}))}console.log("teamFilter"),o("[data-type=js-team-filter-tag]").on("click",(function(e){e.preventDefault(),o(this).toggleClass("active"),t()})),o("[data-type=js-team-filter-clear]").on("click",(function(e){e.preventDefault(),o("[data-type=js-team-filter-tag]").each((function(){o(this).hasClass("active")&&o(this).removeClass("active")})),t()}))}(),function(){var t=[];function e(){var e=o("[data-type=js-library-list]");o.ajax({method:"POST",url:window.location.href,data:{ajax:1,tags:t}}).done((function(t){e.html(t)}))}function a(e){for(var a=0;a<t.length;a++)if(t[a]===e)return!0;return!1}o(window).on("click",(function(n){if(0!==o(n.target).closest("[data-type=js-library-filter-tag]").length){var i=o(n.target).closest("[data-type=js-library-filter-tag]").data("id");a(i)?(t=t.filter((function(t){return t!==i})),o('[data-type=js-library-filter-tag][data-id="'.concat(i,'"]')).removeClass("active")):(t.push(i),o('[data-type=js-library-filter-tag][data-id="'.concat(i,'"]')).addClass("active")),e()}else 0!==o(n.target).closest("[data-type=js-library-filter-clear]").length&&(t=[],o("[data-type=js-library-filter-tag]").removeClass("active"),e())}))}(),function(){var t=[];function e(){var e=o("[data-type=js-event-list]");o.ajax({method:"POST",url:window.location.href,data:{ajax:1,tags:t}}).done((function(t){e.html(t)}))}function a(e){for(var a=0;a<t.length;a++)if(t[a]===e)return!0;return!1}o(window).on("click",(function(n){if(0!==o(n.target).closest("[data-type=js-event-filter-tag]").length){var i=o(n.target).closest("[data-type=js-event-filter-tag]").data("id");a(i)?(t=t.filter((function(t){return t!==i})),o('[data-type=js-event-filter-tag][data-id="'.concat(i,'"]')).removeClass("active")):(t.push(i),o('[data-type=js-event-filter-tag][data-id="'.concat(i,'"]')).addClass("active")),e()}else 0!==o(n.target).closest("[data-type=js-event-filter-clear]").length&&(t=[],o("[data-type=js-event-filter-tag]").removeClass("active"),e())}))}(),function(){function t(){console.log("bafFilter ajax");var t=[],e=o("[data-type=js-baf-list]");o("[data-type=js-baf-filter-tag]").each((function(){o(this).hasClass("active")&&(t[t.length]=o(this).attr("data-id"))})),console.log(t),o.ajax({method:"POST",url:window.location.href,data:{ajax:1,tags:t}}).done((function(t){e.html(t)}))}console.log("bafFilter"),o("[data-type=js-baf-filter-tag]").on("click",(function(e){e.preventDefault(),console.log("bafFilter click tag"),o(this).toggleClass("active"),t()})),o("[data-type=js-baf-filter-clear]").on("click",(function(e){console.log("bafFilter click tag"),e.preventDefault(),o("[data-type=js-baf-filter-tag]").each((function(){o(this).hasClass("active")&&o(this).removeClass("active")})),t()}))}(),function(){function t(){console.log("faqFilter ajax");var t=[],e=o("[data-type=js-faq-list]");o("[data-type=js-faq-filter-tag]").each((function(){o(this).hasClass("active")&&(t[t.length]=o(this).attr("data-id"))})),console.log(t),o.ajax({method:"POST",url:window.location.href,data:{ajax:1,tags:t}}).done((function(t){e.html(t)}))}console.log("faqFilter"),o("[data-type=js-faq-filter-tag]").on("click",(function(e){e.preventDefault(),console.log("faqFilter click tag"),o(this).toggleClass("active"),t()})),o("[data-type=js-faq-filter-clear]").on("click",(function(e){console.log("faqFilter click tag"),e.preventDefault(),o("[data-type=js-faq-filter-tag]").each((function(){o(this).hasClass("active")&&o(this).removeClass("active")})),t()}))}(),function(){function t(){console.log("publicFilter ajax");var t=[],e=o("[data-type=js-public-list]");o("[data-type=js-public-filter-tag]").each((function(){o(this).hasClass("active")&&(t[t.length]=o(this).attr("data-id"))})),console.log(t),o.ajax({method:"POST",url:window.location.href,data:{ajax:1,tags:t}}).done((function(t){e.html(t)}))}console.log("publicFilter"),o("[data-type=js-public-filter-tag]").on("click",(function(e){e.preventDefault(),console.log("publicFilter click tag"),o(this).toggleClass("active"),t()})),o("[data-type=js-public-filter-clear]").on("click",(function(e){console.log("publicFilter click tag"),e.preventDefault(),o("[data-type=js-public-filter-tag]").each((function(){o(this).hasClass("active")&&o(this).removeClass("active")})),t()}))}(),o(document).on("click","[data-type=show_more_click]",(function(t){var e=o(this),a=window.location.pathname.split("/"),n=e.attr("data-url"),i=e.attr("data-tags"),s=e.parents("[data-type-container=main-items-container]").find("[data-container=items]");console.log("show more"),i&&(i=JSON.parse(i)),n&&(e.remove(),o.ajax({method:"POST",url:n,data:{ajax:1,tags:i}}).done((function(t){var e=o(t).find("[data-type=show_more_click]"),n=o(t).find("[data-type=item]");if("library"==a[2]){var i=o(document).find("[data-container=items]");console.log(i),console.log(o(t)),i.append(o(t)),e&&i.after(e)}else if("events"==a[2]){var c=o(document).find("[data-container=items]");console.log(c),console.log(o(t)),c.append(o(t)),e&&c.after(e)}else s.append(n);e&&s.after(e),window.scroller.update()})))}))}));var n=a(566),i=(a(917),a(164)),s=a.n(i),c=a(660),r=a.n(c),l=a(638);function d(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var a=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null==a)return;var o,n,i=[],s=!0,c=!1;try{for(a=a.call(t);!(s=(o=a.next()).done)&&(i.push(o.value),!e||i.length!==e);s=!0);}catch(t){c=!0,n=t}finally{try{s||null==a.return||a.return()}finally{if(c)throw n}}return i}(t,e)||f(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,e){if(t){if("string"==typeof t)return u(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?u(t,e):void 0}}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,o=new Array(e);a<e;a++)o[a]=t[a];return o}function h(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?h(Object(a),!0).forEach((function(e){v(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function v(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var m,g=1280;l((function(){var t=l(".header");if(0!==t.length){var e={id:null,close:function(){l('[data-modal-id="'.concat(this.id,'"]')).removeAttr("data-modal-active"),l('[data-modal-button="'.concat(this.id,'"]')).removeAttr("data-modal-active")},open:function(){l('[data-modal-id="'.concat(this.id,'"]')).attr("data-modal-active",""),l('[data-modal-button="'.concat(this.id,'"]')).attr("data-modal-active","")},update:function(t){this.id=t},change:function(t){this.close(),this.update(t===this.id?null:t),this.open()}};l("[data-modal-button]").on("click",(function(){var a=l(this).data("modal-button");e.change(a),0!==t.find("[data-modal-active]").length?t.addClass("header--modal"):t.removeClass("header--modal")})),l(window).on("click",(function(a){0!==l(a.target).closest(".header__container").length&&!l(a.target).hasClass("header__container")||0!==l(a.target).closest("[data-modal-active]").length||(e.change(null),t.removeClass("header--modal"))})),window.matchMedia("(min-width: ".concat(g,"px)")).addListener((function(t){e.change(null)}))}})),l((function(){if(0!==l(".vacancy").length){var t=l(".vacancy-btn"),e=l(".modal-forms-vacancy"),a=l(".body");t.on("click",(function(){e.hasClass("vacancy--modal-open")?(e.removeClass("vacancy--modal-open"),a.removeClass("body-fixed")):(e.addClass("vacancy--modal-open"),a.addClass("body-fixed"))})),l(window).on("click",(function(o){e.hasClass("vacancy--modal-open")&&0===l(o.target).closest(t).length&&0===l(o.target).closest(".modal-forms__form").length&&(e.removeClass("vacancy--modal-open"),a.removeClass("body-fixed"))}))}})),l((function(){if(0!==l(".header").length){var t=l(".callback-button"),e=l(".modal-forms-header"),a=l(".body");t.on("click",(function(){e.hasClass("vacancy--modal-open")?(e.removeClass("vacancy--modal-open"),a.removeClass("body-fixed")):(e.addClass("vacancy--modal-open"),a.addClass("body-fixed"))})),l(window).on("click",(function(o){e.hasClass("vacancy--modal-open")&&0===l(o.target).closest(t).length&&0===l(o.target).closest(".modal-forms__form").length&&(e.removeClass("vacancy--modal-open"),a.removeClass("body-fixed"))}))}})),l((function(){var t=l("[data-tabs-id]");if(0!==t.length){var e=[];t.each((function(){var t=l(this).data("tabs-id");-1===e.indexOf(t)&&e.push(t)})),e.forEach((function(t){var e=l('[data-tabs-id="'.concat(t,'"][data-tabs-tab]')),a=l('[data-tabs-id="'.concat(t,'"][data-tabs-button]'));if(0!==e.length){var o={id:null,update:function(t){this.id=t},close:function(){e.filter('[data-tabs-tab="'.concat(this.id,'"]')).slideUp(500),a.filter('[data-tabs-button="'.concat(this.id,'"]')).removeAttr("data-tabs-active")},open:function(){e.filter('[data-tabs-tab="'.concat(this.id,'"]')).slideDown(500),a.filter('[data-tabs-button="'.concat(this.id,'"]')).attr("data-tabs-active","")},change:function(t){t&&t!==this.id&&(this.close(),this.update(t),this.open())},init:function(){var t=a.filter("[data-tabs-active]").data("tabs-button");this.update(t)}};o.init(),a.on("click",(function(){var t=l(this).data("tabs-button");o.change(t)}))}}))}})),l(window).on("load",(function(){var t=l("[data-slider-id]");0!==t.length&&t.each((function(){var t=l(this),e=t.data("slider-id"),a=t.data("slider-prev"),o=t.data("slider-next"),i=l('[data-slider-button="'.concat(a,'"]')),s=l('[data-slider-button="'.concat(o,'"]')),c={slidesPerView:"auto",spaceBetween:20,breakpoints:v({},g,{spaceBetween:40})};switch(e){case 1:case 2:c=p(p({},c),{},{loop:!0});break;case 3:c=p(p({},c),{},{breakpoints:v({},g,{spaceBetween:60})});break;case 4:c=p(p({},c),{},{allowTouchMove:!1});break;case 5:case 6:c=p(p({},c),{},{loop:!0});break;case 7:c=p(p({},c),{},{loop:!0,breakpoints:v({},g,{spaceBetween:100,allowTouchMove:!1})});break;case 8:c=p(p({},c),{},{loop:!0,centeredSlides:!0});break;case 20:c=p(p({},c),{},{spaceBetween:10,loop:!0,centeredSlides:!0,breakpoints:v({},g,{spaceBetween:40,allowTouchMove:!1,centeredSlides:!1})});break;case 21:c=p(p({},c),{},{allowTouchMove:!1});break;case 100:c=p(p({},c),{},{allowTouchMove:!1,autoHeight:!0,loop:!0});break;case 106:c=p({},c);break;case 105:c=p(p({},c),{},{autoHeight:!0,thumbs:{swiper:106}});break;case 140:case 150:c=p(p({},c),{},{loop:!0})}var r=new n.Z(t[0],c);i.on("click",(function(){r.slidePrev()})),s.on("click",(function(){r.slideNext()}))}))})),l((function(){if(0!==l(".sticky").length)new(r())(".sticky")})),l((function(){var t=l("[data-sticky-id]");0!==t.length&&t.each((function(){var t=l(this),e=t.data("sticky-id"),a=l('[data-sticky-end="'.concat(e,'"]')),o=t.data("sticky-top"),n=l(t).offset().top-o>=0?l(t).offset().top-o:0,i=t.data("sticky-bottom"),s=(0!==a.length?a.offset().top:l(document).height())-i-t.height()-o,c={isSticky:!1,isStickyPrev:!1,isChange:!1,init:function(){this.update(),this.isStickyPrev=this.isSticky,this.isChange=!1},update:function(){var t=window.pageYOffset;this.isStickyPrev=this.isSticky,this.isSticky=t>=n&&t<=s,this.isChange=this.isStickyPrev!==this.isSticky}};c.init(),l(window).on("scroll",(function(){c.update(),c.isChange&&(c.isSticky?t.css("position","fixed").css("top","".concat(o,"px")):t.css("position","").css("top",""))}))}))}));var b=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},y=function(t){for(var e=t,a=0;0!==e.length&&e[0]!==document.body;)a+=e[0].offsetTop,e=l(e[0].offsetParent);return a};l((function(){l(".my-sticky").each((function(){var t=l(this),e=t.data("my-sticky-bottom"),a=l(".footer");function o(){if(e){var t=l("#".concat(e)),o=y(t);n.bottom=b()-o+160}else n.bottom=a[0].offsetHeight+160}var n={top:140,bottom:null,startY:null,y:null,height:null,mode:null};o();var i=t.parent();i.css("position","relative");var s=t.clone();s.css("opacity",0),s.css("pointer-events","none"),s.css("position","absolute"),s.css("top","".concat(t[0].offsetTop,"px")),s.css("width","".concat(t[0].offsetWidth,"px")),i.append(s);var c=t.clone();function r(){o(),s.css("width","".concat(t[0].offsetWidth,"px")),c.css("width","".concat(t[0].offsetWidth,"px")),c.css("top","".concat(n.top,"px")),s.css("top","".concat(t[0].offsetTop,"px"));var e=y(s)+s.height(),a=b()-n.bottom;s.css("transform","\n\t\t\t\t\ttranslateY(".concat(a-e,"px)\t\n\t\t\t\t"));var i=l(window).scrollTop();switch(i<y(t)-n.top?n.mode="default":i+n.top<b()-n.bottom-c.height()?n.mode="fixed":n.mode="bottom",n.mode){case"fixed":console.log("fixed"),t.css("opacity",0),t.css("pointer-events","none"),s.css("opacity",0),s.css("pointer-events","none"),c.css("opacity",""),c.css("pointer-events","");break;case"bottom":console.log("bottom"),t.css("opacity",0),t.css("pointer-events","none"),c.css("opacity",0),c.css("pointer-events","none"),s.css("opacity",""),s.css("pointer-events","");break;default:console.log("default"),c.css("opacity",0),c.css("pointer-events","none"),s.css("opacity","0"),s.css("pointer-events","none"),t.css("opacity",""),t.css("pointer-events","")}}c.css("opacity",0),c.css("pointer-events","none"),c.css("position","fixed"),c.css("top","".concat(n.top,"px")),c.css("width","".concat(t[0].offsetWidth,"px")),i.append(c),r(),l(window).on("scroll",r),l(window).on("resize",r),m=r}))})),l((function(){var t=l(".mission__spoiler");t.each((function(){var e=l(this),a=e.data("spoiler-group");console.log(a);var o=e.find(".mission__spoiler-button"),n=e.find(".mission__spoiler-drop");o.on("click",(function(o){o.preventDefault(),a?t.filter('[data-spoiler-group="'.concat(a,'"]')).each((function(){var t=l(this),e=t.find(".mission__spoiler-drop");t.toggleClass("mission__spoiler--active"),e.slideToggle({progress:m})})):(e.toggleClass("mission__spoiler--active"),n.slideToggle({progress:m}))}))}))}));var _=function(t){return t[0].scrollTop/(t[0].scrollHeight-t[0].clientHeight)},w=function(t,e){requestAnimationFrame((function(){t.css("top","".concat(100*e,"%"))}))},C=function(t,e,a){return t<e?0:t>a?1:(t-e)/(a-e)};l((function(){l(".block").each((function(){var t=l(this),e=t.find(".block__scroll"),a=_(e),o=t.find(".block__scrollbar-thumb"),n=t.find(".block__slide--1"),i=t.find(".block__slide--2");w(o,a);var s=function(){!function(t,e,a,o){var n=C(e,a,o);requestAnimationFrame((function(){t.css("transform","translateY(-".concat(100*n,"%)")),t.css("opacity",1-n)}))}(n,a,.2,.75),function(t,e,a,o){var n=C(e,a,o);requestAnimationFrame((function(){t.css("transform","translateY(".concat(100*(1-n),"%)")),t.css("opacity",n)}))}(i,a,.25,.8)};s(),e.on("scroll",(function(){a=_(e),w(o,a),s()}))}))})),document.addEventListener("DOMContentLoaded",(function(){var t,e=document.querySelectorAll("input[data-tel-input]"),a=function(t){return t.value.replace(/\D/g,"")},o=function(t){var e=t.target,o=a(e),n=t.clipboardData||window.clipboardData;if(n){var i=n.getData("Text");if(/\D/g.test(i))return void(e.value=o)}},n=function(t){var e=t.target,o=a(e),n=e.selectionStart,i="";if(!o)return e.value="";if(e.value.length==n){if(["7","8","9"].indexOf(o[0])>-1){"9"==o[0]&&(o="7"+o);var s="8"==o[0]?"8":"+7";i=e.value=s+" ",o.length>1&&(i+="("+o.substring(1,4)),o.length>=5&&(i+=") "+o.substring(4,7)),o.length>=8&&(i+="-"+o.substring(7,9)),o.length>=10&&(i+="-"+o.substring(9,11))}else i="+"+o.substring(0,16);e.value=i}else t.data&&/\D/g.test(t.data)&&(e.value=o)},i=function(t){var e=t.target.value.replace(/\D/g,"");8==t.keyCode&&1==e.length&&(t.target.value="")},s=function(t,e){var a="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!a){if(Array.isArray(t)||(a=f(t))||e&&t&&"number"==typeof t.length){a&&(t=a);var o=0,n=function(){};return{s:n,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,c=!1;return{s:function(){a=a.call(t)},n:function(){var t=a.next();return s=t.done,t},e:function(t){c=!0,i=t},f:function(){try{s||null==a.return||a.return()}finally{if(c)throw i}}}}(e);try{for(s.s();!(t=s.n()).done;){var c=t.value;c.addEventListener("keydown",i),c.addEventListener("input",n,!1),c.addEventListener("paste",o,!1)}}catch(t){s.e(t)}finally{s.f()}})),ymaps.ready((function(){if(0!==l("#map").length){var t=new ymaps.Map("map",{center:[55.732433,37.616144],zoom:14,controls:[]}),e=ymaps.templateLayoutFactory.createClass(['<div class="balloon">','<div class="balloon__content">','<p class="balloon__text">',"{{properties.balloon}}","</p>","</div>",'<div class="balloon__arrow"></div>',"</div>"].join(""),{build:function(){this.constructor.superclass.build.call(this),this._$element=l(".balloon",this.getParentElement()),this.applyElementOffset()},onSublayoutSizeChange:function(){e.superclass.onSublayoutSizeChange.apply(this,arguments),this._isElement(this._$element)&&(this.applyElementOffset(),this.events.fire("shapechange"))},applyElementOffset:function(){this._$element.css({left:-this._$element[0].offsetWidth/2,top:-(this._$element[0].offsetHeight+62)})},getShape:function(){if(!this._isElement(this._$element))return e.superclass.getShape.call(this);var t=this._$element.position();return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([[t.left,t.top],[t.left+this._$element[0].offsetWidth,t.top+this._$element[0].offsetHeight]]))},_isElement:function(t){return t&&t[0]}});t.events.add("click",(function(){t.balloon.isOpen()&&t.balloon.close()}));var a=new ymaps.GeoObjectCollection;l(".placemarks__item").each((function(){var t=l(this).find(".placemarks__balloon").text().trim(),o=[l(this).find(".placemarks__latitude").text().trim(),l(this).find(".placemarks__longitude").text().trim()],n=new ymaps.Placemark(o,{balloon:t},{iconLayout:"default#image",iconImageHref:"assets/images/placemark.svg",iconImageSize:[70,62],iconImageOffset:[-35,-62],balloonLayout:e,balloonPanelMaxMapArea:0,hideIconOnBalloonOpen:!1});a.add(n)})),t.geoObjects.add(a),t.setBounds(a.getBounds(),{zoomMargin:Math.max(70,62)})}})),l((function(){var t=new n.Z(l(".development__names")[0],{freeMode:!0,slidesPerView:"auto"});new n.Z(l(".development__desc")[0],{thumbs:{swiper:t}});t.update()})),l((function(){var t="component";l(".".concat(t)).each((function(){var e=l(this),a=(e.find(".".concat(t,"__list")),e.find(".".concat(t,"__item"))),o={isMultiLine:!1};function n(t,e){return Math.abs(t-e)<1}function i(){var t=a.filter(":first"),e=a.filter(":last"),i=t.offset().top,s=e.offset().top;o.isMultiLine=!n(i,s),console.log(o)}i(),l(window).on("resize",i),a.on("click",(function(){var a=l(".".concat(t,"__item--active")),o=l(this),i=a.index(),s=o.index();if(i!==s){var c=i<s?"right":"left",r=a.offset().top,d=o.offset().top,f=a.offset().left,u=o.offset().left;if(n(r,d)){var h=function(){o.addClass("".concat(t,"__item--thumb")),v.remove()},p=Math.abs(f-u),v=document.createElement("div"),m=a.position().top+a.height(),g=a.position().left,b=a.width();v.style.cssText=["transform: ","translate(".concat(g,"px, ").concat(m,"px) "),"scaleX(".concat(b,") ")].join(""),v.classList.add("".concat(t,"__thumb")),e[0].append(v),a.removeClass("".concat(t,"__item--thumb"));var y=o.width(),_=(o.position().left,{FPS:60,DURATION:1e3,startTimestamp:performance.now(),time:null,progress:null});requestAnimationFrame((function t(){var e=performance.now();_.time=e-_.startTimestamp,_.progress=_.time/_.DURATION,_.progress>1&&(_.progress=1);var a=b+(y-b)*_.progress,o=g+p*_.progress*("right"===c?1:-1);v.style.cssText=["transform: ","translate(".concat(o,"px, ").concat(m,"px) "),"scaleX(".concat(a,") ")].join(""),_.progress<1?requestAnimationFrame(t):h()}))}else{e.width(),e.offset().left;if("right"===c);else;}}})),a.on("click",(function(){a.removeClass("".concat(t,"__item--active")),l(this).addClass("".concat(t,"__item--active"))}))}))})),l((function(){l(".tabs").each((function(){var t=l(this),e=t.find(".tabs__item"),a=t.find(".tabs__background");!function(){function t(){var t=0;function o(t){return t.offsetLeft+t.offsetWidth}e.each((function(){t=o(this)>t?o(this):t})),a.css("width","".concat(t,"px"))}t(),setTimeout(t,250);l(window).one("resize",(function e(){t(),setTimeout((function(){t(),l(window).one("resize",e)}),1e3/15)}))}(),e.on("click",(function(){var t=l(".tabs__item--active"),e=l(this);t[0]!==e[0]&&(t.removeClass("tabs__item--active"),e.addClass("tabs__item--active"),c(t,e))}));var o=d(function(){var t,e=document.createElement("div");function o(){var a=t[0].offsetTop+t[0].offsetHeight,o=t[0].offsetLeft,n=t[0].offsetWidth;e.style.transform="translate(".concat(o,"px, ").concat(a,"px) scaleX(").concat(n,")")}e.classList.add("tabs__thumb"),e.style.cssText="\n          position: absolute;\n          bottom: 100%;\n          left: 0;\n          transform-origin: left;\n\n          width: 1px;\n\n          transition: none;\n        ";function n(){o(),setTimeout((function(){o(),window.addEventListener("resize",n,{once:!0})}),1e3/15)}function i(){e.remove(),window.removeEventListener("resize",n)}return[function(s){i(),t=s,o(),a.append(e),window.addEventListener("resize",n,{once:!0})},i]}(),2),n=o[0];o[1];setTimeout((function(){n(t.find(".tabs__item--active"))}),250);var i,s,c=function(t,e){i=t,s=e,Math.abs(i[0].offsetTop-s[0].offsetTop)<1?console.log(1):console.log(2)}}))})),l((function(){l.fancybox.defaults.closeExisting=!0,l.fancybox.defaults.touch=!1,l("[data-fancy-button]").on("click",(function(t){t.preventDefault();var e=l(this).data("fancy-button"),a=l('[data-fancy-modal="'.concat(e,'"]'));l.fancybox.open(a)}))})),l((function(){l.fn.BeerSlider=function(t){return t=t||{},this.each((function(){new(s())(this,t)}))},l(".beer-slider").BeerSlider({start:35})})),l((function(){if(0!==l(".index").length){var t=function(){l(".swiper-slide").each((function(){var t=l(this),e=t.find(".index__mid-img"),a=t.find(".index__mid-description"),o=e.width();a.css("max-width",o)}))},e=30;t(),l(window).one("resize",(function a(){setTimeout((function(){t(),l(window).one("resize",a)}),1e3/e)}))}})),l((function(){l(".index__target").each((function(){for(var t=l(this),e=t.find(".index__target-background"),a=t.find(".index__target-text"),o=[{colorStart:{r:49,g:187,b:162},colorEnd:{r:60,g:196,b:209},textColor:{r:148,g:255,b:250}},{colorStart:{r:65,g:204,b:206},colorEnd:{r:46,g:125,b:230},textColor:{r:146,g:225,b:255}},{colorStart:{r:100,g:178,b:200},colorEnd:{r:47,g:230,b:186},textColor:{r:146,g:255,b:229}}],n=0,i=0,s=o.length,c=[],r=0;r<s;r++){var d={colorStart:{r:o[(r+1)%s].colorStart.r-o[r].colorStart.r,g:o[(r+1)%s].colorStart.g-o[r].colorStart.g,b:o[(r+1)%s].colorStart.b-o[r].colorStart.b},colorEnd:{r:o[(r+1)%s].colorEnd.r-o[r].colorEnd.r,g:o[(r+1)%s].colorEnd.g-o[r].colorEnd.g,b:o[(r+1)%s].colorEnd.b-o[r].colorEnd.b},textColor:{r:o[(r+1)%s].textColor.r-o[r].textColor.r,g:o[(r+1)%s].textColor.g-o[r].textColor.g,b:o[(r+1)%s].textColor.b-o[r].textColor.b}};c.push(d)}function f(){var t,r,l;t={r:o[i].colorStart.r+c[i].colorStart.r*n,g:o[i].colorStart.g+c[i].colorStart.g*n,b:o[i].colorStart.b+c[i].colorStart.b*n},r={r:o[i].colorEnd.r+c[i].colorEnd.r*n,g:o[i].colorEnd.g+c[i].colorEnd.g*n,b:o[i].colorEnd.b+c[i].colorEnd.b*n},l={r:o[i].textColor.r+c[i].textColor.r*n,g:o[i].textColor.g+c[i].textColor.g*n,b:o[i].textColor.b+c[i].textColor.b*n},e.css("background","linear-gradient(261.11deg, rgb(".concat(t.r,", ").concat(t.g,", ").concat(t.b,") 8.47%, rgb(").concat(r.r,", ").concat(r.g,", ").concat(r.b,") 93.81%)")),a.css("color","rgb(".concat(l.r,", ").concat(l.g,", ").concat(l.b,")")),(n+=.047619047619047616)>1&&(n-=1,i=(i+1)%s)}console.log(o,c),l(window).one("mousemove",(function t(){requestAnimationFrame(f),setTimeout((function(){l(window).one("mousemove",t)}),1e3/60)}))}))})),l((function(){var t=l(".header");if(0!==t.length){var e=l(window).scrollTop();l(window).on("scroll",(function(){var a=l(window).scrollTop();t.hasClass("header--modal")||(a<e?(t.removeClass("header--scroll--down"),t.addClass("header--scroll--up")):(t.removeClass("header--scroll--up"),t.addClass("header--scroll--down"))),a<1&&(t.removeClass("header--scroll--up"),t.removeClass("header--scroll--down")),a>=1?t.addClass("header--scroll"):t.removeClass("header--scroll"),e=a})),l(window).scrollTop()>=1&&(t.addClass("header--scroll--up"),t.addClass("header--scroll"))}})),l((function(){var t=l(".header-modal--mobile");if(0!==t.length){var e=t.find(".header-section__button");t.find(".header-section__dropdown");e.on("click",(function(){var t=l(this).closest(".header-section__item");t.hasClass("header-section__item--active")?(t.find(".header-section__dropdown").slideUp(500),t.removeClass("header-section__item--active")):(l(".header-section__item--active").find(".header-section__dropdown").slideUp(650),l(".header-section__item--active").removeClass("header-section__item--active"),t.find(".header-section__dropdown").slideDown(500),t.addClass("header-section__item--active"))})),t.find(".header-section__section").find(".header-section__section-button").on("click",(function(){var t=l(this).closest(".header-section__section");t.hasClass("header-section__section--active")?(t.find(".header-section__section-dropdown").slideUp(500),t.removeClass("header-section__section--active")):(l(".header-section__section--active").find(".header-section__section-dropdown").slideUp(650),l(".header-section__section--active").removeClass("header-section__section--active"),t.find(".header-section__section-dropdown").slideDown(500),t.addClass("header-section__section--active"))}))}})),l((function(){var t=l(".form");if(0!==t.length){var e=l(".response"),a=l(".response__btn");l(".form__btn").on("click",(function(a){a.preventDefault(),t.addClass("form--hidden"),e.addClass("response--active")})),a.on("click",(function(){t.removeClass("form--hidden"),e.removeClass("response--active")}))}}))}},a={};function o(t){var n=a[t];if(void 0!==n)return n.exports;var i=a[t]={exports:{}};return e[t].call(i.exports,i,i.exports,o),i.exports}o.m=e,t=[],o.O=(e,a,n,i)=>{if(!a){var s=1/0;for(l=0;l<t.length;l++){for(var[a,n,i]=t[l],c=!0,r=0;r<a.length;r++)(!1&i||s>=i)&&Object.keys(o.O).every((t=>o.O[t](a[r])))?a.splice(r--,1):(c=!1,i<s&&(s=i));c&&(t.splice(l--,1),e=n())}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[a,n,i]},o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var a in e)o.o(e,a)&&!o.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={143:0,532:0};o.O.j=e=>0===t[e];var e=(e,a)=>{var n,i,[s,c,r]=a,l=0;for(n in c)o.o(c,n)&&(o.m[n]=c[n]);if(r)var d=r(o);for(e&&e(a);l<s.length;l++)i=s[l],o.o(t,i)&&t[i]&&t[i][0](),t[s[l]]=0;return o.O(d)},a=self.webpackChunk=self.webpackChunk||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))})();var n=o.O(void 0,[812,532],(()=>o(728)));n=o.O(n)})();