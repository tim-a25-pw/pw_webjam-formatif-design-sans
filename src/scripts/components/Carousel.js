import Swiper from 'swiper/bundle';

export default class Carousel {
  constructor(element) {
    this.element = element;
    this.options = {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: this.element.querySelector('.swiper-pagination'),
        type: 'bullets',
        clickable: true,
      },
      navigation: {
        nextEl: this.element.querySelector('.swiper-button-next'),
        prevEl: this.element.querySelector('.swiper-button-prev'),
      },
    };
    this.init();
  }

  setOptions() {
    if ('hero' in this.element.dataset) {
      this.options.spaceBetween = 0;
    }

    if ('autoplay' in this.element.dataset) {
      this.options.autoplay = {
        delay: 3000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      };
    }

    if ('loop' in this.element.dataset) {
      this.options.loop = true;
    }

    if ('slides' in this.element.dataset) {
      this.options.slidesPerView =
        parseFloat(this.element.dataset.slides, 10) ||
        this.options.slidesPerView;
      this.options.breakpoints = {
        1280: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 3,
        },
        600: {
          slidesPerView: 2,
        },
      };
    }

    if ('split' in this.element.dataset) {
      this.options.slidesPerView =
        parseFloat(this.element.dataset.split, 10) ||
        this.options.slidesPerView;
      this.options.breakpoints = {
        1280: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 1,
        },
      };
    }
  }

  init() {
    this.setOptions();
    new Swiper(this.element, this.options);
  }
}
