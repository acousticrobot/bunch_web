<?php
/**
 * The Template for displaying single exhibition archive custom post type.
 *
 */

get_header(); ?>

<!--Exhibtion Archive-->

<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>

<div id="left-column">
<div id="exhibition-title"><?php the_title(); ?></div><!--end artist title div-->
<div id="exhibition-dates">January 1 - February 29, 2012</div><!--end exhibition dates div-->
<div id="exhibition-participants">First Person, Second Person, Third Person, John Doe, Bobby Sue, Billy Bob, Betty Joe, Benjamin Bunch, Jennifer Slavin, Ronald Sosinski and Ellen Donahue</div><!--end exhibitions participants div-->


<div id="exhibition-content-menu">
	<ul>
		<li><a href="#">press release</a></li>
		<li><a href="#">works</a></li>
		<li><a href="#">installation views</a></li>
		<li><a href="#">press</a></li>
	</ul>
</div><!--end exhibition content menu div-->


</div><!--end left column div-->


<div id="right-column">
		<div id="container">
			<div id="content" role="main">

			<div class="entry-content">
						<?php the_content(); ?>
			</div><!-- .entry-content -->

			</div><!-- #content -->
		</div><!-- #container -->
</div><!--end right column div-->



<?php endwhile; // end of the loop. ?>
<?php get_footer(); ?>
