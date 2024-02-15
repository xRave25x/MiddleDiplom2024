import modal from "./modules/modal";
import timer from "./modules/timer";
import scrollTop from "./modules/scrollTop";
import calc from "./modules/calc";
import carousel from "./modules/carousel";
import sercificates from "./modules/sertificates";
import sendForm from "./modules/sendForm";

sercificates();
scrollTop();
modal();
carousel({
    slidesName: '.benefits__item',
    someArrows: '.benefits-arrows',
    arrowRight: '.benefits__arrow--right',
    arrowLeft: '.benefits__arrow--left',
    count: 3,
    countSecond: 2
});
carousel({
    slidesName: '.slider-slide',
    someArrows: '.services-arrows',
    arrowRight: '.services__arrow--right',
    arrowLeft: '.services__arrow--left',
    count: 2,
    countSecond: 1
});
calc();
sendForm({
    formName: 'form[name="action-form"]',
    someElemId: 'calc-total'
});

sendForm({
    formName: 'form[name="action-form2"]',
    someElemId: 'calc-total'
});

timer('20 february 2024');
