import 'Styles/_app.scss';

import Swiper from 'swiper/bundle';
import Parsley from 'parsleyjs';
import '@fancyapps/fancybox';
import BeerSlider from 'beerslider';
import Sticky from 'sticky-js';

const BREAKPOINT = 1280;

// header
{
  $(() => {
    const header = $('.header');

    if (header.length !== 0) {
      // modal
      {
        const state = {
          id: null,
          close: function () {
            $(`[data-modal-id="${this.id}"]`).removeAttr('data-modal-active');
            $(`[data-modal-button="${this.id}"]`).removeAttr('data-modal-active');
          },
          open: function () {
            $(`[data-modal-id="${this.id}"]`).attr('data-modal-active', '');
            $(`[data-modal-button="${this.id}"]`).attr('data-modal-active', '');
          },
          update: function (id) {
            this.id = id;
          },
          change: function (id) {
            this.close();
            this.update(id === this.id ? null : id);
            this.open();
          }
        };

        const btn = $('[data-modal-button]');
        btn.on('click', function () {
          const id = $(this).data('modal-button');
          state.change(id);

          const modalActive = header.find('[data-modal-active]');
          if (modalActive.length !== 0) {
            header.addClass('header--modal')
          } else {
            header.removeClass('header--modal')
          }
        });

        $(window).on('click', event => {
          // const isClickArea = $(event.target).closest(header).length !== 0; ?

          const isClickArea = ( // ?
            // эл-ты header
            $(event.target).closest('.header__container').length !== 0
            && !$(event.target).hasClass('header__container')
            // модальное окно
            || $(event.target).closest('[data-modal-active]').length !== 0
          );

          if (!isClickArea) {
            state.change(null);
            header.removeClass('header--modal')
          }
        });

        // media
        const breakpoint = window.matchMedia(`(min-width: ${BREAKPOINT}px)`);
        breakpoint.addListener((event) => {
          state.change(null);
        });

        
      }
    }
  });
}

// tabs
{
  $(() => {
    // attrs:
    // data-tabs-id: id компонента
    // data-tabs-button: id таба
    // data-tabs-tab: id таба
    // data-tabs-active: id активного таба

    const tabs_el = $('[data-tabs-id]');

    // проверка на существование компонентов
    if (tabs_el.length !== 0) {
      const tabs_id = [];

      // сбор id компонентов
      tabs_el.each(function () {
        const cur_id = $(this).data('tabs-id');

        if (tabs_id.indexOf(cur_id) === -1) {
          tabs_id.push(cur_id);
        }
      });

      // обработка компонентов (по id)
      tabs_id.forEach(comp_id => {
        const tab_el = $(`[data-tabs-id="${comp_id}"][data-tabs-tab]`);
        const button_el = $(`[data-tabs-id="${comp_id}"][data-tabs-button]`);

        // проверка на существование табов
        if (tab_el.length !== 0) {
          const state = {
            id: null, // active таб
            update: function (id) {
              this.id = id;
            },
            close: function () {
              // tab_el.filter(`[data-tabs-tab="${this.id}"]`).removeAttr('data-tabs-active');
              tab_el.filter(`[data-tabs-tab="${this.id}"]`).slideUp(500);
              button_el.filter(`[data-tabs-button="${this.id}"]`).removeAttr('data-tabs-active');
            },
            open: function () {
              // tab_el.filter(`[data-tabs-tab="${this.id}"]`).attr('data-tabs-active', '');
              tab_el.filter(`[data-tabs-tab="${this.id}"]`).slideDown(500);
              button_el.filter(`[data-tabs-button="${this.id}"]`).attr('data-tabs-active', '');
            },
            change: function (id) {
              if (id && id !== this.id) {
                this.close();
                this.update(id);
                this.open();
              }
            },
            init: function () {
              const tab_active_id = button_el.filter('[data-tabs-active]').data('tabs-button');
              this.update(tab_active_id);
            }
          };

          state.init();

          button_el.on('click', function () {
            const tab_clicked_id = $(this).data('tabs-button');
            state.change(tab_clicked_id);
          });
        }
      });
    }
  });
}

