!function(){"use strict";var t,e={728:function(t,e,a){var o=a(563),n=a.n(o),i=a(638);i((function(){!function(){var t=[];function e(){var e=i("[data-type=js-team-list]");i.ajax({method:"POST",url:window.location.href,data:{ajax:1,tags:t}}).done((function(t){e.html(t)}))}function a(e){for(var a=0;a<t.length;a++)if(t[a]===e)return!0;return!1}i(window).on("click",(function(o){if(0!==i(o.target).closest("[data-type=js-team-filter-tag]").length){var n=i(o.target).closest("[data-type=js-team-filter-tag]").data("id");a(n)?(t=t.filter((function(t){return t!==n})),i('[data-type=js-team-filter-tag][data-id="'.concat(n,'"]')).removeClass("team-filter__item--active")):(t.push(n),i('[data-type=js-team-filter-tag][data-id="'.concat(n,'"]')).addClass("team-filter__item--active")),e()}else 0!==i(o.target).closest("[data-type=js-team-filter-clear]").length&&(t=[],i("[data-type=js-team-filter-tag]").removeClass("team-filter__item--active"),e())}))}(),function(){var t=[];function e(){var e=i("[data-type=js-library-list]");i.ajax({method:"POST",url:window.location.href,data:{ajax:1,tags:t}}).done((function(t){e.html(t)}))}function a(e){for(var a=0;a<t.length;a++)if(t[a]===e)return!0;return!1}i(window).on("click",(function(o){if(0!==i(o.target).closest("[data-type=js-library-filter-tag]").length){var n=i(o.target).closest("[data-type=js-library-filter-tag]").data("id");a(n)?(t=t.filter((function(t){return t!==n})),i('[data-type=js-library-filter-tag][data-id="'.concat(n,'"]')).removeClass("team-filter__item--active")):(t.push(n),i('[data-type=js-library-filter-tag][data-id="'.concat(n,'"]')).addClass("team-filter__item--active")),e()}else 0!==i(o.target).closest("[data-type=js-library-filter-clear]").length&&(t=[],i("[data-type=js-library-filter-tag]").removeClass("team-filter__item--active"),e())}))}(),function(){var t=[];function e(){var e=i("[data-type=js-event-list]");i.ajax({method:"POST",url:window.location.href,data:{ajax:1,tags:t}}).done((function(t){e.html(t)}))}function a(e){for(var a=0;a<t.length;a++)if(t[a]===e)return!0;return!1}i(window).on("click",(function(o){if(0!==i(o.target).closest("[data-type=js-event-filter-tag]").length){var n=i(o.target).closest("[data-type=js-event-filter-tag]").data("id");a(n)?(t=t.filter((function(t){return t!==n})),i('[data-type=js-event-filter-tag][data-id="'.concat(n,'"]')).removeClass("team-filter__item--active")):(t.push(n),i('[data-type=js-event-filter-tag][data-id="'.concat(n,'"]')).addClass("team-filter__item--active")),e()}else 0!==i(o.target).closest("[data-type=js-event-filter-clear]").length&&(t=[],i("[data-type=js-event-filter-tag]").removeClass("team-filter__item--active"),e())}))}(),function(){function t(){console.log("bafFilter ajax");var t=[],e=i("[data-type=js-baf-list]");i("[data-type=js-baf-filter-tag]").each((function(){i(this).hasClass("team-filter__item--active")&&(t[t.length]=i(this).attr("data-id"))})),console.log(t),i.ajax({method:"POST",url:window.location.href,data:{ajax:1,tags:t}}).done((function(t){e.html(t)}))}console.log("bafFilter"),i("[data-type=js-baf-filter-tag]").on("click",(function(e){e.preventDefault(),console.log("bafFilter click tag"),i(this).toggleClass("team-filter__item--active"),t()})),i("[data-type=js-baf-filter-clear]").on("click",(function(e){console.log("bafFilter click tag"),e.preventDefault(),i("[data-type=js-baf-filter-tag]").each((function(){i(this).hasClass("team-filter__item--active")&&i(this).removeClass("team-filter__item--active")})),t()}))}(),function(){function t(){console.log("faqFilter ajax");var t=[],e=i("[data-type=js-faq-list]");i("[data-type=js-faq-filter-tag]").each((function(){i(this).hasClass("team-filter__item--active")&&(t[t.length]=i(this).attr("data-id"))})),console.log(t),i.ajax({method:"POST",url:window.location.href,data:{ajax:1,tags:t}}).done((function(t){e.html(t)}))}console.log("faqFilter"),i("[data-type=js-faq-filter-tag]").on("click",(function(e){e.preventDefault(),console.log("faqFilter click tag"),i(this).toggleClass("team-filter__item--active"),t()})),i("[data-type=js-faq-filter-clear]").on("click",(function(e){console.log("faqFilter click tag"),e.preventDefault(),i("[data-type=js-faq-filter-tag]").each((function(){i(this).hasClass("team-filter__item--active")&&i(this).removeClass("team-filter__item--active")})),t()}))}(),function(){var t=[],e=[];function a(){var a=i("[data-type=js-public-list]");console.log(t),console.log(e),i.ajax({method:"POST",url:window.location.href,data:{ajax:1,tags:t,authors:e}}).done((function(t){a.html(t)}))}function o(e){for(var a=0;a<t.length;a++)if(t[a]===e)return!0;return!1}i(window).on("click",(function(e){if(0!==i(e.target).closest("[data-type=js-public-filter-tag]").length){var n=i(e.target).closest("[data-type=js-public-filter-tag]").data("id");o(n)?(t=t.filter((function(t){return t!==n})),i('[data-type=js-public-filter-tag][data-id="'.concat(n,'"]')).removeClass("team-filter__item--active")):(t.push(n),i('[data-type=js-public-filter-tag][data-id="'.concat(n,'"]')).addClass("team-filter__item--active")),a()}else 0!==i(e.target).closest("[data-type=js-public-filter-clear]").length&&(t=[],i("[data-type=js-public-filter-tag]").removeClass("team-filter__item--active"),a())})),i(window).on("click",(function(t){if(0!==i(t.target).closest("[data-type=js-public-filter-authors]").length){var n=i(t.target).closest("[data-type=js-public-filter-authors]"),s=n.data("id"),r=n.data("key");s&&(s=JSON.parse(s),console.log(s)),console.log(s),o(s)?(e=e.filter((function(t){return t!==s})),i('[data-type=js-public-filter-authors][data-key="'.concat(r,'"]')).removeClass("articles-authors__item--active")):(e.push(s),i('[data-type=js-public-filter-authors][data-key="'.concat(r,'"]')).addClass("articles-authors__item--active")),a()}else 0!==i(t.target).closest("[data-type=js-public-filter-clear]").length&&(e=[],i("[data-type=js-public-filter-authors]").removeClass("articles-authors__item--active"),a())}))}(),i(document).on("click","[data-type=show_more_click]",(function(t){var e=i(this),a=window.location.pathname.split("/"),o=e.attr("data-url"),n=e.attr("data-tags"),s=e.parents("[data-type-container=main-items-container]").find("[data-container=items]");console.log("show more"),n&&(n=JSON.parse(n)),o&&(e.remove(),i.ajax({method:"POST",url:o,data:{ajax:1,tags:n}}).done((function(t){var e=i(t).find("[data-type=show_more_click]"),o=i(t).find("[data-type=item]");if("library"==a[2]){var n=i(document).find("[data-container=items]");console.log(n),console.log(i(t)),n.append(i(t)),e&&n.after(e)}else if("events"==a[2]){var r=i(document).find("[data-container=items]");console.log(r),console.log(i(t)),r.append(i(t)),e&&r.after(e)}else if("publications"==a[1]){var c=i(document).find("[data-container=items]");console.log(c),console.log(i(t)),c.append(i(t)),e&&c.after(e)}else s.append(o);e&&s.after(e),window.scroller.update()})))})),console.log("services Section Filter Types"),i("[data-type=js-sec-serv-filter-tag]").on("click",(function(t){t.preventDefault(),i("[data-type=js-sec-serv-filter-tag]").each((function(){i(this).hasClass("development__names-item--active")&&i(this).removeClass("development__names-item--active")})),console.log("click Section Filter Types"),i(this).addClass("development__names-item--active");var e=i(".development__names-item--active").html();i("[data-type=item-filter-serv-types]").each((function(){var t=i(this).attr("data-tag");e==t?i(this).css("display","block"):i(this).css("display","none")}))})),i(document).on("submit","[data-type=js-form]",(function(t){console.log("form feedback"),t.preventDefault();var e=i(this),a=e.siblings("[data-type=form-response]"),o=e.attr("data-url"),n=e.attr("data-event-type"),s="application/x-www-form-urlencoded; charset=UTF-8",r=!0,c=[],l=[],d={};if(console.log(n),"FILE"==n){console.log("- if FILE -"),d=new FormData,s=!1,r=!1;var f=e.find("[data-type=file]").prop("files")[0];console.log(f),d.append("file",f),i("[data-type=tooth]").each((function(){i(this).hasClass("tooth-button--destroyed")&&c.push(i(this).attr("data-tooth-id")),i(this).hasClass("tooth-button--removed")&&l.push(i(this).attr("data-tooth-id"))})),d.append("UF_DESTROYED",c),d.append("UF_REMOVED",l)}e.find("[data-type=get-field]").each((function(){var t=i(this).attr("data-uf"),e=i(this).val();"FILE"==n?d.append(t,e):d[t]=e})),console.log(d),i.ajax({type:"POST",url:o,dataType:"json",contentType:s,processData:r,data:d,success:function(t){!0===t.success&&(e.addClass("form--hidden"),a.addClass("response--active"))}})}))}));var s=a(566),r=(a(917),a(164)),c=a.n(r),l=a(660),d=a.n(l),f=a(638);function u(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var a=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null==a)return;var o,n,i=[],s=!0,r=!1;try{for(a=a.call(t);!(s=(o=a.next()).done)&&(i.push(o.value),!e||i.length!==e);s=!0);}catch(t){r=!0,n=t}finally{try{s||null==a.return||a.return()}finally{if(r)throw n}}return i}(t,e)||p(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,e){if(t){if("string"==typeof t)return h(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?h(t,e):void 0}}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,o=new Array(e);a<e;a++)o[a]=t[a];return o}function m(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function v(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?m(Object(a),!0).forEach((function(e){g(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function g(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var b,y=1280;f((function(){var t=f(".header");if(0!==t.length){var e={id:null,close:function(){f('[data-modal-id="'.concat(this.id,'"]')).removeAttr("data-modal-active"),f('[data-modal-button="'.concat(this.id,'"]')).removeAttr("data-modal-active")},open:function(){f('[data-modal-id="'.concat(this.id,'"]')).attr("data-modal-active",""),f('[data-modal-button="'.concat(this.id,'"]')).attr("data-modal-active","")},update:function(t){this.id=t},change:function(t){this.close(),this.update(t===this.id?null:t),this.open()}};f("[data-modal-button]").on("click mouseenter",(function(){var a=f(this).data("modal-button");e.change(a),0!==t.find("[data-modal-active]").length?t.addClass("header--modal"):t.removeClass("header--modal")})),f(window).on("click",(function(a){0!==f(a.target).closest(".header__container").length&&!f(a.target).hasClass("header__container")||0!==f(a.target).closest("[data-modal-active]").length||(e.change(null),t.removeClass("header--modal"))})),window.matchMedia("(min-width: ".concat(y,"px)")).addListener((function(t){e.change(null)}))}})),f((function(){if(0!==f(".vacancy").length){var t=f(".vacancy-btn"),e=f(".modal-forms-vacancy"),a=f(".body");t.on("click",(function(){e.hasClass("vacancy--modal-open")?(e.removeClass("vacancy--modal-open"),a.removeClass("body-fixed")):e.addClass("vacancy--modal-open")})),f(window).on("click",(function(o){e.hasClass("vacancy--modal-open")&&0===f(o.target).closest(t).length&&0===f(o.target).closest(".modal-forms__form").length&&(e.removeClass("vacancy--modal-open"),a.removeClass("body-fixed"))}))}})),f((function(){if(0!==f(".header").length){var t=f(".callback-button"),e=f(".modal-forms-header"),a=f(".body");t.on("click",(function(){e.hasClass("vacancy--modal-open")?(e.removeClass("vacancy--modal-open"),a.removeClass("body-fixed")):(e.addClass("vacancy--modal-open"),a.addClass("body-fixed"))})),f(window).on("click",(function(o){e.hasClass("vacancy--modal-open")&&0===f(o.target).closest(t).length&&0===f(o.target).closest(".modal-forms__form").length&&(e.removeClass("vacancy--modal-open"),a.removeClass("body-fixed"))}))}})),f((function(){var t=f("[data-tabs-id]");if(0!==t.length){var e=[];t.each((function(){var t=f(this).data("tabs-id");-1===e.indexOf(t)&&e.push(t)})),e.forEach((function(t){var e=f('[data-tabs-id="'.concat(t,'"][data-tabs-tab]')),a=f('[data-tabs-id="'.concat(t,'"][data-tabs-button]'));if(0!==e.length){var o={id:null,update:function(t){this.id=t},close:function(){e.filter('[data-tabs-tab="'.concat(this.id,'"]')).slideUp(500),a.filter('[data-tabs-button="'.concat(this.id,'"]')).removeAttr("data-tabs-active")},open:function(){e.filter('[data-tabs-tab="'.concat(this.id,'"]')).slideDown(500),a.filter('[data-tabs-button="'.concat(this.id,'"]')).attr("data-tabs-active","")},change:function(t){t&&t!==this.id&&(this.close(),this.update(t),this.open())},init:function(){var t=a.filter("[data-tabs-active]").data("tabs-button");this.update(t)}};o.init(),a.on("click mouseenter",(function(){var t=f(this).data("tabs-button");o.change(t)}))}}))}})),f(window).on("load",(function(){var t=f("[data-slider-id]");0!==t.length&&t.each((function(){var t=f(this),e=t.data("slider-id"),a=t.data("slider-prev"),o=t.data("slider-next"),n=f('[data-slider-button="'.concat(a,'"]')),i=f('[data-slider-button="'.concat(o,'"]')),r={slidesPerView:"auto",spaceBetween:20,breakpoints:g({},y,{spaceBetween:40})};switch(e){case 1:case 2:r=v(v({},r),{},{loop:!0});break;case 3:r=v(v({},r),{},{loop:!0,breakpoints:g({},y,{spaceBetween:60})});break;case 4:r=v(v({},r),{},{loop:!0,allowTouchMove:!1});break;case 5:case 6:r=v(v({},r),{},{loop:!0});break;case 7:r=v(v({},r),{},{loop:!0,breakpoints:g({},y,{spaceBetween:100,allowTouchMove:!1})});break;case 8:r=v(v({},r),{},{loop:!0,centeredSlides:!0});break;case 20:r=v(v({},r),{},{spaceBetween:10,loop:!0,centeredSlides:!0,breakpoints:g({},y,{spaceBetween:40,allowTouchMove:!1,centeredSlides:!1})});break;case 21:r=v(v({},r),{},{allowTouchMove:!1});break;case 100:r=v(v({},r),{},{allowTouchMove:!1,autoHeight:!0,loop:!0});break;case 106:r=v({},r);break;case 105:r=v(v({},r),{},{autoHeight:!0,thumbs:{swiper:106}});break;case 140:r=v(v({},r),{},{loop:!0});break;case 160:r=v(v({},r),{},{spaceBetween:20,breakpoints:g({},y,{spaceBetween:40})})}var c=new s.Z(t[0],r);n.on("click",(function(){c.slidePrev()})),i.on("click",(function(){c.slideNext()}))}))})),f((function(){if(0!==f(".sticky").length)new(d())(".sticky")})),f((function(){var t=f("[data-sticky-id]");0!==t.length&&t.each((function(){var t=f(this),e=t.data("sticky-id"),a=f('[data-sticky-end="'.concat(e,'"]')),o=t.data("sticky-top"),n=f(t).offset().top-o>=0?f(t).offset().top-o:0,i=t.data("sticky-bottom"),s=(0!==a.length?a.offset().top:f(document).height())-i-t.height()-o,r={isSticky:!1,isStickyPrev:!1,isChange:!1,init:function(){this.update(),this.isStickyPrev=this.isSticky,this.isChange=!1},update:function(){var t=window.pageYOffset;this.isStickyPrev=this.isSticky,this.isSticky=t>=n&&t<=s,this.isChange=this.isStickyPrev!==this.isSticky}};r.init(),f(window).on("scroll",(function(){r.update(),r.isChange&&(r.isSticky?t.css("position","fixed").css("top","".concat(o,"px")):t.css("position","").css("top",""))}))}))}));{function _(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)}function w(t){for(var e=t,a=0;0!==e.length&&e[0]!==document.body;)a+=e[0].offsetTop,e=f(e[0].offsetParent);return a}f((function(){f(".my-sticky").each((function(){var t=f(this),e=t.data("my-sticky-bottom"),a=f(".footer");function o(){if(e){var t=w(f("#".concat(e)));n.bottom=_()-t+160}else n.bottom=a[0].offsetHeight+160}var n={top:140,bottom:null,startY:null,y:null,height:null,mode:null};o();var i=t.parent();i.css("position","relative");var s=t.clone();s.css("opacity",0),s.css("pointer-events","none"),s.css("position","absolute"),s.css("top","".concat(t[0].offsetTop,"px")),s.css("width","".concat(t[0].offsetWidth,"px")),i.append(s);var r=t.clone();function c(){o(),s.css("width","".concat(t[0].offsetWidth,"px")),r.css("width","".concat(t[0].offsetWidth,"px")),r.css("top","".concat(n.top,"px")),s.css("top","".concat(t[0].offsetTop,"px"));var e=w(s)+s.height(),a=_()-n.bottom;s.css("transform","\n\t\t\t\t\ttranslateY(".concat(a-e,"px)\t\n\t\t\t\t"));var i=f(window).scrollTop();switch(i<w(t)-n.top?n.mode="default":i+n.top<_()-n.bottom-r.height()?n.mode="fixed":n.mode="bottom",n.mode){case"fixed":console.log("fixed"),t.css("opacity",0),t.css("pointer-events","none"),s.css("opacity",0),s.css("pointer-events","none"),r.css("opacity",""),r.css("pointer-events","");break;case"bottom":console.log("bottom"),t.css("opacity",0),t.css("pointer-events","none"),r.css("opacity",0),r.css("pointer-events","none"),s.css("opacity",""),s.css("pointer-events","");break;default:console.log("default"),r.css("opacity",0),r.css("pointer-events","none"),s.css("opacity","0"),s.css("pointer-events","none"),t.css("opacity",""),t.css("pointer-events","")}}r.css("opacity",0),r.css("pointer-events","none"),r.css("position","fixed"),r.css("top","".concat(n.top,"px")),r.css("width","".concat(t[0].offsetWidth,"px")),i.append(r),c(),f(window).on("scroll",c),f(window).on("resize",c),b=c}))}))}f((function(){var t=f(".mission__spoiler");t.each((function(){var e=f(this),a=e.data("spoiler-group");console.log(a);var o=e.find(".mission__spoiler-button"),n=e.find(".mission__spoiler-drop");o.on("click",(function(o){o.preventDefault(),a?t.filter('[data-spoiler-group="'.concat(a,'"]')).each((function(){var t=f(this),e=t.find(".mission__spoiler-drop");t.toggleClass("mission__spoiler--active"),e.slideToggle({progress:b})})):(e.toggleClass("mission__spoiler--active"),n.slideToggle({progress:b}))}))}))}));{function C(t){return t[0].scrollTop/(t[0].scrollHeight-t[0].clientHeight)}function k(t,e){requestAnimationFrame((function(){t.css("top","".concat(100*e,"%"))}))}function x(t,e,a){return t<e?0:t>a?1:(t-e)/(a-e)}f((function(){f(".block").each((function(){var t=f(this),e=t.find(".block__scroll"),a=C(e),o=t.find(".block__scrollbar-thumb"),n=t.find(".block__slide--1"),i=t.find(".block__slide--2");k(o,a);var s=function(){!function(t,e,a,o){var n=x(e,a,o);requestAnimationFrame((function(){t.css("transform","translateY(-".concat(100*n,"%)")),t.css("opacity",1-n)}))}(n,a,.2,.75),function(t,e,a,o){var n=x(e,a,o);requestAnimationFrame((function(){t.css("transform","translateY(".concat(100*(1-n),"%)")),t.css("opacity",n)}))}(i,a,.25,.8)};s(),e.on("scroll",(function(){a=C(e),k(o,a),s()}))}))}))}document.addEventListener("DOMContentLoaded",(function(){var t,e=document.querySelectorAll("input[data-tel-input]"),a=function(t){return t.value.replace(/\D/g,"")},o=function(t){var e=t.target,o=a(e),n=t.clipboardData||window.clipboardData;if(n){var i=n.getData("Text");if(/\D/g.test(i))return void(e.value=o)}},n=function(t){var e=t.target,o=a(e),n=e.selectionStart,i="";if(!o)return e.value="";if(e.value.length==n){if(["7","8","9"].indexOf(o[0])>-1){"9"==o[0]&&(o="7"+o);var s="8"==o[0]?"8":"+7";i=e.value=s+" ",o.length>1&&(i+="("+o.substring(1,4)),o.length>=5&&(i+=") "+o.substring(4,7)),o.length>=8&&(i+="-"+o.substring(7,9)),o.length>=10&&(i+="-"+o.substring(9,11))}else i="+"+o.substring(0,16);e.value=i}else t.data&&/\D/g.test(t.data)&&(e.value=o)},i=function(t){var e=t.target.value.replace(/\D/g,"");8==t.keyCode&&1==e.length&&(t.target.value="")},s=function(t,e){var a="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!a){if(Array.isArray(t)||(a=p(t))||e&&t&&"number"==typeof t.length){a&&(t=a);var o=0,n=function(){};return{s:n,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,r=!1;return{s:function(){a=a.call(t)},n:function(){var t=a.next();return s=t.done,t},e:function(t){r=!0,i=t},f:function(){try{s||null==a.return||a.return()}finally{if(r)throw i}}}}(e);try{for(s.s();!(t=s.n()).done;){var r=t.value;r.addEventListener("keydown",i),r.addEventListener("input",n,!1),r.addEventListener("paste",o,!1)}}catch(t){s.e(t)}finally{s.f()}})),ymaps.ready((function(){if(0!==f("#map").length){var t=new ymaps.Map("map",{center:[55.732433,37.616144],zoom:14,controls:[]},{maxZoom:22}),e=new ymaps.control.ZoomControl({options:{size:"small",position:{top:205,right:10}}}),a=window.matchMedia("(min-width: ".concat(y,"px)"));function o(){a.matches?t.controls.add(e):t.controls.remove(e)}o(),a.addListener(o);var n=ymaps.templateLayoutFactory.createClass(['<div class="balloon">','<div class="balloon__content">','<p class="balloon__text">',"{{properties.balloon}}","</p>","</div>",'<div class="balloon__arrow"></div>',"</div>"].join(""),{build:function(){this.constructor.superclass.build.call(this),this._$element=f(".balloon",this.getParentElement()),this.applyElementOffset()},onSublayoutSizeChange:function(){n.superclass.onSublayoutSizeChange.apply(this,arguments),this._isElement(this._$element)&&(this.applyElementOffset(),this.events.fire("shapechange"))},applyElementOffset:function(){this._$element.css({left:-this._$element[0].offsetWidth/2,top:-(this._$element[0].offsetHeight+62)})},getShape:function(){if(!this._isElement(this._$element))return n.superclass.getShape.call(this);var t=this._$element.position();return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([[t.left,t.top],[t.left+this._$element[0].offsetWidth,t.top+this._$element[0].offsetHeight]]))},_isElement:function(t){return t&&t[0]}});t.events.add("click",(function(){t.balloon.isOpen()&&t.balloon.close()}));var i=new ymaps.GeoObjectCollection;f(".placemarks__item").each((function(){var t=f(this).find(".placemarks__balloon").text().trim(),e=[f(this).find(".placemarks__latitude").text().trim(),f(this).find(".placemarks__longitude").text().trim()],a=new ymaps.Placemark(e,{balloon:t},{iconLayout:"default#image",iconImageHref:"assets/images/placemark.svg",iconImageSize:[70,62],iconImageOffset:[-35,-62],balloonLayout:n,balloonPanelMaxMapArea:0,hideIconOnBalloonOpen:!1});i.add(a)})),t.geoObjects.add(i),t.setBounds(i.getBounds(),{zoomMargin:Math.max(70,62)}).then((function(){1===f(".placemarks__item").length&&t.setZoom(18)}))}})),f((function(){var t=new s.Z(f(".development__names")[0],{freeMode:!1,slidesPerView:"auto",initialSlide:0});new s.Z(f(".development__desc")[0],{loop:!0,freeMode:!1,spaceBetween:0,slidesPerView:1,initialSlide:0,thumbs:{swiper:t}});t.update()})),f((function(){var t="component";f(".".concat(t)).each((function(){var e=f(this),a=(e.find(".".concat(t,"__list")),e.find(".".concat(t,"__item"))),o={isMultiLine:!1};function n(t,e){return Math.abs(t-e)<1}function i(){var t=a.filter(":first"),e=a.filter(":last"),i=t.offset().top,s=e.offset().top;o.isMultiLine=!n(i,s),console.log(o)}i(),f(window).on("resize",i),a.on("click",(function(){var a=f(".".concat(t,"__item--active")),o=f(this),i=a.index(),s=o.index();if(i!==s){var r=i<s?"right":"left",c=a.offset().top,l=o.offset().top,d=a.offset().left,u=o.offset().left;if(n(c,l)){var p=Math.abs(d-u),h=document.createElement("div"),m=a.position().top+a.height(),v=a.position().left,g=a.width();h.style.cssText=["transform: ","translate(".concat(v,"px, ").concat(m,"px) "),"scaleX(".concat(g,") ")].join(""),h.classList.add("".concat(t,"__thumb")),e[0].append(h),a.removeClass("".concat(t,"__item--thumb"));var b=o.width(),y=(o.position().left,{FPS:60,DURATION:1e3,startTimestamp:performance.now(),time:null,progress:null});requestAnimationFrame((function e(){var a=performance.now();y.time=a-y.startTimestamp,y.progress=y.time/y.DURATION,y.progress>1&&(y.progress=1);var n=g+(b-g)*y.progress,i=v+p*y.progress*("right"===r?1:-1);h.style.cssText=["transform: ","translate(".concat(i,"px, ").concat(m,"px) "),"scaleX(".concat(n,") ")].join(""),y.progress<1?requestAnimationFrame(e):(o.addClass("".concat(t,"__item--thumb")),h.remove())}))}else{e.width(),e.offset().left;if("right"===r);else;}}})),a.on("click",(function(){a.removeClass("".concat(t,"__item--active")),f(this).addClass("".concat(t,"__item--active"))}))}))})),f((function(){f(".tabs").each((function(){var t=f(this),e=t.find(".tabs__item"),a=t.find(".tabs__background");!function(){function t(){var t=0;function o(t){return t.offsetLeft+t.offsetWidth}e.each((function(){t=o(this)>t?o(this):t})),a.css("width","".concat(t,"px"))}t(),setTimeout(t,250);f(window).one("resize",(function e(){t(),setTimeout((function(){t(),f(window).one("resize",e)}),1e3/15)}))}(),e.on("click",(function(){var t=f(".tabs__item--active"),e=f(this);t[0]!==e[0]&&(t.removeClass("tabs__item--active"),e.addClass("tabs__item--active"),r(t,e))}));var o=u(function(){var t,e=document.createElement("div");function o(){var a=t[0].offsetTop+t[0].offsetHeight,o=t[0].offsetLeft,n=t[0].offsetWidth;e.style.transform="translate(".concat(o,"px, ").concat(a,"px) scaleX(").concat(n,")")}e.classList.add("tabs__thumb"),e.style.cssText="\n          position: absolute;\n          bottom: 100%;\n          left: 0;\n          transform-origin: left;\n          width: 1px;\n          transition: none;\n        ";function n(){o(),setTimeout((function(){o(),window.addEventListener("resize",n,{once:!0})}),1e3/15)}function i(){e.remove(),window.removeEventListener("resize",n)}return[function(s){i(),t=s,o(),a.append(e),window.addEventListener("resize",n,{once:!0})},i]}(),2),n=o[0];o[1];setTimeout((function(){n(t.find(".tabs__item--active"))}),250);var i,s,r=function(t,e){i=t,s=e,Math.abs(i[0].offsetTop-s[0].offsetTop)<1?console.log(1):console.log(2)}}))})),f((function(){f.fancybox.defaults.closeExisting=!0,f.fancybox.defaults.touch=!1,f("[data-fancy-button]").on("click",(function(t){t.preventDefault();var e=f(this).data("fancy-button"),a=f('[data-fancy-modal="'.concat(e,'"]'));f.fancybox.open(a)}))})),f((function(){f.fn.BeerSlider=function(t){return t=t||{},this.each((function(){new(c())(this,t)}))},f(".beer-slider").BeerSlider({start:35})})),f((function(){if(0!==f(".index").length){function t(){f(".swiper-slide").each((function(){var t=f(this),e=t.find(".index__mid-img"),a=t.find(".index__mid-description"),o=e.width();a.css("max-width",o)}))}t(),f(window).one("resize",(function e(){setTimeout((function(){t(),f(window).one("resize",e)}),1e3/30)}))}})),f((function(){f(".index__target").each((function(){for(var t=f(this),e=t.find(".index__target-background"),a=t.find(".index__target-text"),o=[{colorStart:{r:49,g:187,b:162},colorEnd:{r:60,g:196,b:209},textColor:{r:148,g:255,b:250}},{colorStart:{r:65,g:204,b:206},colorEnd:{r:46,g:125,b:230},textColor:{r:146,g:225,b:255}},{colorStart:{r:100,g:178,b:200},colorEnd:{r:47,g:230,b:186},textColor:{r:146,g:255,b:229}}],n=0,i=0,s=o.length,r=[],c=0;c<s;c++){var l={colorStart:{r:o[(c+1)%s].colorStart.r-o[c].colorStart.r,g:o[(c+1)%s].colorStart.g-o[c].colorStart.g,b:o[(c+1)%s].colorStart.b-o[c].colorStart.b},colorEnd:{r:o[(c+1)%s].colorEnd.r-o[c].colorEnd.r,g:o[(c+1)%s].colorEnd.g-o[c].colorEnd.g,b:o[(c+1)%s].colorEnd.b-o[c].colorEnd.b},textColor:{r:o[(c+1)%s].textColor.r-o[c].textColor.r,g:o[(c+1)%s].textColor.g-o[c].textColor.g,b:o[(c+1)%s].textColor.b-o[c].textColor.b}};r.push(l)}function d(){var t,c,l;t={r:o[i].colorStart.r+r[i].colorStart.r*n,g:o[i].colorStart.g+r[i].colorStart.g*n,b:o[i].colorStart.b+r[i].colorStart.b*n},c={r:o[i].colorEnd.r+r[i].colorEnd.r*n,g:o[i].colorEnd.g+r[i].colorEnd.g*n,b:o[i].colorEnd.b+r[i].colorEnd.b*n},l={r:o[i].textColor.r+r[i].textColor.r*n,g:o[i].textColor.g+r[i].textColor.g*n,b:o[i].textColor.b+r[i].textColor.b*n},e.css("background","linear-gradient(261.11deg, rgb(".concat(t.r,", ").concat(t.g,", ").concat(t.b,") 8.47%, rgb(").concat(c.r,", ").concat(c.g,", ").concat(c.b,") 93.81%)")),a.css("color","rgb(".concat(l.r,", ").concat(l.g,", ").concat(l.b,")")),(n+=.047619047619047616)>1&&(n-=1,i=(i+1)%s)}console.log(o,r),f(window).one("mousemove",(function t(){requestAnimationFrame(d),setTimeout((function(){f(window).one("mousemove",t)}),1e3/60)}))}))})),f((function(){var t=f(".header");if(0!==t.length){var e=f(window).scrollTop();f(window).on("scroll",(function(){var a=f(window).scrollTop();t.hasClass("header--modal")||(a<e?(t.removeClass("header--scroll--down"),t.addClass("header--scroll--up")):(t.removeClass("header--scroll--up"),t.addClass("header--scroll--down"))),a<1&&(t.removeClass("header--scroll--up"),t.removeClass("header--scroll--down")),a>=1?t.addClass("header--scroll"):t.removeClass("header--scroll"),e=a})),f(window).scrollTop()>=1&&(t.addClass("header--scroll--up"),t.addClass("header--scroll"))}})),f((function(){var t=f(".header-modal--mobile");if(0!==t.length){var e=t.find(".header-section__button");t.find(".header-section__dropdown");e.on("click",(function(){var t=f(this).closest(".header-section__item");t.hasClass("header-section__item--active")?(t.find(".header-section__dropdown").slideUp(500),t.removeClass("header-section__item--active")):(f(".header-section__item--active").find(".header-section__dropdown").slideUp(650),f(".header-section__item--active").removeClass("header-section__item--active"),t.find(".header-section__dropdown").slideDown(500),t.addClass("header-section__item--active"))})),t.find(".header-section__section").find(".header-section__section-button").on("click",(function(){var t=f(this).closest(".header-section__section");t.hasClass("header-section__section--active")?(t.find(".header-section__section-dropdown").slideUp(500),t.removeClass("header-section__section--active")):(f(".header-section__section--active").find(".header-section__section-dropdown").slideUp(650),f(".header-section__section--active").removeClass("header-section__section--active"),t.find(".header-section__section-dropdown").slideDown(500),t.addClass("header-section__section--active"))}))}})),f((function(){var t=f(".form");if(0!==t.length){var e=f(".response"),a=f(".response__btn"),o=f(".form__btn"),n=f(".form-title");o.on("click",(function(a){a.preventDefault(),t.addClass("form--hidden"),e.addClass("response--active"),n.addClass("display-none")})),a.on("click",(function(){t.removeClass("form--hidden"),e.removeClass("response--active"),n.removeClass("display-none")}))}})),f((function(){f(window).on("click",(function(t){var e=f(t.target).closest(".tooth-button");e.length&&(e.hasClass("tooth-button--destroyed")?(e.removeClass("tooth-button--destroyed"),e.addClass("tooth-button--removed")):e.hasClass("tooth-button--removed")?e.removeClass("tooth-button--removed"):e.addClass("tooth-button--destroyed"))}))})),f((function(){f(window).on("click",(function(t){var e=f(t.target).closest(".articles-authors__filter-item");e.length&&e.toggleClass("articles-authors__item--active")}))})),f((function(){n().addMessages("ru",{defaultMessage:"Некорректное значение",type:{email:"Введите адрес электронной почты",url:"Введите URL адрес",number:"Введите число",integer:"Введите целое число",digits:"Введите только цифры",alphanum:"Введите буквенно-цифровое значение"},notblank:"Это поле должно быть заполнено",required:"Обязательное поле",pattern:"Это значение некорректно",min:"Это значение должно быть не менее чем %s",max:"Это значение должно быть не более чем %s",range:"Это значение должно быть от %s до %s",minlength:"Это значение должно содержать не менее %s символов",maxlength:"Это значение должно содержать не более %s символов",length:"Это значение должно содержать от %s до %s символов",mincheck:"Выберите не менее %s значений",maxcheck:"Выберите не более %s значений",check:"Выберите от %s до %s значений",equalto:"Это значение должно совпадать"}),n().setLocale("ru")}))}},a={};function o(t){var n=a[t];if(void 0!==n)return n.exports;var i=a[t]={exports:{}};return e[t].call(i.exports,i,i.exports,o),i.exports}o.m=e,t=[],o.O=function(e,a,n,i){if(!a){var s=1/0;for(l=0;l<t.length;l++){a=t[l][0],n=t[l][1],i=t[l][2];for(var r=!0,c=0;c<a.length;c++)(!1&i||s>=i)&&Object.keys(o.O).every((function(t){return o.O[t](a[c])}))?a.splice(c--,1):(r=!1,i<s&&(s=i));r&&(t.splice(l--,1),e=n())}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[a,n,i]},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,{a:e}),e},o.d=function(t,e){for(var a in e)o.o(e,a)&&!o.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t={143:0,532:0};o.O.j=function(e){return 0===t[e]};var e=function(e,a){var n,i,s=a[0],r=a[1],c=a[2],l=0;for(n in r)o.o(r,n)&&(o.m[n]=r[n]);if(c)var d=c(o);for(e&&e(a);l<s.length;l++)i=s[l],o.o(t,i)&&t[i]&&t[i][0](),t[s[l]]=0;return o.O(d)},a=self.webpackChunk=self.webpackChunk||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var n=o.O(void 0,[812,532],(function(){return o(728)}));n=o.O(n)}();