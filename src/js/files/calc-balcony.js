/* function calcTotal() {
    const calcTotal = document.querySelector('[data-total]');
    const calcTypes = document.querySelectorAll('._windows-type input');
    const calcProfiles = document.querySelectorAll('._profiles input');
    const calcWidth = document.querySelector('#width-value').value;
    const calcHeight = document.querySelector('#length-value').value;

    let type;
    let profile;
    let width;
    let height;
    let totalCost;

    if (calcTypes.length) {
        calcTypes.forEach(element => {
            element.checked ? type = element.value : '';
        });

        totalCost = (calcWidth / 1000) * (calcHeight / 1000) * type;
        calcTotal.innerHTML = Math.round(totalCost).toLocaleString();

    }
}

document.addEventListener("click", calcTotal);
document.querySelector('#width-value').addEventListener('input', calcTotal);
document.querySelector('#length-value').addEventListener('input', calcTotal);
calcTotal(); */

document.addEventListener("DOMContentLoaded", () => {
    /**
     * Общие пременные
     */

    // стоимость двери
    const windowPrice = 9911;
    const doorPrice = 30000;
    // вывод цены
    const priceHouse = document.querySelectorAll('.js-tabs-calc-house-price');

    /**
     * Общие функции
     */

    // Чистка инпутов
    const clearInput = (str) => {
        // убераем все кроме чисел и точки (если запятая то заменяем на точку)
        return str.replace(/[^\d\.,]/g, '').replace(/,/g, '.');
    }
    const maxValue2_5 = (str) => {
        if (parseInt(str) > 2.5) {
            str = parseFloat(2.5);
        }
        if (str.length >= 3) {
            str = str.slice(0, 3);
        }
        return str;
    }


    /**
     * Калькуляторы под каждый таб
     */

    // <Коттедж, дачный домик, вилла>
    const win1 = document.querySelectorAll('.js-house-calc-win1');
    const door1 = document.querySelectorAll('.js-house-calc-door1');

    let currentValues = {
        window: 0,
        door: 0
    };

    // логика
    function houseCalc1() {
        let doorCount = currentValues.door;
        let windowCount = currentValues.window;
        if (doorCount && windowCount) {
            priceHouse.forEach(span => {
                let summa = (doorCount * doorPrice) + (windowCount * windowPrice);
                span.innerHTML = Math.round(summa).toLocaleString('ru');
            })
        }
    }

    // Слушатели
    win1.forEach(inp => {
        inp.oninput = () => {
            if (inp.value) {
                inp.value = clearInput(inp.value);

                currentValues.window = parseFloat(inp.value);
                houseCalc1();
            }
        }
    });

    door1.forEach(inp => {
        inp.oninput = () => {
            if (inp.value) {
                inp.value = clearInput(inp.value);

                currentValues.door = clearInput(inp.value);
                houseCalc1();
            }
        }
    })


    // </Коттедж, дачный домик, вилла>

    // <Веранда, беседка>
    const height1 = document.querySelectorAll('.js-house-calc-height1');
    const width1 = document.querySelectorAll('.js-house-calc-width1');
    const door2 = document.querySelectorAll('.js-house-calc-door2');

    let currentValues1 = {
        heigth: 0,
        width: 0,
        door: 0
    };

    // логика
    function houseCalc2() {
        let heigth = currentValues1.heigth;
        let width = currentValues1.width;
        let doorCount = currentValues1.door;
        if (width && heigth) {
            let summa;
            if (!doorCount || doorCount === 0) {
                summa = (((width * heigth) - (1.89 * doorCount)) * 4440);
            } else {
                summa = (((width * heigth) - (1.89 * doorCount)) * 4440) + doorCount * doorPrice;
            }
            priceHouse.forEach(span => {
                span.innerHTML = Math.round(summa).toLocaleString('ru');
            });
        }
    }

    // Слушатели
    height1.forEach(inp => {
        inp.oninput = () => {
            if (inp.value) {
                inp.value = clearInput(inp.value);

                currentValues1.heigth = parseFloat(inp.value);
                houseCalc2();
            }
        }
    });

    width1.forEach(inp => {
        inp.oninput = () => {
            if (inp.value) {
                inp.value = clearInput(inp.value);

                currentValues1.width = parseFloat(inp.value);
                houseCalc2();
            }
        }
    })

    door2.forEach(inp => {
        inp.oninput = () => {
            if (inp.value) {
                inp.value = clearInput(inp.value);

                currentValues1.door = parseFloat(inp.value);
                houseCalc2();
            } else {
                currentValues1.door = 0;
                houseCalc2();
            }
        }
    })
    // </Веранда, беседка>

    // <Портал>
    const height2 = document.querySelectorAll('.js-house-calc-height2');
    const width2 = document.querySelectorAll('.js-house-calc-width2');
    const allMaterial1 = document.querySelectorAll('.js-house-calc-portal-material');
    let selectMaterial = 1;

    let currentValues2 = {
        heigth: 0,
        width: 0,
    };

    // логика
    const houseCalc3 = () => {
        let heigth = currentValues2.heigth;
        let width = currentValues2.width;
        if (width && heigth) {
            let currentPrice = selectMaterial == 1 ? 20000 : 42000;
            let summa = (width * heigth) * currentPrice;
            priceHouse.forEach(span => {
                span.innerHTML = Math.round(summa).toLocaleString('ru');
            });
        }
    }

    // Слушатели
    height2.forEach(inp => {
        inp.oninput = () => {
            if (inp.value) {
                inp.value = clearInput(inp.value);
                inp.value = maxValue2_5(inp.value);

                currentValues2.heigth = parseFloat(inp.value);
                houseCalc3();
            }
        }
    });

    width2.forEach(inp => {
        inp.oninput = () => {
            if (inp.value) {
                inp.value = clearInput(inp.value);
                currentValues2.width = parseFloat(inp.value);
                houseCalc3();
            }
        }
    });
    allMaterial1.forEach(radio => {
        radio.onchange = (e) => {
            selectMaterial = e.target.value;
            houseCalc3();
        }
    })
    // </Портал>

    // <гармошка>
    const height3 = document.querySelectorAll('.js-house-calc-height3');
    const width3 = document.querySelectorAll('.js-house-calc-width3');
    const allMaterial2 = document.querySelectorAll('.js-house-calc-portal-material2');
    let selectMaterial2 = 1;

    let currentValues3 = {
        heigth: 0,
        width: 0,
    };

    // логика
    function houseCalc4() {
        let heigth = currentValues3.heigth;
        let width = currentValues3.width;
        if (width && heigth) {
            let currentPrice = selectMaterial2 == 1 ? 30000 : 50000;
            let summa = (width * heigth) * currentPrice;
            priceHouse.forEach(span => {
                span.innerHTML = Math.round(summa).toLocaleString('ru');
            });
        }
    }

    // Слушатели
    height3.forEach(inp => {
        inp.oninput = () => {
            if (inp.value) {
                inp.value = clearInput(inp.value);
                inp.value = maxValue2_5(inp.value);

                currentValues3.heigth = parseFloat(inp.value);
                houseCalc4();
            }
        }
    });

    width3.forEach(inp => {
        inp.oninput = () => {
            if (inp.value) {
                inp.value = clearInput(inp.value);
                currentValues3.width = parseFloat(inp.value);
                houseCalc4();
            }
        }
    });
    allMaterial2.forEach(radio => {
        radio.onchange = (e) => {
            selectMaterial2 = e.target.value;
            houseCalc4();
        }
    })
    // </гармошка>

    /**
     * Небольшие хелперы
     */

    // обновляем значения при переключении таба
    const tabsHouse = document.querySelectorAll('.tabs-calc .tabs .tab');
    tabsHouse.forEach(e => {
        e.onclick = () => {
            // цена
            priceHouse.forEach(span => {
                span.innerHTML = 0;
            })

            // инпуты
            const allInputs = document.querySelectorAll('.tabs-calc .tabs-calc__input');
            allInputs.forEach(inp => {
                inp.value = '';
            });

            // счетчики
            currentValues.window = 0;
            currentValues.door = 0;

            currentValues1.heigth = 0;
            currentValues1.width = 0;
            currentValues1.door = 0;
        }
    });
});

