const sliderServices = () => {
    const serviceArrows = document.querySelector('.services-arrows')
    const slides = document.querySelectorAll('.slider-slide');
    const width = window.innerWidth;
    let activeSlide = 0;


    if( width <= 576) {
        slides[1].classList.remove('active-slide');
    }


    const renderSlide = () => {       
        if( width <= 576 ){
            
            for(let i = 0; i < slides.length; i++){           
                if(i >= activeSlide && i <= activeSlide){

                    slides[i].classList.add('active-slide');
                } else {
                    slides[i].classList.remove('active-slide');
                }
            }

        } else {
            for(let i = 0; i < slides.length; i++){           
                if(i >= activeSlide && i <= activeSlide + 1){
                    slides[i].classList.add('active-slide');
                } else {
                    slides[i].classList.remove('active-slide');
                }
            } 
        }
    }

    const prev = () => {
        if(activeSlide - 1 >= 0){
            activeSlide--;
            renderSlide();
        }
    };

    const next = () => {
        if(activeSlide + 2 < slides.length){
            activeSlide++; 
            renderSlide();
        }
    };

    serviceArrows.addEventListener('click', e => {
        if (e.target.closest('.services__arrow--right')) {
            next();
        }

        if (e.target.closest('.services__arrow--left')) {
            prev();
        }



    });

}

export default sliderServices;