// slider
{
  $(window).on('load', () => { // ?
    const slider = $('[data-slider-id]');

    if (slider.length !== 0) {
      slider.each(function () {
        const slider_el = $(this);
        const slider_id = slider_el.data('slider-id');
        const slider_prev_id = slider_el.data('slider-prev');
        const slider_next_id = slider_el.data('slider-next');
        const slider_prev = $(`[data-slider-button="${slider_prev_id}"]`);
        const slider_next = $(`[data-slider-button="${slider_next_id}"]`);

        let slider_options = {
          slidesPerView: 'auto',

          spaceBetween: 20,

          breakpoints: {
            [BREAKPOINT]: {
              spaceBetween: 40,
            },
          },
        };

        switch (slider_id) {
          case 3:
            slider_options = {
              ...slider_options,

              breakpoints: {
                [BREAKPOINT]: {
                  spaceBetween: 60,
                },
              },
            }
            break;
          case 4:
            slider_options = {
              ...slider_options,

              allowTouchMove: false,
            }
            break;
          case 7:
            slider_options = {
              ...slider_options,

              breakpoints: {
                [BREAKPOINT]: {
                  spaceBetween: 100,

                  allowTouchMove: false,
                },
              },
            }
            break;
          case 8:
            slider_options = {
              ...slider_options,

              loop: true,
              centeredSlides: true,
            }
            break;


          case 20:
            slider_options = {
              ...slider_options,

              spaceBetween: 10,
              loop: true,
              centeredSlides: true,

              breakpoints: {
                [BREAKPOINT]: {
                  spaceBetween: 40,
                  allowTouchMove: false,
                  centeredSlides: false,
                },
              },
            }
            break;
          case 21:
            slider_options = {
              ...slider_options,

              allowTouchMove: false,
            }
            break;

          case 100:
            slider_options = {
              ...slider_options,

              allowTouchMove: false,
              autoHeight: true,
              loop: true,
            }
            break;

          case 106:
            slider_options = {
              ...slider_options,

              // allowTouchMove: false,
              // autoHeight: true,
              // loop: true,
              // slideToClickedSlide: true,

            }
            break;

          case 105:
            slider_options = {
              ...slider_options,

              // allowTouchMove: false,
              autoHeight: true,
              // loop: true,

              thumbs: {
                swiper: 106,
              },
            }
            break;

        }

        const slider_swiper = new Swiper(slider_el[0], slider_options);

        slider_prev.on('click', () => {
          slider_swiper.slidePrev();
        });
        slider_next.on('click', () => {
          slider_swiper.slideNext();
        });
      });
    }
  });
}

// sticky
{
  $(() => {
    if ($('.sticky').length !== 0) {
      const sticky = new Sticky('.sticky');
    }
  });
}

// sticky
{
  $(() => {
    const elements = $('[data-sticky-id]');

    if (elements.length !== 0) {
      elements.each(function () {
        const element = $(this);
        const element_id = element.data('sticky-id');
        const element_end = $(`[data-sticky-end="${element_id}"]`);

        const top = element.data('sticky-top');
        const start = ($(element).offset().top - top >= 0) ? $(element).offset().top - top : 0;

        const bottom = element.data('sticky-bottom');
        const end = (element_end.length !== 0 ? element_end.offset().top : $(document).height()) - bottom - element.height() - top;

        const state = {
          isSticky: false,
          isStickyPrev: false,
          isChange: false,

          init: function () {
            this.update();

            this.isStickyPrev = this.isSticky; // первое состояние (после инициализации) - предыдущее состояние принимаем равным текущему
            this.isChange = false; // соответственно изменения с предыдущего апдейта не произошло
          },

          update: function () {
            const scrollTop = window.pageYOffset;

            this.isStickyPrev = this.isSticky;
            this.isSticky = scrollTop >= start && scrollTop <= end;

            this.isChange = this.isStickyPrev !== this.isSticky;
          },
        }
        state.init();

        $(window).on('scroll', () => {
          state.update();



          if (state.isChange) {
            if (state.isSticky) {
              element.css('position', 'fixed').css('top', `${top}px`);
            } else {
              element.css('position', '').css('top', '');
            }
          }
        });
      });
    }
  });
}

