(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  module( "Ask Consulting Namespace", {
    setup: function() {
      $(".content-link").removeClass("active");
      $("#insights-link").addClass("active");
    }
  });

  test("Ask Consulting contents should be accessible", function() {
    expect(1);
    deepEqual(askConsulting.contents,["insights","strategies","iq","skill"],"Should be the expected array");
  });

  test("goto method with invalid link", function() {
    strictEqual(askConsulting.goto("pizza"),"#pizza-link","Shouldn't throw an error when content id not found");
  });

  test("goto method", function() {
    strictEqual($("#insights-link").hasClass("active"),true, "Should start with first link active");
    askConsulting.goto("strategies");
    strictEqual($("#insights-link").hasClass("active"),false, "Should remove active class from previous link");
    strictEqual($("#strategies-link").hasClass("active"),true, "Should change which link is active");
  });

  module("DOM Manipulation");

  test("goto method changes active content link", function() {
    strictEqual($("#insights-link").hasClass("active"),true, "Should start with first link active");
    $("#strategies-link").trigger('click');
    strictEqual($("#insights-link").hasClass("active"),false, "Should remove active class from previous link");
    strictEqual($("#strategies-link").hasClass("active"),true, "Should change which link is active");
  });

  test("goto method should work for all content divs", function(){
    for (var i = 0; i < askConsulting.contents.length; i++) {

      var link = "#" + askConsulting.contents[i] + "-link";
      $(link).trigger('click');
      strictEqual($(link).hasClass("active"),true, "Should change which link is active");
    }
  });

}(jQuery));
