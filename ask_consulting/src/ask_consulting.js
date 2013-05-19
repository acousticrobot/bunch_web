/**
* https://github.com/josankapo/bunch_web/tree/master/ask_consulting
* @author Jonathan Gabel for Bunch Web Development
* @email: Bunch Web Development <info@bunchwebdevelopment.com>
* Copyright (c) 2013 Jonathan Gabel
* Licensed under the MIT license.
* @namespace askConsulting
*/
var askConsulting = askConsulting === undefined ? {} : askConsulting ;
if (typeof askConsulting !== 'object') {
  throw new Error('askConsulting is not an object!');
}


// These names should match the content blocks
//
askConsulting.contents = ["insights","strategies","iq","skill"];


/**
* jQuery function to run the Ask Consulting slide show
*
* @param   {String} newActiveContent id string of content box
* @returns {String} name of the new active link
*
* @example askConsulting.goto('insights')
*/
askConsulting.goto = function(newActiveContent){
    var newActiveContentDiv = "#" + newActiveContent,
    newActiveLink = "#" + newActiveContent + "-link";

    //animate to the div id.
    if ($(newActiveContentDiv).length > 0) {
        $(".details-contentbox-wrapper").animate({"left": -($(newActiveContentDiv).position().left)}, 600);
    }

    // remove "active" class from all links inside #nav
    // and add back to the current link
    $('.content-link').removeClass('active');
    $(newActiveLink).addClass('active');

    // verify full execution
    return newActiveLink;
};

