/* Pegando os botões */
const buttonHeader = document.getElementById('button-header');
const buttonExplication = document.getElementById('button-explication');

/* Função que abre o Modal */
const openModal = () => {
    console.log('oi');
}

/* Eventos que verificam o click */
buttonHeader.addEventListener('click', openModal);
buttonExplication.addEventListener('click', openModal);