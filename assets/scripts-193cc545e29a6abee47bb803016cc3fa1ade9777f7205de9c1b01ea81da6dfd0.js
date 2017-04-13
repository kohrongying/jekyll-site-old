$(document).ready(function() {
	console.log("letsgo!");
	
	$('.hover4').hover(function(){
		$(this).find('.fa-spock-o').addClass('pull-left');
		$(this).css('color','blue');
	});


	//pointPoint script
	var pp = $('#push-button').pointPoint();
	$('#push-button').click(function(){
	    pp.destroyPointPoint();
	    // To destroy it, call the destroy method when user clicks on button:
	});

	var parallax = document.querySelectorAll(".multi-parallax"),
      speed = 0.5;

    var parallax2 = document.querySelectorAll(".multi-parallax-2"),
      speed2 = 0.7;  

	window.onscroll = function(){
		[].slice.call(parallax).forEach(function(el,i){

		  var windowYOffset = window.pageYOffset,
		      elBackgrounPos = "50% " + (windowYOffset * speed) + "px";

		  el.style.backgroundPosition = elBackgrounPos;

		});

		[].slice.call(parallax2).forEach(function(el,i){

		  var elBackgrounPos2 = "70% " + (windowYOffset * speed2) + "px";

		  el.style.backgroundPosition = elBackgrounPos2;

		});
	};


//anime
	anime({
	  targets: '.blue',
	  translateX: '13rem',
	  rotate: {
	    value: 180,
	    duration: 1500,
	    easing: 'easeInOutQuad'
	  },
	  scale: {
	    value: 2,
	    delay: 150,
	    duration: 850,
	    easing: 'easeInOutExpo',
	  },
	  direction: 'alternate',
	  loop: true
	});
	


});
