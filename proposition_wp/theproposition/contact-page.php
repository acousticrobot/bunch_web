<?php
/**
 * Template Name: Contact Page
 *
 */

get_header(); ?>



<div id="contact-page">
<div id="contact-left-side">
<!--Contact Form-->
<?php gravity_form(1, true, false, false, null, false, false); ?>
<!--Contact Form-->



<!--Content-->
<div id="contact-content">
<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
<?php the_content(); ?>
<?php endwhile; // end of the loop. ?>
</div><!--end contact content div-->
<!--Content-->

</div><!--end contact-left-side div-->


<div id="contact-right-side">
<img src="<?php bloginfo('stylesheet_directory'); ?>/images/contact/directions.jpg" />




<FONT COLOR="FF0000">THE PROPOSITION</FONT> is located at <FONT COLOR="FF0000">2 EXTRA PLACE</FONT>&#8211; East 1st Street, off Bowery<br />
<br />
<strong>Subway Directions:</strong><br />
<br />
<strong><FONT COLOR="FFFFFF"><span style="background-color:darkorange">&nbsp;F </FONT></strong>&nbsp; to 2ND AVE &#8211; LOWER EAST SIDE

<ul>
<li>Exit at 2nd Avenue/Houston</li>
<li>Walk North on 2nd Avenue</li>
<li>Turn Left at 1st Street, heading toward Bowery (entrance at alley)</li>
</ul>
<strong><FONT COLOR="FFFFFF"><span style="background-color:forestgreen">&nbsp;6 </span></FONT></strong>&nbsp; to BLEECKER ST
<ul>
<li>Exit at Bleecker/Lafayette</li>
<li>Walk East on Bleecker Street</li>
<li>Turn Right on Bowery</li>
<li>Turn Left on 1st Street, heading toward 2nd Ave (entrance at alley)</li>
</ul>
<strong><FONT COLOR="FFFFFF"><span style="background-color:darkorange">&nbsp;B </FONT></strong>&nbsp; <strong><FONT COLOR="FFFFFF"><span style="background-color:darkorange">&nbsp;D </span></FONT>&nbsp;&nbsp;</strong><strong><FONT COLOR="FFFFFF"><span style="background-color:darkorange">&nbsp;M </span></FONT></strong>&nbsp; to BROADWAY &#8211; LAFAYETTE
<ul>
<li>Exit at Lafayette</li>

<li>Walk East on E Houston</li>
<li>Turn Left on Bowery</li>
<li>Turn Right on 1st Street, heading toward 2nd Ave (entrance at alley)</li>
</ul>

<strong><FONT COLOR="000000"><span style="background-color:yellow">&nbsp;R </span></FONT></strong>&nbsp; to PRINCE
<ul>
<li>Exit at Prince/Broadway</li>
<li>Walk East on Prince toward the New Museum</li>
<li>Turn Left on Bowery</li>
<li>Turn Right on 1st Street, heading toward 2nd Ave (entrance at alley)</li>
</ul>


<strong>Bus Directions:</strong><br />
<br />
<strong><FONT COLOR="3399FF">M21</FONT></strong> to E HOUSTON ST &#8211; 2ND AVE (from East)
<ul>
<li>Exit at Houston/2nd Avenue</li>

<li>Walk North on 2nd Avenue</li>
<li>Turn Left at 1st Street, heading toward Bowery (entrance at alley)</li>
</ul>


<strong><FONT COLOR="3399FF">M21</FONT></strong> to E HOUSTON ST &#8211; BOWERY (from West)
<ul>
<li>Exit at Houston/Bowery</li>
<li>Walk North on Bowery</li>
<li>Turn Right at 1st Street, heading toward 2nd Ave (entrance at alley)</li>
</ul>

<strong><FONT COLOR="3399FF">M103</FONT></strong> to BOWERY &#8211; E 1ST ST (from South)
<ul>
<li>Exit at Bowery/1st</li>
<li>Walk on 1st Street, heading toward 2nd Ave (entrance at alley)</li>
</ul>

<strong><FONT COLOR="3399FF">M103</FONT></strong> to BOWERY &#8211; BLEECKER ST (from North)
<ul>
<li>Exit at Bowery/Bleecker</li>
<li>Walk South on Bowery</li>
<li>Turn Left at 1st Street, heading toward 2nd Ave (entrance at alley)</li>
</ul>

</div><!--end right side div-->


<div class="clear"></div><!--end clearing div-->
</div><!--end contact page div-->







<?php get_footer(); ?>
