$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();

    $('.intro').typeIt({
        strings: ["I am a web developer.", "I am a KBBQ enthusiast."],
        speed: 65,
        breakLines: false,
        autoStart: false,
        loop: true,
        lifeLike: true
    });


    window.sr = ScrollReveal();
    sr.reveal('.scrollReveal', {
        duration: 1500
    });

    // Add scrollspy to <body>
    $('body').scrollspy({
        target: ".navbar",
        offset: 50
    });

    // Add smooth scrolling on all links inside the navbar
    $("#navbar a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {

            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });

        } // End if

    });


    $(".footerLink a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {

            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });

        } // End if

    });



function appendEmail(){
    var e = "ngu";
    e += "yen";
    e += ".den";
    e += "n@";
    e += "gma";
    e += "il.";
    e += "com";
    var m = 'mai';
    m += 'lto:';
    $("#maile").text(e);
    $("#maila").attr('href', `${m+=e}`)
}
// Appending Sensitive Information to prevent bot sniffing
function appendPhone(){
    var p = '71';
    p += '4-';
    p += '46';
    p += '7-';
    p += '53';
    p += '42';
    var t = 'te';
    t += 'l:';
    $('#ephon').text(p)
    $("#phona").attr('href', `${t+=p}`);
}

appendPhone();
appendEmail();

// Hides hamburger menu on click
    $(document).on('click', '.navbar-collapse.in', function (e) {
        if ($(e.target).is('a')) {
            $(this).collapse('hide');
        }
    });


  $(document).click(function (event) {
    var clickover = $(event.target);
    var $navbar = $(".navbar-collapse");               
    var _opened = $navbar.hasClass("in");
    if (_opened === true && !clickover.hasClass("navbar-toggle")) {      
        $navbar.collapse('hide');
    }
});




});

var map;

function initMap() {
    var fv = {
        lat: 33.7101469,
        lng: -117.9653408
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: fv,
        disableDefaultUI: true
        // scrollwheel: false,
        // draggable: false

    });
    var marker = new google.maps.Marker({
        position: fv,
        map: map
    });
}
