const carousel = () => {
    const slides = document.querySelectorAll('.benefits__item');
    const arrows = document.querySelector('.benefits-arrows');
    const wrapSlides = document.querySelector('.benefits-wrap');
    const width = window.innerWidth;

    let activeSlide = 0;
    let coutActiveSlide = width <= 576 ? 1: 3;

    if( width <= 576) {
        const slidesText = document.querySelectorAll('.benefit-title');

        slides[1].classList.remove('activeSlide');
        slides[2].classList.remove('activeSlide');
        wrapSlides.style.justifyContent = 'center';

        // исправил изменение высоты элемента benefits__item, который изменял высоту в зависимости от длинны текста
        slidesText.forEach(slide => {
            slide.style.lineHeight = '1.5em';
            slide.style.height = '3em';
        })

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

        if(activeSlide > 0){
            activeSlide--;
        } else {
            activeSlide = slides.length  - coutActiveSlide;
        }
        renderSlide();
    };


    const next = () => {

        if(activeSlide < slides.length - coutActiveSlide){
            activeSlide++; 
        } else {
            activeSlide = 0;
        }
        renderSlide();

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