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

// Закрытие бургер меню

const burger = document.querySelector('.burger');

if (burger) {
    burger.addEventListener("click", function (e) {
        if (!e.target.classList.contains('burger__wrapper')) {
            menuClose();
        }
    });
}

//========================================================================================================================================================

// CF7

document.addEventListener( 'wpcf7submit', function( event ) {
    if (event.detail.status === 'mail_sent') {
        flsModules.popup.open("#success");
        document.documentElement.classList.remove('lock');
    }
}, false );
