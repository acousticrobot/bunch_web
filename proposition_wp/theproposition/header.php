<?php
/**
 * The Header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="main">
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<title><?php
	/*
	 * Print the <title> tag based on what is being viewed.
	 */
	global $page, $paged;

	wp_title( '|', true, 'right' );

	// Add the blog name.
	bloginfo( 'name' );

	// Add the blog description for the home/front page.
	$site_description = get_bloginfo( 'description', 'display' );
	if ( $site_description && ( is_home() || is_front_page() ) )
		echo " | $site_description";

	// Add a page number if necessary:
	if ( $paged >= 2 || $page >= 2 )
		echo ' | ' . sprintf( __( 'Page %s', 'twentyten' ), max( $paged, $page ) );

	?></title>
<link rel="profile" href="http://gmpg.org/xfn/11" />
<link rel="stylesheet" type="text/css" media="all" href="<?php bloginfo( 'stylesheet_url' ); ?>" />
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
<?php
	/* We add some JavaScript to pages with the comment form
	 * to support sites with threaded comments (when in use).
	 */
	if ( is_singular() && get_option( 'thread_comments' ) )
		wp_enqueue_script( 'comment-reply' );

	/* Always have wp_head() just before the closing </head>
	 * tag of your theme, or you will break many plugins, which
	 * generally use this hook to add elements to <head> such
	 * as styles, scripts, and meta tags.
	 */
	wp_head();
?>

<!--Jquery divswap and slider-->
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js"></script>
<script type="text/javascript" src="<?php bloginfo('stylesheet_directory'); ?>/js/divswap.js"></script>
<!--Jquery divswap and slider-->


<!--Lightbox -->
<script type="text/javascript" src="<?php bloginfo('stylesheet_directory'); ?>/lightbox/js/jquery.lightbox-0.5.min.js"></script>
<link rel="stylesheet" type="text/css" href="<?php bloginfo('stylesheet_directory'); ?>/lightbox/css/jquery.lightbox-0.5.css" media="screen" />	
<!--Lightbox-->





</head>

<body <?php body_class(); ?>>
<div id="wrapper">



<!--Banner-->
<div id="banner">
	
 
    <!--Logo-->    
    <div id="logo"><a href="home"><img src="<?php bloginfo('stylesheet_directory'); ?>/images/banner/logo.jpg" /></a></div><!--end logo div-->
    <!--Logo-->     
    
	
    <!--navbar-->    
		<div id="navbar">
    		<div id="nav-info">&nbsp;2 Extra Place New York, NY 10003 &nbsp;212.242.0035 &nbsp;&nbsp;&nbsp;info@theproposition.com</div>
    		<div id="nav">
            <div id="access" role="navigation">
			  <?php /*  Allow screen readers / text browsers to skip the navigation menu and get right to the good stuff */ ?>
				<div class="skip-link screen-reader-text"><a href="#content" title="<?php esc_attr_e( 'Skip to content', 'twentyten' ); ?>"><?php _e( 'Skip to content', 'twentyten' ); ?></a></div>
				<?php /* Our navigation menu.  If one isn't filled out, wp_nav_menu falls back to wp_page_menu.  The menu assiged to the primary position is the one used.  If none is assigned, the menu with the lowest ID is used.  */ ?>
				<?php wp_nav_menu( array( 'container_class' => 'menu-header', 'theme_location' => 'primary' ) ); ?>
				</div><!-- #access -->
            	
            </div><!--end nav div-->
    	</div><!--end navbar div-->
<!--navbar-->    
    
    <div class="clear"></div><!--end clearing div-->
		
</div><!--end banner div-->	
<!--Banner-->    
   

	<div id="main">
