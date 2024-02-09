const modal = () => {
    const overlay = document.querySelector('.overlay');
    const headerModal = document.querySelector('.header-modal');
    const buttonCall = document.querySelector('.button');

    buttonCall.addEventListener('click', () => {
        overlay.style.display = 'block';
        headerModal.style.display = 'block';
    })

    headerModal.addEventListener('click', e => {
        if (e.target.classList.contains('header-modal__close')) {
            headerModal.style.display = 'none';
            overlay.style.display = 'none';
        }
    });


}

export default modal;