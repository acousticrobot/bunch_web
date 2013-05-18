<?php
/**
 * Template Name: Artists Page
 *
 */

get_header(); ?>



<div id="artists-page">

<div id="represented-artists">
<div id="represented-artists-title">Represented Artists</div><!--end represented artists title-->

	<ul>
    
    
<!--begin Represented Artists loop-->
<?php
  query_posts( array( 'post_type' => 'artist-profiles',
  					  'type' => 'represented',
					  'showposts' => 25,
					  'orderby'    => 'title',
					  'order'    => 'ASC' ) );
  if ( have_posts() ) : while ( have_posts() ) : the_post();
?>

  <li><a href="<?php the_permalink() ?>"><?php the_title(); ?></a></li>
  

<?php endwhile; endif; wp_reset_query(); ?>
<!--end Represented Artits loop-->    
    
    
    
    </ul>
</div><!--end represented artists-->


<div id="exhibited-artists">
<div id="exhibited-artists-title">Exhibited Artists</div><!--end exhibited artists title-->
	<ul>
<!--begin Represented Artists loop-->
<?php
  query_posts( array( 'post_type' => 'artist-profiles',
  					  'type' => 'exhibited',
					  'showposts' => 25,
					  'orderby'    => 'title',
					  'order'    => 'ASC' ) );
  if ( have_posts() ) : while ( have_posts() ) : the_post();
?>

  <li><a href="<?php the_permalink() ?>"><?php the_title(); ?></a></li>
  

<?php endwhile; endif; wp_reset_query(); ?>
<!--end Represented Artits loop-->
    </ul>
</div><!--end represented artists-->


<div class="clear"></div><!--end clearing div-->
</div><!--end artists page div-->







<?php get_footer(); ?>
