/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/timer */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_scrollTop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scrollTop */ \"./src/modules/scrollTop.js\");\n/* harmony import */ var _modules_sliderServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/sliderServices */ \"./src/modules/sliderServices.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/calc */ \"./src/modules/calc.js\");\n/* harmony import */ var _modules_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/carousel */ \"./src/modules/carousel.js\");\n/* harmony import */ var _modules_sertificates__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/sertificates */ \"./src/modules/sertificates.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_sertificates__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n(0,_modules_scrollTop__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_sliderServices__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_carousel__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\r\n    formName: 'form[name=\"action-form\"]',\r\n    someElemId: 'calc-total'\r\n});\r\n\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\r\n    formName: 'form[name=\"action-form2\"]',\r\n    someElemId: 'calc-total'\r\n});\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('20 february 2024');\r\n\n\n//# sourceURL=webpack://middle_diplom/./src/index.js?");

/***/ }),

/***/ "./src/modules/calc.js":
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calc = () => {\r\n    const calcBlock = document.getElementById('calc')\r\n    const calcType = document.getElementById('calc-type');\r\n    const calcTypeMaterial = document.getElementById('calc-type-material');\r\n    const calcInput = document.getElementById('calc-input');\r\n    const calcTotal = document.getElementById('calc-total');\r\n\r\n\r\n\r\n    const countCalc = () => {\r\n        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;\r\n        const calcTypeMaterialValue = calcTypeMaterial.options[calcTypeMaterial.selectedIndex].value;\r\n        const calcInputValue = calcInput.value;\r\n\r\n        let totalValue = 0;\r\n\r\n        totalValue = Math.round(calcInputValue * calcTypeValue * calcTypeMaterialValue)\r\n\r\n        calcTotal.value = totalValue;\r\n    }\r\n\r\n    if(calcBlock) {\r\n        calcBlock.addEventListener('input', e => {\r\n\r\n            if(e.target === calcType || e.target === calcTypeMaterial || e.target === calcInput){\r\n                countCalc();\r\n            }\r\n    })\r\n\r\n    }\r\n\r\n    if(calcInput){\r\n        calcInput.addEventListener('input', e => {\r\n            e.target.value = e.target.value.replace(/[^0-9]/gi, '');\r\n        })\r\n    }\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/calc.js?");

/***/ }),