// spoiler
{
  $(() => {
    const spoilers = $('.mission__spoiler');

    spoilers.each(function () {
      const spoiler = $(this);
      const spoiler_button = spoiler.find('.mission__spoiler-button');
      const spoiler_drop = spoiler.find('.mission__spoiler-drop');

      spoiler_button.on('click', () => {
        spoiler.toggleClass('mission__spoiler--active');
        spoiler_drop.slideToggle();
      });
    });
  });
}

// block
{
  function getScrollProgress(scrollArea) {
    const scrollPos = scrollArea[0].scrollTop
    const scrollDist = scrollArea[0].scrollHeight - scrollArea[0].clientHeight

    return scrollPos / scrollDist
  }

  function updateScrollbarThumb(scrollbarThumb, scrollProgress) {
    requestAnimationFrame(() => {
      scrollbarThumb.css('top', `${scrollProgress * 100}%`)
    })
  }

  function getSlideProgress(scrollProgress, startProgress, endProgress) {
    if (scrollProgress < startProgress) {
      return 0
    } else if (scrollProgress > endProgress) {
      return 1
    } else {
      return (scrollProgress - startProgress) / (endProgress - startProgress)
    }
  }

  function updateSlide1(slide, scrollProgress, startProgress, endProgress) {
    const slideProgress = getSlideProgress(scrollProgress, startProgress, endProgress)

    requestAnimationFrame(() => {
      slide.css('transform', `translateY(-${slideProgress * 100}%)`);
      slide.css('opacity', 1 - slideProgress);
    })
  }

  function updateSlide2(slide, scrollProgress, startProgress, endProgress) {
    const slideProgress = getSlideProgress(scrollProgress, startProgress, endProgress)

    requestAnimationFrame(() => {
      slide.css('transform', `translateY(${(1 - slideProgress) * 100}%)`);
      slide.css('opacity', slideProgress);
    })
  }

  $(() => {
    const blocks = $('.block')

    blocks.each(function () {
      const block = $(this)

      const scrollArea = block.find('.block__scroll')
      let scrollProgress = getScrollProgress(scrollArea)

      const scrollbarThumb = block.find('.block__scrollbar-thumb')

      const slide1 = block.find('.block__slide--1');
      const slide2 = block.find('.block__slide--2');

      updateScrollbarThumb(scrollbarThumb, scrollProgress)

      const updateAll = () => {
        updateSlide1(slide1, scrollProgress, 0.2, 0.75)
        updateSlide2(slide2, scrollProgress, 0.25, 0.8)
      }

      updateAll()

      scrollArea.on('scroll', () => {
        scrollProgress = getScrollProgress(scrollArea)

        updateScrollbarThumb(scrollbarThumb, scrollProgress)

        updateAll()
      })
    })
  })
}
// team filter

{
  // let memberCard = document.querySelectorAll('.team-member');

  // document.querySelector('.team-filter').addEventListener('click', event => {
  //   if (event.target.tagName != 'LI') return false;

  //   let filterClass = event.target.dataset['id'];
  //   // console.log(filterClass);

  //   memberCard.forEach(elem => {
  //     elem.classList.remove('hide');
  //     if (!elem.classList.contains(filterClass)) {
  //       elem.classList.add('hide'); 
  //     }
  //   });
  // });


}

// tel mask

