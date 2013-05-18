//-------------- BEGIN: MENU COLUMN / CONTENT COLUMN DIV SWAP ----------------------------//		

function contentSwapper(){ 
	// v 1.4
	//		This function links a MENU ul with a CONTENT ul
	//		and swaps out the content for the currently selected menu button
	//
	// 		MENU: an unordered list of menu choices: <ul id = "navCol">
	// 		CONTENT : an unordered list of content divs: <ul id = "contentCol"> 
	// 		each CONTENT list item had a class of "contentItem"
	//		(to avoid conflict with list items within the content)
	
	var fadeInSpeed = 1250; // (ms) new selection fade in
	var fadeOutSpeed = 750;	// (ms) previous selection fade out
	
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
			
	$('#navCol li').click(	// a MENU item has been selected
		
		function() {
			
			if ( $(this).hasClass('active') ) return; // already visible, don't animate
				
				// restyle MENU column
			$('#navCol li').removeClass('active');
			$(this).addClass('active');
			
				// $(this).index() is the index of the menu list item
				// index starts at 0, children start at 1, 
				// so add one to find the corresponding child
			var activeChild = $(this).index() +1; 
			var activeItem= '#contentCol li.contentItem:nth-child(' + activeChild + ')';				
			
				// stop any current content animations
			$('li.contentItem').stop(true,true);
			
			 // fade-out / fade-in content column
			$('li.contentItem.active').fadeOut(fadeOutSpeed,
				function() {			
					$('li.contentItem').removeClass('active');
					$(activeItem).addClass('active');
					$('li.contentItem.active').fadeIn(fadeInSpeed);			
				}
			);
	
		}
	); // END MENU.click
	
}; // END contentSwapper()
		
//-------------- END: MENU COLUMN / CONTENT COLUMN DIV SWAP ----------------------------//

//-------------- BEGIN: CONTENT SLIDER -------------------------------------------------//

function slideshowController() {
	// v 1.4
	//	This function creates a carousel slide viewer out of an unordered list
	//	It looks for a <div class="carousel">
	// changes: script changes .carousel to overflow hidden and adds the
	// 2 buttons to advance the carousel ".leftArrow" and ".rightArrow"

	
	var slideSpeed = 500; 	// used in the content slider
	var slideDivWidth = 550; // px width of sliding divs
	
	
	
	$('.slideshow').append("<span class = 'leftArrow'>&lt;</span><span class = 'rightArrow'>&gt;</span>");
	$('.carousel').css('overflow','hidden');	
	$('.carousel ul').css({'margin-left':-slideDivWidth,'width':'2000'});
	
	function Slideshow(showID){
		this.ID = "#" + showID; 
		this.numSlides = $(this.ID + ' .carousel ul li:last-child').index();
		this.curSlide = 1;
		
	}

	 Slideshow.prototype.slide = function(direction) {	// v1.3
			// Advances the carousel, direction = 'left' or 'right'
			
			// check function parameters, default to 500ms, 'left'
		slideSpeed = slideSpeed || 500;
		direction = (direction == 'left' || direction =='right') ? direction: 'left';
	
			// return if already at the end
		if ( (direction == 'left' && this.curSlide == 1) || 
		 	 (direction == 'right' && this.curSlide == this.numSlides ) ){ 
				return;
			// else target a slide for animation
		} else if (direction == 'left') {
			var targetChild = this.curSlide -1;
		} else if (direction == 'right') {
			var targetChild = this.curSlide;
		}	
		
		var targetSlide = this.ID + ' .carousel ul li:nth-child(' + targetChild + ')';				
	
		if (direction == 'left') {		
				// set width to the full width of one slide div
			$(targetSlide).animate( { width: slideDivWidth}, slideSpeed,'swing' );
			this.curSlide--;			
		} else if (direction == 'right'){			
			$(targetSlide).animate( { width: 0}, slideSpeed, 'swing' );
			this.curSlide++;			
		}
		this.checkArrows();
	}; // END Slideshow.prototype.slide
	
	Slideshow.prototype.checkArrows = function() { // v1.3
			// controls activation and deactivation of arrows
			// depending on location within the slideshow			
		if ( this.curSlide == 1) { // beginning of the carousel
			$(this.ID + ' .leftArrow').addClass('arrowOff');			
		} else if ( this.curSlide == this.numSlides ) { // end of the carousel
			$(this.ID + ' .rightArrow').addClass('arrowOff');			
		} else { // somewhere in the middle
			$(this.ID + ' .arrowOff').removeClass('arrowOff');
		}		
	}	// END Slideshow.prototype.checkArrows
	
	
	Slideshow.prototype.initArrows = function(){ 
			// adds a unique ID to left and right arrows
			// so that they can be used to target the correct slideshow
		var lArrID = "larr-" + this.ID.slice(1);
		var rArrID = "rarr-" + this.ID.slice(1);
		$(this.ID + ' .leftArrow').attr('id',lArrID);
		$(this.ID + ' .rightArrow').attr('id',rArrID);
		this.checkArrows();
	}	// END Slideshow.prototype.checkArrows

		
	
		//	ON START:
		//  add an empty cell into the first slot in each carousel
		//  this fills the left section of the ul, pushing the first
		//  slide into view.
	$('.carousel ul').prepend('<li></li>');
	
		// find all the divs with a class of slideshow
	var showsOnPage = $('.slideshow'); 
	
		// initialize an array to keep track of each slideshow
	var slideshows = [];
	
		// create a NEW Slideshow for each div.slideshow on page
	for (var i = 0; i < showsOnPage.length; i++) {
		var showID = $(showsOnPage[i]).attr('id');
			// if slideshow has no ID, assign a unique ID
		if ((showID == "" ) || (showID == undefined)) {
			showID = "slideshow-" + i;
			$(showsOnPage[i]).attr('id',showID);
		};
		slideshows[showID] = new Slideshow(showID);		
		slideshows[showID].initArrows();
	} // END for
		

	// Click events: 	find clicked arrows unique ID, 
	//					target that slideshow
				
	$('.leftArrow').click( function(){
		var showID = $(this).attr('id').slice(5);
		slideshows[showID].slide('left');
	});

	$('.rightArrow').click( function(){
		var showID = $(this).attr('id').slice(5);
		slideshows[showID].slide('right');
	});
						
} // END slideshowController()

	//-------------- END: CONTENT SLIDER ----------------------------//	
	
		
$(document).ready(function() {
	contentSwapper();
	slideshowController();
	
	if (jQuery().lightBox){ // if running this line globally, makes sure library loaded on page
			// target by ID if more than one slideshow with <a> links!
		$(function() { $('.slideshow.LBGalleryA a').lightBox({fixedNavigation:true}); });	
		$(function() { $('.slideshow.LBGalleryB a').lightBox({fixedNavigation:true}); });	
	}
		
});	
