class Delete {
    constructor() {
        this.deleteItem = document.querySelectorAll('[data-js="delete"]');
        this.clickDelete();
    }

    clickDelete() {

        let cardItem = document.querySelectorAll('[data-js="item"]');

        Array.prototype.forEach.call(this.deleteItem, function(element, index) {
            element.addEventListener('click', function(e) {
                e.preventDefault();
                Array.prototype.forEach.call(cardItem, function(el, ind) {
                    if (index === ind) {
                        el.classList.add('remove');
                        setTimeout(() => {
                            el.parentNode.removeChild(el);
                        }, 500);
                    }
                })
            })
        })
    }
}

export default Delete;