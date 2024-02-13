const modal = () => {
    const overlay = document.querySelector('.overlay');
    const headerModal = document.querySelector('.header-modal');
    const btnCall = document.querySelector('.button');
    const servicesBtns = document.querySelectorAll('.service-button');
    const servicesModal = document.querySelector('.services-modal');
    const modal = document.querySelectorAll('.modalContainer');
    const close = document.querySelectorAll('.close-modal');

    
    const closeModal = () => {
        modal.forEach(modalElem => {
            modalElem.style.display = 'none';
        })
        overlay.style.display = 'none';
    }

    btnCall.addEventListener('click', () => {
        overlay.style.display = 'block';
        headerModal.style.display = 'block';
    })

    servicesBtns.forEach(button => button.addEventListener('click', () => {
        servicesModal.style.display = 'block';
        overlay.style.display = 'block';
    }))

    close.forEach(modalElem => modalElem.addEventListener('click', () => {

        closeModal();
    }));

}

export default modal;