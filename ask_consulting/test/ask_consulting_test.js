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

  test("Ask Consulting contents should be accessible", 1, function() {
    expect(1);
    deepEqual(askConsulting.contents,["insights","strategies","iq","skill"],"Should be the expected array");
  });

  test("goto method with invalid link", 2, function() {
    var result = askConsulting.goto("pizza");
    ok( result, "Shouldn't throw an error when content id not found");
    strictEqual(result, "#pizza-link not found", "Should return link not found message");
  });

  test("goto method with valid link", 3, function() {
    strictEqual($("#insights-link").hasClass("active"),true, "Should start with first link active");
    askConsulting.goto("strategies");
    strictEqual($("#insights-link").hasClass("active"),false, "Should remove active class from previous link");
    strictEqual($("#strategies-link").hasClass("active"),true, "Should change which link is active");
  });

  test("inSequenceGoto(next) method with valid link", function() {
    var result = askConsulting.inSequenceGoto("next");
    strictEqual(result, "#" + askConsulting.contents[1] + "-link", "Should activate next content div");
    result = askConsulting.goto(askConsulting.contents[askConsulting.contents.length - 1]);
    result = askConsulting.inSequenceGoto("next");
    strictEqual(result, "#" + askConsulting.contents[0] + "-link", "Should loop to the first content div at end");
  });

  test("in sequence goto previous with valid link", function() {
    var result = askConsulting.inSequenceGoto("previous");
    // if "previous" and we're at the first in line: goto last
    strictEqual(result, "#" + askConsulting.contents[askConsulting.contents.length - 1] + "-link", "Should loop to the last content div at beginning");
    // else goto the previous content div
    result = askConsulting.inSequenceGoto("previous");
    strictEqual(result, "#" + askConsulting.contents[askConsulting.contents.length - 2] + "-link", "Should activate previous content div");
  });

  test("in sequence goto method with no active links", function(){
    $(".content-link").removeClass("active");
    var result = askConsulting.inSequenceGoto("next");
    ok(result,"Page error with not active links should not throw and error");
    strictEqual(result, "#" + askConsulting.contents[0] + "-link", "Should return first content div as active");
  });

  test("in sequence goto method with invalid link", function(){
    var result = askConsulting.inSequenceGoto("pizza");
    ok(result, "Shouldn't throw and error when content id not found");
    strictEqual(result, "pizza is not a legitimate direction", "Should return a illegitimate direction message");
  });

  module("DOM Manipulation");

  test("goto method changes active content link", 3, function() {
    strictEqual($("#insights-link").hasClass("active"),true, "Should start with first link active");
    $("#strategies-link").trigger('click');
    strictEqual($("#insights-link").hasClass("active"),false, "Should remove active class from previous link");
    strictEqual($("#strategies-link").hasClass("active"),true, "Should change which link is active");
  });

  test("goto method should work for all content divs", 4, function(){
    for (var i = 0; i < askConsulting.contents.length; i++) {

      var link = "#" + askConsulting.contents[i] + "-link";
      $(link).trigger('click');
      strictEqual($(link).hasClass("active"),true, "Should change " + link + " to active link");
    }
  });

}(jQuery));
