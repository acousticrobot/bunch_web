/*
    Ask Consulting slideshow
    @author: Jonathan Gabel
    @company Bunch Web development
    @email: Bunch Web Development <info@bunchwebdevelopment.com>
    @version: 1.0

 */

// Setup askConsulting as a namespace so we don't pollute the global namespace
//
var askConsulting = askConsulting === undefined ? {} : askConsulting ;
if (typeof askConsulting !== 'object') {
    throw new Error('askConsulting is not an object!');
}




function goto(id, t){
    //animate to the div id.
    $(".details-contentbox-wrapper").animate({"left": -($(id).position().left)}, 600);

    // remove "active" class from all links inside #nav
    $('#expertise a').removeClass('active');

    // add active class to the current link
    $(t).addClass('active');
}
