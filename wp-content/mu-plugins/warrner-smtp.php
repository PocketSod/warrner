<?php
/**
 * Plugin Name: Warrner SMTP
 * Description: Routes wp_mail() through SMTP instead of PHP's default mail() transport, which shared hosting frequently spam-filters or drops silently. Off by default everywhere — only activates when WARRNER_SMTP_HOST is defined in that install's own wp-config.php (documented in wp-config-sample.php). No plugin dependency, no marketing/bloat — just PHPMailer configuration via the phpmailer_init hook WordPress already provides.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action( 'phpmailer_init', function ( $phpmailer ) {
	if ( ! defined( 'WARRNER_SMTP_HOST' ) || '' === WARRNER_SMTP_HOST ) {
		return;
	}

	$phpmailer->isSMTP();
	$phpmailer->Host       = WARRNER_SMTP_HOST;
	$phpmailer->Port       = defined( 'WARRNER_SMTP_PORT' ) ? WARRNER_SMTP_PORT : 587;
	$phpmailer->SMTPAuth   = true;
	$phpmailer->Username   = defined( 'WARRNER_SMTP_USERNAME' ) ? WARRNER_SMTP_USERNAME : '';
	$phpmailer->Password   = defined( 'WARRNER_SMTP_PASSWORD' ) ? WARRNER_SMTP_PASSWORD : '';
	$phpmailer->SMTPSecure = defined( 'WARRNER_SMTP_SECURE' ) ? WARRNER_SMTP_SECURE : 'tls';

	// M365 (and most providers) reject or flag mail where the From address
	// doesn't match the authenticated mailbox. Force it to match rather
	// than trust wp_mail()'s default wordpress@<host> From.
	$from_email = defined( 'WARRNER_SMTP_FROM_EMAIL' ) ? WARRNER_SMTP_FROM_EMAIL : $phpmailer->Username;
	$from_name  = defined( 'WARRNER_SMTP_FROM_NAME' ) ? WARRNER_SMTP_FROM_NAME : 'Warrner Legal';
	if ( '' !== $from_email ) {
		$phpmailer->setFrom( $from_email, $from_name );
	}
}, 20 );

// Surface send failures in the PHP error log, only when SMTP is actually
// configured — otherwise this would log every default-transport failure
// on installs that were never meant to send real mail (Laragon, demo).
add_action( 'wp_mail_failed', function ( $error ) {
	if ( ! defined( 'WARRNER_SMTP_HOST' ) || '' === WARRNER_SMTP_HOST ) {
		return;
	}
	error_log( 'Warrner SMTP: wp_mail failed — ' . $error->get_error_message() ); // phpcs:ignore WordPress.PHP.DevelopmentFunctions.error_log_error_log
} );
