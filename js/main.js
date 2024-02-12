(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Fixed Navbar
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-dark shadow');
            } else {
                $('.fixed-top').removeClass('bg-dark shadow');
            }
        } else {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-dark shadow').css('top', -45);
            } else {
                $('.fixed-top').removeClass('bg-dark shadow').css('top', 0);
            }
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Causes progress
    $('.causes-progress').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });

    
})(jQuery);


// ---------------------NEW EVENTS-------------------------------
var NewEventDate = new Date('Feb 14,2024 00:00:00').getTime();
function countdownfunc(){
    var presentDate = new Date().getTime();
    var difference = NewEventDate - presentDate;

    var sec = 1000;
    var min = sec * 60;
    var hour = min * 60;
    var day = hour * 24;

    var d = Math.floor(difference/(day))
    var h = Math.floor((difference%(day))/(hour));
    var m = Math.floor((difference%(hour))/(min));
    var s = Math.floor((difference%(min))/(sec));

    document.getElementById('count-d').innerHTML = d;
    document.getElementById('count-h').innerHTML = h;
    document.getElementById('count-m').innerHTML = m;
    document.getElementById('count-s').innerHTML = s;
}
setInterval(() => {
countdownfunc();
},1000);

// ===========================Newsletter===============================
    // const scriptURL = 'https://script.google.com/macros/s/AKfycby2VReSgjWfx7nqL8QiqH4GOC3DuaFYXLyQi7wrBJdQHaG3OM13lv-hj5RsM7_g2dOG/exec'
    // const form = document.forms['submit-to-google-sheet']
    // const msg = document.getElementById("msg-1")
  
    // form.addEventListener('submit', e => {
    //   e.preventDefault()
    //   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    //     // .then(response => console.log('Success!', response))
    //     .then(response => {
    //         msg.innerHTML = "Message Sent Successfully"
    //         setTimeout(function(){
    //             msg.innerHTML = ""
    //         },1000)
    //         form.reset()
    //     })
    //     .catch(error => console.error('Error!', error.message))
    // })
