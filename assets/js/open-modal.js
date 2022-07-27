/* Pegando o Modal */
const modal = document.getElementById('modal-form');

/* Pegando os botões */
const buttonHeader = document.getElementById('button-header');
const buttonExplication = document.getElementById('button-explication');
const buttonCloseModal = document.getElementById('close-modal');

/* Função que fecha o Modal */
const closeModal = () => {
    modal.classList.remove('d-flex');
    modal.classList.add('disabled');
    buttonCloseModal.removeEventListener('click', closeModal);
}

/* Função que abre o Modal */
const openModal = () => {
    modal.classList.remove('disabled');
    modal.classList.add('d-flex');
    buttonCloseModal.addEventListener('click', closeModal);
}

/* Eventos que verificam o click */
buttonHeader.addEventListener('click', openModal);
buttonExplication.addEventListener('click', openModal);