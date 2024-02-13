
const sercificates = () => {
    const modalBlock = document.querySelector('.modalSertificate');
    const modalSertificateItems = document.querySelectorAll('.sertificate-document');
    const documentOverlays = document.querySelectorAll('.document-overlay');
    const overlay = document.querySelector('.overlay');

    

    const modalDiv = document.createElement('div');
    modalDiv.classList.add('modalBlock');
    modalBlock.prepend(modalDiv);

    modalSertificateItems.forEach(item => {
        item.removeAttribute('href')
        
    }) 

    modalSertificateItems.forEach(item => item.addEventListener('click', e =>{
        e.preventDefault;
        modalDiv.style.display = 'block';
        overlay.style.display = 'block';
    })
    );

    documentOverlays.forEach(item => item.addEventListener('mouseenter', () =>{
        item.style.opacity = '1';       
    })
    );

    documentOverlays.forEach(item => item.addEventListener('mouseleave', () =>{

        item.style.opacity = '0';
    })
    );

    overlay.addEventListener('click', () =>{
        modalDiv.style.display = 'none';
    })
}

export default sercificates;