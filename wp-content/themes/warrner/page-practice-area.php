<?php
/**
 * Template Name: Practice Area
 *
 * Minimal working version — full layout (case types, related FAQs, CTA)
 * queued for a later pass alongside header.php/footer.php.
 */

get_header();
?>

<main id="primary" class="section section--light">
	<div class="wrap">
		<?php
		while ( have_posts() ) {
			the_post();
			the_title( '<h1 class="h1">', '</h1>' );
			the_content();
		}
		?>
	</div>
</main>

<?php
get_footer();
