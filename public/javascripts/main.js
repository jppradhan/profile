$(document).ready(function() {
	var navbar = $('.navbar');
	var navHeight = navbar.height();

	$(window).scroll(function() {
		if($(this).scrollTop() >= navHeight) {
			navbar.addClass('navbar-color');
		}
		else {
			navbar.removeClass('navbar-color');
		}
	});


	/* Animate Css jquery Extension */
	$.fn.extend({
	    animateCss: function (animationName) {
	        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
	            $(this).removeClass('animated ' + animationName);
	        });
	    }
	});

	$('#profile-contact').waypoint({
	  	handler: function(direction) {
	    	if(direction == 'down') {
	    		$('#mail').animateCss('bounceInLeft');
	    		$('#mobile').animateCss('bounceInDown');
	    		$('#address').animateCss('bounceInRight');
	    	}
	    	this.destroy();
	  	},
	  	offset: '100%',
	});

	$('#profile').waypoint({
		handler: function(direction) {
	    	if(direction == 'down') {
	    		console.log('down');
	    		$('#profile').css('visibility', 'visible');
	    		$('#headline').animateCss('bounceInRight');
	    		$('#profile-pic').animateCss('flipInY');
	    		$('#profile-skill').animateCss('flipInY');
	    		$('#profile-desc').animateCss('flipInY');	
	    	}
	    	this.destroy();
	  	},
	  	offset: '8%',
	});

	$('#services').waypoint({
		handler: function(direction) {
	    	if(direction == 'down') {
	    		$('#cando').css('visibility', 'visible');
	    		$('.service').animateCss('zoomIn');
	    	}
	    	this.destroy();
	  	},
	  	offset: '10%',
	});


});