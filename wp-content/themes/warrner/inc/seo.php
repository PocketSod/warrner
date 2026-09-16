<?php
/**
 * SEO: page title, meta description, Open Graph/Twitter cards, and
 * Attorney structured data. No SEO plugin is installed — this file is the
 * theme's entire SEO surface.
 *
 * The alternateName entries in the structured data below exist because
 * "Warner" is the single most common misspelling of "Warrner" — listing it
 * as a known alternate name is the legitimate schema.org mechanism for
 * helping search engines connect that query to this business (the same
 * signal behind Google's "Did you mean" prompts). It's reinforced by an
 * FAQ item on the homepage itself; see front-page.php's FAQ accordion.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'WARRNER_SEO_DESCRIPTION', 'Warrner Legal is the Indianapolis immigration law practice of attorney Erin Warrner — family-based, employment-based, and humanitarian immigration, naturalization, and removal defense. Free consultations.' );

/**
 * Front page gets a keyword/location-rich title instead of the bare site name.
 */
function warrner_document_title_parts( $title_parts ) {
	if ( is_front_page() ) {
		$title_parts = array( 'title' => 'Warrner Legal | Indianapolis Immigration Attorney' );
	}
	return $title_parts;
}
add_filter( 'document_title_parts', 'warrner_document_title_parts' );

/**
 * Meta description, Open Graph/Twitter cards, and JSON-LD Attorney schema.
 */
function warrner_seo_head() {
	$is_front    = is_front_page();
	$title       = $is_front ? 'Warrner Legal | Indianapolis Immigration Attorney' : wp_get_document_title();
	$description = $is_front ? WARRNER_SEO_DESCRIPTION : get_bloginfo( 'description' );
	$url         = $is_front ? home_url( '/' ) : get_permalink();
	$image       = WARRNER_URI . '/assets/images/erin-headshot.jpg';

	if ( ! $description ) {
		$description = WARRNER_SEO_DESCRIPTION;
	}

	echo "\n" . '<meta name="description" content="' . esc_attr( $description ) . '">' . "\n";
	if ( $is_front ) {
		echo '<link rel="canonical" href="' . esc_url( $url ) . '">' . "\n";
	}

	echo '<meta property="og:type" content="website">' . "\n";
	echo '<meta property="og:site_name" content="Warrner Legal">' . "\n";
	echo '<meta property="og:title" content="' . esc_attr( $title ) . '">' . "\n";
	echo '<meta property="og:description" content="' . esc_attr( $description ) . '">' . "\n";
	echo '<meta property="og:url" content="' . esc_url( $url ) . '">' . "\n";
	echo '<meta property="og:image" content="' . esc_url( $image ) . '">' . "\n";

	echo '<meta name="twitter:card" content="summary_large_image">' . "\n";
	echo '<meta name="twitter:title" content="' . esc_attr( $title ) . '">' . "\n";
	echo '<meta name="twitter:description" content="' . esc_attr( $description ) . '">' . "\n";
	echo '<meta name="twitter:image" content="' . esc_url( $image ) . '">' . "\n";

	if ( ! $is_front ) {
		return;
	}

	$schema = array(
		'@context'      => 'https://schema.org',
		'@type'         => 'Attorney',
		'name'          => 'Warrner Legal',
		'alternateName' => array( 'Warner Legal', 'Warner Law', 'Warner Immigration Law' ),
		'url'           => $url,
		'image'         => $image,
		'telephone'     => WARRNER_PHONE_TEL,
		'priceRange'    => '$$',
		'areaServed'    => 'Indianapolis, Indiana',
		'address'       => array(
			'@type'           => 'PostalAddress',
			'streetAddress'   => WARRNER_ADDRESS_STREET,
			'addressLocality' => 'Indianapolis',
			'addressRegion'   => 'IN',
			'postalCode'      => '46203',
			'addressCountry'  => 'US',
		),
		'founder'       => array(
			'@type'    => 'Person',
			'name'     => 'Erin Warrner',
			'jobTitle' => 'Attorney',
		),
	);

	echo '<script type="application/ld+json">' . wp_json_encode( $schema ) . '</script>' . "\n";
}
add_action( 'wp_head', 'warrner_seo_head' );
