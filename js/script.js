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

    var elementsToTrack = {
      'nav-get-in-touch-btn': { 'event': 'Nav Get In Touch Button', 'description': 'Clicked nav get in touch button' },
      'get-in-touch-btn': { 'event': 'Body Get In Touch Button', 'description': 'Clicked body get in touch Button' },
      'learn-more-btn': { 'event': 'Learn More Button', 'description': 'Clicked learn more Button' },
      'about-us': { 'event': 'About Us', 'description': 'Clicked about us link in menu' },
      'services': { 'event': 'Services', 'description': 'Clicked services link in menu' },
      'contact': { 'event': 'Contact', 'description': 'Clicked contact link in menu' },
      'form-send-button': { 'event': 'Form Button', 'description': 'Clicked send button in form' }
    };

    Object.keys(elementsToTrack).forEach(function(key) {
      var element = document.getElementById(key);
      var track = elementsToTrack[key];

      console.log('Registering event listener for ' + key);
      element.addEventListener("click", function() {
        console.log('Track event for ' + key);
        analytics.track(track['event'], { description: track['description'] });
      }, false);
    });

    for(var i=1; i <= 20; i++) {
      var imageCarousel = document.getElementById('carousel-image-' + i);
      imageCarousel.addEventListener("click", function() {
        analytics.track('Clicked Carousel Image', { imageNumber: i });
      });
    }
});
