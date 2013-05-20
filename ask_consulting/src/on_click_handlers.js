/*
This is a partial file for ask_consulting.
Use this file for editing.
Find the working files in the dist/ folder
 */

askConsulting.clickLinkHandler = function () {
    jQuery.each($('.content-link'), function() {
      $(this).click(function() {
        var id = $(this).attr("id");
        if ( id !== undefined) {
            id = id.slice(0, -5);
            askConsulting.goto(id);
        }
      });
    });
}

askConsulting.clickArrowHandler = function () {
    $('#right-arrow').click(function() {
        askConsulting.inSequenceGoto("next");
    });
    $('#left-arrow').click(function() {
        askConsulting.inSequenceGoto("previous");
    });
}



$(document).ready(function() {
    askConsulting.clickLinkHandler();
    askConsulting.clickArrowHandler();
});

