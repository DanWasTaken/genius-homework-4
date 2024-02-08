const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.getElementById('modal__open-btn');
const modalBtnClose = document.getElementById('modal__close-btn');

const toggleModal = () => modal.classList.toggle('is-hidden');

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);