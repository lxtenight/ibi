import Swiper from 'swiper/bundle';

// lab slider on the main page

{
  $(() => {
    const slider = $('.index-lab-slider');
    // const slides = slider.find('.swiper-slide');
    const titles = slider.find('.block__nav-item');

    // const slidesCount = slides.length;

    // console.log(slides.length);
    // console.log(slides.length);

    // const activeSlide = slider.find('.swiper-slide-active');

    // let index = 0;
    
    // $(window).on('click', () => {
    //   index++

      // if index > slidesCount;

    // })

    const btns = slider.find('.slider-control__item');

    if (btns.length) {
      btns.on('click', () => {
        console.log(111);
        titles.toggleClass('block__nav-item--active');
      })
    }
  })
}

// slider

const BREAKPOINT = 1280;

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
          case 1:
            slider_options = {
              ...slider_options,
  
              loop: true,

  
            }
            break;
  
          case 2:
            slider_options = {
              ...slider_options,
  
              loop: true,
  
            }
            break;
  
          case 3:
            slider_options = {
              // ...slider_options,
  
              // loop: true,
  
              // breakpoints: {
              //   [BREAKPOINT]: {
              //     spaceBetween: 60,
              //   },
              // },
            }
            break;
          case 4:
            slider_options = {
              // ...slider_options,
  
              // loop: true,
  
              // allowTouchMove: false,
            }
            break;
          case 5:
            slider_options = {
              ...slider_options,
  
              loop: true,
            }
            break;
          case 6:
            slider_options = {
              ...slider_options,
  
              loop: true,
            }
            break;
          case 7:
            slider_options = {
              ...slider_options,
  
              loop: true,
  
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
              
              loop: true,
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
  
          case 140:
            slider_options = {
              ...slider_options,
  
              loop: true,
  
            }
            break;
  
  
          case 160:
            slider_options = {
              ...slider_options,
  
              spaceBetween: 20,
  
              breakpoints: {
                [BREAKPOINT]: {
                  spaceBetween: 40,
                },
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

// Development slider
{
  $(() => {
    const swiperThumbs = new Swiper('.development__names', {
      // freeMode: false,
      // loop: true,
      slidesPerView: 'auto',
      // initialSlide: 0,
      slideToClickedSlide: true,

      spaceBetween: 0,
  
      breakpoints: {
        [BREAKPOINT]: {
          spaceBetween: 0,
        },
      },
    })
    const swiperSlider = new Swiper('.development__desc', {
      loop: true,
      // freeMode: false,
      spaceBetween: 0,
      slidesPerView: 1,
      // initialSlide: 0,

      thumbs: {
        swiper: swiperThumbs,
      },

      // spaceBetween: 0,
  
      // breakpoints: {
      //   [BREAKPOINT]: {
      //     spaceBetween: 0,
      //   },
      // },

      // controller: {
      //   control: swiperThumbs
      // },
    })
    // swiperThumbs.controller.control = swiperSlider;
    // swiperSlider.controller.control = swiperThumbs;

    const btnPrev = $('.lab-btn-prev');
    const btnNext = $('.lab-btn-next');

    btnPrev.on('click', () => {
      swiperThumbs.slidePrev();
      swiperSlider.slidePrev();
    })
    btnNext.on('click', () => {
      swiperThumbs.slideNext();
      swiperSlider.slideNext();
    })
  })
}

// Mission slider
{
  $(() => {
    const swiperThumbs = new Swiper('.mission__thumbs', {
      slidesPerView: 'auto',
      initialSlide: 1,
      slideToClickedSlide: true,
      spaceBetween: 20,
      // centeredSlides: true,
      slideThumbActiveClass: 'swiper-slide-active',
      freeMode: true,
      // slidesPerView: 1,

      breakpoints: {
        [BREAKPOINT]: {
          spaceBetween: 60,
        },
      },
    })

    const swiperSlider = new Swiper('.mission__slider', {
      loop: true,
      allowTouchMove: false,
      initialSlide: 1,

      thumbs: {
        swiper: swiperThumbs,
      },
    })

    const btnPrev = $('.mis-btn-prev');
    const btnNext = $('.mis-btn-next');

    btnPrev.on('click', () => {
      swiperThumbs.slidePrev();
      swiperSlider.slidePrev();
    })
    btnNext.on('click', () => {
      swiperThumbs.slideNext();
      swiperSlider.slideNext();
    })
  })
}

// slide description
{
  $(() => {

    if ($('.index').length !== 0) {
      const fps = 30;

      update()

      function update() {
        const indexSlide = $('.swiper-slide');
        indexSlide.each(function () {
          const slide = $(this);
          const slideImg = slide.find('.index__mid-img');
          const slideDesc = slide.find('.index__mid-description');
          const imgWidth = slideImg.width();

          slideDesc.css('max-width', imgWidth);
        });
      }

      function resize() {
        setTimeout(() => {
          update()
          $(window).one('resize', resize);
        }, 1000 / fps);
      };

      $(window).one('resize', resize)
    }
  });
}

