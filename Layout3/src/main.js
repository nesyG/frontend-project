class CustomCarousel {
    constructor(containerSelector) {
        this.containerSelector = containerSelector;
        this.swiper = null;
    }

    initialize() {
        this.swiper = new Swiper(this.containerSelector, {
            slidesPerView: 1,
            spaceBetween: 10,     
            navigation: {
                nextEl: '.carousel__button-next',
                prevEl: '.carousel__button-prev',
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                }
            }
        });

        this.swiper.on('slideChange', () => {
            console.log('Active slide:', this.swiper.activeIndex);
        });
    }

    destroy() {
        if (this.swiper) {
            this.swiper.destroy(true, true);
            this.swiper = null;
        }
    }

    toggle() {
        if (this.swiper) {
            this.destroy();
            document.body.classList.remove('carousel-active');
        } else {
            this.initialize();
            document.body.classList.add('carousel-active');
        }
    }
}

const customCarousel = new CustomCarousel('.carousel');
customCarousel.initialize();

document.querySelector('.carousel__toggle-btn').addEventListener('click', () => {
    customCarousel.toggle();
});