/***/ "./src/modules/carousel.js":
/*!*********************************!*\
  !*** ./src/modules/carousel.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst carousel = () => {\r\n    const slides = document.querySelectorAll('.benefits__item');\r\n    const arrows = document.querySelector('.benefits-arrows');\r\n    const wrapSlides = document.querySelector('.benefits-wrap');\r\n    const width = window.innerWidth;\r\n\r\n    let activeSlide = 0;\r\n    let coutActiveSlide = width <= 576 ? 1: 3;\r\n\r\n    if( width <= 576) {\r\n        const slidesText = document.querySelectorAll('.benefit-title');\r\n\r\n        slides[1].classList.remove('activeSlide');\r\n        slides[2].classList.remove('activeSlide');\r\n        wrapSlides.style.justifyContent = 'center';\r\n\r\n        // исправил изменение высоты элемента benefits__item, который изменял высоту в зависимости от длинны текста\r\n        slidesText.forEach(slide => {\r\n            slide.style.lineHeight = '1.5em';\r\n            slide.style.height = '3em';\r\n        })\r\n\r\n    }\r\n\r\n    const renderSlide = () => {  \r\n        \r\n        if( width <= 576 ){\r\n\r\n            for(let i = 0; i < slides.length; i++){           \r\n                if(i >= activeSlide && i <= activeSlide){\r\n                    slides[i].classList.add('activeSlide');\r\n                } else {\r\n                    slides[i].classList.remove('activeSlide');\r\n                }\r\n            }\r\n\r\n        } else {\r\n            for(let i = 0; i < slides.length; i++){           \r\n                if(i >= activeSlide && i <= activeSlide + 2){\r\n                    slides[i].classList.add('activeSlide');\r\n                } else {\r\n                    slides[i].classList.remove('activeSlide');\r\n                }\r\n            } \r\n        }\r\n    }\r\n\r\n    const prev = () => {\r\n\r\n        if(activeSlide > 0){\r\n            activeSlide--;\r\n        } else {\r\n            activeSlide = slides.length  - coutActiveSlide;\r\n        }\r\n        renderSlide();\r\n    };\r\n\r\n\r\n    const next = () => {\r\n\r\n        if(activeSlide < slides.length - coutActiveSlide){\r\n            activeSlide++; \r\n        } else {\r\n            activeSlide = 0;\r\n        }\r\n        renderSlide();\r\n\r\n    };\r\n\r\n    arrows.addEventListener('click', e => {\r\n        if (e.target.closest('.benefits__arrow--right')) {\r\n            next();\r\n        }\r\n\r\n        if (e.target.closest('.benefits__arrow--left')) {\r\n            prev();\r\n        }\r\n    });\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (carousel);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/carousel.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n    const overlay = document.querySelector('.overlay');\r\n    const headerModal = document.querySelector('.header-modal');\r\n    const btnCall = document.querySelector('.button');\r\n    const servicesBtns = document.querySelectorAll('.service-button');\r\n    const servicesModal = document.querySelector('.services-modal');\r\n    const modal = document.querySelectorAll('.modalContainer');\r\n    const close = document.querySelectorAll('.closeModal');\r\n\r\n    \r\n    const closeModal = () => {\r\n        modal.forEach(modalElem => {\r\n            modalElem.style.display = 'none';\r\n        })\r\n        overlay.style.display = 'none';\r\n    }\r\n\r\n    btnCall.addEventListener('click', () => {\r\n        overlay.style.display = 'block';\r\n        headerModal.style.display = 'block';\r\n    })\r\n\r\n    servicesBtns.forEach(button => button.addEventListener('click', () => {\r\n        servicesModal.style.display = 'block';\r\n        overlay.style.display = 'block';\r\n    }))\r\n\r\n    close.forEach(modalElem => modalElem.addEventListener('click', () => {\r\n\r\n        closeModal();\r\n    }));\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/scrollTop.js":
/*!**********************************!*\
  !*** ./src/modules/scrollTop.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scrollTop = () => {\r\n    const scrollBtn = document.querySelector('.smooth-scroll');\r\n    let timer;\r\n\r\n    const scroll = () => {\r\n        const top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);\r\n\r\n\t    if(top > 0) {\r\n\t\t    window.scrollBy(0,-100);    \r\n\t    } else clearInterval(timer);\r\n    };\r\n\r\n    scrollBtn.addEventListener('click', () => {  \r\n\r\n        timer = setInterval(() => {\r\n            scroll();\r\n        },20)\r\n    });\r\n\r\n    document.addEventListener('DOMContentLoaded', () => {\r\n\r\n        window.onscroll = () => {\r\n            if (window.scrollY > 480) {\r\n                scrollBtn.style.display = \"block\";\r\n            } else {\r\n                scrollBtn.style.display = \"none\";\r\n            };\r\n        };\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollTop);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/scrollTop.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validate = (formData) => {\r\n    const fio = formData.get('fio');\r\n    const phone = formData.get('phone');\r\n\r\n    if(fio === '' && phone === ''){\r\n        return false;\r\n    }\r\n\r\n    return true;\r\n}\r\n\r\nconst sendForm = ({ formName, someElemId }) => {\r\n    let form = document.querySelector(formName);\r\n    const name = form.querySelector('input[name=\"fio\"]');\r\n    const phone = form.querySelector('input[name=\"phone\"]')\r\n    const maxlenght = 16;\r\n\r\n    name.addEventListener('input', () => {\r\n        name.value = name.value.replace(/[^a-zа-яё]/gi, '');\r\n    });\r\n\r\n    phone.addEventListener('input', () => {\r\n        phone.value = phone.value.replace(/[^+0-9]/gi, '');\r\n        if (phone.value.length >= maxlenght) {\r\n            phone.value = phone.value.substr(0,maxlenght);\r\n        }\r\n    });\r\n\r\n    const sendData = (formData, type) => {\r\n\r\n        \r\n        let body;\r\n        let headers;\r\n        if(type === 'json'){\r\n            body = {};\r\n            formData.forEach((val, key) => {\r\n                body[key] = val;\r\n            });\r\n            body = JSON.stringify(body);\r\n            headers = {\r\n                'Content-Type': 'application/json'\r\n            }\r\n        }else{\r\n            body = formData;\r\n            headers = {\r\n                'Content-Type': 'multipart/form-data'\r\n            }\r\n        }\r\n\r\n        return fetch('https://jsonplaceholder.typicode.com/posts', {\r\n            method: 'POST',\r\n            body: body,\r\n            headers: headers\r\n        }).then(res => res.json());\r\n\r\n    } \r\n    \r\n    form.addEventListener('submit', e => {\r\n        e.preventDefault();\r\n\r\n        let stbl = form.querySelector('.statusBlock');\r\n        if(stbl) stbl.remove();\r\n\r\n        const statusBlock = document.createElement('div');\r\n        statusBlock.classList.add('statusBlock');\r\n        form.append(statusBlock);\r\n\r\n        let formData = new FormData(document.querySelector(formName));\r\n        \r\n        const someElem = document.getElementById(someElemId);\r\n\r\n        if(someElem){\r\n            formData.set(someElemId, someElem.value);\r\n        }\r\n\r\n        try{\r\n            \r\n            \r\n            if(!validate(formData)){\r\n                throw new Error('Заполните все поля!');\r\n                \r\n            } \r\n    \r\n            sendData(formData, 'json').then(data => {\r\n                statusBlock.innerText = 'спасибо';\r\n                setTimeout(() => {\r\n                    statusBlock.remove();\r\n                }, 3000);\r\n            }).catch(() => {\r\n                throw new Error('Ошибка');\r\n            })\r\n\r\n        }catch(e){\r\n            statusBlock.innerText = e.message;\r\n        }\r\n\r\n        \r\n    });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/sendForm.js?");

/***/ }),

