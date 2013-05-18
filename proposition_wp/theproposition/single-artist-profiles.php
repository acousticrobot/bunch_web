<?php
/**
 * The Template for displaying single artist custom post type.
 *
 */

get_header(); ?>

<!--Artist Profile-->

<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>

<div id="left-column">
<div id="artist-title"><?php the_title(); ?></div><!--end artist title div-->


<div id="artist-content-menu">
	<ul id="navCol">
		<li>selected works</li>
		<li>cv</li>
		<li>exhibitions</li>
		<li>press</li>
	</ul>
</div><!--end artist content menu div-->


</div><!--end left column div-->




<div id="right-column">
		<div id="container">
			<div id="content" role="main">
			
<!--Begin div swap--> <!-- altered by jg 3/16/12 -->
	<ul id="contentCol">		
		<li class="contentItem">
        <div>
            <div class = "slideshow" >
				<div id = 'carousel'>
					<ul>
						<li>
                        	<div>
								<a href="<?php bloginfo('stylesheet_directory'); ?>/images/test/work_test.jpg" title="Title, materials, dimensions, year"><img src="<?php bloginfo('stylesheet_directory'); ?>/images/test/work_test.jpg" /></a>
								<div class="detail-info">Title<br /> materials<br /> dimensions<br /> year</div><!--end detail info div-->
							</div>
						</li>
						<li>
							<div>
								<a href="<?php bloginfo('stylesheet_directory'); ?>/images/test/work_test.jpg" title="Title, materials, dimensions, year"><img src="<?php bloginfo('stylesheet_directory'); ?>/images/test/work_test.jpg" /></a>
								<div class="detail-info">Title<br /> materials<br /> dimensions<br /> year</div><!--end detail info div-->
							</div>
						</li>
						<li>
							<div>
								<a href="<?php bloginfo('stylesheet_directory'); ?>/images/test/work_test.jpg" title="Title, materials, dimensions, year"><img src="<?php bloginfo('stylesheet_directory'); ?>/images/test/work_test.jpg" /></a>
								<div class="detail-info">Title<br /> materials<br /> dimensions<br /> year</div><!--end detail info div-->
							</div>
						</li>
						<li>
							<div>
								<a href="<?php bloginfo('stylesheet_directory'); ?>/images/test/work_test.jpg" title="Title, materials, dimensions, year"><img src="<?php bloginfo('stylesheet_directory'); ?>/images/test/work_test.jpg" /></a>
								<div class="detail-info">Title<br /> materials<br /> dimensions<br /> year</div><!--end detail info div-->
							</div>
						</li>
						<li>
							<div>
								<a href="<?php bloginfo('stylesheet_directory'); ?>/images/test/work_test.jpg" title="Title, materials, dimensions, year"><img src="<?php bloginfo('stylesheet_directory'); ?>/images/test/work_test.jpg" /></a>
								<div class="detail-info">Title<br /> materials<br /> dimensions<br /> year</div><!--end detail info div-->
							</div>
                      	</li>
					</ul>
				</div><!--end carousel div-->

			
			<div id='navArrows'>
				<span id = 'leftArrow'>&#060</span>
				<span id = 'rightArrow'>&#062</span>
                <div id="enlarge">click image to enlarge</div>
			</div><!--end navArrows div-->
			
 	</div><!--end slideshow div-->           
            
        </div><!--end content A div-->
        </li>
		
		<li class="contentItem">
        <div>
			<h1>Content B</h1>
			<p>Borem Bipsum Bdolor Bsit Bamet, Bconsectetur Badipisicing Belit, Bsed Bdo Beiusmod Btempor Bincididunt But Blabore Bet Bdolore Bmagna Baliqua. BUt Benim Bad Bminim Bveniam, Bquis Bnostrud Bexercitation Bullamco Blaboris Bnisi But Baliquip Bex Bea Bcommodo Bconsequat. BDuis Baute Birure Bdolor Bin Breprehenderit Bin Bvoluptate Bvelit Besse Bcillum Bdolore Beu Bfugiat Bnulla Bpariatur. BExcepteur Bsint Bo Caecat Bcupidatat Bnon Bproident, Bsunt Bin Bculpa Bqui Bofficia Bdeserunt Bmollit Banim Bid Best Blaborum.</p>		
		</div><!--end content B div-->
        </li>
			
		
		<li class="contentItem">
        <div>
			<h1>Content C</h1>
			<?php the_content(); ?>
			</div><!--end content C div-->
     </li>
		

		<li class="contentItem">
        <div>
			<h1>Content D</h1>
			<p>Dorem Dipsum  Dolor Dsit Damet, Dconsectetur Dadipisicing Delit, Dsed  Do Deiusmod Dtempor Dincididunt Dut Dlabore Det  Dolore Dmagna Daliqua. DUt Denim Dad Dminim Dveniam, Dquis Dnostrud Dexercitation Dullamco Dlaboris Dnisi Dut Daliquip Dex Dea Dcommodo Dconsequat. Duis Daute Dirure  Dolor Din Dreprehenderit Din Dvoluptate Dvelit Desse Dcillum  Dolore Deu Dfugiat Dnulla Dpariatur. DExcepteur Dsint Do Daecat Dcupidatat Dnon Dproident, Dsunt Din Dculpa Dqui Dofficia  Deserunt Dmollit Danim Did Dest Dlaborum.</p>		
		</div><!--end content D div-->
        </li>

</ul>
<!--end div swap-->			

			</div><!-- #content -->
		</div><!-- #container -->
</div><!--end right column div-->

<?php endwhile; // end of the loop. ?>



<?php get_footer(); ?>
