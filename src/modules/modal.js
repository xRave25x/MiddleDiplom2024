const modal = () => {
    const overlay = document.querySelector('.overlay');
    const headerModal = document.querySelector('.header-modal');
    const btnCall = document.querySelector('.button');
    const servicesBtns = document.querySelectorAll('.service-button');
    const servicesModal = document.querySelector('.services-modal');

    btnCall.addEventListener('click', () => {
        overlay.style.display = 'block';
        headerModal.style.display = 'block';
    })

    servicesBtns.forEach(button => button.addEventListener('click', () => {
        servicesModal.style.display = 'block';
        overlay.style.display = 'block';
    }))

    document.addEventListener('click', e => {
        if (e.target.classList.contains('services-modal__close') || e.target.classList.contains('header-modal__close') || e.target.classList.contains('overlay')) {
            headerModal.style.display = 'none';
            servicesModal.style.display = 'none';
            overlay.style.display = 'none';
        }
    });

}

export default modal;