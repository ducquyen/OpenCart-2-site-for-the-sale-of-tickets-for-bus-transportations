
    (function($) {

    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#menu').affix({
        offset: {
            top: 50
        }
    })

     $('#logo').affix({
        offset: {
            top: 50
        }
    })

    $('.header-search').affix({
        offset: {
            top: 50
        }
    })

    $(".navbar-toggle").click(function(){
    $("#menu").toggleClass("toggled");
    $("#logo").toggleClass("toggled");
    });


})(jQuery); // End of use strict


$(document).ready(function() {
$(".add-review").click(function() {
  $('html, body').animate({
    scrollTop: $('#form-review').offset().top - 90
  }, 500);
      return false;
   });
});

// ---------Widget-connect-------------
$(document).ready(function() {
    $(".widget-connect__button-activator").click(function () {
        $(this).toggleClass("active");
        $(".widget-connect").toggleClass("active");
        $("a.widget-connect__button").toggleClass("button-slide-out button-slide");        
    });
});
// -----------------------------------