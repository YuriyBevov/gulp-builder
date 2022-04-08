import { Modal } from '../classes/Modal.js';


let modals = document.querySelectorAll('.modal');

modals.forEach(modal => {
    new Modal(modal).init();
})

