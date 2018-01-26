class Carousel {
    constructor() {
        this.dots = document.getElementsByClassName("dot");
        this.slides = document.getElementsByClassName("slides");
        this.wrapper = document.querySelector('.carousel__wrapper');
        this.slideIndex = 1;
        this.handleEvents();
        // this.showSlides(this.slideIndex);
    }

    handleEvents() {
        // Array.prototype.forEach.call(this.dots, (element, index) => {
        //     element.addEventListener('click', () => {
        //         this.currentSlide(index + 1);
        //     });
        // })
        console.log(this.wrapper);
    }

    dotsSize() {
        return this.slides.length + 1;
    }

    dotsConstructor() {
        let d = document.createDocumentFragment();
        let dot = document.createElement('span');
        let dotClass = dot.className = 'dot';
        for (let i = 0; i < this.dotsSize(); i++) {
            d.appendChild(dot);
        }
        document.querySelector('.dots').appendChild(d);
    }

    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }

    currentSlide(n) {
        this.showSlides(this.slideIndex = n);
    }

    showSlides(n) {
        let i;
        if (n > this.slides.length) {
            this.slideIndex = 1;
        }
        if (n < 1) {
            this.slideIndex = this.slides.length;
        }

        for (i = 0; i < this.dots.length; i++) {
            this.dots[i].className = this.dots[i].className.replace(" active", "");
        }
        this.dots[this.slideIndex - 1].className += " active";
    }
}

export default Carousel;