class Carousel {
    constructor() {
        this.indicatorItem = document.querySelectorAll('[data-js="dot"]');
        this.carouselItem = document.querySelectorAll('[data-js="slide"]');

        this.indicatorIndex();

    }

    hasClass(elem, klass) {
        return (" " + elem.className + " ").indexOf(" " + klass + " ") > -1;
    }

    itemSize() {
        return this.carouselItem.length;
    }

    indicatorSize() {
        return this.indicatorItem.length;
    }

    getItemStyle() {
        for (let i = 0; i < this.itemSize(); i++) {
            if (this.hasClass(this.carouselItem[i], 'active'))
                return window.getComputedStyle(this.carouselItem[i], null);
        }
    }

    itemStyles() {
        let margin = parseInt(this.getItemStyle().marginLeft.replace('px', '')) + parseInt(this.getItemStyle().marginRight.replace('px', ''));
        let width = parseInt(this.getItemStyle().width.replace('px', ''));

        return margin + width;
    }

    indicatorIndex() {
        for (let i = 0; i < this.indicatorSize(); i++) {
            let card = this.carouselItem[i];
            let indicator = this.indicatorItem[i];
            indicator.addEventListener('click', function() {
                for (let i = 0; i < this.indicatorSize(); i++) {
                    this.indicatorItem[i].classList.remove('active');
                }
                if (i === parseInt(card.getAttribute("data-carousel")))
                    card.classList.add('active');
            })
        }
    }




}

export default Carousel;