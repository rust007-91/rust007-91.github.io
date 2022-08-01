const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    close = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
    lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i ) => {
    lines[i].style.width = item.innerHTML;
});

$(document).ready(function(){
   /* $('.promo__btns').on('click', ':not(.btn)', function() {
        $(this)
            .addClass('btn').siblings().removeClass('btn')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });*/

    $('.contacts__form').validate({
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            },
            checkbox: "required"
        },
        messages: {
            name: "Пожалуйста, ведите своё имя",
            email: {
                required: "Пожалуйста, ведите свою почту",
                email: "Неправильно введён адрес почты"
            },
            checkbox: {
                required: "Необходимо согласие на обработку данных"
            }
        }
    });

    $('form').submit(function(e) {
        e.preventDefault();
        if (!$(this).valid()) {
            return;
        }
        $.ajax({
            type: 'POST',
            url: 'mailer/smart.php',
            data: $(this).serialize()
        }).done(function() {
            $(this).find('input').val('');
            $('form').trigger('reset');
        });
        return false;
    });

    $("a.promo__link").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "href") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    new WOW().init();
});