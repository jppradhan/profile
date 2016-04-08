//$(document).ready(function(){
window.addEventListener('load', function() {
	$.fn.extend({
	    animateCss: function (animationName, callback) {
	        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
	            $(this).removeClass('animated ' + animationName);
	            if(callback) {
	            	callback(this);
	            }
	        });
	    }
	});

	$('#animate-menu').on('click', function(){
		$(this).toggleClass("open");
		$('.fixed-menu').toggleClass('visible');
	});

	
    $('#contact-form-submit').submit(function(e){
        e.preventDefault();
    });

    $(".hello .text").typed({
        strings: ["Hello ^1000,  I AM JYOTI PRAKASH"],
        typeSpeed: 10,
        callback: function() {
        	$(".deg .text").typed({
        		strings: ["UI ^500 DEVELOPER..."],
        		typeSpeed: 20,
        		showCursor: false,
        		callback: function () {
        			//$('.left-poly').addClass('slide');
        		}
        	});
        }
    });

    $('#preloader').fadeOut();
    //$('.image div').imageScroll();
    /*$('#services').waypoint(function(direction) {
	  	$('.service').animateCss('slideInUp', function(elem) {
	  		$(elem).css('visibility', 'visible');
	  	});
	  	this.destroy();
	}, {
	  offset: '33%'
	})*/

	$('#social-network').on('click', function() {
		$(this).parent().toggleClass('active');
	});

	$('#intro-img img').heliumParallax({
		paraStart: 70,
		paraEnd: 150,
		minVal: ['-100px'],
        maxVal: ['100px'],
		relate: ['linear'] 
	});

	$('#me-img img').heliumParallax({
		minVal: ['0px'],
        maxVal: ['-150px'],
		relate: ['linear'] 
	});

	$('#edu').heliumParallax({
		minVal: ['200px'],
        maxVal: ['0px'],
		relate: ['linear'] 
	});

	$('#die-img img').heliumParallax({
		minVal: ['0px'],
        maxVal: ['-200px'],
		relate: ['linear'] 
	});

	$('#ser-img img').heliumParallax({
		minVal: ['0px'],
        maxVal: ['-200px'],
		relate: ['linear'] 
	});

	$('#ser-text div').heliumParallax({
		minVal: ['150px'],
        maxVal: ['0px'],
		relate: ['linear'] 
	});

	$('#tech').heliumParallax({
		minVal: ['150px'],
        maxVal: ['0px'],
		relate: ['linear'] 
	});
});
//});

