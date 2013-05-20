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




$(document).ready(function() {
    askConsulting.clickLinkHandler();
});

