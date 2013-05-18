<?php
/**
 * The template for displaying all pages.
 *
 */

get_header(); ?>

<div id="left-column">
<?php get_sidebar('page'); ?>
</div><!--end left column div-->


<div id="right-column" >
		<div id="container">
			<div id="content" role="main">

			<?php
			/* Run the loop to output the page.
			 * If you want to overload this in a child theme then include a file
			 * called loop-page.php and that will be used instead.
			 */
			get_template_part( 'loop', 'page' );
			?>

			</div><!-- #content -->
		</div><!-- #container -->
</div><!--end right column div-->

<?php get_footer(); ?>
