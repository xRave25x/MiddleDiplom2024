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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/timer */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_scrollTop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scrollTop */ \"./src/modules/scrollTop.js\");\n/* harmony import */ var _modules_sliderServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/sliderServices */ \"./src/modules/sliderServices.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_scrollTop__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_sliderServices__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('20 february 2024');\n\n//# sourceURL=webpack://middle_diplom/./src/index.js?");

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

/***/ "./src/modules/sliderServices.js":
/*!***************************************!*\
  !*** ./src/modules/sliderServices.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sliderServices = () => {\r\n    const serviceArrows = document.querySelector('.services-arrows')\r\n    const slides = document.querySelectorAll('.sliderSlide');\r\n    const width = window.innerWidth;\r\n    let activeSlide = 0;\r\n\r\n\r\n    if( width <= 576) {\r\n        slides[1].classList.remove('activeSlide');\r\n    }\r\n\r\n\r\n    const renderSlide = () => {       \r\n        if( width <= 576 ){\r\n            slides[1].classList.remove('activeSlide');\r\n            \r\n            for(let i = 0; i < slides.length; i++){           \r\n                if(i >= activeSlide && i <= activeSlide){\r\n\r\n                    slides[i].classList.add('activeSlide');\r\n                } else {\r\n                    slides[i].classList.remove('activeSlide');\r\n                }\r\n            }\r\n\r\n        } else {\r\n            for(let i = 0; i < slides.length; i++){           \r\n                if(i >= activeSlide && i <= activeSlide + 1){\r\n                    slides[i].classList.add('activeSlide');\r\n                } else {\r\n                    slides[i].classList.remove('activeSlide');\r\n                }\r\n            } \r\n        }\r\n    }\r\n\r\n    const prev = () => {\r\n        if(activeSlide - 1 >= 0){\r\n            activeSlide--;\r\n            renderSlide();\r\n        }\r\n    };\r\n\r\n    const next = () => {\r\n        if(activeSlide + 2 < slides.length){\r\n            activeSlide++; \r\n            renderSlide();\r\n        }\r\n    };\r\n\r\n    serviceArrows.addEventListener('click', e => {\r\n        if (e.target.closest('.services__arrow--right')) {\r\n            next();\r\n        }\r\n\r\n        if (e.target.closest('.services__arrow--left')) {\r\n            prev();\r\n        }\r\n\r\n\r\n\r\n    });\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderServices);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/sliderServices.js?");

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