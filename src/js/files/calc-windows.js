function fun1() {
    var rngx = document.getElementById('wincalc-size-selector-x');
    var i1 = document.getElementById('m-width');
    var lev1 = document.getElementById('level');
    lev1.value = i1.value = rngx.value;
}

function fun2() {
    var rngy = document.getElementById('wincalc-size-selector-y');
    var i2 = document.getElementById('m-height');
    var lev2 = document.getElementById('levelheight');
    lev2.value = i2.value = rngy.value;
}
$(function () {
    $('#m-width').on('change', function () {
        var xxx = $(this).val();
        $('#wincalc-size-selector-x').val(xxx);
        $('output[for=m-width]').text($(this).val());
    });
    $('#m-height').on('change', function () {
        var yyy = $(this).val();
        $('#wincalc-size-selector-y').val(yyy);
        $('output[for=m-height]').text($(this).val());
    });
    $('.wincalc-type-selector-one').on('click', function () {
        $('.wincalc-type-selector-one-selected').removeClass('wincalc-type-selector-one-selected');
        $(this).addClass('wincalc-type-selector-one-selected');
        changeBalkonType();
        setDefaultWidth();
    });
    $('.wincalc-frame-selector > div').on('click', function () {
        var rotateAngle;
        $(this).parent().find('.wincalc-frame-selector-selected').removeClass('wincalc-frame-selector-selected');
        $(this).addClass('wincalc-frame-selector-selected');
        $('.wincalc-frame').css('z-index', '0');
        $(this).parent().parent().css('z-index', '1');
        if ($(this).hasClass('wincalc-frame-selector-g')) {
            $(this).parent().parent().find('img').css('opacity', 0);
        } else {
            $(this).parent().parent().find('img').css('opacity', 1);
            rotateAngle = '-20deg';
            if ($(this).parent().parent().hasClass('wincalc-frame-2') || $(this).parent().parent().hasClass('wincalc-frame-4')) {
                rotateAngle = '20deg';
            }
            if ($(this).hasClass('wincalc-frame-selector-p')) {
                $(this).parent().parent().find('img').queue(function () {
                    $(this).css('transform', 'perspective(800px) rotateY(' + rotateAngle + ') scale(.9,1)').css('-webkit-transform', 'perspective(800px) rotateY(' + rotateAngle + ') scale(.9,1)');
                    $(this).dequeue();
                }).delay(1000).queue(function () {
                    $(this).css('transform', 'perspective(800px) rotateY(0)').css('-webkit-transform', 'perspective(800px) rotateY(0)');
                    $(this).dequeue();
                });
            } else {
                $(this).parent().parent().find('img').queue(function () {
                    $(this).css('transform', 'perspective(800px) rotateY(' + rotateAngle + ') scale(.9,1)').css('-webkit-transform', 'perspective(800px) rotateY(' + rotateAngle + ') scale(.9,1)');
                    $(this).dequeue();
                }).delay(1000).queue(function () {
                    $(this).css('transform', 'perspective(800px) rotateY(0)').css('-webkit-transform', 'perspective(800px) rotateY(0)');
                    $(this).dequeue();
                }).delay(1000).queue(function () {
                    $(this).css('transform', 'perspective(800px) rotateX(-10deg) scale(1,.9)').css('-webkit-transform', 'perspective(800px) rotateX(-10deg) scale(1,.9)');
                    $(this).dequeue();
                }).delay(1000).queue(function () {
                    $(this).css('transform', 'perspective(800px) rotateX(0)').css('-webkit-transform', 'perspective(800px) rotateX(0)');
                    $(this).dequeue();
                });
            }
        }
        changeBalkonType();
    });
    var btype;

    function setDefaultWidth() {
        let btype = $('.wincalc-type-selector-one-selected').data('btype');
        switch (btype) {
            case 1:
                $('#m-width, #level, #wincalc-size-selector-x').val(900);
                break;
            case 2:
                $('#m-width, #level, #wincalc-size-selector-x').val(1400);
                break;
            case 3:
                $('#m-width, #level, #wincalc-size-selector-x').val(1920);
                break;
            case 4:
                $('#m-width, #level, #wincalc-size-selector-x').val(1740);
                break;
        }
    }

    function changeBalkonType() {
        btype = $('.wincalc-type-selector-one-selected').data('btype');
        $('.wincalc-constuction img').attr('src', 'https://msk1.inros-gk.ru/wp-content/themes/inros/assets/images/window-' + btype + '-frame.jpg');
        switch (btype) {
            case 1: {
                $('#m-width').css('width', '200px');
                $('#m-width').attr('min', '500');
                $('#m-width').attr('max', '1000');
                $('.wincalc-frame').css({
                    'opacity': 0,
                    'pointer-events': 'none'
                });
                $('.wincalc-frame-1').css({
                    'opacity': 1,
                    'pointer-events': 'auto'
                });
                $('.wincalc-frames').css('transform', 'scale(1)');
            }
            break;
        case 2: {
            $('#m-width').css('width', '340px');
            $('#m-width').attr('min', '1000');
            $('#m-width').attr('max', '1600');
            $('.wincalc-frame').css({
                'opacity': 0,
                'pointer-events': 'none'
            });
            $('.wincalc-frame-1, .wincalc-frame-2').css({
                'opacity': 1,
                'pointer-events': 'auto'
            });
            $('.wincalc-frames').css('transform', 'scale(1)');
        }
        break;
        case 3: {
            $('#m-width').css('width', '490px');
            $('#m-width').attr('min', '1500');
            $('#m-width').attr('max', '2500');
            $('.wincalc-frame').css({
                'opacity': 1,
                'pointer-events': 'auto'
            });
            $('.wincalc-frames').css('transform', 'scale(1)');
        }
        break;
        case 'b': {
            $('#m-width').css('width', '350px');
            $('#m-width').attr('min', '1200');
            $('#m-width').attr('max', '2600');
            $('.wincalc-frame').css({
                'opacity': 0,
                'pointer-events': 'none'
            });
            $('.wincalc-frame-1').css({
                'opacity': 1,
                'pointer-events': 'auto'
            });
            $('.wincalc-frame-2').css({
                'opacity': 1,
                'pointer-events': 'auto'
            });
            $('.wincalc-frame-3').css({
                'opacity': 1,
                'pointer-events': 'auto'
            });
            $('.wincalc-frames').css('transform', 'scale(.73)');
        }
        break;
        }
    }
    $('.wincalc-frame-selector-selected').trigger('click');
});
$(window).on('click', function () {
    var priceMultipler;
    var btype2 = $('.wincalc-type2-selector div input:checked').data('btype2');
    switch (btype2) {
        case 'p1':
            priceMultipler = 4808;
            break;
        case 'p2':
            priceMultipler = 5054;
            break;
        case 'p3':
            priceMultipler = 8055;
            break;
        case 'p4':
            priceMultipler = 5890;
            break;
        case 'p5':
            priceMultipler = 5890;
            break;
        case 'p6':
            priceMultipler = 7236;
            break;
        case 'p7':
            priceMultipler = 7575;
            break;
    }
    var btype = $('.wincalc-type-selector-one-selected').data('btype');
    var framesCount = btype === 'b' ? 3 : +btype;
    switch (btype) {
        case '1':
            priceMultipler *= 1;
            break;
        case '2':
            priceMultipler *= 0.7;
            break;
        case '3':
            priceMultipler *= 0.75;
            break;
        case 'b':
            priceMultipler *= 0.9;
            break;
    }
    var frameMultipler = 1;
    for (var i = 1; i <= framesCount; i++) {
        if ($('.wincalc-frame').eq(i - 1).find(".wincalc-frame-selector-selected").hasClass('wincalc-frame-selector-p')) {
            frameMultipler += 0.2;
        }
        if ($('.wincalc-frame').eq(i - 1).find(".wincalc-frame-selector-selected").hasClass('wincalc-frame-selector-o')) {
            frameMultipler += 0.25;
        }
    }
    var valWidth = Math.ceil($('#wincalc-size-selector-x').val());
    var valHeight = Math.ceil($('#wincalc-size-selector-y').val());
    var sizeMultipler = valWidth * valHeight / (1000 * 1000);
    var optionsSum = 0;
    var optMontag = Math.ceil(sizeMultipler * 1600);
    var optPodokonnik = Math.ceil(330 * (valWidth / 1000));
    var optOtliv = Math.ceil(140 * (valWidth / 1000));
    var optOtkos = Math.ceil((valWidth + (valHeight * 2)) / 1000 * 640);
    var optMoskit = Math.ceil(sizeMultipler * 680);
    $('#options-1').text(optMontag);
    $('#wincalc-options-1').val(optMontag);
    $('#options-2').text(optPodokonnik);
    $('#wincalc-options-2').val(optPodokonnik);
    $('#options-3').text(optOtliv);
    $('#wincalc-options-3').val(optOtliv);
    $('#options-4').text(optOtkos);
    $('#wincalc-options-4').val(optOtkos);
    $('#options-5').text(optMoskit);
    $('#wincalc-options-5').val(optMoskit);
    var cbs = $('.wincalc-options input[type=checkbox]');

    function calcUsage() {
        var total = 0;
        cbs.each(function () {
            if ($(this).is(":checked")) {
                total = parseFloat(total) + parseFloat($(this).val());
            }
        });
        optionsSum = total;
    }
    cbs.click(function () {
        calcUsage();
    });
    calcUsage();
    var price = Math.ceil((priceMultipler * sizeMultipler * frameMultipler) + optionsSum);
    price = Math.ceil(price / 50) * 50;
    $('.wincalc-price-value').text(price);
    $('#calc_price_form').val(price);
});