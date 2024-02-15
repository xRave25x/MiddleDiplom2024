const carousel = ({slidesName,someArrows,arrowRight,arrowLeft,count,countSecond}) => {
    const slides = document.querySelectorAll(slidesName);
    const arrows = document.querySelector(someArrows);
    const width = window.innerWidth;

    let activeSlide = 0;
    let coutActiveSlide = width <= 576 ? 1: count;

    if( width <= 576) {
        const slidesText = document.querySelectorAll('.benefit-title');

        slides[1].classList.remove('active-slide');
        slides[2].classList.remove('active-slide');

        slidesText.forEach(slide => {
            slide.style.lineHeight = '1.5em';
            slide.style.height = '3em';
        })

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
                if(i >= activeSlide && i <= activeSlide + countSecond){
                    slides[i].classList.add('active-slide');
                } else {
                    slides[i].classList.remove('active-slide');
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
        if (e.target.closest(arrowRight)) {
            next();
        }

        if (e.target.closest(arrowLeft)) {
            prev();
        }
    });

}

export default carousel;