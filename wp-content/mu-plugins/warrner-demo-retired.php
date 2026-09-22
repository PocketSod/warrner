<?php
/**
 * Plugin Name: Warrner Demo Retired
 * Description: Gates the public front end behind a neutral "no longer active" notice once a demo/preview site is retired. Off by default. Enable per-environment by adding define( 'WARRNER_DEMO_RETIRED', true ); to that install's wp-config.php. Deliberately not Warrner-branded, since the install this is built for (demo.toolsandtable.com) is reused across unrelated projects. Logged-in admins always see the real site through the gate.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action( 'template_redirect', function () {
	if ( ! defined( 'WARRNER_DEMO_RETIRED' ) || ! WARRNER_DEMO_RETIRED ) {
		return;
	}

	if ( is_admin() || wp_doing_ajax() || wp_doing_cron() || ( defined( 'REST_REQUEST' ) && REST_REQUEST ) || ( defined( 'WP_CLI' ) && WP_CLI ) ) {
		return;
	}

	if ( current_user_can( 'manage_options' ) ) {
		return;
	}

	status_header( 410 );

	$css_uri = content_url( 'mu-plugins/warrner-demo-retired/retired.css' );
	?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Preview no longer active</title>
	<meta name="robots" content="noindex, nofollow">
	<link rel="stylesheet" href="<?php echo esc_url( $css_uri ); ?>">
</head>
<body>
	<main class="dr-card">
		<h1>This preview is no longer active</h1>
		<p class="dr-lede">This link was used to share a project in progress and isn't live anymore. If you're looking for something specific, get in touch.</p>
		<p class="dr-credit"><a href="https://pocketsod.com" target="_blank" rel="noopener">pocketsod.com</a></p>
	</main>
</body>
</html>
	<?php
	exit;
} );
