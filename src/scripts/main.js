import Delete from './components/Delete';
import Carousel from './components/Carousel';

class Main {
    constructor() {
        new Delete();
        new Carousel();

    }
}

window.addEventListener('load', function() {
    new Main();
})