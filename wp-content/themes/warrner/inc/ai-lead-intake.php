<?php
/**
 * Legal intake form handler.
 *
 * Currently: validates, sanitizes, and emails the lead straight to the admin
 * so the form is fully functional. The Claude scoring pass described in the
 * brief (evaluate_legal_lead_with_claude()) is intentionally NOT wired yet —
 * sending client name/email/phone/case description to a third-party API
 * needs its own reviewed pass (key storage, consent language, error/timeout
 * handling) rather than being bundled into first-draft scaffolding. Hook it
 * in at the marked TODO once that's been reviewed.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function handle_legal_intake_form() {
	check_ajax_referer( 'warrner_legal_intake', 'nonce' );

	$name             = isset( $_POST['name'] ) ? sanitize_text_field( wp_unslash( $_POST['name'] ) ) : '';
	$email            = isset( $_POST['email'] ) ? sanitize_email( wp_unslash( $_POST['email'] ) ) : '';
	$phone            = isset( $_POST['phone'] ) ? sanitize_text_field( wp_unslash( $_POST['phone'] ) ) : '';
	$practice_area    = isset( $_POST['practice_area'] ) ? sanitize_text_field( wp_unslash( $_POST['practice_area'] ) ) : '';
	$case_description = isset( $_POST['case_description'] ) ? sanitize_textarea_field( wp_unslash( $_POST['case_description'] ) ) : '';

	if ( '' === $name || ! is_email( $email ) ) {
		wp_send_json_error( array( 'message' => 'Please provide your name and a valid email address.' ), 400 );
	}

	$lead_data = array(
		'name'             => $name,
		'email'            => $email,
		'phone'            => $phone,
		'practice_area'    => $practice_area,
		'case_description' => $case_description,
	);

	// TODO: once reviewed — $ai_result = evaluate_legal_lead_with_claude( $lead_data );
	// and fold $ai_result['summary'] / ['score'] / ['reasoning'] into the email below.

	$sent = warrner_send_intake_notification( $lead_data );

	if ( ! $sent ) {
		wp_send_json_error( array( 'message' => 'We could not send your request. Please call the office directly.' ), 500 );
	}

	wp_send_json_success( array( 'message' => 'Thank you — we will be in touch shortly.' ) );
}
add_action( 'wp_ajax_warrner_legal_intake', 'handle_legal_intake_form' );
add_action( 'wp_ajax_nopriv_warrner_legal_intake', 'handle_legal_intake_form' );

function warrner_send_intake_notification( $lead_data ) {
	$admin_email = get_option( 'admin_email' );
	$subject     = sprintf( '[Warrner Legal] New consultation request — %s', $lead_data['name'] );

	$body = "A new consultation request was submitted:\n\n";
	foreach ( $lead_data as $key => $value ) {
		$label = ucwords( str_replace( '_', ' ', $key ) );
		$body .= "{$label}: {$value}\n";
	}

	return wp_mail( $admin_email, $subject, $body );
}

/**
 * TODO (not yet called): Claude-based lead scoring.
 *
 * function evaluate_legal_lead_with_claude( $lead_data ) {
 *     $api_key = defined( 'ANTHROPIC_API_KEY' ) ? ANTHROPIC_API_KEY : '';
 *     if ( '' === $api_key ) {
 *         return null;
 *     }
 *
 *     $response = wp_remote_post( 'https://api.anthropic.com/v1/messages', array(
 *         'timeout' => 15,
 *         'headers' => array(
 *             'x-api-key'         => $api_key,
 *             'anthropic-version' => '2023-06-01',
 *             'content-type'      => 'application/json',
 *         ),
 *         'body' => wp_json_encode( array(
 *             'model'      => 'claude-3-5-haiku-20241022',
 *             'max_tokens' => 512,
 *             'messages'   => array( array( 'role' => 'user', 'content' => '...' ) ),
 *         ) ),
 *     ) );
 *
 *     if ( is_wp_error( $response ) ) {
 *         return null;
 *     }
 *
 *     // Parse JSON { summary, score, reasoning } from the response body.
 * }
 */
