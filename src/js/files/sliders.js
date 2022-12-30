/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, {
	Autoplay,
	EffectFade,
	Navigation,
	Pagination
} from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.intro__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.intro__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 30,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.intro__nav .prev',
				nextEl: '.intro__nav .next',
			},

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			on: {

			}
		});
	}
	if (document.querySelector('.quiz__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		const calcSwiper = new Swiper('.quiz__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, EffectFade],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 30,
			autoHeight: true,
			speed: 800,
			allowTouchMove: false,
			effect: 'fade',
			// Пагинация

			pagination: {
				el: '.header-quiz__pagination',
				clickable: true,
			},

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.side-quiz__nav .prev',
				nextEl: '.side-quiz__nav .next',
			},
			// События
			on: {
				slideChange: function () {
					let slidesTitle = document.querySelectorAll('._windows-quiz .header-quiz__title');
					if (slidesTitle.length) {
						slidesTitle.forEach(title => {
							title.style.display = 'none';
							slidesTitle[calcSwiper.activeIndex].style.display = 'block';
						})
					}
				},
			}
		});
	}
	if (document.querySelector('.reviews__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.reviews__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 3,
			spaceBetween: 30,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация

			pagination: {
				el: '.header-calc__pagination',
				clickable: true,
			},


			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.header-reviews__nav .prev',
				nextEl: '.header-reviews__nav .next',
			},

			// Брейкпоинты

			breakpoints: {
				320: {
					slidesPerView: 2,
					spaceBetween: 20,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 5,
					spaceBetween: 30,
				},
				1500: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
			},

			// События
			on: {

			}
		});
	}
	if (document.querySelector('.reviews__slider_fw')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.reviews__slider_fw', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 3,
			spaceBetween: 30,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация

			pagination: {
				el: '.header-calc__pagination',
				clickable: true,
			},


			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.header-reviews__nav .prev',
				nextEl: '.header-reviews__nav .next',
			},

			// Брейкпоинты

			breakpoints: {
				320: {
					slidesPerView: 2,
					spaceBetween: 20,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 5,
					spaceBetween: 30,
				},
			},

			// События
			on: {

			}
		});
	}
	if (document.querySelector('.cases__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		const calcSwiper = new Swiper('.cases__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 3,
			spaceBetween: 20,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},

			breakpoints: {
				320: {
					slidesPerView: 3,
					spaceBetween: 6,
				},
				992: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
			},
		});
	}
	if (document.querySelector('.future-gazebo__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		const calcSwiper = new Swiper('.future-gazebo__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 20,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.future-gazebo__nav .prev',
				nextEl: '.future-gazebo__nav .next',
			},

			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 6,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				991: {
					slidesPerView: 3,
				},
				1268: {
					slidesPerView: 4,
				},
			},
		});
	}
	if (document.querySelector('.case__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.case__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 30,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.case__nav .prev',
				nextEl: '.case__nav .next',
			},
		});
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});