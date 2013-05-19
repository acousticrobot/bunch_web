# Ask Consulting

*Slide-show with arrow and bubble field on-click animation*

## Javascript Files

Look in dist/ for final uncompressed and minified builds of javascript files:

    dist/ask_consulting.js

    dist/ask_consulting_min.js

## Changes to the HTML:

 *Please make the following changes to the HTML:*

   * All speech bubble anchor links should have the class "content-link"
   * Remove the inline Javascript, it is now handled through jQuery onClick events.

    <a id="insights-link" class="content-link active" href="#">...</a>
    <a id="strategies-link" href="#" class="content-link">...</a>
    ...

## Other necessities:

  * There is an array `askConsulting.contents` in the js that must match the names of the content divs that are to be animated, in the order that they should appear.
  * Rock on!