{
  document.addEventListener("DOMContentLoaded", function () {
    var phoneInputs = document.querySelectorAll('input[data-tel-input]');
    // console.log(phoneInputs);

    var getInputNumbersValue = function (input) {
      // Удаление любых символов крме цифр
      return input.value.replace(/\D/g, '');
    }

    // Очистка скопированного и вставленного в поле номера
    var onPhonePaste = function (e) {
      var input = e.target,
        inputNumbersValue = getInputNumbersValue(input);
      var pasted = e.clipboardData || window.clipboardData;
      if (pasted) {
        var pastedText = pasted.getData('Text');
        if (/\D/g.test(pastedText)) {
          input.value = inputNumbersValue;
          return;
        }
      }
    }

    // Обработка вписанного вручную номера
    var onPhoneInput = function (e) {
      var input = e.target,
        inputNumbersValue = getInputNumbersValue(input),
        selectionStart = input.selectionStart,
        formattedInputValue = "";

      if (!inputNumbersValue) {
        return input.value = "";
      }

      if (input.value.length != selectionStart) {
        if (e.data && /\D/g.test(e.data)) {
          input.value = inputNumbersValue;
        }
        return;
      }

      if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
        if (inputNumbersValue[0] == "9") inputNumbersValue = "7" + inputNumbersValue;
        var firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+7";
        formattedInputValue = input.value = firstSymbols + " ";
        if (inputNumbersValue.length > 1) {
          formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
        }
        if (inputNumbersValue.length >= 5) {
          formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
        }
        if (inputNumbersValue.length >= 8) {
          formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
        }
        if (inputNumbersValue.length >= 10) {
          formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
        }
      } else {
        formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
      }
      input.value = formattedInputValue;
    }
    var onPhoneKeyDown = function (e) {
      // Удаление первого символа после удаления номера
      var inputValue = e.target.value.replace(/\D/g, '');
      if (e.keyCode == 8 && inputValue.length == 1) {
        e.target.value = "";
      }
    }
    for (var phoneInput of phoneInputs) {
      phoneInput.addEventListener('keydown', onPhoneKeyDown);
      phoneInput.addEventListener('input', onPhoneInput, false);
      phoneInput.addEventListener('paste', onPhonePaste, false);
    }
  })
}

// map

{
  ymaps.ready(() => {
    const mapContainer = $('#map');

    if (mapContainer.length !== 0) {
      // vars
      const markWidth = 70;
      const markHeight = 62;

      // init
      const map = new ymaps.Map('map', {
        center: [55.732433, 37.616144],
        zoom: 14,
        controls: [],
      });
      // const zoomControl = new ymaps.control.ZoomControl({
      //   options: {
      //     size: 'small',
      //     position: {
      //       top: 205,
      //       right: 10,
      //     },
      //   }
      // });

      // adaptive
      // const mediaQuery = window.matchMedia(`(min-width: ${BREAKPOINT}px)`);
      // function mediaQueryChange() {
      //   if (mediaQuery.matches) {
      //     // desktop
      //     map.controls.add(zoomControl);
      //   } else {
      //     // mobile
      //     map.controls.remove(zoomControl);
      //   }
      // }
      // mediaQueryChange();
      // mediaQuery.addListener(mediaQueryChange);

      // balloon layout
      const layout = ymaps.templateLayoutFactory.createClass(
        [
          '<div class="balloon">',
          '<div class="balloon__content">',
          '<p class="balloon__text">',
          '{{properties.balloon}}',
          '</p>',
          '</div>',
          '<div class="balloon__arrow"></div>',
          '</div>',
        ].join(''),
        {
          build: function () {
            this.constructor.superclass.build.call(this);

            this._$element = $('.balloon', this.getParentElement());

            this.applyElementOffset();
          },
          onSublayoutSizeChange: function () {
            layout.superclass.onSublayoutSizeChange.apply(this, arguments);

            if (!this._isElement(this._$element)) {
              return;
            }

            this.applyElementOffset();

            this.events.fire('shapechange');
          },
          applyElementOffset: function () {
            this._$element.css({
              left: -(this._$element[0].offsetWidth / 2),
              top: -(this._$element[0].offsetHeight + markHeight),
            });
          },
          getShape: function () {
            if (!this._isElement(this._$element)) {
              return layout.superclass.getShape.call(this);
            }

            var position = this._$element.position();

            return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([
              [position.left, position.top], [
                position.left + this._$element[0].offsetWidth,
                position.top + this._$element[0].offsetHeight,
              ]
            ]));
          },
          _isElement: function (element) {
            return element && element[0];
          }
        }
      );

      // balloon close
      map.events.add('click', () => {
        if (map.balloon.isOpen()) {
          map.balloon.close();
        }
      });

      // добавление точек
      const placemarks = new ymaps.GeoObjectCollection();
      $('.placemarks__item').each(function () {
        // данные
        const balloon = $(this).find('.placemarks__balloon').text().trim();
        const latitude = $(this).find('.placemarks__latitude').text().trim();
        const longitude = $(this).find('.placemarks__longitude').text().trim();

        // placemark
        const coordinates = [latitude, longitude];
        const placemark = new ymaps.Placemark(coordinates, {
          balloon,
        }, {
          iconLayout: 'default#image',
          iconImageHref: 'assets/images/placemark.svg',
          iconImageSize: [markWidth, markHeight],
          iconImageOffset: [-markWidth / 2, -markHeight],

          balloonLayout: layout,
          balloonPanelMaxMapArea: 0,
          hideIconOnBalloonOpen: false,
        });

        placemarks.add(placemark);
      });

      // добавление на карту
      map.geoObjects.add(placemarks);

      // позиционирование на точках
      map.setBounds(placemarks.getBounds(), {
        zoomMargin: Math.max(markWidth, markHeight),
      });
    }
  });
}

