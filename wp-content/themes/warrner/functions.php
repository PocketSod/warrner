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

/**
 * Client contact info — single source of truth so it can't drift between
 * pages. Every template must pull from these instead of hardcoding the
 * address/phone.
 */
define( 'WARRNER_ADDRESS_STREET', '735 Shelby St, Suite 104' );
define( 'WARRNER_ADDRESS_CITY_STATE_ZIP', 'Indianapolis, IN 46203' );
define( 'WARRNER_ADDRESS_COORDS', '39.7522° N, 86.1400° W' );
define( 'WARRNER_PHONE_DISPLAY', '(317) 203-9111' );
define( 'WARRNER_PHONE_TEL', '+13172039111' );
define( 'WARRNER_EMAIL', 'erin@erinwlegal.com' );

/**
 * Escaped contact-info helpers for use in templates.
 */
function warrner_address_street() {
	return esc_html( WARRNER_ADDRESS_STREET );
}
function warrner_address_city_state_zip() {
	return esc_html( WARRNER_ADDRESS_CITY_STATE_ZIP );
}
function warrner_address_coords() {
	return esc_html( WARRNER_ADDRESS_COORDS );
}
function warrner_phone_display() {
	return esc_html( WARRNER_PHONE_DISPLAY );
}
function warrner_phone_tel_href() {
	return esc_attr( 'tel:' . WARRNER_PHONE_TEL );
}
function warrner_email() {
	return esc_html( WARRNER_EMAIL );
}
function warrner_email_href() {
	return esc_attr( 'mailto:' . WARRNER_EMAIL );
}
/**
 * Same coordinates, formatted with HTML entities for spots that already used
 * &deg;/&nbsp; instead of the literal ° character. Static, theme-authored
 * markup — safe to echo unescaped.
 */
function warrner_address_coords_entities() {
	return '39.7522&deg; N&nbsp;&nbsp;&nbsp;86.1400&deg; W';
}
function warrner_address_maps_query() {
	return rawurlencode( WARRNER_ADDRESS_STREET . ', ' . WARRNER_ADDRESS_CITY_STATE_ZIP );
}

if ( ! defined( 'DISALLOW_FILE_EDIT' ) ) {
	define( 'DISALLOW_FILE_EDIT', true );
}

/**
 * Theme support & nav menus.
 */
function warrner_setup() {
	load_theme_textdomain( 'warrner', WARRNER_DIR . '/languages' );

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
 * Cache-busting version for a theme asset, keyed to its own last-modified
 * time. A shared WARRNER_VERSION (the static style.css header) doesn't
 * change when a CSS/JS file is edited without also bumping that header, so
 * browsers (and LiteSpeed's static-file cache) keep serving stale assets
 * indefinitely after a deploy — this is what broke Option A/E's styling on
 * demo.toolsandtable.com after the theme was updated but style.css's
 * Version field wasn't. filemtime() ties the query string to the actual
 * file, so every deploy busts cache automatically.
 */
function warrner_asset_version( $relative_path ) {
	$file = WARRNER_DIR . $relative_path;
	return file_exists( $file ) ? filemtime( $file ) : WARRNER_VERSION;
}

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

	// Libre Baskerville/Montserrat — originally Option B's fonts, still used
	// by Option A (variant-d.css) and archived by homepage-options-archive/.
	wp_enqueue_style(
		'warrner-fonts-b',
		'https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Montserrat:wght@300;400;500;600;700&display=swap',
		array(),
		null
	);

	wp_enqueue_style( 'warrner-style', WARRNER_URI . '/assets/css/main.css', array( 'warrner-fonts' ), warrner_asset_version( '/assets/css/main.css' ) );
	// Option A (the live homepage) — variant-b.css/variant-c.css (Options C/D)
	// are no longer enqueued; see homepage-options-archive/.
	wp_enqueue_style( 'warrner-variant-d', WARRNER_URI . '/assets/css/variant-d.css', array( 'warrner-style', 'warrner-fonts-b' ), warrner_asset_version( '/assets/css/variant-d.css' ) );

	wp_enqueue_script( 'warrner-main', WARRNER_URI . '/assets/js/main.js', array(), warrner_asset_version( '/assets/js/main.js' ), true );

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
			'label'       => __( 'Family-Based Immigration', 'warrner' ),
			'description' => __( 'Petitions to bring spouses, children, and parents to Indianapolis.', 'warrner' ),
			'url'         => home_url( '/practice-areas/family-based-immigration/' ),
		),
		array(
			'label'       => __( 'Deportation & Removal Defense', 'warrner' ),
			'description' => __( 'Representation in immigration court when your case is on the line.', 'warrner' ),
			'url'         => home_url( '/practice-areas/removal-defense/' ),
		),
		array(
			'label'       => __( 'Asylum & Humanitarian Relief', 'warrner' ),
			'description' => __( 'Protection for those fleeing persecution or crisis abroad.', 'warrner' ),
			'url'         => home_url( '/practice-areas/asylum/' ),
		),
		array(
			'label'       => __( 'Naturalization & Citizenship', 'warrner' ),
			'description' => __( 'Guidance through the N-400 process, from filing to the oath.', 'warrner' ),
			'url'         => home_url( '/practice-areas/citizenship/' ),
		),
		array(
			'label'       => __( 'DACA & Deferred Action', 'warrner' ),
			'description' => __( 'Initial requests and renewals handled carefully and on time.', 'warrner' ),
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
require_once WARRNER_DIR . '/inc/seo.php';
