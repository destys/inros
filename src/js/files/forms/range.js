// Подключение из node_modules
import * as noUiSlider from 'nouislider';

// Подключение стилей из scss/base/forms/range.scss 
// в файле scss/forms/forms.scss

// Подключение cтилей из node_modules
// import 'nouislider/dist/nouislider.css';

export function rangeInit() {
	const priceSliderWidth = document.querySelector('#width');
	const priceSliderLength = document.querySelector('#length');

	if (priceSliderWidth) {
		let textFrom = priceSliderWidth.getAttribute('data-from');
		console.log('textFrom: ', textFrom);
		let textTo = priceSliderWidth.getAttribute('data-to');
		console.log('textTo: ', textTo);
		noUiSlider.create(priceSliderWidth, {
			start: [1400], // [0,200000]
			connect: [true, false],
			range: {
				'min': [+textFrom],
				'max': [+textTo]
			}
		});

		const valueWidth = document.getElementById('width-value');

		valueWidth.addEventListener('change', setPriceValues);

		function setPriceValues() {
			let valueWidthValue;
			if (valueWidth.value != '') {
				valueWidthValue = valueWidth.value;
			}
			priceSliderWidth.noUiSlider.set([valueWidthValue]);
		}

		var inputs = [valueWidth];

		priceSliderWidth.noUiSlider.on('update', function (values, handle) {
			inputs[handle].value = Math.round(values[handle]);
		});
	}

	if (priceSliderLength) {
		let textFrom = priceSliderLength.getAttribute('data-from');
		let textTo = priceSliderLength.getAttribute('data-to');
		noUiSlider.create(priceSliderLength, {
			start: 1500, // [0,200000]
			connect: [true, false],
			orientation: 'vertical',
			direction: 'rtl',
			range: {
				'min': [+textFrom],
				'max': [+textTo]
			}
		});

		const valueLength = document.getElementById('length-value');
		valueLength.addEventListener('change', setPriceValues);

		function setPriceValues() {
			let valueLengthValue;
			if (valueLength.value != '') {
				valueLengthValue = valueLength.value;
			}
			priceSliderLength.noUiSlider.set([valueLengthValue]);
		}

		var inputsLength = [valueLength];

		priceSliderLength.noUiSlider.on('update', function (values, handle) {
			inputsLength[handle].value = Math.round(values[handle]);
		});
	}
}
rangeInit();