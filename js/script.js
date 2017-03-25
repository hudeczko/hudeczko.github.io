$(document).ready(function(){

  // Smooth scrolling functionality
  $(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1500);
        return false;
      }
    }
  });
});

  /* Navbar collapse fix
  =====================================*/
  $(function() {
      $('.nav a').on('click', function(){
          if($('.navbar-toggle').css('display') !='none'){
              $(".navbar-toggle").trigger( "click" );
          }
      });
  });


  /* Gmaps
  =====================================*/
 	var map = new GMaps({
	  div: '.map',
	  lat: 47.6827427,
	  lng: 18.8103108,
	  zoom: 12
	});

	map.addMarker({
	  lat: 47.6827427,
	  lng: 18.8103108,
	  title: 'Hungary',
	  infoWindow: {
		content: '<p>Hudecz Kő-Virág Kft Head Office</p>'
	  }
	});


  /* Magnefic Popup
  =====================================*/
  var groups = {};
  $('.galleryItem').each(function() {
    var id = parseInt($(this).attr('data-group'), 10);

    if(!groups[id]) {
      groups[id] = [];
    }

    groups[id].push( this );
  });


  $.each(groups, function() {

    $(this).magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        gallery: { enabled:true }
    });

  });

    /* Segment Analytics API
    =====================================*/

    var navGetInTouchButton = document.getElementById('nav-get-in-touch-btn');
    var getInTouchButton = document.getElementById('get-in-touch-btn');
    var learnMoreButton = document.getElementById('learn-more-btn');
    var navAboutUs = document.getElementById('about-us');
    var navServices = document.getElementById('services');
    var navContact = document.getElementById('contact');
    var formSendButton = document.getElementById('form-send-button');


    navGetInTouchButton.addEventListener("click", analytics.track('Clicked Nav Get In Touch Button', {
      description: 'Clicked nav get in touch button'
    }));

    getInTouchButton.addEventListener("click", analytics.track('Clicked Body Get In Touch Button', {
      description: 'Clicked body get in touch Button'
    }));

    learnMoreButton.addEventListener("click", analytics.track('Clicked Learn More Button', {
      description: 'Clicked learn more Button'
    }));

    navAboutUs.addEventListener("click", analytics.track('Clicked About Us', {
      description: 'Clicked about us link in menu'
    }));

    navServices.addEventListener("click", analytics.track('Clicked Services', {
      description: 'Clicked services link in menu'
    }));

    navContact.addEventListener("click", analytics.track('Clicked contact', {
      description: 'Clicked contact link in menu'
    }));

    formSendButton.addEventListener("click", analytics.track('Clicked Form Button', {
      description: 'Clicked send button in form'
    }));

    for(var i=1; i <= 20; i++) {
      var imageCarousel = document.getElementById('carousel-image-' + i);
      imageCarousel.addEventListener("click", analytics.track('Clicked Carousel Image', {
      imageNumber: i
      }));
    }



});
