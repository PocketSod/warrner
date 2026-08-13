<?php
/**
 * Single Attorney profile.
 *
 * Minimal working version — full layout (credentials, bar admissions,
 * education) queued for a later pass alongside header.php/footer.php.
 */

get_header();
?>

<main id="primary" class="section section--light">
	<div class="wrap">
		<?php
		while ( have_posts() ) {
			the_post();
			if ( has_post_thumbnail() ) {
				the_post_thumbnail( 'medium' );
			}
			the_title( '<h1 class="h1">', '</h1>' );
			the_content();
		}
		?>
	</div>
</main>

<?php
get_footer();
