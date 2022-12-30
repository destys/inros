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

document.addEventListener( 'wpcf7submit', function( event ) {
    if (event.detail.status === 'mail_sent') {
        flsModules.popup.open("#success");
        document.documentElement.classList.remove('lock');
    }
}, false );

//========================================================================================================================================================

// Menu

const menuItemsWithSub =document.querySelectorAll('.menu-item-has-children');

if (menuItemsWithSub.length) {
    menuItemsWithSub.forEach(el => {
        el.addEventListener('click', ()=> {
            el.classList.toggle('_show');
        })
    })
}
