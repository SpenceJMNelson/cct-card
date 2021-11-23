$(document).ready(function() {

  var $clickMe = $('.click-icon'),
      $card = $('.card');
      $reverse = $('.reverse-card-link');
      $restart = $('.restart');
      $openEnvelope = $('.top-flap');
      $envelopeWrapper = $('.envelope-wrapper');
      $envelopeBack = $('.envelope-back');
      $merryChristmas = $('.merry-christmas');
  
  
  
  $openEnvelope.on('click', function() {
	  
	
	$(this).toggleClass('top-flap-open');
		$envelopeWrapper.toggleClass('top-flap-open');
		$envelopeBack.toggleClass('top-flap-open');
		$card.toggleClass('top-flap-open-card');

	});
	
	
	
	$card.on('click', function() {
		
		$(this).toggleClass('is-opened');
		$clickMe.toggleClass('is-hidden');



	});
	
  $reverse.on('click', function() {
	  
		//$('.card').toggleClass('top-flap-open-card');

		
		$('.card').toggleClass('is-reversed');
		$('.cart-page-bottom-message').toggleClass('is-hidden');
		$('.naimah-content').toggleClass('is-visible');
	    $clickMe.toggleClass('is-hidden');
	    $restart.toggleClass('is-hidden');
	    $('.merry-christmas').toggleClass('fade-out');


	});
	
	
	/*
		$restart.on('click', function() {
	  
		$('.card').toggleClass('is-reversed');
		$('.cart-page-bottom-message').toggleClass('is-hidden');
		$('.naimah-content').toggleClass('is-visible');
	    $clickMe.toggleClass('is-hidden');
		$restart.toggleClass('is-hidden');

	});
	*/
	

});





document.addEventListener('DOMContentLoaded', function(){
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.onload = function(){
        particlesJS("snow", {
            "particles": {
                "number": {
                    "value": 200,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "opacity": {
                    "value": 0.7,
                    "random": false,
                    "anim": {
                        "enable": false
                    }
                },
                "size": {
                    "value": 5,
                    "random": true,
                    "anim": {
                        "enable": false
                    }
                },
                "line_linked": {
                    "enable": false
                },
                "move": {
                    "enable": true,
                    "speed": 5,
                    "direction": "bottom",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": true,
                        "rotateX": 300,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": false
                    },
                    "onclick": {
                        "enable": false
                    },
                    "resize": false
                }
            },
            "retina_detect": true
        });
    }
    document.head.append(script);
});