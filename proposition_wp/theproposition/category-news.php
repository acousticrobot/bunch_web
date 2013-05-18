<?php
/**
 * The template for displaying News Category Archive pages.
 */

get_header(); ?>

<div id="left-column">
<div id="news-page-title">News</div><!--end news page title div-->
<?php get_sidebar(); ?>
</div><!--end left-column div-->



<div id="right-column">
		<div id="container">
			<div id="content" role="main">

				
				<?php
					$category_description = category_description();
					if ( ! empty( $category_description ) )
						echo '<div class="archive-meta">' . $category_description . '</div>';

				/* Run the loop for the category page to output the posts.
				 * If you want to overload this in a child theme then include a file
				 * called loop-category.php and that will be used instead.
				 */
				get_template_part( 'loop', 'category' );
				?>

			</div><!-- #content -->
		</div><!-- #container -->
</div><!--end right column div-->





<?php get_footer(); ?>
