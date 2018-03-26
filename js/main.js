/*
	Stock Theme Scripts
*/

(function($){ "use strict";
             
    $(window).on('load', function() {
        $('body').addClass('loaded');
    });

/*=========================================================================
	Sticky Header
=========================================================================*/ 
	$(function() {
		var header = $("#header"),
			yOffset = 0,
			triggerPoint = 80;
		$(window).on( 'scroll', function() {
			yOffset = $(window).scrollTop();

			if (yOffset >= triggerPoint) {
				header.addClass("navbar-fixed-top");
			} else {
				header.removeClass("navbar-fixed-top");
			}

		});
	});

/*=========================================================================
	Products Carousel
=========================================================================*/
    $('#product-carousel').owlCarousel({
        loop:true,
        autoplay: true,
        smartSpeed: 500,
        dots: false,
        margin: 10,
        nav: true,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        responsive : {
            0 : {
                items: 1
            },
            480 : {
                items: 3
            },
            768 : {
                items: 4
            }
        }
    });
             
/*=========================================================================
    Sponsor Carousel
=========================================================================*/
    $('#sponsor_carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        smartSpeed: 1000,
        nav: false,
        dots: false,
        responsive: true,
        responsive : {
            0 : {
                items: 3
            },
            480 : {
                items: 3,
            },
            768 : {
                items: 6,
            }
        }
    });
             
/*=========================================================================
    wow Settings
=========================================================================*/
    var wow = new WOW( {
        mobile: false,
        offset: 0
    });
    wow.init();      
             
/*=========================================================================
	Initialize smoothscroll plugin
=========================================================================*/
	smoothScroll.init({
		offset: 60
	});

/*=========================================================================
	Active venobox
=========================================================================*/
	var vbSelector = $('.img_popup');
	vbSelector.venobox({
		numeratio: true,
		infinigall: true
	}); 
             
/*=========================================================================
	MAILCHIMP
=========================================================================*/ 

    if ($('.subscribe_form').length>0) {
        /*  MAILCHIMP  */
        $('.subscribe_form').ajaxChimp({
            language: 'es',
            callback: mailchimpCallback,
            url: "//alexatheme.us14.list-manage.com/subscribe/post?u=48e55a88ece7641124b31a029&amp;id=361ec5b369" 
        });
    }

    function mailchimpCallback(resp) {
        if (resp.result === 'success') {
            $('#subscribe-result').addClass('subs-result');
            $('.subscription-success').text(resp.msg).fadeIn();
            $('.subscription-error').fadeOut();

        } else if(resp.result === 'error') {
            $('#subscribe-result').addClass('subs-result');
            $('.subscription-error').text(resp.msg).fadeIn();
        }
    }
    $.ajaxChimp.translations.es = {
        'submit': 'Submitting...',
        0: 'We have sent you a confirmation email',
        1: 'Please enter your email',
        2: 'An email address must contain a single @',
        3: 'The domain portion of the email address is invalid (the portion after the @: )',
        4: 'The username portion of the email address is invalid (the portion before the @: )',
        5: 'This email address looks fake or invalid. Please enter a real email address'
    };
             

})(jQuery);
