$(document).ready(function() {
		
		// animation speeds, in milliseconds:
		var fadeInSpeed = 1250; // used in menu / content swap
		var fadeOutSpeed = 750;	// used in menu / content swap
		var slideSpeed = 500; 	// used in the content slider
		var slideDivWidth = 550; // px width of sliding divs
		
		//-------------- BEGIN: MENU COLUMN / CONTENT COLUMN DIV SWAP ----------------------------//
		// v 1.2
		//
		// 		MENU: an unordered list of menu choices: <ul id = "navCol">
		// 		CONTENT : an unordered list of content divs: <ul id = "contentCol"> 
		// 			each list item had a class of "contentItem"
		
		// Action on window ready:
		// 		1st MENU and CONTENT list items are given a class of "active" <li class = "active">
		//		(use this as a hook to style menu items)
		//		hide all CONTENT list items with "contentItem" class
		//		show CONTENT list item with "contentItem active" class
				
		$('#navCol li:nth-child(1)').addClass('active');
		$('#contentCol li.contentItem:nth-child(1)').addClass('active');
		$('#contentCol li.contentItem').hide();
		$('#contentCol li.contentItem.active').show();
				
		//	Action on click event:	
		//		check to make sure it is a new MENU item
		//		remove current "active" class from MENU
		// 		add "active" class to MENU list item that has click event
		//		find corresponding child in CONTENT list
		//		fade out current CONTENT list item and remove "active" class
		//		add "active" class to new current child in CONTENT list
		//		fade in "active" CONTENT list item
		// 
				
		$('#navCol li').click(	// a menu item has been selected
			
			function() {
				
				if ( $(this).hasClass('active') ) return; // already visible, don't animate
					
					// restyle MENU column
				$('#navCol li.active').removeClass('active');
				$(this).addClass('active');
				
					// $(this).index() is the index of the menu list item
					// index starts at 0, children start at 1, 
					// so add one to find the corresponding child
				var activeChild = $(this).index() +1; 
				var activeItem= '#contentCol li.contentItem:nth-child(' + activeChild + ')';				
				
				
				$('li.contentItem.active').fadeOut(1000,
					function() {			
						$('li.contentItem.active').removeClass('active');
						$(activeItem).addClass('active');
						$('li.contentItem.active').fadeIn(1000);			
					}
				);
		
			}
		);	
		
		//-------------- END: MENU COLUMN / CONTENT COLUMN DIV SWAP ----------------------------//
		
		
		//-------------- BEGIN: CONTENT SLIDER -------------------------------------------------//
		
		// If on 1st or last list item then grey-out the arrow button	
	function setArrows(){
		if ( curSlide == 1) {
			$('#leftArrow').addClass('arrowOff');			
		} else if ( curSlide == numSlides ) {
			$('#rightArrow').addClass('arrowOff');			
		} else {
			$('.arrowOff').removeClass('arrowOff');
		}
	}
	
		
	function slideDiv(slideSpeed,direction) {	// v1.0

			// check function parameters, default to 500ms, 'left'
		slideSpeed = slideSpeed || 500;
		direction = (direction == 'left' || direction =='right') ? direction: 'left';
		
			// return if already at the end
		if ( (direction == 'left' && curSlide == 1) || 
		 	 (direction == 'right' && curSlide == numSlides ) ){ 
				return;
			// else target a slide for animation
		} else if (direction == 'left') {
			var targetChild = curSlide -1;
		} else if (direction == 'right') {
			var targetChild = curSlide;
		}	
			
		var targetSlide = '#carousel ul li:nth-child(' + targetChild + ')';				
		
		if (direction == 'left') {		
				// set width to the full width of one slide div
			$(targetSlide).animate( { width: slideDivWidth}, slideSpeed,'swing' );
			curSlide--;			
		} else if (direction == 'right'){			
			$(targetSlide).animate( { width: 0}, slideSpeed, 'swing' );
			curSlide++;			
		}
		setArrows();
	}
		
		// Give the first slide a class of 'currentSlide'
	$('#carousel ul li:first-child').addClass('currentSlide');
		// Add an empty placeholder on the left side
		// to push the first slide into the visible area
	$('#carousel ul').prepend('<li></li>');
		// deactivate the left arrow

	var numSlides = $('#carousel ul li:last-child').index();
	var curSlide = 1;
	setArrows();
		
	$('#leftArrow').click( function() {			
			slideDiv(slideSpeed,'left');				
	});
		
	$('#rightArrow').click( function() {			
			slideDiv(slideSpeed,'right');			
	});

	//-------------- END: CONTENT SLIDER ----------------------------//	
	
		
	
	//------------- TEST: LIGHTBOX ----------------------------------//
	$(function() {
		$('#carousel a').lightBox({fixedNavigation:true});
	});	
	//------------- END TEST: LIGHTBOX ------------------------------//
		
});	
