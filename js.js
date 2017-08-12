$(document).ready(function () {

    // Initialize tooltips bootstrap jquery
    $('[data-toggle="tooltip"]').tooltip();

    // Intro typing in jumbotron
    $('.intro').typeIt({
        strings: ["I am a web developer.", "I am a KBBQ enthusiast."],
        speed: 65,
        breakLines: false,
        autoStart: false,
        loop: true,
        lifeLike: true
    });

    // Initialize scroll reveal
    window.sr = ScrollReveal();
    sr.reveal('.scrollReveal', {
        duration: 1500
    });

    // Adding scrollspy
    $('body').scrollspy({
        target: ".navbar",
        offset: 50
    });

    // Add smooth scrolling nav buttons
    $("#navbar a, .footerLink a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });

    // Hides hamburger menu on button click
    // $(document).on('click', '.navbar-collapse.in', function (e) {
    //     if ($(e.target).is('a')) {
    //         $(this).collapse('hide');
    //     }
    // });

    // // Closes hamburger menu on clicking outside of menu
    // $(document).click(function (event) {
    //     var clickover = $(event.target);
    //     var $navbar = $(".navbar-collapse");
    //     var _opened = $navbar.hasClass("in");
    //     if (_opened === true && !clickover.hasClass("navbar-toggle")) {
    //         $navbar.collapse('hide');
    //     }
    // });

    
    // Allowing user to close the hamburger button by clicking anywhere on screen
    function allowCollapseHamburger() {
        $(document).click(function (event) {
            const clicktarget = $(event.target);
            const hamburger = $(".navbar-toggle");
            const closed = hamburger.hasClass("collapsed");
            if (!closed && !clicktarget.hasClass("navbar-toggle")) {
                hamburger.click();
            }
        });
    }



    allowCollapseHamburger();
    appendPhone();
    appendEmail();
});

  // appends email and phone number to prevent bot sniffing
    function appendEmail() {
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

    function appendPhone() {
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



//Google maps
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
