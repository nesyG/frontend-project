class CustomElement extends HTMLElement {
    constructor() {
        super();
        this.toggleButton = this.querySelector('.main-section__item-btn-toggle');
        this.textElement = this.querySelector('.main-section__item-description2');
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
        if (this.isVisible) {
            this.textElement.style.maxHeight = '0';
            this.textElement.classList.remove('main-section__item-description2--visible');
        } else {
            this.textElement.style.maxHeight = this.textElement.scrollHeight + 'px';
            this.textElement.classList.add('main-section__item-description2--visible');
        }
        
        this.isVisible = !this.isVisible;
    }

    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                this.classList.add('main-section--visible');
            } else {
                this.classList.remove('main-section--visible');
            }
        });
    }
}

customElements.define('custom-element', CustomElement);
