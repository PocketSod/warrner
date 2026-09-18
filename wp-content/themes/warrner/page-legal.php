<?php
/**
 * Template Name: Legal Page
 *
 * Long-form content area for Privacy Policy / Terms of Use — narrower
 * measure and its own typography instead of the marketing sections used
 * elsewhere in the theme.
 */

get_header();
?>

<main id="primary" class="section section--light">
	<div class="wrap wrap--narrow">
		<a class="legal-back" href="<?php echo esc_url( home_url( '/' ) ); ?>">&larr; <?php esc_html_e( 'Back to home', 'warrner' ); ?></a>
		<?php
		while ( have_posts() ) {
			the_post();
			the_title( '<h1 class="h1">', '</h1>' );
			?>
			<div class="legal-content">
				<?php the_content(); ?>
			</div>
			<?php
		}
		?>
	</div>
</main>

<?php
get_footer();
