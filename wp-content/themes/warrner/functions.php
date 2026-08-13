<?php
/**
 * Warrner Legal theme setup.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'WARRNER_VERSION', wp_get_theme()->get( 'Version' ) );
define( 'WARRNER_DIR', get_stylesheet_directory() );
define( 'WARRNER_URI', get_stylesheet_directory_uri() );

if ( ! defined( 'DISALLOW_FILE_EDIT' ) ) {
	define( 'DISALLOW_FILE_EDIT', true );
}

/**
 * Theme support & nav menus.
 */
function warrner_setup() {
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'custom-logo', array(
		'height'      => 80,
		'width'       => 240,
		'flex-height' => true,
		'flex-width'  => true,
	) );
	add_theme_support( 'html5', array(
		'search-form',
		'comment-form',
		'comment-list',
		'gallery',
		'caption',
		'script',
		'style',
	) );
	add_theme_support( 'responsive-embeds' );

	register_nav_menus( array(
		'primary' => __( 'Primary Navigation', 'warrner' ),
		'top-bar' => __( 'Top Bar', 'warrner' ),
		'footer'  => __( 'Footer', 'warrner' ),
	) );
}
add_action( 'after_setup_theme', 'warrner_setup' );

/**
 * Styles & scripts.
 */
function warrner_enqueue_assets() {
	wp_enqueue_style(
		'warrner-fonts',
		'https://fonts.googleapis.com/css2?family=Bitter:wght@400;600;700;900&family=Public+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500&display=swap',
		array(),
		null
	);

	// Option B fonts — from public/images/warrner_legal_brand_guide.md.
	wp_enqueue_style(
		'warrner-fonts-b',
		'https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Montserrat:wght@300;400;500;600;700&family=Open+Sans:wght@400;500;600&display=swap',
		array(),
		null
	);

	wp_enqueue_style( 'warrner-style', WARRNER_URI . '/assets/css/main.css', array( 'warrner-fonts' ), WARRNER_VERSION );
	wp_enqueue_style( 'warrner-variant-b', WARRNER_URI . '/assets/css/variant-b.css', array( 'warrner-style', 'warrner-fonts-b' ), WARRNER_VERSION );

	wp_enqueue_script( 'warrner-main', WARRNER_URI . '/assets/js/main.js', array(), WARRNER_VERSION, true );

	wp_localize_script( 'warrner-main', 'warrnerData', array(
		'ajaxUrl' => admin_url( 'admin-ajax.php' ),
		'nonce'   => wp_create_nonce( 'warrner_legal_intake' ),
	) );
}
add_action( 'wp_enqueue_scripts', 'warrner_enqueue_assets' );

/**
 * Attorney profiles (single-attorney.php).
 */
function warrner_register_attorney_cpt() {
	register_post_type( 'attorney', array(
		'labels' => array(
			'name'          => __( 'Attorneys', 'warrner' ),
			'singular_name' => __( 'Attorney', 'warrner' ),
			'add_new_item'  => __( 'Add New Attorney', 'warrner' ),
		),
		'public'       => true,
		'has_archive'  => false,
		'rewrite'      => array( 'slug' => 'attorneys' ),
		'menu_icon'    => 'dashicons-businessperson',
		'supports'     => array( 'title', 'editor', 'thumbnail', 'excerpt' ),
		'show_in_rest' => true,
	) );
}
add_action( 'init', 'warrner_register_attorney_cpt' );

/**
 * Practice areas for the homepage grid.
 *
 * Placeholder data until Practice Area pages (page-practice-area.php) exist —
 * swap the return for a WP_Query once real pages are built, keeping the
 * same shape (label, description, url, icon) so front-page.php needs no changes.
 */
function warrner_get_practice_areas() {
	return array(
		array(
			'label'       => 'Family-Based Immigration',
			'description' => 'Petitions to bring spouses, children, and parents to Indianapolis.',
			'url'         => home_url( '/practice-areas/family-based-immigration/' ),
		),
		array(
			'label'       => 'Employment-Based Immigration',
			'description' => 'Work visas and employer sponsorship, from petition to green card.',
			'url'         => home_url( '/practice-areas/employment-based-immigration/' ),
		),
		array(
			'label'       => 'Deportation & Removal Defense',
			'description' => 'Representation in immigration court when your case is on the line.',
			'url'         => home_url( '/practice-areas/removal-defense/' ),
		),
		array(
			'label'       => 'Asylum & Humanitarian Relief',
			'description' => 'Protection for those fleeing persecution or crisis abroad.',
			'url'         => home_url( '/practice-areas/asylum/' ),
		),
		array(
			'label'       => 'Naturalization & Citizenship',
			'description' => 'Guidance through the N-400 process, from filing to the oath.',
			'url'         => home_url( '/practice-areas/citizenship/' ),
		),
		array(
			'label'       => 'DACA & Deferred Action',
			'description' => 'Initial requests and renewals handled carefully and on time.',
			'url'         => home_url( '/practice-areas/daca/' ),
		),
	);
}

/**
 * Security hardening.
 */
remove_action( 'wp_head', 'wp_generator' );
remove_action( 'wp_head', 'rsd_link' );
remove_action( 'wp_head', 'wlwmanifest_link' );
remove_action( 'wp_head', 'wp_shortlink_wp_head' );
add_filter( 'xmlrpc_enabled', '__return_false' );
add_filter( 'the_generator', '__return_empty_string' );

function warrner_security_headers() {
	if ( ! is_admin() ) {
		header( 'X-Content-Type-Options: nosniff' );
		header( 'X-Frame-Options: SAMEORIGIN' );
		header( 'Referrer-Policy: strict-origin-when-cross-origin' );
	}
}
add_action( 'send_headers', 'warrner_security_headers' );

/**
 * AI-powered lead intake (inc/ai-lead-intake.php) — stubbed pending review
 * of the Claude API integration approach before it handles real client PII.
 */
require_once WARRNER_DIR . '/inc/ai-lead-intake.php';