$(document).ready(function () {
    $('.hamburger').click(function () {
        $('.hamburger, .menu').toggleClass('open');
    });
    $('.menu ul a').click(function () {
        $('.hamburger, .menu').removeClass('open');
    });
    const calcWidthInput = document.querySelector('#calc_width_input');
    const calcDepthInput = document.querySelector('#calc_depth_input');
    const calcHeightInput = document.querySelector('#calc_depth_height');
    const widthAmount = document.querySelector('#amount-width');
    const heightAmount = document.querySelector('#amount-height');
    const depthAmount = document.querySelector('#amount-depth');
    const heatCheckbox = document.querySelector('#work_utepl');
    const trimCheckbox = document.querySelector('#work_otdelka');
    const floorHeatCheckbox = document.querySelector('#work_floor');
    const calcPrice = document.querySelector('#calc_price');
    const allType = document.querySelectorAll('.windows_vars');
    const allAddWorks = document.querySelectorAll('.add_works_vars');
    const type_window_heat = document.querySelector('#type_wind_heat');
    const type_window_cold = document.querySelector('#type_wind_cold');
    const type_window_panaram = document.querySelector('#type_wind_panaram');
    $(function () {
        $("#slider-width").slider({
            orientation: "vertical",
            value: 100,
            min: 100,
            max: 1200,
            step: 50,
            slide: function (event, ui) {
                $("#amount-width").val(ui.value + " см");
                calcWidthInput.value = ui.value;
                calc();
            }
        });
        $("#amount-width").val($("#slider-width").slider("value") + 'см');
    });
    $(function () {
        $("#slider-height").slider({
            orientation: "vertical",
            value: 210,
            min: 210,
            max: 350,
            step: 10,
            slide: function (event, ui) {
                $("#amount-height").val(ui.value + " см");
                calcHeightInput.value = ui.value;
                calc();
            }
        });
        $("#amount-height").val($("#slider-height").slider("value") + 'см');
    });
    $(function () {
        $("#slider-depth").slider({
            value: 30,
            min: 30,
            max: 300,
            step: 5,
            slide: function (event, ui) {
                $("#amount-depth").val(ui.value + " см");
                calcDepthInput.value = ui.value;
                calc();
            }
        });
        $("#amount-depth").val($("#slider-depth").slider("value") + 'см');
    });
    if (calcWidthInput) calcWidthInput.oninput = () => {
        changeInputs();
        calc();
    };
    if (calcDepthInput) calcDepthInput.oninput = () => {
        changeInputs();
        calc();
    };
    if (calcHeightInput) calcHeightInput.oninput = () => {
        changeInputs();
        calc();
    };
    let changeInputs = () => {
        let widthInputCount = calcWidthInput.value;
        let depthInputCount = calcDepthInput.value;
        let heightInputCount = calcHeightInput.value;
        $("#slider-height").slider("value", heightInputCount);
        heightAmount.value = heightInputCount + " см";
        $("#slider-width").slider("value", widthInputCount);
        widthAmount.value = widthInputCount + " см";
        $("#slider-depth").slider("value", depthInputCount);
        depthAmount.value = depthInputCount + " см";
    };
    let selectType = '';
    let calc = () => {
        const type_window_panaram_value = type_window_panaram && type_window_panaram.checked;
        let height = Number(calcHeightInput.value);
        let width = Number(calcWidthInput.value);
        let depth = Number(calcDepthInput.value);
        let price = 0;
        allType.forEach(item => {
            if (item.checked) {
                return selectType = item;
            }
        });
        switch (selectType.id) {
            case 'type1':
            case 'type5':
                price = (((width + depth) * 135) / 10000) * 6868;
                if (!type_window_cold) {
                    price = ((((((2 * width + 2 * depth) * calcHeightInput.value) + 2 * width * depth) / 10000) * (1 - 0.42)) * 1965);
                }
                if (type_window_cold && type_window_cold.checked) {
                    price = (price * 0.75);
                }
                if (type_window_panaram && type_window_panaram.checked) {
                    price = (price * 2);
                }
                if (heatCheckbox.checked && !type_window_panaram_value) {
                    price += ((((height - 135) * (width + depth)) / 10000) * 793);
                }
                if (trimCheckbox && trimCheckbox.checked && type_window_cold) {
                    price += ((((((2 * width + 2 * depth) * calcHeightInput.value) + 2 * width * depth) / 10000) * (1 - 0.42)) * 1965);
                }
                if (floorHeatCheckbox.checked) {
                    price += (((width * depth) / 10000) * 2113);
                }
                break;
            case 'type2':
            case 'type7':
                price = ((((width + 2 * depth) * 135) / 10000) * 6868);
                if (!type_window_cold) {
                    price = ((((((2 * width + 2 * depth) * height) + 2 * width * depth) / 10000) * (1 - 0.44)) * 1965);
                }
                if (type_window_cold && type_window_cold.checked) {
                    price = (price * 0.75);
                }
                if (type_window_panaram && type_window_panaram.checked) {
                    price = (price * 2);
                }
                if (heatCheckbox.checked && !type_window_panaram_value) {
                    price += ((((height - 135) * width + 2 * depth * (height - 135)) / 10000) * 793);
                }
                if (trimCheckbox && trimCheckbox.checked && type_window_cold) {
                    price += ((((((2 * width + 2 * depth) * height) + 2 * width * depth) / 10000) * (1 - 0.44)) * 1965);
                }
                if (floorHeatCheckbox.checked) {
                    price += (((width * depth) / 10000) * 2113);
                }
                break;
            case 'type6':
            case 'type8':
                price = (((width * 135) / 10000) * 6868);
                if (!type_window_cold) {
                    price = ((((((2 * width + 2 * depth) * height) + 2 * width * depth) / 10000) * (1 - 0.4)) * 1965);
                }
                if (type_window_cold && type_window_cold.checked) {
                    price = (price * 0.75);
                }
                if (type_window_panaram && type_window_panaram.checked) {
                    price = (price * 2);
                }
                if (heatCheckbox.checked && !type_window_panaram_value) {
                    price += ((((height - 135) * width) / 10000) * 793);
                }
                if (trimCheckbox && trimCheckbox.checked && type_window_cold) {
                    price += ((((((2 * width + 2 * depth) * height) + 2 * width * depth) / 10000) * (1 - 0.4)) * 1965);
                }
                if (floorHeatCheckbox.checked) {
                    price += ((((width * depth) / 10000) * 2113));
                }
                break;
            case 'type3':
                price = (((width + depth * 2) * 165 / 10000) * 6868);
                if (!type_window_cold) {
                    price = ((((((2 * width + 2 * depth) * height) + 2 * width * depth) / 10000) * (1 - 0.44)) * 1965);
                }
                if (type_window_cold && type_window_cold.checked) {
                    price = (price * 0.75);
                }
                if (type_window_panaram && type_window_panaram.checked) {
                    price = (price * 2);
                }
                if (heatCheckbox.checked && !type_window_panaram_value) {
                    price += ((((height - 165) * width + 2 * depth * (height - 165)) / 10000) * 793);
                }
                if (trimCheckbox && trimCheckbox.checked && type_window_cold) {
                    price += ((((((2 * width + 2 * depth) * height) + 2 * width * depth) / 10000) * (1 - 0.44)) * 1965);
                }
                if (floorHeatCheckbox.checked) {
                    price += (((width * depth) / 10000) * 2113);
                }
                break;
            case 'type4':
                price = (((width * 135) / 10000) * 6868);
                if (!type_window_cold) {
                    price = ((((((2 * width + 2 * depth) * height) + 2 * width * depth) / 10000) * (1 - 0.44)) * 1965);
                }
                if (type_window_cold && type_window_cold.checked) {
                    price = (price * 0.75);
                }
                if (type_window_panaram && type_window_panaram.checked) {
                    price = (price * 2);
                }
                if (heatCheckbox.checked && !type_window_panaram_value) {
                    price += ((((height - 135) * width) / 10000) * 793);
                }
                type_window_cold
                if (trimCheckbox && trimCheckbox.checked && type_window_cold) {
                    price += ((((((2 * width + 2 * depth) * height) + 2 * width * depth) / 10000) * (1 - 0.44)) * 1965);
                }
                if (floorHeatCheckbox.checked) {
                    price += (((width * depth) / 10000) * 2113);
                }
                break;
        }
        allAddWorks.forEach(e => {
            if (e.checked) {
                if (e.id === 'work_mebel') price += 11589;
                if (e.id === 'work_electr') price += 6443;
            } else {
                return;
            }
        })
        let formattedСalcPrice = Math.round(price).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
        document.querySelector('#calc_price_form').value = formattedСalcPrice;
        calcPrice.innerHTML = formattedСalcPrice;
    };
    allType.forEach(item => {
        item.addEventListener('change', () => {
            calc();
        })
    });
    allAddWorks.forEach(item => {
        item.addEventListener('change', () => {
            calc();
        })
    });
    if (type_window_heat) {
        type_window_heat.onclick = () => calc()
    }
    if (type_window_cold) {
        type_window_cold.onclick = () => calc()
    }
    if (type_window_panaram) {
        type_window_panaram.onclick = () => calc()
    }
    $('.faq-item .faq-icon').click(function () {
        var id = $(this).attr('data-tab'),
            content = $('.faq-img-item[data-tab="' + id + '"]');
        $('.faq-img-item.active').removeClass('active');
        content.addClass('active');
    });
    $('.faq-icon').click(function () {
        $('.faq-item').removeClass('active');
        $(this).parents('.faq-item').toggleClass('active');
    });
    $('.tabs-wrapper').each(function () {
        let ths = $(this);
        ths.find('.tab-item').not(':first').hide();
        ths.find('.tab').click(function () {
            ths.find('.tab').removeClass('active').eq($(this).index()).addClass('active');
            ths.find('.tab-item').hide().eq($(this).index()).fadeIn()
        }).eq(0).addClass('active');
    });
    $('.form-name').on('input', function (e) {
        e.target.value = e.target.value.replace(/[\d]/g, '')
    });
    $('.form-number').on('input', function (e) {
        e.target.value = e.target.value.replace(/[^\d]/g, '')
    });
    $('.pasp-num').on('input', function (e) {
        e.target.value = e.target.value.replace(/[^\d]/g, '')
    });
    var slides = $(".animate-item");
    slideTo(slides[0]);
    var slideIndex = 0;

    function slideTo(slide) {
        $(".animate-item").removeClass("active");
        $(slide).addClass("active");
        slideIndex = jQuery(slide).index();
    }

    function animate() {
        return setInterval(function () {
            var slide = slides[slideIndex];
            slideTo(slide)
            slideIndex++;
            if (slideIndex == slides.length) {
                slideIndex = 0;
            }
        }, 3500);
    }
    animate()
    $(document).mouseleave(function (e) {
        if (e.clientY < 10) {
            $("#notlike").fadeIn("fast").css("display", "flex");
        }
    });
    $(document).click(function (e) {
        if (($("#notlike").is(':visible')) && (!$(e.target).closest("#notlike .modal-info").length)) {
            $("#notlike").remove();
        }
    });
    $('a[href="#comparison"]').click(function () {
        $('#comparison').addClass('active');
    });
    $('#comp_close').click(function () {
        $('.modal-comparison').removeClass('active');
    });
    $('.check-city__btn_agree').click(function () {
        $('.check-city').fadeOut();
    })
    $('.check-city__btn_disagree').click(function () {
        $('.check-city').fadeOut();
        $('#cites').addClass('active');
    })
    $('.cites a').click(function () {
        $('.check-city').fadeOut();
        $('#cites').addClass('active');
    })
    $('#modal_close').click(function () {
        $('.modal').removeClass('active');
    })
    $('#balcony-form-input').on("input", function () {
        let num = this.value * 0.00405
        $('#balcony-form-count').html(num.toFixed(2))
    })
    if ($('.js-stock-counter')) {
        let ls_stock_counter = localStorage.getItem('stock-counter') ? localStorage.getItem('stock-counter') : 127;
        setInterval(function () {
            if (ls_stock_counter > 8) {
                ls_stock_counter--
                $('.js-stock-counter').text(ls_stock_counter);
                localStorage.setItem('stock-counter', ls_stock_counter);
            } else {
                localStorage.setItem('stock-counter', 127);
            }
        }, 3500)
    }
})

