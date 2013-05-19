/*
This is a partial file for ask_consulting.
Use this file for editing.
Find the working files in the dist/ folder
 */

var askConsulting = askConsulting === undefined ? {} : askConsulting ;
if (typeof askConsulting !== 'object') {
  throw new Error('askConsulting is not an object!');
}


// These names should match the content blocks

askConsulting.contents = ["insights","strategies","iq","skill"];

askConsulting.inSequenceGoto = function(direction) {
    // find next content div to activate
    var currentActive = $('.content-link.active').attr("id");

    if (currentActive !== undefined) {
        currentActive = currentActive.slice(0, -5);
    } else {
        // start again with first content div active
        return this.goto(this.contents[0]);
    }

    var index = this.contents.indexOf(currentActive);

    if (direction === "previous") {

        // and we're at the first in line: goto last
        if (index === 0) {
            return this.goto(this.contents[this.contents.length - 1]);
        } else {
            return this.goto(this.contents[index - 1]);
        }
    } else if (direction === "next") {

        // and we're at the last in line: goto first
        if (index === this.contents.length - 1) {
            return this.goto(this.contents[0]);
        } else{
            return this.goto(this.contents[index + 1]);
        }

    } else {
        return direction + " is not a legitimate direction";
    }
    // return newActive link to verify execution
    return "error on index " + index;
};

/**
* jQuery function to run the Ask Consulting slide show
*
* @param   {String} newActiveContent id string of content box
* @returns {String} name of the new active link
*
* @example askConsulting.goto('insights')
*/
askConsulting.goto = function(newActive){
    var newActiveContent = "#" + newActive,
    newActiveLink = "#" + newActive + "-link";

    // check validity of passed Id and animate to the active content
    if ($(newActiveContent).length > 0) {
        $(".details-contentbox-wrapper").animate({"left": -($(newActiveContent).position().left)}, 600);
    } else {
        return newActiveLink + " not found";
    }

    // remove "active" class from all links inside #nav
    // and add back to the current link
    $('.content-link').removeClass('active');
    $(newActiveLink).addClass('active');

    // verify full execution
    return newActiveLink;
};

