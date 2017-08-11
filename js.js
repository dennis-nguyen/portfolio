$(document).ready(function () {
    // $('.intro').typeIt({
    //  strings: ["I am a programmer."],
    //  speed: 70,
    //  autoStart: false,
    //  loop: true
    // });

    $('.intro').typeIt({
        strings: ["I am a web developer.", "I am a KBBQ enthusiast."],
        speed: 65,
        breakLines: false,
        autoStart: false,
        loop: true,
        lifeLike: true
    });

    let initMap = () => {
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

    initMap();


    $('.grid').masonry({
        // options
        itemSelector: '.grid-item',
        columnWidth: 200,
        isAnimated: true,
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });


    window.sr = ScrollReveal();
    sr.reveal('.scrollReveal', {
        duration: 1500
    });

    // $('body').scrollspy({target: ".navbar"})

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





});