// Development slider
{
  $(() => {
    const swiperThumbs = new Swiper($('.development__names')[0], {
      freeMode: true,
      slidesPerView: 'auto',

    })
    const swiperSlider = new Swiper($('.development__desc')[0], {
      thumbs: {
        swiper: swiperThumbs,
      },
    })
    swiperThumbs.update()
  })
}

// component
{
  $(() => {
    const COMPONENT_CLASS = 'component'

    const components = $(`.${COMPONENT_CLASS}`)

    components.each(function () {
      // elements
      const component = $(this)
      
      const list = component.find(`.${COMPONENT_CLASS}__list`)
      const items = component.find(`.${COMPONENT_CLASS}__item`)

      // state
      const state = {
        isMultiLine: false,
      }

      function topEqual(top1, top2) {
        return Math.abs(top1 - top2) < 1
      }

      function updateState() {
        // isMultiLine
        {
          const firstItem = items.filter(':first')
          const lastItem = items.filter(':last')

          const firstItemY = firstItem.offset().top
          const lastItemY = lastItem.offset().top

          state.isMultiLine = !topEqual(firstItemY, lastItemY)
        }

        console.log(state);
      }

      // init state
      updateState()

      // window resize
      $(window).on('resize', updateState)

      // move thumb
      items.on('click', function () {
        const prevItem = $(`.${COMPONENT_CLASS}__item--active`)
        const nextItem = $(this)

        const prevIndex = prevItem.index()
        const nextIndex = nextItem.index()

        // move
        if (prevIndex !== nextIndex) {
          const direction = prevIndex < nextIndex ? 'right' : 'left'

          const prevTop = prevItem.offset().top
          const nextTop = nextItem.offset().top

          const prevLeft = prevItem.offset().left
          const nextLeft = nextItem.offset().left

          // one line
          if (topEqual(prevTop, nextTop)) {
            const distance = Math.abs(prevLeft - nextLeft)

            // создаем thumb
            const thumb = document.createElement('div')

            const thumbTop = prevItem.position().top + prevItem.height()
            const thumbLeft = prevItem.position().left

            const thumbWidth = prevItem.width()
            
            thumb.style.cssText = [
              `transform: `,
              `translate(${thumbLeft}px, ${thumbTop}px) `,
              `scaleX(${thumbWidth}) `,
            ].join('')

            thumb.classList.add(`${COMPONENT_CLASS}__thumb`)

            component[0].append(thumb)

            // удаляем нативный (css) thumb (модификатор --thumb) у item'a
            prevItem.removeClass(`${COMPONENT_CLASS}__item--thumb`)

            // анимируем thumb
            const thumbWidthEnd = nextItem.width()
            const thumbLeftEnd = nextItem.position().left

            const animation = {
              FPS: 60,
              DURATION: 1000,

              startTimestamp: performance.now(),

              time: null,
              progress: null,
            }

            function frame() {
              const currentTimestamp = performance.now()

              animation.time = currentTimestamp - animation.startTimestamp
              animation.progress = animation.time / animation.DURATION

              if (animation.progress > 1) {
                animation.progress = 1
              }

              // update позиции и размера (анимация)
              {
                // размер
                const thumbWidthCurrent = thumbWidth + ((thumbWidthEnd - thumbWidth) * animation.progress)

                // позиция
                const thumbLeftCurrent = thumbLeft + (distance * animation.progress * (direction === 'right' ? 1 : -1))

                // "рендер" свойств
                thumb.style.cssText = [
                  `transform: `,
                  `translate(${thumbLeftCurrent}px, ${thumbTop}px) `,
                  `scaleX(${thumbWidthCurrent}) `,
                ].join('')
              }

              if (animation.progress < 1) {
                requestAnimationFrame(frame)
              } else {
                animationEnd()
              }
            }

            requestAnimationFrame(frame)

            // после анимации
            function animationEnd() {
              // добавляем нативный (css) thumb (модификатор --thumb) item'у
              nextItem.addClass(`${COMPONENT_CLASS}__item--thumb`)

              // удаляем анимируемый, временный thumb (js)
              thumb.remove()
            }
          } else { // cross line
            const componentWidth = component.width()

            const componentLeft = component.offset().left
            
            const prevLeftComponent = prevLeft - componentLeft
            const nextLeftComponent = nextLeft - componentLeft

            // to the right
            if (direction === 'right') {
              const prevDistance = componentWidth - prevLeftComponent
              const nextDistance = nextLeftComponent

              const distance = prevDistance + nextDistance

              // *здесь движение между строк вправо*
            } else { // to the left
              // расстояние такое же, как если бы prev было next, а next - prev И direction === 'right'
              // 'зеркально'
              const prevDistance = prevLeftComponent
              const nextDistance = componentWidth - nextLeftComponent

              const distance = prevDistance + nextDistance

              // *здесь движение между строк влево*
            }
          }
        }
      })

      // switch active
      items.on('click', function () {
        items.removeClass(`${COMPONENT_CLASS}__item--active`)

        const clickedItem = $(this)

        clickedItem.addClass(`${COMPONENT_CLASS}__item--active`)
      })
    })
  })
}

