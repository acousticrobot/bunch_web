<?php
/**
 * Template Name: Home Page
 *
 * A custom page template without sidebar.
 */

get_header(); ?>

<!--Home Page-->


<div id="home-page">
	<div id="home-show-container">
    	<div id="current-show-image">
        <a href="#"><img src="<?php bloginfo('stylesheet_directory'); ?>/images/test/home-slide-sample.jpg" /></a>
    	</div><!--current show image div-->   
    	<div id="current-show-title">Current Show Title</div><!--end current show title div-->
    	<div id="current-show-date">January 1 - February 26th</div><!--end current show date div-->
    </div><!--end home show container-->
</div><!--end home div-->

		

<?php get_footer(); ?>
