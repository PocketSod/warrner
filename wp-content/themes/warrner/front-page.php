<?php
/**
 * Homepage.
 *
 * This used to run five parallel design options behind a floating review
 * toggle; the client picked Option A, so the other four (and the toggle)
 * were removed. Their markup/CSS/JS are preserved in
 * homepage-options-archive/ (see its README) in case any component gets
 * reused later — nothing there is loaded by the live site.
 *
 * The "#variant-d" id, "vd-" class prefix, and "-e" suffix on section
 * ids/anchors below are what's left of that review process (Option A
 * reused Option D's component system, then the toggle briefly labeled it
 * "e") — not a description of the current page structure. Left as-is
 * rather than renamed: every id/anchor pair is internally consistent, and
 * a rename across ~400 lines risks breaking one without any functional
 * gain.
 *
 * Content marked [PLACEHOLDER] is copy that needs a real number, credential,
 * or quote before launch — left in bracket-free prose so it reads correctly,
 * but flagged here and in comments so nothing fabricated ships by accident.
 *
 * All visible copy is wrapped in __()/_e() (text domain "warrner") so it's
 * translatable via TranslatePress now and Polylang/WPML later if the site
 * ever moves off TranslatePress. Proper nouns (Erin Warrner, Warrner Legal,
 * Indianapolis address/coords) are intentionally left unwrapped — a brand
 * or place name doesn't change between languages.
 */

get_header();

$practice_areas = warrner_get_practice_areas();
?>

<main id="primary">

