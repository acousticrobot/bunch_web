<?php
/**
 * The template for displaying the footer.
 *
 */
?>
	</div><!-- #main -->
    
    
    
<!--Footer-->
	<div id="footer" >
    
    
    	<div id="footer-copy"><?php 
 $time = time () ; 
 //This line gets the current time off the server

 $year= date("Y",$time); 
 //This line formats it to display just the year

 echo "&copy; " . $year . " The Proposition"; ?></div><!--end footer copy-->
    
    	<div id="social-media-icons">
    		<a href="http://www.facebook.com/pages/The-Proposition/106692832701241?sk=wall"><img src="<?php bloginfo('stylesheet_directory'); ?>/images/icons/facebook.png" /></a>
    		<a href="#"><img src="<?php bloginfo('stylesheet_directory'); ?>/images/icons/twitter.png" /></a>
    		<a href="#"><img src="<?php bloginfo('stylesheet_directory'); ?>/images/icons/rss.png" /></a>
    	</div><!--end social media icons copy-->


<div class="clear"></div><!--end clearing div-->
    
    
    
    
		
	</div><!-- #footer -->
<!--Footer-->

</div><!-- #wrapper -->

<?php
	/* Always have wp_footer() just before the closing </body>
	 * tag of your theme, or you will break many plugins, which
	 * generally use this hook to reference JavaScript files.
	 */

	wp_footer();
?>
</body>
</html>