function update_counter(obj, to) {
    $(obj).animate({
        counter: to
    }, {
        duration: 1500,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        },
        complete: update_counter
    });
};
const weekdays = [933, 998, 812, 787, 650, 387, 393],
    d = new Date(),
    hour = d.getHours(),
    setCounters = function (day) {
        if (hour >= 0 && hour < 3) {
            update_counter($('.numbers__block .views'), 1);
            update_counter($('.numbers__block .pcs'), 0);
            update_counter($('.numbers__block .resizes'), 0);
        }
        if (hour >= 3 && hour < 6) {
            update_counter($('.numbers__block .views'), day * 0.05);
            update_counter($('.numbers__block .pcs'), day * 0.05 * 0.07);
            update_counter($('.numbers__block .resizes'), day * 0.05 * 0.07 * 0.49);
        }
        if (hour >= 6 && hour < 9) {
            update_counter($('.numbers__block .views'), day * 0.2);
            update_counter($('.numbers__block .pcs'), day * 0.2 * 0.07);
            update_counter($('.numbers__block .resizes'), day * 0.2 * 0.07 * 0.49);
        }
        if (hour >= 9 && hour < 10) {
            update_counter($('.numbers__block .views'), day);
            update_counter($('.numbers__block .pcs'), day * 0.07);
            update_counter($('.numbers__block .resizes'), day * 0.07 * 0.49);
        }
        if (hour >= 10 && hour < 12) {
            update_counter($('.numbers__block .views'), day * 1.1);
            update_counter($('.numbers__block .pcs'), day * 1.1 * 0.07);
            update_counter($('.numbers__block .resizes'), day * 1.1 * 0.07 * 0.49);
        }
        if (hour >= 12 && hour < 15) {
            update_counter($('.numbers__block .views'), day * 1.5);
            update_counter($('.numbers__block .pcs'), day * 1.5 * 0.07);
            update_counter($('.numbers__block .resizes'), day * 1.5 * 0.07 * 0.49);
        }
        if (hour >= 15 && hour < 18) {
            update_counter($('.numbers__block .views'), day * 2);
            update_counter($('.numbers__block .pcs'), day * 2 * 0.07);
            update_counter($('.numbers__block .resizes'), day * 2 * 0.07 * 0.49);
        }
        if (hour >= 18 && hour < 21) {
            update_counter($('.numbers__block .views'), day * 2.5);
            update_counter($('.numbers__block .pcs'), day * 2.5 * 0.07);
            update_counter($('.numbers__block .resizes'), day * 2.5 * 0.07 * 0.49);
        }
        if (hour >= 21 && hour < 23) {
            update_counter($('.numbers__block .views'), day * 2.6);
            update_counter($('.numbers__block .pcs'), day * 2.6 * 0.07);
            update_counter($('.numbers__block .resizes'), day * 2.6 * 0.07 * 0.49);
        }
        if (hour >= 23 && d.getMinutes() <= 59) {
            update_counter($('.numbers__block .views'), day * 2.7);
            update_counter($('.numbers__block .pcs'), day * 2.7 * 0.07);
            update_counter($('.numbers__block .resizes'), day * 2.7 * 0.07 * 0.49);
        }
    }
if (d.getDay() == 0) {
    setCounters(weekdays[d.getDay()]);
} else {
    setCounters(weekdays[d.getDay() - 1]);
}
update_counter($('.counter_recomend__'), 98)
update_counter($('.counter_branches__'), 100)
update_counter($('.counter_years__'), 15)
$(function () {
    const tabs_btn = $('.tabs button')
    $(tabs_btn).on('click', function (e) {
        $(tabs_btn).removeClass('active')
        $(this).addClass('active')
        const target = $(this).attr('data-target'),
            content = $('.content_block__inner' + target)
        $('.content_block__inner').removeClass('active-block')
        $(content).addClass('active-block')
    })
    let menu_h

    function f_padding() {
        menu_h = document.getElementsByTagName('header')[0].offsetHeight
        $('.box').css('padding-top', menu_h + 'px')
    }
    $(window).on('resize', function () {
        if (window.outerWidth < 1119) f_padding()
    })
    if (window.outerWidth <= 1119) f_padding()
    if (window.outerWidth > 1120) {
        $('header').css({
            'position': 'relative',
            'top': 'auto'
        })
        $('.box').css({
            'padding-top': 0
        })
    }
})