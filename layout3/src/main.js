class CustomCarousel {
    constructor(containerSelector) {
        this.containerSelector = containerSelector;
        this.swiper = null;
        this.nextButton = document.querySelector('.carousel__button-next');
        this.prevButton = document.querySelector('.carousel__button-prev');
    }

    initialize() {
        this.swiper = new Swiper(this.containerSelector, {
            navigation: {
                nextEl: this.nextButton,
                prevEl: this.prevButton,
            },
            spaceBetween: 10,
            breakpoints: {
                375: {
                    slidesPerView: 1.13,
                },
                1440: {
                    slidesPerView: 3.1,
                }
            }
        });

        this.updateNavigationVisibility();

        this.swiper.on('slideChange', () => {
            this.updateNavigationVisibility();
            console.log('Active slide:', this.swiper.activeIndex);
        });
    }

    destroy() {
        if (this.swiper) {
            this.swiper.destroy(true, true);
            this.swiper = null;
            this.nextButton.style.display = 'none';
            this.prevButton.style.display = 'none';
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

    updateNavigationVisibility() {
        if (this.swiper.isBeginning) {
            this.prevButton.style.display = 'none';
        } else {
            this.prevButton.style.display = 'block';
        }

        if (this.swiper.isEnd) {
            this.nextButton.style.display = 'none';
        } else {
            this.nextButton.style.display = 'block';
        }
    }
}

const customCarousel = new CustomCarousel('.carousel');
customCarousel.initialize();

document.querySelector('.carousel__toggle-btn').addEventListener('click', () => {
    customCarousel.toggle();
});
