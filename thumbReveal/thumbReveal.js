"use strict"
function swapActiveFeature(fDiv) {
	// v 1.0 
	//	Action on click and timing events:	
	//		check to make sure it is a new THUMB item
	//		remove current "active" class from THUMB
	// 		add "active" class to THUMB list item that has click event
	//		find corresponding child in FEATURE list
	//		fade out current FEATURE list item and remove "active" class
	//		add "active" class to new current child in FEATURE list
	//		fade in "active" FEATURE list item
	// 
	if ( $(fDiv).hasClass('active') ) return; // already visible, don't animate

		// restyle THUMB column
	$('#thumbs li.active').removeClass('active');
	$(fDiv).addClass('active');					
		// $(this).index() +1 = corresponding child
	var activeChild = $(fDiv).index() +1; 
	var activeItem= '#feature li.featureItem:nth-child(' + activeChild + ')';				

	$('li.featureItem.active').fadeOut(500,
		function() {			
			$('li.featureItem.active').removeClass('active');
			$('#feature li.featureItem').hide(); // prevent collisions
			$(activeItem).addClass('active');	
			$('li.featureItem.active').fadeIn(500);	
		}
	);
} // end swapActiveFeature		


function swapTimer(swapDelay) {
	// v 1.0 
	// same action as swapOnClick (see below) but on a timer.
	// sets the thumb for animation based on currently active thumb
	
	var swapDelay = swapDelay != undefined ? swapDelay : 10000;
	
	var x = $("#thumbs li.active").index() + 2;

	if (x > 1 + $("#thumbs .thumb:last-child").index() ) {
		x = 1;
	}
	var swapItem = "#thumbs li:nth-child(" + x + ")";
	swapActiveFeature(swapItem);

	x++;	
	var target = 'swapTimer(' + swapDelay + ')';
	setTimeout(target, swapDelay);
} // end swapTimer
		
//-------------- BEGIN: THUMB COLUMN / FEATURE COLUMN DIV SWAP ----------------------------//		

function swapOnClick(){ 
	// v 1.1
	//		This function links a FEATURE ul with a THUMBS ul
	//		and swaps out the content for the currently selected thumb button
	//
	// 		FEATURE: an unordered list of feature divs: <ul id = "feature">
	// 		THUMBS : an unordered list of thumb divs: <ul id = "thumbs"> 
	// 		each THUMB list item had a class of "thumb"
	//		the currently selected thumb also has a class of "selected"
	// 		each FEATURE list item had a class of "featureItem"
	//		(to avoid conflict with list items within the feature)

	var fadeInSpeed = 1250; // (ms) new selection fade in
	var fadeOutSpeed = 750;	// (ms) previous selection fade out

	// Action on window ready:
	// 		1st THUMB and FEATURE list items are given a class of "active" <li class = "active">
	//		(use this as a hook to style menu items)
	//		hide all FEATURE list items with "featureItem" class
	//		show FEATURE list item with "featureItem active" class
			
	$('#thumbs li:nth-child(1)').addClass('active');
	$('#feature li.featureItem:nth-child(1)').addClass('active');
	$('#feature li.featureItem').hide();
	$('#feature li.featureItem.active').show();
						
	$('#thumbs li').click(	// a THUMB item has been selected	
		function() {
			swapActiveFeature(this);
		}
	); // END THUMB.click
	
}; // END swapOnClick()
		
//-------------- END: THUMB COLUMN / FEATURE COLUMN DIV SWAP ----------------------------//

		
$(document).ready(function() {
	swapOnClick();
	var swapDelay = 10000; 	// (ms) delay before each subsequent animation
	setTimeout('swapTimer()', swapDelay);		
});	
