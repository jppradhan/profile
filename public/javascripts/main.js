$(document).ready(function(){

	$(".button-collapse").sideNav();

	$.fn.extend({
	    animateCss: function (animationName, callback) {
	    	var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
	            $(this).removeClass('animated ' + animationName);
	            if(callback) {
	            	callback();
	            }

	        });
	    }
	});

	/*$('#fullpage').fullpage({
		sectionSelector: '.fullsection',
		resize : true,
	});*/

	var count = 1;

	var textJson = [{
		"text" : "Front-end Developer",
	},
	{
		"text" : "JS Programmer",
		
	},
	{
		"text" : "Freelancer",
		
	}]

	$('#animated-text').animateCss('fadeInDown');

	setTimeout(function(){
		setInterval(function(){
			//console.log(count);
			$('#animated-text').css('visibility', 'visible');
			
			$('#animated-text').text(textJson[count].text);
			
			$('#animated-text').animateCss('fadeInDown');
			setTimeout(function(){
				$('#animated-text').animateCss('fadeOutDown', function(){
					count++;
					if(count == (textJson.length)) {
						count = 0;
					}
					$('#change-text').css('visibility','hidden');
				});
				
			},2000);
		}, 4000);
	}, 1000)
});