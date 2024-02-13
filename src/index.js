import modal from "./modules/modal";
import timer from "./modules/timer";
import scrollTop from "./modules/scrollTop";
import sliderServices from "./modules/sliderServices";
import calc from "./modules/calc";
import carousel from "./modules/carousel";
import sercificates from "./modules/sertificates";
import sendForm from "./modules/sendForm";

sercificates();
scrollTop();
modal();
sliderServices();
carousel();
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