<div id="variant-d">

	<!-- ==========================================================
	     A · Nav
	     ========================================================== -->
	<div class="vd-topbar">
		<img class="vd-logo" src="<?php echo esc_url( WARRNER_URI . '/assets/images/logo.png' ); ?>" alt="Warrner Legal">
		<ul class="vd-nav">
			<li><a href="#services-heading-e"><?php esc_html_e( 'Practice Areas', 'warrner' ); ?></a></li>
			<li><a href="#approach-heading-e"><?php esc_html_e( 'Our Approach', 'warrner' ); ?></a></li>
			<li><a href="#faq-heading-e"><?php esc_html_e( 'FAQ', 'warrner' ); ?></a></li>
			<li><a href="#consultation-e" class="vd-btn vd-btn--primary"><?php esc_html_e( 'Schedule a Consultation', 'warrner' ); ?></a></li>
		</ul>
		<?php if ( function_exists( 'pll_the_languages' ) ) : ?>
			<?php $vd_languages = pll_the_languages( array( 'raw' => true, 'hide_if_empty' => false ) ); ?>
			<?php if ( ! empty( $vd_languages ) ) : ?>
				<div class="vd-lang-switch" role="group" aria-label="<?php esc_attr_e( 'Select language', 'warrner' ); ?>">
					<?php foreach ( $vd_languages as $vd_lang ) : ?>
						<a
							href="<?php echo esc_url( $vd_lang['url'] ); ?>"
							class="vd-lang-switch__btn<?php echo $vd_lang['current_lang'] ? ' is-active' : ''; ?>"
							lang="<?php echo esc_attr( $vd_lang['locale'] ); ?>"
							<?php echo $vd_lang['current_lang'] ? 'aria-current="true"' : ''; ?>
						><?php echo esc_html( strtoupper( $vd_lang['slug'] ) ); ?></a>
					<?php endforeach; ?>
				</div>
			<?php endif; ?>
		<?php endif; ?>
	</div>

	<!-- ==========================================================
	     A · Hero
	     ========================================================== -->
	<section class="vd-hero vd-hero--split">
		<div class="wrap vd-hero__grid">
			<div class="vd-hero__content">
				<span class="vd-eyebrow"><?php esc_html_e( 'Immigration Law · Indianapolis', 'warrner' ); ?></span>
				<h1 class="vd-h1"><?php esc_html_e( 'Immigration law, guided by', 'warrner' ); ?> <span class="vd-accent"><?php esc_html_e( 'trust', 'warrner' ); ?></span>.</h1>
				<p class="vd-lede"><?php esc_html_e( "Warrner Legal represents individuals and families across every stage of the U.S. immigration system — with the personal attention a larger firm can't offer.", 'warrner' ); ?></p>
				<div class="vd-hero__actions">
					<a class="vd-btn vd-btn--primary" href="#consultation-e"><?php esc_html_e( 'Request a Consultation', 'warrner' ); ?></a>
					<a class="vd-btn vd-btn--phone" href="<?php echo warrner_phone_tel_href(); ?>"><span aria-hidden="true">&#9742;</span> <?php esc_html_e( 'Call', 'warrner' ); ?> <?php echo warrner_phone_display(); ?></a>
				</div>
				<ul class="vd-badges">
					<li><div class="vd-badge__num"><!-- PLACEHOLDER -->10+</div><div class="vd-badge__label"><?php esc_html_e( 'Years Practicing', 'warrner' ); ?></div></li>
					<li><div class="vd-badge__num"><!-- PLACEHOLDER -->500+</div><div class="vd-badge__label"><?php esc_html_e( 'Clients Served', 'warrner' ); ?></div></li>
					<li><div class="vd-badge__num">IN</div><div class="vd-badge__label"><?php esc_html_e( 'State Bar', 'warrner' ); ?></div></li>
				</ul>
			</div>
			<div class="vd-hero__portrait">
				<svg class="vd-hero__ring" viewBox="0 0 200 200" fill="none" aria-hidden="true">
					<circle cx="100" cy="100" r="99" stroke="var(--vd-gold)" stroke-width="1" opacity="0.35" />
					<ellipse cx="100" cy="100" rx="99" ry="88" stroke="var(--vd-gold)" stroke-width="1" opacity="0.5" />
					<ellipse cx="100" cy="100" rx="88" ry="99" stroke="var(--vd-gold)" stroke-width="1" opacity="0.5" />
					<circle cx="100" cy="100" r="74" stroke="var(--vd-gold)" stroke-width="1.5" opacity="0.7" />
					<line x1="100" y1="2" x2="107" y2="42" stroke="#C0043E" stroke-width="1.5" opacity="0.9" />
					<line x1="35" y1="100" x2="165" y2="100" stroke="var(--vd-gold)" stroke-width="1" opacity="0.5" />
					<circle cx="150" cy="100" r="3.5" fill="#C0043E" />
				</svg>
				<div class="vd-hero__photo">
					<img src="<?php echo esc_url( WARRNER_URI . '/assets/images/erin-headshot.jpg' ); ?>" alt="<?php esc_attr_e( 'Erin Warrner, founding attorney of Warrner Legal', 'warrner' ); ?>">
				</div>
			</div>
		</div>
	</section>

	<!-- ==========================================================
	     A · Meet Erin (bio)
	     ========================================================== -->
	<section class="vd-section vd-section--paper" aria-labelledby="bio-heading-e">
		<div class="wrap vd-bio">
			<div class="vd-bio__photo">
				<img src="<?php echo esc_url( WARRNER_URI . '/assets/images/erin-blazer.jpg' ); ?>" alt="<?php esc_attr_e( 'Erin Warrner, founding attorney of Warrner Legal', 'warrner' ); ?>">
			</div>
			<div>
				<span class="vd-eyebrow"><?php esc_html_e( 'Founding Attorney', 'warrner' ); ?></span>
				<h2 id="bio-heading-e" class="vd-h2">Erin Warrner</h2>
				<p class="vd-lede"><!-- PLACEHOLDER: replace with real bio --><?php esc_html_e( 'Erin founded Warrner Legal to give Indianapolis immigrant families and professionals direct access to experienced counsel, without the hand-off to junior staff common at larger firms.', 'warrner' ); ?></p>
				<ul class="vd-bio__credentials">
					<li><!-- PLACEHOLDER --><?php esc_html_e( 'J.D., [Law School]', 'warrner' ); ?></li>
					<li><?php esc_html_e( 'Admitted to the Indiana State Bar', 'warrner' ); ?></li>
					<li><!-- PLACEHOLDER --><?php esc_html_e( 'Member, American Immigration Lawyers Association (AILA)', 'warrner' ); ?></li>
				</ul>
			</div>
		</div>
	</section>

	<!-- ==========================================================
	     A · Services grid
	     ========================================================== -->
	<section class="vd-section vd-section--paper" id="services-heading-e" aria-labelledby="services-h-e">
		<div class="wrap">
			<span class="vd-eyebrow"><?php esc_html_e( 'How We Help', 'warrner' ); ?></span>
			<h2 id="services-h-e" class="vd-h2"><?php esc_html_e( 'Practice areas built on', 'warrner' ); ?> <span class="vd-accent"><?php esc_html_e( 'trust', 'warrner' ); ?></span> <?php esc_html_e( 'and deep expertise', 'warrner' ); ?></h2>
			<div class="vd-grid-3">
				<?php foreach ( $practice_areas as $area ) : ?>
					<a class="vd-card" href="<?php echo esc_url( $area['url'] ); ?>">
						<div class="vd-card__icon" aria-hidden="true">§</div>
						<h3 class="vd-card__title"><?php echo esc_html( $area['label'] ); ?></h3>
						<p class="vd-card__desc"><?php echo esc_html( $area['description'] ); ?></p>
					</a>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

	<!-- ==========================================================
	     A · Process steps
	     ========================================================== -->
	<section class="vd-section vd-section--cream" aria-labelledby="steps-h-e">
		<div class="wrap">
			<span class="vd-eyebrow"><?php esc_html_e( 'Getting Started', 'warrner' ); ?></span>
			<h2 id="steps-h-e" class="vd-h2"><?php esc_html_e( 'Simple to', 'warrner' ); ?> <span class="vd-accent"><?php esc_html_e( 'request', 'warrner' ); ?></span>, <?php esc_html_e( 'thorough in delivery', 'warrner' ); ?></h2>
			<div class="vd-steps">
				<div>
					<div class="vd-step__num">1</div>
					<h3 class="vd-step__title"><?php esc_html_e( 'Schedule a Consultation', 'warrner' ); ?></h3>
					<p class="vd-step__desc"><?php esc_html_e( 'Tell us briefly about your situation using the form below, or call the office directly.', 'warrner' ); ?></p>
				</div>
				<div>
					<div class="vd-step__num">2</div>
					<h3 class="vd-step__title"><?php esc_html_e( 'Discuss Your Case', 'warrner' ); ?></h3>
					<p class="vd-step__desc"><?php esc_html_e( 'Meet with Erin directly to go over your options, timeline, and what to expect.', 'warrner' ); ?></p>
				</div>
				<div>
					<div class="vd-step__num">3</div>
					<h3 class="vd-step__title"><?php esc_html_e( 'Move Forward with a Plan', 'warrner' ); ?></h3>
					<p class="vd-step__desc"><?php esc_html_e( 'We handle the filing and keep you updated at every stage, in plain language.', 'warrner' ); ?></p>
				</div>
			</div>
		</div>
	</section>

	<!-- ==========================================================
	     A · Fees
	     ========================================================== -->
	<section class="vd-section vd-section--paper" aria-labelledby="fees-h-e">
		<div class="wrap">
			<span class="vd-eyebrow"><?php esc_html_e( 'What It Costs', 'warrner' ); ?></span>
			<h2 id="fees-h-e" class="vd-h2"><?php esc_html_e( 'Fees built on', 'warrner' ); ?> <span class="vd-accent"><?php esc_html_e( 'clarity', 'warrner' ); ?></span>, <?php esc_html_e( 'not surprises', 'warrner' ); ?></h2>
			<div class="vd-fees">
				<div class="vd-fee">
					<h3 class="vd-fee__title"><!-- PLACEHOLDER: add consultation fee amount once Erin confirms it --><?php esc_html_e( 'Initial Consultation', 'warrner' ); ?></h3>
					<p class="vd-fee__desc"><?php esc_html_e( 'A paid one-on-one meeting with Erin to review your situation and explain your options before you commit to anything more.', 'warrner' ); ?></p>
				</div>
				<div class="vd-fee">
					<h3 class="vd-fee__title"><!-- PLACEHOLDER: confirm real fee structure --><?php esc_html_e( 'Flat-Fee Petitions', 'warrner' ); ?></h3>
					<p class="vd-fee__desc"><?php esc_html_e( 'Most petitions are billed at a flat rate, agreed to in writing before we start.', 'warrner' ); ?></p>
				</div>
				<div class="vd-fee">
					<h3 class="vd-fee__title"><?php esc_html_e( 'Payment Plans Available', 'warrner' ); ?></h3>
					<p class="vd-fee__desc"><?php esc_html_e( 'We work with clients to structure payments that fit their circumstances.', 'warrner' ); ?></p>
				</div>
			</div>
		</div>
	</section>

	<!-- ==========================================================
	     A · Case-type tag cloud
	     ========================================================== -->
	<section class="vd-section vd-section--cream" aria-labelledby="tags-h-e">
		<div class="wrap">
			<span class="vd-eyebrow"><?php esc_html_e( 'Filings We Handle', 'warrner' ); ?></span>
			<h2 id="tags-h-e" class="vd-h2"><?php esc_html_e( 'Every case type, from filing to', 'warrner' ); ?> <span class="vd-accent"><?php esc_html_e( 'decision', 'warrner' ); ?></span></h2>
			<div class="vd-tags">
				<span class="vd-tag"><?php esc_html_e( 'I-130 · Family Petition', 'warrner' ); ?></span>
				<span class="vd-tag"><?php esc_html_e( 'I-485 · Adjustment of Status', 'warrner' ); ?></span>
				<span class="vd-tag"><?php esc_html_e( 'N-400 · Naturalization', 'warrner' ); ?></span>
				<span class="vd-tag"><?php esc_html_e( 'I-589 · Asylum', 'warrner' ); ?></span>
				<span class="vd-tag"><?php esc_html_e( 'DACA Renewal', 'warrner' ); ?></span>
				<span class="vd-tag"><?php esc_html_e( 'I-751 · Removal of Conditions', 'warrner' ); ?></span>
				<span class="vd-tag vd-tag--outline"><?php esc_html_e( 'Removal Defense', 'warrner' ); ?></span>
			</div>
		</div>
	</section>

	<!-- ==========================================================
	     A · Our approach (dark)
	     ========================================================== -->
	<section class="vd-section vd-section--forest" id="approach-heading-e" aria-labelledby="approach-h-e">
		<div class="wrap vd-approach">
			<div>
				<span class="vd-eyebrow"><?php esc_html_e( 'Our Philosophy', 'warrner' ); ?></span>
				<h2 id="approach-h-e" class="vd-h2"><?php esc_html_e( 'Our', 'warrner' ); ?> <span class="vd-accent"><?php esc_html_e( 'approach', 'warrner' ); ?></span> <?php esc_html_e( 'to your case', 'warrner' ); ?></h2>
				<ul class="vd-approach-list">
					<li><strong><?php esc_html_e( 'Direct Attorney Access', 'warrner' ); ?></strong><span><?php esc_html_e( 'You work with Erin directly — never handed off to a paralegal or call center.', 'warrner' ); ?></span></li>
					<li><strong><?php esc_html_e( 'Clear Communication', 'warrner' ); ?></strong><span><?php esc_html_e( 'Plain-language updates at every stage, so you always know where your case stands.', 'warrner' ); ?></span></li>
					<li><strong><?php esc_html_e( 'Personal Attention', 'warrner' ); ?></strong><span><?php esc_html_e( 'Every case is different. We take the time to understand yours.', 'warrner' ); ?></span></li>
					<li><strong><?php esc_html_e( 'Community Rooted', 'warrner' ); ?></strong><span><!-- PLACEHOLDER -->10+ <?php esc_html_e( 'years serving immigrant families in Indianapolis.', 'warrner' ); ?></span></li>
				</ul>
			</div>
			<div class="vd-approach__portrait">
				<img src="<?php echo esc_url( WARRNER_URI . '/assets/images/erin-warrner.jpg' ); ?>" alt="Erin Warrner">
			</div>
		</div>
	</section>

	<!-- ==========================================================
	     A · FAQ accordion
	     ========================================================== -->
	<section class="vd-section vd-section--paper" id="faq-heading-e" aria-labelledby="faq-h-e">
		<div class="wrap">
			<span class="vd-eyebrow"><?php esc_html_e( 'Questions', 'warrner' ); ?></span>
			<h2 id="faq-h-e" class="vd-h2"><?php esc_html_e( 'Common', 'warrner' ); ?> <span class="vd-accent"><?php esc_html_e( 'questions', 'warrner' ); ?></span>, <?php esc_html_e( 'answered', 'warrner' ); ?></h2>
			<div class="vd-faq" data-accordion>
				<div class="vd-faq__item" data-open="true">
					<button type="button" class="vd-faq__q" aria-expanded="true">
						<?php esc_html_e( 'How long does the immigration process take?', 'warrner' ); ?>
						<span class="vd-faq__icon" aria-hidden="true">+</span>
					</button>
					<div class="vd-faq__a">
						<p><!-- PLACEHOLDER --><?php esc_html_e( "It depends on the case type — some petitions take months, others longer. We'll give you a realistic timeline at your consultation.", 'warrner' ); ?></p>
					</div>
				</div>
				<div class="vd-faq__item" data-open="false">
					<button type="button" class="vd-faq__q" aria-expanded="false">
						<?php esc_html_e( 'What should I bring to my consultation?', 'warrner' ); ?>
						<span class="vd-faq__icon" aria-hidden="true">+</span>
					</button>
					<div class="vd-faq__a">
						<p><!-- PLACEHOLDER --><?php esc_html_e( "Any immigration paperwork you've already filed, identification documents, and a summary of your situation. We'll tell you exactly what's needed when you schedule.", 'warrner' ); ?></p>
					</div>
				</div>
				<div class="vd-faq__item" data-open="false">
					<button type="button" class="vd-faq__q" aria-expanded="false">
						<?php esc_html_e( 'Do you offer payment plans?', 'warrner' ); ?>
						<span class="vd-faq__icon" aria-hidden="true">+</span>
					</button>
					<div class="vd-faq__a">
						<p><?php esc_html_e( 'Yes — we work with clients to structure payments that fit their circumstances. Ask us at your consultation.', 'warrner' ); ?></p>
					</div>
				</div>
				<div class="vd-faq__item" data-open="false">
					<button type="button" class="vd-faq__q" aria-expanded="false">
						<?php esc_html_e( "Can you help if I'm already in removal proceedings?", 'warrner' ); ?>
						<span class="vd-faq__icon" aria-hidden="true">+</span>
					</button>
					<div class="vd-faq__a">
						<p><!-- PLACEHOLDER --><?php esc_html_e( 'Yes. Call the office as soon as possible — deadlines in removal cases are strict, and earlier representation gives you more options.', 'warrner' ); ?></p>
					</div>
				</div>
				<div class="vd-faq__item" data-open="false">
					<button type="button" class="vd-faq__q" aria-expanded="false">
						<?php esc_html_e( 'Is it "Warner" or "Warrner" Legal?', 'warrner' ); ?>
						<span class="vd-faq__icon" aria-hidden="true">+</span>
					</button>
					<div class="vd-faq__a">
						<p><?php esc_html_e( 'It\'s Warrner — spelled with two Rs (W-A-R-R-N-E-R). Warrner Legal is the Indianapolis immigration law practice of attorney Erin Warrner. If you searched for "Warner Legal" or "Warner Law," you\'re in the right place.', 'warrner' ); ?></p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- ==========================================================
	     A · Testimonials
	     ========================================================== -->
	<section class="vd-section vd-section--cream" aria-labelledby="testimonials-h-e">
		<div class="wrap">
			<span class="vd-eyebrow"><?php esc_html_e( 'Client Outcomes', 'warrner' ); ?></span>
			<h2 id="testimonials-h-e" class="vd-h2"><?php esc_html_e( "Who we've", 'warrner' ); ?> <span class="vd-accent"><?php esc_html_e( 'helped', 'warrner' ); ?></span></h2>
			<div class="vd-grid-3">
				<figure class="vd-testimonial">
					<p>"<!-- PLACEHOLDER --><?php esc_html_e( 'Erin walked us through every step and always called back the same day.', 'warrner' ); ?>"</p>
					<figcaption><cite>— <?php esc_html_e( 'Client, Family-Based Petition', 'warrner' ); ?></cite></figcaption>
				</figure>
				<figure class="vd-testimonial">
					<p>"<!-- PLACEHOLDER --><?php esc_html_e( 'I finally understood what was happening with my case instead of just waiting and hoping.', 'warrner' ); ?>"</p>
					<figcaption><cite>— <?php esc_html_e( 'Client, Asylum Case', 'warrner' ); ?></cite></figcaption>
				</figure>
				<figure class="vd-testimonial">
					<p>"<!-- PLACEHOLDER --><?php esc_html_e( 'Direct, honest, and always reachable.', 'warrner' ); ?>"</p>
					<figcaption><cite>— <?php esc_html_e( 'Client, Naturalization', 'warrner' ); ?></cite></figcaption>
				</figure>
			</div>
			<p class="vd-lede" style="font-size: var(--text-xs); margin-top: var(--space-8);"><?php esc_html_e( 'Case results and testimonials describe past outcomes for specific clients and do not guarantee a similar result in any future matter.', 'warrner' ); ?></p>
		</div>
	</section>

	<!-- ==========================================================
	     A · Timeline
	     ========================================================== -->
	<section class="vd-section vd-section--paper" aria-labelledby="timeline-h-e">
		<div class="wrap">
			<span class="vd-eyebrow"><?php esc_html_e( 'What To Expect', 'warrner' ); ?></span>
			<h2 id="timeline-h-e" class="vd-h2"><?php esc_html_e( 'Your case,', 'warrner' ); ?> <span class="vd-accent"><?php esc_html_e( 'step by step', 'warrner' ); ?></span></h2>
			<div class="vd-timeline">
				<div class="vd-timeline__item">
					<div class="vd-timeline__stage"><?php printf( esc_html__( 'Stage %d', 'warrner' ), 1 ); ?></div>
					<h3 class="vd-timeline__title"><?php esc_html_e( 'Initial Consultation', 'warrner' ); ?></h3>
					<p class="vd-timeline__desc"><?php esc_html_e( 'We review your situation and outline a plan.', 'warrner' ); ?></p>
				</div>
				<div class="vd-timeline__item">
					<div class="vd-timeline__stage"><?php printf( esc_html__( 'Stage %d', 'warrner' ), 2 ); ?></div>
					<h3 class="vd-timeline__title"><?php esc_html_e( 'Petition Filed', 'warrner' ); ?></h3>
					<p class="vd-timeline__desc"><?php esc_html_e( 'We prepare and file your case with the appropriate agency.', 'warrner' ); ?></p>
				</div>
				<div class="vd-timeline__item">
					<div class="vd-timeline__stage"><?php printf( esc_html__( 'Stage %d', 'warrner' ), 3 ); ?></div>
					<h3 class="vd-timeline__title"><?php esc_html_e( 'Biometrics & Interview', 'warrner' ); ?></h3>
					<p class="vd-timeline__desc"><?php esc_html_e( 'We prepare you for any required appointments or interviews.', 'warrner' ); ?></p>
				</div>
				<div class="vd-timeline__item">
					<div class="vd-timeline__stage"><?php printf( esc_html__( 'Stage %d', 'warrner' ), 4 ); ?></div>
					<h3 class="vd-timeline__title"><?php esc_html_e( 'Decision & Next Steps', 'warrner' ); ?></h3>
					<p class="vd-timeline__desc"><?php esc_html_e( 'We explain the outcome and what it means going forward.', 'warrner' ); ?></p>
				</div>
			</div>
		</div>
	</section>

	<!-- ==========================================================
	     A · CTA banner
	     ========================================================== -->
	<section class="vd-cta-banner">
		<div class="wrap">
			<h2 class="vd-h2"><?php esc_html_e( 'Ready to move forward?', 'warrner' ); ?></h2>
			<p class="vd-lede" style="margin-inline: auto; color: inherit; opacity: 0.85;"><?php esc_html_e( 'Schedule your consultation today.', 'warrner' ); ?></p>
			<a class="vd-btn vd-btn--primary" href="#consultation-e" style="margin-top: var(--space-6);"><?php esc_html_e( 'Request a Consultation', 'warrner' ); ?></a>
		</div>
	</section>

	<!-- ==========================================================
	     A · Consultation form
	     ========================================================== -->
	<section id="consultation-e" class="vd-section vd-section--forest" aria-labelledby="consult-h-e">
		<div class="wrap" style="max-width: 640px;">
			<span class="vd-eyebrow"><?php esc_html_e( 'Get Started', 'warrner' ); ?></span>
			<h2 id="consult-h-e" class="vd-h2"><?php esc_html_e( 'Request a consultation', 'warrner' ); ?></h2>
			<p class="vd-lede"><?php esc_html_e( 'Tell us briefly about your situation. We respond within one business day.', 'warrner' ); ?></p>

			<form class="vd-intake" data-intake-form novalidate>
				<div class="vd-field">
					<label for="intake-name-e"><?php esc_html_e( 'Full name', 'warrner' ); ?></label>
					<input type="text" id="intake-name-e" name="name" required autocomplete="name">
				</div>
				<div class="vd-field">
					<label for="intake-email-e"><?php esc_html_e( 'Email', 'warrner' ); ?></label>
					<input type="email" id="intake-email-e" name="email" required autocomplete="email">
				</div>
				<div class="vd-field">
					<label for="intake-phone-e"><?php esc_html_e( 'Phone', 'warrner' ); ?></label>
					<input type="tel" id="intake-phone-e" name="phone" autocomplete="tel">
				</div>
				<div class="vd-field">
					<label for="intake-practice-area-e"><?php esc_html_e( 'Practice area', 'warrner' ); ?></label>
					<select id="intake-practice-area-e" name="practice_area">
						<?php foreach ( $practice_areas as $area ) : ?>
							<option value="<?php echo esc_attr( $area['label'] ); ?>"><?php echo esc_html( $area['label'] ); ?></option>
						<?php endforeach; ?>
						<option value="Other"><?php esc_html_e( 'Other / Not sure', 'warrner' ); ?></option>
					</select>
				</div>
				<div class="vd-field">
					<label for="intake-description-e"><?php esc_html_e( 'Briefly describe your situation', 'warrner' ); ?></label>
					<textarea id="intake-description-e" name="case_description" rows="4"></textarea>
				</div>

				<button type="submit" class="vd-btn vd-btn--primary vd-btn--block"><?php esc_html_e( 'Request My Consultation', 'warrner' ); ?></button>
				<p class="vd-intake__status" data-intake-status role="status" aria-live="polite"></p>
			</form>
		</div>
	</section>

	<!-- ==========================================================
	     A · Location
	     ========================================================== -->
	<section class="vd-section vd-section--paper" aria-labelledby="location-h-e">
		<div class="wrap vd-location">
			<div class="vd-location__map">
				<?php if ( defined( 'GOOGLE_MAPS_API_KEY' ) && GOOGLE_MAPS_API_KEY ) : ?>
					<iframe
						src="https://www.google.com/maps/embed/v1/place?key=<?php echo esc_attr( GOOGLE_MAPS_API_KEY ); ?>&q=<?php echo warrner_address_maps_query(); ?>"
						title="<?php esc_attr_e( 'Warrner Legal office location', 'warrner' ); ?>"
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
					></iframe>
				<?php else : ?>
					<a class="vd-location__map-fallback" href="https://www.google.com/maps/search/?api=1&query=<?php echo warrner_address_maps_query(); ?>" target="_blank" rel="noopener">
						<?php esc_html_e( 'View on Google Maps →', 'warrner' ); ?>
					</a>
				<?php endif; ?>
			</div>
			<div>
				<span class="vd-eyebrow"><?php esc_html_e( 'Visit Us', 'warrner' ); ?></span>
				<h2 id="location-h-e" class="vd-h2"><?php esc_html_e( 'Our Office', 'warrner' ); ?></h2>
				<dl class="vd-location__details">
					<dt><?php esc_html_e( 'Address', 'warrner' ); ?></dt>
					<dd><?php echo warrner_address_street(); ?><br><?php echo warrner_address_city_state_zip(); ?></dd>
					<dt><?php esc_html_e( 'Phone', 'warrner' ); ?></dt>
					<dd><a href="<?php echo warrner_phone_tel_href(); ?>"><?php echo warrner_phone_display(); ?></a></dd>
					<dt><?php esc_html_e( 'Office Hours', 'warrner' ); ?></dt>
					<dd><?php esc_html_e( 'Monday–Friday, 9:00 AM–5:00 PM', 'warrner' ); ?></dd>
				</dl>
			</div>
		</div>
	</section>

	<!-- ==========================================================
	     A · Footer
	     ========================================================== -->
	<div class="vd-footer">
		<div class="wrap">
			<div class="vd-footer__top">
				<img class="vd-logo" src="<?php echo esc_url( WARRNER_URI . '/assets/images/logo.png' ); ?>" alt="Warrner Legal">
				<ul class="vd-footer__nav">
					<li><a href="<?php echo esc_url( home_url( '/privacy-policy/' ) ); ?>"><?php esc_html_e( 'Privacy Policy', 'warrner' ); ?></a></li>
					<li><a href="<?php echo esc_url( home_url( '/terms-of-use/' ) ); ?>"><?php esc_html_e( 'Terms of Use', 'warrner' ); ?></a></li>
					<!-- PLACEHOLDER: wire a real page before launch -->
					<li><a href="#"><?php esc_html_e( 'Attorney Advertising', 'warrner' ); ?></a></li>
				</ul>
			</div>
			<div class="vd-footer__bottom">
				<span>© <?php echo esc_html( date( 'Y' ) ); ?> Warrner Legal. <?php esc_html_e( 'Attorney Advertising.', 'warrner' ); ?></span>
				<span>Indianapolis, IN — <?php echo warrner_address_coords(); ?></span>
			</div>
		</div>
	</div>

</div><!-- /#variant-d (Option A) -->

</main>

<?php
get_footer();
