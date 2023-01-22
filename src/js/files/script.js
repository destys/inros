// Подключение функционала "Чертогов Фрилансера"
import {
    isMobile,
    menuClose
} from "./functions.js";
// Подключение списка активных модулей
import {
    flsModules
} from "./modules.js";


const aboutTabs = document.querySelectorAll('.tabs-about .tabs__title');
const aboutTabsImage = document.querySelectorAll('.tabs-about .tabs-about__image');

if (aboutTabs.length && aboutTabsImage.length) {
    aboutTabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            aboutTabsImage.forEach(img => {
                img.classList.remove('_active');
            })
            aboutTabsImage[index].classList.add('_active');
        })
    })
}

//========================================================================================================================================================

// CF7

document.addEventListener('wpcf7submit', function (event) {
    if (event.detail.status === 'mail_sent') {
        flsModules.popup.open("#success");
        document.documentElement.classList.remove('lock');
    }
}, false);

//========================================================================================================================================================

// Menu

const menuItemsWithSub = document.querySelectorAll('.menu-item-has-children');

if (menuItemsWithSub.length) {
    menuItemsWithSub.forEach(el => {
        el.addEventListener('click', () => {
            el.classList.toggle('_show');
        })
    })
}

//========================================================================================================================================================

const partItems = document.querySelectorAll('.item-parts');
const partDots = document.querySelectorAll('.parts__dots ._dot');

if (partItems.length) {
    partItems.forEach((el, i) => {
        el.addEventListener('mouseover', () => {
            partDots.forEach(el => el.classList.remove('_current'));
            partDots[i].classList.add('_current')
        });
    })
}

//========================================================================================================================================================

// Quiz

const quizSlides = document.querySelectorAll('.slide-quiz');
const quizPrevBtn = document.querySelector('.side-quiz__nav .prev');
const quizNextBtn = document.querySelector('.side-quiz__next');

if (quizSlides.length && quizNextBtn) {
    quizSlides.forEach(slide => {
        const inputItems = slide.querySelectorAll('.options__item');

        inputItems.forEach(inp => {
            inp.addEventListener('click', () => quizNextBtn.classList.remove('_disabled'));
            quizNextBtn.addEventListener('click', () => quizNextBtn.classList.add('_disabled'));
            quizPrevBtn.addEventListener('click', () => quizNextBtn.classList.remove('_disabled'));
        })
    })

}

//========================================================================================================================================================

//Валидация калькуляторов

const inputTel = document.querySelector('input.validation-tel');
const calcValidBtn = document.querySelector('.validation-btn');

if (inputTel && calcValidBtn) {
    inputTel.addEventListener('input', () => {
        inputTel.value.includes('_') ? calcValidBtn.disabled = true : calcValidBtn.disabled = false;
    })
}