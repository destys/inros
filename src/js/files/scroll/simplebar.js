// Подключение плагина из node_modules
import SimpleBar from 'simplebar';
// Подключение стилей из node_modules
import 'simplebar/dist/simplebar.css';

// Добавляем к блоку атрибут data-simplebar

// Также можно инициализировать следующим кодом, применяя настройки

if (document.querySelectorAll('[data-simplebar]').length) {
	document.querySelectorAll('[data-simplebar]').forEach(scrollBlock => {
		new SimpleBar(scrollBlock, {
			autoHide: false,
			height: 30,
			direction: 'rtl',
			scrollbarMinSize: 30,
			scrollbarMaxSize: 30,
		});
	});
}