/***/ "./src/modules/sertificates.js":
/*!*************************************!*\
  !*** ./src/modules/sertificates.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sercificates = () => {\r\n    const modalBlock = document.querySelector('.modalSertificate');\r\n    const modalSertificateItems = document.querySelectorAll('.sertificate-document');\r\n    const documentOverlays = document.querySelectorAll('.document-overlay');\r\n    const overlay = document.querySelector('.overlay');\r\n\r\n    const modalDiv = document.createElement('div');\r\n    modalDiv.classList.add('modalBlock');\r\n    modalBlock.prepend(modalDiv);\r\n\r\n    modalSertificateItems.forEach(item => {\r\n        item.removeAttribute('href')\r\n        \r\n    }) \r\n\r\n    modalSertificateItems.forEach(item => item.addEventListener('click', e =>{\r\n        e.preventDefault;\r\n        modalDiv.style.display = 'block';\r\n        overlay.style.display = 'block';\r\n    })\r\n    );\r\n\r\n    documentOverlays.forEach(item => item.addEventListener('mouseenter', () =>{\r\n        item.style.opacity = '1';       \r\n    })\r\n    );\r\n\r\n    documentOverlays.forEach(item => item.addEventListener('mouseleave', () =>{\r\n\r\n        item.style.opacity = '0';\r\n    })\r\n    );\r\n\r\n    overlay.addEventListener('click', () =>{\r\n        modalDiv.style.display = 'none';\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sercificates);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/sertificates.js?");

/***/ }),

