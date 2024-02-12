const carousel = () => {
    const slides = document.querySelectorAll('.benefits__item');
    const arrows = document.querySelector('.benefits-arrows');
    const wrapSlides = document.querySelector('.benefits-wrap');
    const width = window.innerWidth;

    let activeSlide = 0;

    if( width <= 576) {
        slides[1].classList.remove('activeSlide');
        slides[2].classList.remove('activeSlide');
        wrapSlides.style.justifyContent = 'center';
    }

    const renderSlide = () => {       
        if( width <= 576 ){
            
            for(let i = 0; i < slides.length; i++){           
                if(i >= activeSlide && i <= activeSlide){
                    slides[i].classList.add('activeSlide');
                } else {
                    slides[i].classList.remove('activeSlide');
                }
            }

        } else {
            for(let i = 0; i < slides.length; i++){           
                if(i >= activeSlide && i <= activeSlide + 2){
                    slides[i].classList.add('activeSlide');
                } else {
                    slides[i].classList.remove('activeSlide');
                }
            } 
        }
    }

    const prev = () => {
        if(activeSlide - 1 >= 0){
            activeSlide--;
            renderSlide();
        }
        // if(activeSlide <= slides.length -1) {
        //     activeSlide = 0;
        // }
    };

    const next = () => {
        if(activeSlide + 3 < slides.length){
            activeSlide++; 
            renderSlide();
        }
        if(activeSlide > slides.length) {
            activeSlide = 0;
        }
    };

    arrows.addEventListener('click', e => {
        if (e.target.closest('.benefits__arrow--right')) {
            next();
        }

        if (e.target.closest('.benefits__arrow--left')) {
            prev();
        }



    });

}

export default carousel;