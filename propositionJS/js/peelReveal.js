"use strict"
function peelReveal(x){
	// v1.4
	// peelReveal is a recursive function that looks for: <ul id="peelReveal">
	// and sequentially reveals images in the <li>s alternating left and right 
	// No custom css is needed for peelReveal to work. All css is loaded within
	// the function,so with javascript disabled, all images will be visible.
	// If you want to hide all but the last instead, add to css:
	//		#peelReveal li { position:absolute;overflow:hidden;}
	//
	// call: peelReveal(); x = () to start animation
	// call: peelReveal(false); x = false to start with 1st image visible
	
	var initDelay = 0; 	// (ms) pause before animation begins
	var peelDelay = 1000; // (ms) delay before each subsequent animation
	var peelSpeed = 2000; // (ms) speed of animation
	var imgWidth = 1000; 	// (px) width of the image
	var limOp = .3; 		// (0 to 1) limit lowest opacity during animation
	
		// check for initial function call ( no parameters or (false) ) 
	if ((x === undefined) || (x === false)) {
			// pop all even images forward for animation, reduce opacity to lowest value
		$("#peelReveal li:even").css({'z-index':10,'opacity':limOp});
			// hide all contents within the <li> elements
		$("#peelReveal li").css({"width":0,"position":"absolute","overflow":"hidden"});
			
		if (x === false) { 		// reveal the first images immediately
								// hide second image underneith
			$("#peelReveal li:nth-child(1)").css("width",imgWidth);
			$("#peelReveal li:nth-child(2)").css("width",imgWidth);
			var x = 1;
		} else { 				// animation begins on a blank stage
			var x = 0;
		}
		if (initDelay > 0 ) {	// delay before first animation begins
			setTimeout('peelReveal(' + x + ')',initDelay);
			return;
		} else {				// begin first animation immediately
			$('#peelReveal li:nth-child(1)')
				.animate({width:imgWidth,opacity:1},peelSpeed,'swing',function(){peelReveal(x+1)});
		}
	}
	
		// animation continues as long as there are more <li> elements
	if (x <= $("#peelReveal li:last-child").index() ) {
		
		if (x % 2 == 0) {	// animation on even slides: this slide slides over
							// build animation string to send to setTimeout()
			var target = 	'$("#peelReveal li:nth-child(' 
							+ (x + 1) + 
							')").animate({ width: ' + imgWidth + ', opacity: 1 },' 
							+ peelSpeed + ',\'swing\', function(){peelReveal('
							+ (x + 1) + ')})';
													
		} else {			// animation on odd slides, previous slide slides back
							// build animation string to send to setTimeout()
			var target = 	'$("#peelReveal li:nth-child(' + (x + 1) +
							')").css("width",' + imgWidth + ');' +
							'$("#peelReveal li:nth-child(' 
							+ (x) + 
							')").animate({ width: 0, opacity: ' + limOp + ' },' 
							+ peelSpeed + ', \'swing\',function(){peelReveal('
							+ (x + 1) + ')})';		
		}
			// build the string to pass to setTimeout
			// animation with a recursive call to peelReveal
		setTimeout(target, peelDelay );		
	}
}

$(document).ready( function(){
	peelReveal();	
});