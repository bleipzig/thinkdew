<?php
/**
 * Footer sidebar group
 * @package Ariele_Lite
*/

if (   ! is_active_sidebar( 'footer1'  )
	&& ! is_active_sidebar( 'footer2' )
	&& ! is_active_sidebar( 'footer3'  )		
	&& ! is_active_sidebar( 'footer4'  )	
	)
		return;
	// If we get this far, we have widgets. Let do this.
?>
   
	<aside class="widget-area container">
		<div class="row">
		   
				<?php if ( is_active_sidebar( 'footer1' ) ) : ?>
					<div id="footer1" <?php ariele_lite_footer_group(); ?>>
						<?php dynamic_sidebar( 'footer1' ); ?>
					</div>
				<?php endif; ?>
				
				<?php if ( is_active_sidebar( 'footer2' ) ) : ?>      
					<div id="footer2" <?php ariele_lite_footer_group(); ?>>
						<?php dynamic_sidebar( 'footer2' ); ?>
					</div>         
				<?php endif; ?>
				
				<?php if ( is_active_sidebar( 'footer3' ) ) : ?>        
					<div id="footer3" <?php ariele_lite_footer_group(); ?>>
						<?php dynamic_sidebar( 'footer3' ); ?>
					</div>
				<?php endif; ?>
				
				<?php if ( is_active_sidebar( 'footer4' ) ) : ?>        
					<div id="footer4" <?php ariele_lite_footer_group(); ?>>
						<?php dynamic_sidebar( 'footer4' ); ?>
					</div>
				<?php endif; ?>		
			</div>

	</aside>         