// tabs
{
  $(() => {
    $('.tabs').each(function () {
      const tabs = $(this)

      const items = tabs.find('.tabs__item')
      const background = tabs.find('.tabs__background')

      // background
      ;(() => {
        function update() {
          let width = 0

          function getWidth(elem) {
            return elem.offsetLeft + elem.offsetWidth
          }

          items.each(function () {
            width = (getWidth(this) > width) ? getWidth(this) : width
          })

          background.css('width', `${width}px`)
        }

        update()

        // скачок шрифта
        setTimeout(update, 250)

        const fps = 15

        function resize() {
          update()

          setTimeout(() => {
            update()

            $(window).one('resize', resize)
          }, 1000 / fps)
        }

        $(window).one('resize', resize)
      })()

      // change
      ;(() => {
        items.on('click', function () {
          const prev = $('.tabs__item--active')
          const next = $(this)

          if (prev[0] !== next[0]) {
            prev.removeClass('tabs__item--active')
            next.addClass('tabs__item--active')

            animation(prev, next)
          }
        })
      })()

      // static
      var [attach, dettach] = (() => {
        let item

        const thumb = document.createElement('div')

        thumb.classList.add('tabs__thumb')

        thumb.style.cssText = `
          position: absolute;
          bottom: 100%;
          left: 0;
          transform-origin: left;

          width: 1px;

          transition: none;
        `

        function update() {
          const top = item[0].offsetTop + item[0].offsetHeight
          const left = item[0].offsetLeft

          const width = item[0].offsetWidth

          thumb.style.transform = `translate(${left}px, ${top}px) scaleX(${width})`
        }

        const fps = 15

        function resize() {
          update()

          setTimeout(() => {
            update()

            window.addEventListener('resize', resize, {
              once: true,
            })
          }, 1000 / fps)
        }

        function attach(attachItem) {
          dettach()

          item = attachItem

          update()

          background.append(thumb)

          window.addEventListener('resize', resize, {
            once: true,
          })
        }

        function dettach() {
          thumb.remove()

          window.removeEventListener('resize', resize)
        }

        return [attach, dettach]
      })()

      // скачок шрифта
      setTimeout(() => {
        attach(tabs.find('.tabs__item--active'))
      }, 250)

      // animation
      var animation = (() => {
        let prev
        let next

        function inOneLine() {
          return Math.abs(prev[0].offsetTop - next[0].offsetTop) < 1
        }

        function animation(prevItem, nextItem) {
          prev = prevItem
          next = nextItem

          if (inOneLine()) {
            simpleAnimation()
          } else {
            complexAnimation()
          }
        }

        function createThumb() {
          const thumb = document.createElement('div')

          thumb.classList.add('tabs__thumb')

          thumb.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            transform-origin: left;
            transform: scaleX(30);
            
            width: 1px;
          `

          return thumb
        }

        function simpleAnimation() {
          console.log(1);
        }

        function complexAnimation() {
          console.log(2);
        }

        return animation
      })()
    })
  })
}

// fancybox
{
  $(() => {
    $.fancybox.defaults.closeExisting = true;
    $.fancybox.defaults.touch = false;

    $('[data-fancy-button]').on('click', function (event) {
      event.preventDefault();

      const id = $(this).data('fancy-button');
      const modal = $(`[data-fancy-modal="${id}"]`);

      $.fancybox.open(modal);
    });
  });
}

// before-after
{
  $(() => {
    $.fn.BeerSlider = function ( options ) {
      options = options || {};
      return this.each(function() {
        new BeerSlider(this, options);
      });
    };
    $('.beer-slider').BeerSlider({start: 35});
  });
}

// slide description
{
  $(() => {

    if ($('.index').length !== 0) {
      const fps = 30;

      update()

      function update() {
        const indexSlide = $('.swiper-slide');
        indexSlide.each(function() {
          const slide = $(this);
          const slideImg = slide.find('.index__mid-img');
          const slideDesc = slide.find('.index__mid-description');
          const imgWidth = slideImg.width();

          slideDesc.css('max-width', imgWidth);
        });
      }
      
      function resize() {
        setTimeout (() => {
          update()
          $(window).one('resize', resize);
        }, 1000 / fps);
      };
      
      $(window).one('resize', resize)
    }
  });
}

// target section animation (main page, mouse move, linear-gradient)
;(() => {
  $(() => {
    const components = $('.index__target')

    components.each(function () {
      const component = $(this)
  
      const background = component.find('.index__target-background')
      const text = component.find('.index__target-text')
  
      // data
      const points = [
        {
          colorStart: {
            r: 49,
            g: 187,
            b: 162,
          },
          colorEnd: {
            r: 60,
            g: 196,
            b: 209,
          },
          textColor: {
            r: 148,
            g: 255,
            b: 250,
          },
        },
        {
          colorStart: {
            r: 65,
            g: 204,
            b: 206,
          },
          colorEnd: {
            r: 46,
            g: 125,
            b: 230,
          },
          textColor: {
            r: 146,
            g: 225,
            b: 255,
          },
        },
        {
          colorStart: {
            r: 100,
            g: 178,
            b: 200,
          },
          colorEnd: {
            r: 47,
            g: 230,
            b: 186,
          },
          textColor: {
            r: 146,
            g: 255,
            b: 229,
          },
        },
      ]
   
      // options
      const fps = 60
      
      let progress = 0
      const progressDuration = 350
      const progressIncrement = 1 / ((progressDuration / 1000) * fps)
  
      let step = 0
      const stepsCount = points.length
  
      // calc
      const pointsDelta = []
      
      for (let i = 0; i < stepsCount; i++) {
        const pointDelta = {
          colorStart: {
            r: points[(i + 1) % stepsCount].colorStart.r - points[i].colorStart.r,
            g: points[(i + 1) % stepsCount].colorStart.g - points[i].colorStart.g,
            b: points[(i + 1) % stepsCount].colorStart.b - points[i].colorStart.b,
          },
          colorEnd: {
            r: points[(i + 1) % stepsCount].colorEnd.r - points[i].colorEnd.r,
            g: points[(i + 1) % stepsCount].colorEnd.g - points[i].colorEnd.g,
            b: points[(i + 1) % stepsCount].colorEnd.b - points[i].colorEnd.b,
          },
          textColor: {
            r: points[(i + 1) % stepsCount].textColor.r - points[i].textColor.r,
            g: points[(i + 1) % stepsCount].textColor.g - points[i].textColor.g,
            b: points[(i + 1) % stepsCount].textColor.b - points[i].textColor.b,
          },
        }
  
        pointsDelta.push(pointDelta)
      }

      console.log(points, pointsDelta);
  
      function update() {
        const currentColorStart = {
          r: points[step].colorStart.r + pointsDelta[step].colorStart.r * progress,
          g: points[step].colorStart.g + pointsDelta[step].colorStart.g * progress,
          b: points[step].colorStart.b + pointsDelta[step].colorStart.b * progress,
        }
        const currentColorEnd = {
          r: points[step].colorEnd.r + pointsDelta[step].colorEnd.r * progress,
          g: points[step].colorEnd.g + pointsDelta[step].colorEnd.g * progress,
          b: points[step].colorEnd.b + pointsDelta[step].colorEnd.b * progress,
        }
        const currentTextColor = {
          r: points[step].textColor.r + pointsDelta[step].textColor.r * progress,
          g: points[step].textColor.g + pointsDelta[step].textColor.g * progress,
          b: points[step].textColor.b + pointsDelta[step].textColor.b * progress,
        }
  
        background.css(
          'background',
          `linear-gradient(261.11deg, rgb(${currentColorStart.r}, ${currentColorStart.g}, ${currentColorStart.b}) 8.47%, rgb(${currentColorEnd.r}, ${currentColorEnd.g}, ${currentColorEnd.b}) 93.81%)`
        )
        text.css(
          'color',
          `rgb(${currentTextColor.r}, ${currentTextColor.g}, ${currentTextColor.b})`
        )
      }
  
      function tick() {
        update()
  
        progress += progressIncrement
  
        if (progress > 1) {
          progress = progress - 1
  
          step = (step + 1) % stepsCount
        }
      }
  
      function move() {
        requestAnimationFrame(tick)
  
        setTimeout(() => {
          $(window).one('mousemove', move)
        }, 1000 / fps)
      }
  
      $(window).one('mousemove', move)
    })
  })
})()

// fixed header
{
  $(() => {
    const header = $('.header');

    if (header.length !== 0) {
      let previousTop = $(window).scrollTop()

      $(window).on('scroll', function () {
        const currentTop = $(window).scrollTop();
        if (!header.hasClass('header--modal')) {
          if (currentTop < previousTop) {
            header.removeClass('header--scroll--down');
            header.addClass('header--scroll--up');
          } else {
            header.removeClass('header--scroll--up');
            header.addClass('header--scroll--down');
          }
        }

        if (currentTop < 1) {
          header.removeClass('header--scroll--up');
          header.removeClass('header--scroll--down');
        }

        if (currentTop >= 1) {
          header.addClass('header--scroll');
        } else {
          header.removeClass('header--scroll');
        }

        previousTop = currentTop;
      });

      if ($(window).scrollTop() >= 1) {
        header.addClass('header--scroll--up');
        header.addClass('header--scroll');
      }
    };
  });
}

// header modal mobile
{
  $(() => {
    const navModal = $('.header-modal--mobile');

    if (navModal.length !== 0) {
      const navModalButton = navModal.find('.header-section__button');
      const navModalDropdown = navModal.find('.header-section__dropdown');

      navModalButton.on('click', function () {
        const navModalSectionClicked = $(this).closest('.header-section__item');

        if (navModalSectionClicked.hasClass('header-section__item--active')) {
          navModalSectionClicked.find('.header-section__dropdown').slideUp(500);
          navModalSectionClicked.removeClass('header-section__item--active')
        } else {
          $('.header-section__item--active').find('.header-section__dropdown').slideUp(650);
          $('.header-section__item--active').removeClass('header-section__item--active');

          navModalSectionClicked.find('.header-section__dropdown').slideDown(500);
          navModalSectionClicked.addClass('header-section__item--active');
        }
      });

      // section
      const navModalSection = navModal.find('.header-section__section');
      const navModalSectionButton = navModalSection.find('.header-section__section-button');

      navModalSectionButton.on('click', function () {
        const navModalSectionClicked = $(this).closest('.header-section__section');

        if (navModalSectionClicked.hasClass('header-section__section--active')) {
          navModalSectionClicked.find('.header-section__section-dropdown').slideUp(500);
          navModalSectionClicked.removeClass('header-section__section--active')
        } else {
          $('.header-section__section--active').find('.header-section__section-dropdown').slideUp(650);
          $('.header-section__section--active').removeClass('header-section__section--active');

          navModalSectionClicked.find('.header-section__section-dropdown').slideDown(500);
          navModalSectionClicked.addClass('header-section__section--active');
        }
      });
    }
  });
}
