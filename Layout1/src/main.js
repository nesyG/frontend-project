class ImageTextSection extends HTMLElement {
    constructor() {
        super();
        this.toggleButton = this.querySelector('.image-text-section__item-btn-toggle');
        this.textElement = this.querySelector('.image-text-section__item-description2');
        this.isVisible = false;

        this.toggleText = this.toggleText.bind(this);
        this.handleIntersection = this.handleIntersection.bind(this);
    }

    connectedCallback() {
        this.toggleButton.addEventListener('click', this.toggleText);

        const observerOptions = {
            root: null,
            threshold: 0.1
        };

        this.observer = new IntersectionObserver(this.handleIntersection, observerOptions);
        this.observer.observe(this);
    }

    disconnectedCallback() {
        this.toggleButton.removeEventListener('click', this.toggleText);
        this.observer.disconnect();
    }

    toggleText() {
        this.toggleButton.classList.add('image-text-section__item-btn-toggle--hidden');

        setTimeout(() => {
            this.toggleButton.style.display = 'none';
            this.textElement.style.maxHeight = this.textElement.scrollHeight + 'px';
            this.textElement.classList.add('image-text-section__item-description2--visible');
            this.textElement.addEventListener('transitionend', () => {
                this.textElement.style.maxHeight = 'none';
            }, { once: true });
        }, 400); 
    }

    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                this.classList.add('image-text-section--visible');
            } else {
                this.classList.remove('image-text-section--visible');
            }
        });
    }
}

customElements.define('image-text-section', ImageTextSection);
