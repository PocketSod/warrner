<?php
/**
 * Plugin Name: Warrner Cache Purge
 * Description: Authenticated REST endpoint to trigger a LiteSpeed Cache purge-all, so a deploy script can clear the cache without a manual wp-admin visit. No-ops safely if LiteSpeed Cache isn't installed/active (e.g. local Laragon).
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action( 'rest_api_init', function () {
	register_rest_route( 'warrner/v1', '/purge-cache', array(
		'methods'             => 'POST',
		'permission_callback' => function () {
			return current_user_can( 'manage_options' );
		},
		'callback'            => function () {
			if ( ! has_action( 'litespeed_purge_all' ) ) {
				return new WP_REST_Response( array(
					'purged'  => false,
					'message' => 'LiteSpeed Cache is not active on this site.',
				), 200 );
			}
			do_action( 'litespeed_purge_all' );
			return new WP_REST_Response( array(
				'purged'  => true,
				'message' => 'LiteSpeed cache purged.',
			), 200 );
		},
	) );
} );