/***/ "./src/modules/sliderServices.js":
/*!***************************************!*\
  !*** ./src/modules/sliderServices.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sliderServices = () => {\r\n    const serviceArrows = document.querySelector('.services-arrows')\r\n    const slides = document.querySelectorAll('.sliderSlide');\r\n    const width = window.innerWidth;\r\n    let activeSlide = 0;\r\n\r\n\r\n    if( width <= 576) {\r\n        slides[1].classList.remove('activeSlide');\r\n    }\r\n\r\n\r\n    const renderSlide = () => {       \r\n        if( width <= 576 ){\r\n            \r\n            for(let i = 0; i < slides.length; i++){           \r\n                if(i >= activeSlide && i <= activeSlide){\r\n\r\n                    slides[i].classList.add('activeSlide');\r\n                } else {\r\n                    slides[i].classList.remove('activeSlide');\r\n                }\r\n            }\r\n\r\n        } else {\r\n            for(let i = 0; i < slides.length; i++){           \r\n                if(i >= activeSlide && i <= activeSlide + 1){\r\n                    slides[i].classList.add('activeSlide');\r\n                } else {\r\n                    slides[i].classList.remove('activeSlide');\r\n                }\r\n            } \r\n        }\r\n    }\r\n\r\n    const prev = () => {\r\n        if(activeSlide - 1 >= 0){\r\n            activeSlide--;\r\n            renderSlide();\r\n        }\r\n    };\r\n\r\n    const next = () => {\r\n        if(activeSlide + 2 < slides.length){\r\n            activeSlide++; \r\n            renderSlide();\r\n        }\r\n    };\r\n\r\n    serviceArrows.addEventListener('click', e => {\r\n        if (e.target.closest('.services__arrow--right')) {\r\n            next();\r\n        }\r\n\r\n        if (e.target.closest('.services__arrow--left')) {\r\n            prev();\r\n        }\r\n\r\n\r\n\r\n    });\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderServices);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/sliderServices.js?");

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = deadLine => {\r\n    const timerDays = document.querySelectorAll('#timer-days');\r\n    const timerHours = document.querySelectorAll('#timer-hours');\r\n    const timerMinutes = document.querySelectorAll('#timer-minutes');\r\n    const timerSeconds = document.querySelectorAll('#timer-seconds');\r\n\r\n    let interval = 0;\r\n\r\n    const getTimeRemaning = () => {\r\n        const dateStop = new Date(deadLine).getTime();\r\n        const dateNow = new Date().getTime();\r\n        const timeRemaning = (dateStop - dateNow) / 1000;\r\n        let days = Math.floor((timeRemaning / 60 / 60 / 24) % 60);\r\n        let hours = Math.floor((timeRemaning / 60 / 60) % 60);\r\n        let minutes = Math.floor((timeRemaning / 60) % 60);\r\n        let seconds = Math.floor(timeRemaning % 60);\r\n\r\n\r\n        if (seconds < 10) { seconds = '0' + seconds; }\r\n        if (minutes < 10) { minutes = '0' + minutes; }\r\n        if (hours < 10) { hours = '0' + hours; }\r\n        return { timeRemaning, days, hours, minutes, seconds };\r\n    };\r\n    const updateClock = () => {\r\n        const getTime = getTimeRemaning();\r\n        timerDays.forEach(timerDay => {\r\n            timerDay.textContent = getTime.days\r\n        })\r\n        timerHours.forEach(timerHour => {\r\n            timerHour.textContent = getTime.hours\r\n        })\r\n        timerMinutes.forEach(timerMinute => {\r\n            timerMinute.textContent = getTime.minutes\r\n        })\r\n        timerSeconds.forEach(timerSecond => {\r\n            timerSecond.textContent = getTime.seconds\r\n        })\r\n\r\n        if (getTime.timeRemaning < 0) {\r\n            clearInterval(interval);\r\n            timerDays.forEach(timerDay => {\r\n                timerDay.textContent = '00';\r\n            })\r\n            timerHours.forEach(timerHour => {\r\n                timerHour.textContent = '00';\r\n            })\r\n            timerMinutes.forEach(timerMinute => {\r\n                timerMinute.textContent = '00';\r\n            })\r\n            timerSeconds.forEach(timerSecond => {\r\n                timerSecond.textContent = '00';\r\n            })\r\n\r\n        }\r\n    };\r\n    interval = setInterval(updateClock, 1000);\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/timer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;