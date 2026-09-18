<?php
/**
 * Plugin Name: Warrner Coming Soon
 * Description: Gates the public front end behind a branded "coming soon" notice ahead of full launch. Off by default — enable per-environment by adding define( 'WARRNER_COMING_SOON', true ); to that install's wp-config.php (never commit it on), so it only ever shows on the real production install and never on Laragon or the demo review site. Logged-in admins always see the real site through the gate.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action( 'template_redirect', function () {
	if ( ! defined( 'WARRNER_COMING_SOON' ) || ! WARRNER_COMING_SOON ) {
		return;
	}

	if ( is_admin() || wp_doing_ajax() || wp_doing_cron() || ( defined( 'REST_REQUEST' ) && REST_REQUEST ) || ( defined( 'WP_CLI' ) && WP_CLI ) ) {
		return;
	}

	if ( current_user_can( 'manage_options' ) ) {
		return;
	}

	status_header( 503 );
	header( 'Retry-After: 86400' );

	$css_uri  = content_url( 'mu-plugins/warrner-coming-soon/coming-soon.css' );
	$logo_uri = defined( 'WARRNER_URI' ) ? WARRNER_URI . '/assets/images/logo.png' : '';
	?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title><?php esc_html_e( 'Warrner Legal — Coming Soon', 'warrner' ); ?></title>
	<meta name="robots" content="noindex, nofollow">
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bitter:wght@600;700&family=Public+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@500&display=swap">
	<link rel="stylesheet" href="<?php echo esc_url( $css_uri ); ?>">
</head>
<body>
	<main class="cs-card">
		<?php if ( $logo_uri ) : ?>
			<img class="cs-logo" src="<?php echo esc_url( $logo_uri ); ?>" alt="<?php esc_attr_e( 'Warrner Legal', 'warrner' ); ?>">
		<?php endif; ?>
		<p class="cs-eyebrow"><?php esc_html_e( 'Indianapolis Immigration Law', 'warrner' ); ?></p>
		<h1><?php esc_html_e( 'Our new website is coming soon.', 'warrner' ); ?></h1>
		<p class="cs-lede"><?php esc_html_e( "We're putting the finishing touches on erinwlegal.com. In the meantime, reach out directly — we'd love to hear from you.", 'warrner' ); ?></p>
		<div class="cs-contact">
			<a class="cs-contact-item" href="<?php echo warrner_phone_tel_href(); ?>"><?php echo warrner_phone_display(); ?></a>
			<a class="cs-contact-item" href="<?php echo warrner_email_href(); ?>"><?php echo warrner_email(); ?></a>
			<span class="cs-contact-item cs-address"><?php echo warrner_address_street(); ?>, <?php echo warrner_address_city_state_zip(); ?></span>
		</div>
	</main>
</body>
</html>
	<?php
	exit;
} );
