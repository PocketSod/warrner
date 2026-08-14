<?php
/**
 * Homepage — five design options for client review.
 *
 * Displayed order (left to right in the toggle) vs. internal panel key —
 * kept distinct so re-ordering/relabeling never means renaming markup,
 * classes, or CSS selectors:
 *
 *   Option A → panel/button key "e" → id="variant-d"      (newest; reuses
 *              Option D's component system/tokens under its own #variant-d
 *              scope in variant-d.css, with its own hero photo + bio section)
 *   Option B → panel/button key "a" → id="variant-a"      (original concept —
 *              Indiana limestone / concentric-rings motif)
 *   Option C → panel/button key "b" → id="variant-b"      (built from
 *              public/images/warrner_legal_brand_guide.md — the real logo,
 *              Heritage Maroon/Precision Taupe, globe + coordinates motif)
 *   Option D → panel/button key "c" → id="variant-c"
 *   Option E → panel/button key "d" → id="variant-d-orig" (original Option D;
 *              moved last — see variant-d.css for the #variant-d /
 *              #variant-d-orig split)
 *
 * The floating toggle at the bottom is a REVIEW TOOL ONLY — strip it and
 * the losing variants' markup once a direction is picked.
 *
 * Content marked [PLACEHOLDER] is copy that needs a real number, credential,
 * or quote before launch — left in bracket-free prose so it reads correctly,
 * but flagged here and in comments so nothing fabricated ships by accident.
 */

get_header();

$practice_areas = warrner_get_practice_areas();
?>

<div class="variant-toggle" role="group" aria-label="Design option">
	<button type="button" class="variant-toggle__btn" data-variant-btn="e" aria-pressed="true">Option A</button>
	<button type="button" class="variant-toggle__btn" data-variant-btn="a" aria-pressed="false">Option B</button>
	<button type="button" class="variant-toggle__btn" data-variant-btn="b" aria-pressed="false">Option C</button>
	<button type="button" class="variant-toggle__btn" data-variant-btn="c" aria-pressed="false">Option D</button>
	<button type="button" class="variant-toggle__btn" data-variant-btn="d" aria-pressed="false">Option E</button>
</div>

<main id="primary">

<div id="variant-d" data-variant-panel="e">

	<!-- ==========================================================
	     D · Nav
	     ========================================================== -->
	<div class="vd-topbar">
		<img class="vd-logo" src="<?php echo esc_url( WARRNER_URI . '/assets/images/logo.png' ); ?>" alt="Warrner Legal">
		<ul class="vd-nav">
			<li><a href="#services-heading-e">Practice Areas</a></li>
			<li><a href="#approach-heading-e">Our Approach</a></li>
			<li><a href="#faq-heading-e">FAQ</a></li>
			<li><a href="#consultation-e" class="vd-btn vd-btn--primary">Free Consultation</a></li>
		</ul>
	</div>

	<!-- ==========================================================
	     E · Hero
	     ========================================================== -->
	<section class="vd-hero vd-hero--split">
		<div class="wrap vd-hero__grid">
			<div class="vd-hero__content">
				<span class="vd-eyebrow">Immigration Law · Indianapolis</span>
				<h1 class="vd-h1">Immigration law, guided by <span class="vd-accent">trust</span>.</h1>
				<p class="vd-lede">Warrner Legal represents individuals and families across every stage of the U.S. immigration system — with the personal attention a larger firm can't offer.</p>
				<div class="vd-hero__actions">
					<a class="vd-btn vd-btn--primary" href="#consultation-e">Request a Free Consultation</a>
					<a class="vd-btn vd-btn--ghost" href="tel:+13175550100">Call (317) 555-0100</a>
				</div>
				<ul class="vd-badges">
					<li><div class="vd-badge__num"><!-- PLACEHOLDER -->10+</div><div class="vd-badge__label">Years Practicing</div></li>
					<li><div class="vd-badge__num"><!-- PLACEHOLDER -->500+</div><div class="vd-badge__label">Clients Served</div></li>
					<li><div class="vd-badge__num">IN</div><div class="vd-badge__label">State Bar</div></li>
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
					<img src="<?php echo esc_url( WARRNER_URI . '/assets/images/erin-headshot.jpg' ); ?>" alt="Erin Warrner, founding attorney of Warrner Legal">
				</div>
			</div>
		</div>
	</section>

	<!-- ==========================================================
	     E · Meet Erin (bio)
	     ========================================================== -->
	<section class="vd-section vd-section--paper" aria-labelledby="bio-heading-e">
		<div class="wrap vd-bio">
			<div class="vd-bio__photo">
				<img src="<?php echo esc_url( WARRNER_URI . '/assets/images/erin-blazer.jpg' ); ?>" alt="Erin Warrner, founding attorney of Warrner Legal">
			</div>
			<div>
				<span class="vd-eyebrow">Founding Attorney</span>
				<h2 id="bio-heading-e" class="vd-h2">Erin Warrner</h2>
				<p class="vd-lede"><!-- PLACEHOLDER: replace with real bio -->Erin founded Warrner Legal to give Indianapolis immigrant families and professionals direct access to experienced counsel, without the hand-off to junior staff common at larger firms.</p>
				<ul class="vd-bio__credentials">
					<li><!-- PLACEHOLDER -->J.D., [Law School]</li>
					<li>Admitted to the Indiana State Bar</li>
					<li><!-- PLACEHOLDER -->Member, American Immigration Lawyers Association (AILA)</li>
				</ul>
			</div>
		</div>
	</section>

	<!-- ==========================================================
	     D · Services grid
	     ========================================================== -->
	<section class="vd-section vd-section--paper" id="services-heading-e" aria-labelledby="services-h-e">
		<div class="wrap">
			<span class="vd-eyebrow">How We Help</span>
			<h2 id="services-h-e" class="vd-h2">Practice areas built on <span class="vd-accent">trust</span> and deep expertise</h2>
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
	     D · Process steps
	     ========================================================== -->
	<section class="vd-section vd-section--cream" aria-labelledby="steps-h-e">
		<div class="wrap">
			<span class="vd-eyebrow">Getting Started</span>
			<h2 id="steps-h-e" class="vd-h2">Simple to <span class="vd-accent">request</span>, thorough in delivery</h2>
			<div class="vd-steps">
				<div>
					<div class="vd-step__num">1</div>
					<h3 class="vd-step__title">Schedule a Consultation</h3>
					<p class="vd-step__desc">Tell us briefly about your situation using the form below, or call the office directly.</p>
				</div>
				<div>
					<div class="vd-step__num">2</div>
					<h3 class="vd-step__title">Discuss Your Case</h3>
					<p class="vd-step__desc">Meet with Erin directly to go over your options, timeline, and what to expect.</p>
				</div>
				<div>
					<div class="vd-step__num">3</div>
					<h3 class="vd-step__title">Move Forward with a Plan</h3>
					<p class="vd-step__desc">We handle the filing and keep you updated at every stage, in plain language.</p>
				</div>
			</div>
		</div>
	</section>

	<!-- ==========================================================
	     D · Fees
	     ========================================================== -->
	<section class="vd-section vd-section--paper" aria-labelledby="fees-h-e">
		<div class="wrap">
			<span class="vd-eyebrow">What It Costs</span>
			<h2 id="fees-h-e" class="vd-h2">Fees built on <span class="vd-accent">clarity</span>, not surprises</h2>
			<div class="vd-fees">
				<div class="vd-fee">
					<h3 class="vd-fee__title">Free Consultation</h3>
					<p class="vd-fee__desc">Your first conversation costs nothing — we'll tell you honestly whether we can help.</p>
				</div>
				<div class="vd-fee">
					<h3 class="vd-fee__title"><!-- PLACEHOLDER: confirm real fee structure -->Flat-Fee Petitions</h3>
					<p class="vd-fee__desc">Most petitions are billed at a flat rate, agreed to in writing before we start.</p>
				</div>
				<div class="vd-fee">
					<h3 class="vd-fee__title">Payment Plans Available</h3>
					<p class="vd-fee__desc">We work with clients to structure payments that fit their circumstances.</p>
				</div>
			</div>
		</div>
	</section>

	<!-- ==========================================================
	     D · Case-type tag cloud
	     ========================================================== -->
	<section class="vd-section vd-section--cream" aria-labelledby="tags-h-e">
		<div class="wrap">
			<span class="vd-eyebrow">Filings We Handle</span>
			<h2 id="tags-h-e" class="vd-h2">Every case type, from filing to <span class="vd-accent">decision</span></h2>
			<div class="vd-tags">
				<span class="vd-tag">I-130 · Family Petition</span>
				<span class="vd-tag">I-485 · Adjustment of Status</span>
				<span class="vd-tag">N-400 · Naturalization</span>
				<span class="vd-tag">I-589 · Asylum</span>
				<span class="vd-tag">H-1B · Work Visa</span>
				<span class="vd-tag">DACA Renewal</span>
				<span class="vd-tag">I-751 · Removal of Conditions</span>
				<span class="vd-tag vd-tag--outline">Removal Defense</span>
			</div>
		</div>
	</section>

	<!-- ==========================================================
	     D · Our approach (dark)
	     ========================================================== -->
	<section class="vd-section vd-section--forest" id="approach-heading-e" aria-labelledby="approach-h-e">
		<div class="wrap vd-approach">
			<div>
				<span class="vd-eyebrow">Our Philosophy</span>
				<h2 id="approach-h-e" class="vd-h2">Our <span class="vd-accent">approach</span> to your case</h2>
				<ul class="vd-approach-list">
					<li><strong>Direct Attorney Access</strong><span>You work with Erin directly — never handed off to a paralegal or call center.</span></li>
					<li><strong>Clear Communication</strong><span>Plain-language updates at every stage, so you always know where your case stands.</span></li>
					<li><strong>Personal Attention</strong><span>Every case is different. We take the time to understand yours.</span></li>
					<li><strong>Community Rooted</strong><span><!-- PLACEHOLDER -->10+ years serving immigrant families in Indianapolis.</span></li>
				</ul>
			</div>
			<div class="vd-approach__portrait">
				<img src="<?php echo esc_url( WARRNER_URI . '/assets/images/erin-warrner.jpg' ); ?>" alt="Erin Warrner">
			</div>
		</div>
	</section>

	<!-- ==========================================================
	     D · FAQ accordion
	     ========================================================== -->
	<section class="vd-section vd-section--paper" id="faq-heading-e" aria-labelledby="faq-h-e">
		<div class="wrap">
			<span class="vd-eyebrow">Questions</span>
			<h2 id="faq-h-e" class="vd-h2">Common <span class="vd-accent">questions</span>, answered</h2>
			<div class="vd-faq" data-accordion>
				<div class="vd-faq__item" data-open="true">
					<button type="button" class="vd-faq__q" aria-expanded="true">
						How long does the immigration process take?
						<span class="vd-faq__icon" aria-hidden="true">+</span>
					</button>
					<div class="vd-faq__a">
						<p><!-- PLACEHOLDER -->It depends on the case type — some petitions take months, others longer. We'll give you a realistic timeline at your consultation.</p>
					</div>
				</div>
				<div class="vd-faq__item" data-open="false">
					<button type="button" class="vd-faq__q" aria-expanded="false">
						What should I bring to my consultation?
						<span class="vd-faq__icon" aria-hidden="true">+</span>
					</button>
					<div class="vd-faq__a">
						<p><!-- PLACEHOLDER -->Any immigration paperwork you've already filed, identification documents, and a summary of your situation. We'll tell you exactly what's needed when you schedule.</p>
					</div>
				</div>
				<div class="vd-faq__item" data-open="false">
					<button type="button" class="vd-faq__q" aria-expanded="false">
						Do you offer payment plans?
						<span class="vd-faq__icon" aria-hidden="true">+</span>
					</button>
					<div class="vd-faq__a">
						<p>Yes — we work with clients to structure payments that fit their circumstances. Ask us at your consultation.</p>
					</div>
				</div>
				<div class="vd-faq__item" data-open="false">
					<button type="button" class="vd-faq__q" aria-expanded="false">
						Can you help if I'm already in removal proceedings?
						<span class="vd-faq__icon" aria-hidden="true">+</span>
					</button>
					<div class="vd-faq__a">
						<p><!-- PLACEHOLDER -->Yes. Call the office as soon as possible — deadlines in removal cases are strict, and earlier representation gives you more options.</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- ==========================================================
	     D · Testimonials
	     ========================================================== -->
	<section class="vd-section vd-section--cream" aria-labelledby="testimonials-h-e">
		<div class="wrap">
			<span class="vd-eyebrow">Client Outcomes</span>
			<h2 id="testimonials-h-e" class="vd-h2">Who we've <span class="vd-accent">helped</span></h2>
			<div class="vd-grid-3">
				<figure class="vd-testimonial">
					<p>"<!-- PLACEHOLDER -->Erin walked us through every step and always called back the same day."</p>
					<figcaption><cite>— Client, Family-Based Petition</cite></figcaption>
				</figure>
				<figure class="vd-testimonial">
					<p>"<!-- PLACEHOLDER -->I finally understood what was happening with my case instead of just waiting and hoping."</p>
					<figcaption><cite>— Client, Asylum Case</cite></figcaption>
				</figure>
				<figure class="vd-testimonial">
					<p>"<!-- PLACEHOLDER -->Direct, honest, and always reachable."</p>
					<figcaption><cite>— Client, Employment Visa</cite></figcaption>
				</figure>
			</div>
			<p class="vd-lede" style="font-size: var(--text-xs); margin-top: var(--space-8);">Case results and testimonials describe past outcomes for specific clients and do not guarantee a similar result in any future matter.</p>
		</div>
	</section>

	<!-- ==========================================================
	     D · Timeline
	     ========================================================== -->
	<section class="vd-section vd-section--paper" aria-labelledby="timeline-h-e">
		<div class="wrap">
			<span class="vd-eyebrow">What To Expect</span>
			<h2 id="timeline-h-e" class="vd-h2">Your case, <span class="vd-accent">step by step</span></h2>
			<div class="vd-timeline">
				<div class="vd-timeline__item">
					<div class="vd-timeline__stage">Stage 1</div>
					<h3 class="vd-timeline__title">Initial Consultation</h3>
					<p class="vd-timeline__desc">We review your situation and outline a plan.</p>
				</div>
				<div class="vd-timeline__item">
					<div class="vd-timeline__stage">Stage 2</div>
					<h3 class="vd-timeline__title">Petition Filed</h3>
					<p class="vd-timeline__desc">We prepare and file your case with the appropriate agency.</p>
				</div>
				<div class="vd-timeline__item">
					<div class="vd-timeline__stage">Stage 3</div>
					<h3 class="vd-timeline__title">Biometrics &amp; Interview</h3>
					<p class="vd-timeline__desc">We prepare you for any required appointments or interviews.</p>
				</div>
				<div class="vd-timeline__item">
					<div class="vd-timeline__stage">Stage 4</div>
					<h3 class="vd-timeline__title">Decision &amp; Next Steps</h3>
					<p class="vd-timeline__desc">We explain the outcome and what it means going forward.</p>
				</div>
			</div>
		</div>
	</section>

	<!-- ==========================================================
	     D · CTA banner
	     ========================================================== -->
	<section class="vd-cta-banner">
		<div class="wrap">
			<h2 class="vd-h2">Ready to move forward?</h2>
			<p class="vd-lede" style="margin-inline: auto; color: inherit; opacity: 0.85;">Schedule your free consultation today.</p>
			<a class="vd-btn vd-btn--primary" href="#consultation-e" style="margin-top: var(--space-6);">Request a Free Consultation</a>
		</div>
	</section>

	<!-- ==========================================================
	     D · Consultation form
	     ========================================================== -->
	<section id="consultation-e" class="vd-section vd-section--forest" aria-labelledby="consult-h-e">
		<div class="wrap" style="max-width: 640px;">
			<span class="vd-eyebrow">Get Started</span>
			<h2 id="consult-h-e" class="vd-h2">Request a free consultation</h2>
			<p class="vd-lede">Tell us briefly about your situation. We respond within one business day.</p>

			<form class="vd-intake" data-intake-form novalidate>
				<div class="vd-field">
					<label for="intake-name-e">Full name</label>
					<input type="text" id="intake-name-e" name="name" required autocomplete="name">
				</div>
				<div class="vd-field">
					<label for="intake-email-e">Email</label>
					<input type="email" id="intake-email-e" name="email" required autocomplete="email">
				</div>
				<div class="vd-field">
					<label for="intake-phone-e">Phone</label>
					<input type="tel" id="intake-phone-e" name="phone" autocomplete="tel">
				</div>
				<div class="vd-field">
					<label for="intake-practice-area-e">Practice area</label>
					<select id="intake-practice-area-e" name="practice_area">
						<?php foreach ( $practice_areas as $area ) : ?>
							<option value="<?php echo esc_attr( $area['label'] ); ?>"><?php echo esc_html( $area['label'] ); ?></option>
						<?php endforeach; ?>
						<option value="Other">Other / Not sure</option>
					</select>
				</div>
				<div class="vd-field">
					<label for="intake-description-e">Briefly describe your situation</label>
					<textarea id="intake-description-e" name="case_description" rows="4"></textarea>
				</div>

				<button type="submit" class="vd-btn vd-btn--primary vd-btn--block">Request My Consultation</button>
				<p class="vd-intake__status" data-intake-status role="status" aria-live="polite"></p>
			</form>
		</div>
	</section>

	<!-- ==========================================================
	     D · Location
	     ========================================================== -->
	<section class="vd-section vd-section--paper" aria-labelledby="location-h-e">
		<div class="wrap vd-location">
			<div class="vd-location__map">
				<!-- PLACEHOLDER: confirm real office address before launch -->
				<?php if ( defined( 'GOOGLE_MAPS_API_KEY' ) && GOOGLE_MAPS_API_KEY ) : ?>
					<iframe
						src="https://www.google.com/maps/embed/v1/place?key=<?php echo esc_attr( GOOGLE_MAPS_API_KEY ); ?>&q=1+Monument+Circle,+Indianapolis,+IN+46204"
						title="Warrner Legal office location"
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
					></iframe>
				<?php else : ?>
					<a class="vd-location__map-fallback" href="https://www.google.com/maps/search/?api=1&query=1+Monument+Circle,+Indianapolis,+IN+46204" target="_blank" rel="noopener">
						View on Google Maps →
					</a>
				<?php endif; ?>
			</div>
			<div>
				<span class="vd-eyebrow">Visit Us</span>
				<h2 id="location-h-e" class="vd-h2">Our Office</h2>
				<dl class="vd-location__details">
					<dt>Address</dt>
					<dd><!-- PLACEHOLDER -->1 Monument Circle, Suite 400<br>Indianapolis, IN 46204</dd>
					<dt>Phone</dt>
					<dd><a href="tel:+13175550100">(317) 555-0100</a></dd>
					<dt>Office Hours</dt>
					<dd>Monday–Friday, 9:00 AM–5:00 PM</dd>
				</dl>
			</div>
		</div>
	</section>

	<!-- ==========================================================
	     D · Footer
	     ========================================================== -->
	<div class="vd-footer">
		<div class="wrap">
			<div class="vd-footer__top">
				<img class="vd-logo" src="<?php echo esc_url( WARRNER_URI . '/assets/images/logo.png' ); ?>" alt="Warrner Legal">
				<ul class="vd-footer__nav">
					<!-- PLACEHOLDER: wire real pages before launch -->
					<li><a href="#">Privacy Policy</a></li>
					<li><a href="#">Terms of Use</a></li>
					<li><a href="#">Attorney Advertising</a></li>
				</ul>
			</div>
			<div class="vd-footer__bottom">
				<span>© <?php echo esc_html( date( 'Y' ) ); ?> Warrner Legal. Attorney Advertising.</span>
				<span>Indianapolis, IN — 39.7684° N, 86.1581° W</span>
			</div>
		</div>
	</div>

</div><!-- /#variant-d (Option A — new default) -->

<div id="variant-a" data-variant-panel="a" hidden>

	<!-- ==========================================================
	     A · Hero
	     ========================================================== -->
	<section class="hero">
		<div class="wrap hero__grid">
			<div>
				<span class="eyebrow">Immigration Law · Indianapolis, Indiana</span>
				<h1 class="h1">A clear path forward, right here in Indianapolis.</h1>
				<p class="lede">Warrner Legal provides dedicated, personal immigration representation — from your first petition to the day you take the oath.</p>

				<ul class="hero__badges">
					<li>Free initial consultation</li>
					<li>Direct attorney access</li>
					<li><!-- PLACEHOLDER: confirm real figure --> 10+ years serving Indianapolis families</li>
				</ul>

				<div class="hero__actions">
					<a class="btn btn--primary" href="#consultation-a">Request a Free Consultation</a>
					<a class="btn btn--ghost" href="tel:+13175550100">Call (317) 555-0100</a>
				</div>
			</div>

			<div class="hero__portrait">
				<svg class="hero__ring" viewBox="0 0 200 200" fill="none" aria-hidden="true">
					<circle cx="100" cy="100" r="99" stroke="currentColor" stroke-width="1" opacity="0.4" />
					<circle cx="100" cy="100" r="85" stroke="currentColor" stroke-width="1.5" opacity="0.65" />
					<circle cx="100" cy="100" r="70" stroke="currentColor" stroke-width="2" opacity="0.9" />
				</svg>
				<div class="hero__photo">
					<img src="<?php echo esc_url( WARRNER_URI . '/assets/images/erin-warrner.jpg' ); ?>" alt="Erin Warrner, founding attorney of Warrner Legal">
				</div>
			</div>
		</div>
	</section>

	<!-- ==========================================================
	     A · Social proof / authority bar
	     ========================================================== -->
	<section class="section section--paper" aria-labelledby="proof-heading-a">
		<div class="wrap">
			<h2 id="proof-heading-a" class="screen-reader-text">Firm record</h2>
			<div class="stats">
				<div>
					<div class="stat__num"><!-- PLACEHOLDER -->10+</div>
					<div class="stat__label">Years of Immigration Practice</div>
				</div>
				<div>
					<div class="stat__num"><!-- PLACEHOLDER -->500+</div>
					<div class="stat__label">Clients Represented</div>
				</div>
				<div>
					<div class="stat__num">1:1</div>
					<div class="stat__label">Direct Attorney Access</div>
				</div>
				<div>
					<div class="stat__num">IN</div>
					<div class="stat__label">Licensed, Indiana State Bar</div>
				</div>
			</div>

			<div class="badges-row" aria-label="Recognitions and affiliations">
				<img src="https://placehold.co/140x48/C9C2AC/1B2531?text=Super+Lawyers" alt="Super Lawyers (placeholder — replace with real badge)">
				<img src="https://placehold.co/140x48/C9C2AC/1B2531?text=Avvo" alt="Avvo (placeholder — replace with real badge)">
				<img src="https://placehold.co/140x48/C9C2AC/1B2531?text=IN+State+Bar" alt="Indiana State Bar Association (placeholder — replace with real badge)">
			</div>
		</div>
	</section>

	<!-- ==========================================================
	     A · Practice areas
	     ========================================================== -->
	<section class="section section--light" aria-labelledby="practice-heading-a">
		<div class="wrap">
			<span class="eyebrow">How We Help</span>
			<h2 id="practice-heading-a" class="h2">Practice areas</h2>
			<p class="lede" style="margin-bottom: var(--space-12);">Every immigration case is different. Here's where we focus.</p>

			<div class="grid-3">
				<?php foreach ( $practice_areas as $area ) : ?>
					<a class="card" href="<?php echo esc_url( $area['url'] ); ?>">
						<h3 class="card__title"><?php echo esc_html( $area['label'] ); ?></h3>
						<p class="card__desc"><?php echo esc_html( $area['description'] ); ?></p>
					</a>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

	<!-- ==========================================================
	     A · Attorney bio
	     ========================================================== -->
	<section class="section section--paper" aria-labelledby="bio-heading-a">
		<div class="wrap bio">
			<div class="bio__photo">
				<img src="<?php echo esc_url( WARRNER_URI . '/assets/images/erin-warrner.jpg' ); ?>" alt="Erin Warrner">
			</div>
			<div>
				<span class="eyebrow">Founding Attorney</span>
				<h2 id="bio-heading-a" class="h2">Erin Warrner</h2>
				<p class="lede"><!-- PLACEHOLDER: replace with real bio -->Erin founded Warrner Legal to give Indianapolis immigrant families and professionals direct access to experienced counsel, without the hand-off to junior staff common at larger firms.</p>
				<ul class="bio__credentials">
					<li><!-- PLACEHOLDER -->J.D., [Law School]</li>
					<li>Admitted to the Indiana State Bar</li>
					<li><!-- PLACEHOLDER -->Member, American Immigration Lawyers Association (AILA)</li>
				</ul>
			</div>
		</div>
	</section>

	<!-- ==========================================================
	     A · Case results & testimonials
	     ========================================================== -->
	<section class="section section--light" aria-labelledby="results-heading-a">
		<div class="wrap">
			<span class="eyebrow">Client Outcomes</span>
			<h2 id="results-heading-a" class="h2">Recent outcomes</h2>

			<div class="results-grid">
				<div class="result-card">
					<span class="result-card__tag">Approved</span>
					Employment-based green card petition <!-- PLACEHOLDER: confirm anonymized case detail -->
				</div>
				<div class="result-card">
					<span class="result-card__tag">Approved</span>
					Family-sponsored spousal visa <!-- PLACEHOLDER -->
				</div>
				<div class="result-card">
					<span class="result-card__tag">Granted</span>
					Asylum relief for client fleeing persecution <!-- PLACEHOLDER -->
				</div>
			</div>

			<div class="grid-3">
				<figure class="testimonial">
					<p>"<!-- PLACEHOLDER: real client quote, with permission -->Erin walked us through every step and always called back the same day."</p>
					<figcaption><cite>— Client, Family-Based Petition</cite></figcaption>
				</figure>
				<figure class="testimonial">
					<p>"<!-- PLACEHOLDER -->I finally understood what was happening with my case instead of just waiting and hoping."</p>
					<figcaption><cite>— Client, Asylum Case</cite></figcaption>
				</figure>
				<figure class="testimonial">
					<p>"<!-- PLACEHOLDER -->Direct, honest, and always reachable."</p>
					<figcaption><cite>— Client, Employment Visa</cite></figcaption>
				</figure>
			</div>

			<p class="disclaimer">Case results and testimonials describe past outcomes for specific clients. They do not guarantee or predict a similar result in any future matter. Every immigration case depends on its own facts and circumstances.</p>
		</div>
	</section>

	<!-- ==========================================================
	     A · Consultation form
	     ========================================================== -->
	<section id="consultation-a" class="section section--dark" aria-labelledby="consult-heading-a">
		<div class="wrap" style="max-width: 640px;">
			<span class="eyebrow">Get Started</span>
			<h2 id="consult-heading-a" class="h2">Request a free consultation</h2>
			<p class="lede">Tell us briefly about your situation. We respond within one business day.</p>

			<form class="intake" data-intake-form novalidate>
				<div class="field">
					<label for="intake-name-a">Full name</label>
					<input type="text" id="intake-name-a" name="name" required autocomplete="name">
				</div>
				<div class="field">
					<label for="intake-email-a">Email</label>
					<input type="email" id="intake-email-a" name="email" required autocomplete="email">
				</div>
				<div class="field">
					<label for="intake-phone-a">Phone</label>
					<input type="tel" id="intake-phone-a" name="phone" autocomplete="tel">
				</div>
				<div class="field">
					<label for="intake-practice-area-a">Practice area</label>
					<select id="intake-practice-area-a" name="practice_area">
						<?php foreach ( $practice_areas as $area ) : ?>
							<option value="<?php echo esc_attr( $area['label'] ); ?>"><?php echo esc_html( $area['label'] ); ?></option>
						<?php endforeach; ?>
						<option value="Other">Other / Not sure</option>
					</select>
				</div>
				<div class="field">
					<label for="intake-description-a">Briefly describe your situation</label>
					<textarea id="intake-description-a" name="case_description" rows="4"></textarea>
				</div>

				<button type="submit" class="btn btn--primary btn--block">Request My Consultation</button>
				<p class="intake__status" data-intake-status role="status" aria-live="polite"></p>
			</form>
		</div>
	</section>

	<!-- ==========================================================
	     A · Location
	     ========================================================== -->
	<section class="section section--paper" aria-labelledby="location-heading-a">
		<div class="wrap location">
			<div class="location__map">
				<!-- PLACEHOLDER: confirm real office address before launch -->
				<?php if ( defined( 'GOOGLE_MAPS_API_KEY' ) && GOOGLE_MAPS_API_KEY ) : ?>
					<iframe
						src="https://www.google.com/maps/embed/v1/place?key=<?php echo esc_attr( GOOGLE_MAPS_API_KEY ); ?>&q=1+Monument+Circle,+Indianapolis,+IN+46204"
						title="Warrner Legal office location"
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
					></iframe>
				<?php else : ?>
					<a class="location__map-fallback" href="https://www.google.com/maps/search/?api=1&query=1+Monument+Circle,+Indianapolis,+IN+46204" target="_blank" rel="noopener">
						View on Google Maps →
					</a>
				<?php endif; ?>
			</div>
			<div>
				<span class="eyebrow">Visit Us</span>
				<h2 id="location-heading-a" class="h2">Our office</h2>
				<dl class="location__details">
					<dt>Address</dt>
					<dd><!-- PLACEHOLDER -->1 Monument Circle, Suite 400<br>Indianapolis, IN 46204</dd>
					<dt>Phone</dt>
					<dd><a href="tel:+13175550100">(317) 555-0100</a></dd>
					<dt>Office Hours</dt>
					<dd>Monday–Friday, 9:00 AM–5:00 PM</dd>
					<dt>Parking</dt>
					<dd><!-- PLACEHOLDER -->Metered street parking is available on Monument Circle; the Circle Centre garage is one block south.</dd>
				</dl>
			</div>
		</div>
	</section>

</div><!-- /#variant-a -->

<div id="variant-b" data-variant-panel="b" hidden>

	<!-- ==========================================================
	     C · Top bar / nav
	     ========================================================== -->
	<div class="vb-topbar">
		<img class="vb-logo" src="<?php echo esc_url( WARRNER_URI . '/assets/images/logo.png' ); ?>" alt="Warrner Legal">
		<ul class="vb-nav">
			<li><a href="#practice-heading-b">Practice Areas</a></li>
			<li><a href="#bio-heading-b">Attorney</a></li>
			<li><a href="#results-heading-b">Case Results</a></li>
			<li><a href="#consultation-b">Contact</a></li>
		</ul>
		<a class="vb-phone-pill" href="tel:+13175550100"><span aria-hidden="true">&#9742;</span> (317) 555-0100</a>
	</div>

	<!-- ==========================================================
	     C · Hero
	     ========================================================== -->
	<section class="vb-section vb-hero">
		<svg class="vb-globe-watermark" viewBox="0 0 200 200" fill="none" aria-hidden="true">
			<ellipse cx="100" cy="100" rx="95" ry="95" stroke="currentColor" stroke-width="1" />
			<ellipse cx="100" cy="100" rx="40" ry="95" stroke="currentColor" stroke-width="1" />
			<ellipse cx="100" cy="100" rx="70" ry="95" stroke="currentColor" stroke-width="1" />
			<line x1="5" y1="100" x2="195" y2="100" stroke="currentColor" stroke-width="1" />
			<line x1="100" y1="5" x2="100" y2="195" stroke="currentColor" stroke-width="1" />
			<circle cx="100" cy="100" r="4" fill="currentColor" />
		</svg>
		<div class="wrap vb-hero__grid">
			<div>
				<span class="vb-eyebrow">Immigration Law · Indianapolis, Indiana</span>
				<h1 class="vb-h1">Precision counsel for a <span class="vb-accent">global journey</span>.</h1>
				<p class="vb-lede">Warrner Legal brings classical legal authority and analytical precision to every immigration matter, from petition to oath.</p>
				<p class="vb-hero__coords">39.7684&deg; N&nbsp;&nbsp;&nbsp;86.1581&deg; W &mdash; Indianapolis, Indiana</p>
				<div class="vb-hero__actions">
					<a class="vb-btn vb-btn--primary" href="#consultation-b">Request a Free Consultation</a>
					<a class="vb-btn vb-btn--ghost" href="tel:+13175550100">Call (317) 555-0100</a>
				</div>
			</div>
			<div class="vb-hero__portrait">
				<div class="vb-hero__glow" aria-hidden="true"></div>
				<div class="vb-hero__photo">
					<img src="<?php echo esc_url( WARRNER_URI . '/assets/images/erin-headshot.jpg' ); ?>" alt="Erin Warrner, founding attorney of Warrner Legal">
				</div>
			</div>
		</div>
	</section>

	<!-- ==========================================================
	     C · Social proof / authority bar
	     ========================================================== -->
	<section class="vb-section vb-section--linen" aria-labelledby="proof-heading-b">
		<div class="wrap">
			<h2 id="proof-heading-b" class="screen-reader-text">Firm record</h2>
			<div class="vb-stats">
				<div>
					<div class="vb-stat__num"><!-- PLACEHOLDER -->10+</div>
					<div class="vb-stat__label">Years of Practice</div>
				</div>
				<div>
					<div class="vb-stat__num"><!-- PLACEHOLDER -->500+</div>
					<div class="vb-stat__label">Clients Represented</div>
				</div>
				<div>
					<div class="vb-stat__num">1:1</div>
					<div class="vb-stat__label">Direct Attorney Access</div>
				</div>
				<div>
					<div class="vb-stat__num">IN</div>
					<div class="vb-stat__label">Indiana State Bar</div>
				</div>
			</div>

			<div class="vb-badges-row" aria-label="Recognitions and affiliations">
				<img src="https://placehold.co/140x44/FFFFFF/660000?text=Super+Lawyers" alt="Super Lawyers (placeholder — replace with real badge)">
				<img src="https://placehold.co/140x44/FFFFFF/660000?text=Avvo" alt="Avvo (placeholder — replace with real badge)">
				<img src="https://placehold.co/140x44/FFFFFF/660000?text=IN+State+Bar" alt="Indiana State Bar Association (placeholder — replace with real badge)">
			</div>
		</div>
	</section>

	<!-- ==========================================================
	     C · Fierce / compassionate / experienced feature
	     ========================================================== -->
	<section class="vb-section vb-section--white vb-feature" aria-labelledby="feature-heading-b">
		<span class="vb-feature__ghost" aria-hidden="true">W</span>
		<div class="wrap vb-feature__grid">
			<div class="vb-feature__photo">
				<img src="<?php echo esc_url( WARRNER_URI . '/assets/images/erin-warrner.jpg' ); ?>" alt="Erin Warrner">
			</div>
			<div class="vb-feature__content">
				<span class="vb-eyebrow">Why Warrner Legal</span>
				<h2 id="feature-heading-b" class="vb-h2">Direct, <span class="vb-accent">compassionate</span>, experienced.</h2>
				<p class="vb-lede"><!-- PLACEHOLDER: replace with real bio -->We founded Warrner Legal because immigrant families and professionals deserve direct access to experienced counsel — not a hand-off to junior staff.</p>
				<ul class="vb-feature__list">
					<li><span class="vb-dot" aria-hidden="true"></span><div><strong>Direct Attorney Access</strong><span>You work with Erin directly — never handed off to a paralegal or call center.</span></div></li>
					<li><span class="vb-dot" aria-hidden="true"></span><div><strong>Clear Communication</strong><span>Plain-language updates at every stage, so you always know where your case stands.</span></div></li>
					<li><span class="vb-dot" aria-hidden="true"></span><div><strong>Personal Attention</strong><span>Every case is different. We take the time to understand yours.</span></div></li>
				</ul>
				<a class="vb-btn vb-btn--primary" href="#bio-heading-b">About Erin</a>
			</div>
			<div class="vb-feature__photo vb-feature__photo--secondary">
				<img src="<?php echo esc_url( WARRNER_URI . '/assets/images/erin-blazer.jpg' ); ?>" alt="Erin Warrner, founding attorney of Warrner Legal">
			</div>
		</div>
	</section>

	<!-- ==========================================================
	     C · Practice areas (horizontal scroll)
	     ========================================================== -->
	<section class="vb-section vb-section--linen" id="practice-heading-b" aria-labelledby="practice-h-b">
		<div class="wrap">
			<span class="vb-eyebrow">How We Help</span>
			<h2 id="practice-h-b" class="vb-h2">Relentless <span class="vb-accent">representation</span></h2>
			<p class="vb-lede">Every immigration case is different. Here's where we focus.</p>
		</div>
		<div class="vb-scroll-row" data-scroll-row>
			<button type="button" class="vb-scroll-btn vb-scroll-btn--prev" data-scroll-prev aria-label="Scroll practice areas left">&larr;</button>
			<div class="vb-scroll-track" data-scroll-track>
				<?php foreach ( $practice_areas as $area ) : ?>
					<a class="vb-scroll-card" href="<?php echo esc_url( $area['url'] ); ?>">
						<img src="https://placehold.co/400x300/F7F5F2/F7F5F2" alt="">
						<span class="vb-scroll-card__label"><?php echo esc_html( $area['label'] ); ?></span>
					</a>
				<?php endforeach; ?>
			</div>
			<button type="button" class="vb-scroll-btn vb-scroll-btn--next" data-scroll-next aria-label="Scroll practice areas right">&rarr;</button>
		</div>
		<div class="wrap vb-scroll-row__cta">
			<a class="vb-btn vb-btn--ghost" href="#practice-heading-b">All Practice Areas</a>
		</div>
	</section>

	<!-- ==========================================================
	     C · Attorney spotlight
	     ========================================================== -->
	<section class="vb-section vb-attorney" id="bio-heading-b" aria-labelledby="bio-h-b">
		<div class="wrap vb-bio">
			<div class="vb-bio__photo">
				<img src="<?php echo esc_url( WARRNER_URI . '/assets/images/erin-warrner.jpg' ); ?>" alt="Erin Warrner">
			</div>
			<div>
				<span class="vb-eyebrow">Founding Attorney</span>
				<h2 id="bio-h-b" class="vb-h2">One attorney. <span class="vb-accent">Your advocate.</span></h2>
				<p class="vb-lede"><!-- PLACEHOLDER: replace with real bio -->Erin founded Warrner Legal to give Indianapolis immigrant families and professionals direct access to experienced counsel, without the hand-off to junior staff common at larger firms.</p>
				<ul class="vb-credentials">
					<li><span class="vb-dot" aria-hidden="true"></span><!-- PLACEHOLDER -->J.D., [Law School]</li>
					<li><span class="vb-dot" aria-hidden="true"></span>Admitted to the Indiana State Bar</li>
					<li><span class="vb-dot" aria-hidden="true"></span><!-- PLACEHOLDER -->Member, American Immigration Lawyers Association (AILA)</li>
				</ul>
				<a class="vb-btn vb-btn--primary" href="#consultation-b" style="margin-top: var(--space-6);">Schedule a Consultation</a>
			</div>
		</div>
	</section>

	<!-- ==========================================================
	     C · Case results & testimonials
	     ========================================================== -->
	<section class="vb-section vb-section--white" id="results-heading-b" aria-labelledby="results-h-b">
		<div class="wrap">
			<span class="vb-eyebrow">Client Outcomes</span>
			<h2 id="results-h-b" class="vb-h2">Client <span class="vb-accent">testimonials</span></h2>
		</div>
		<div class="wrap vb-outcomes">
			<div class="vb-outcomes__quote">
				<span class="vb-quote-mark" aria-hidden="true">&ldquo;</span>
				<blockquote>
					<p><!-- PLACEHOLDER: real client quote, with permission -->Erin walked us through every step and always called back the same day.</p>
					<cite>&mdash; Client, Family-Based Petition</cite>
				</blockquote>
				<a class="vb-btn vb-btn--ghost" href="#results-h-b">More Testimonials</a>
			</div>
			<div class="vb-bubbles" aria-label="Recent case outcomes">
				<div class="vb-bubble vb-bubble--lg vb-bubble--solid">Asylum<br>Granted</div>
				<div class="vb-bubble">Employment<br>Green Card</div>
				<div class="vb-bubble vb-bubble--solid">Spousal<br>Visa</div>
				<div class="vb-bubble">DACA<br>Renewal</div>
				<div class="vb-bubble vb-bubble--lg">Naturalization<br>Approved</div>
				<div class="vb-bubble vb-bubble--solid">Removal Defense<br>Won</div>
			</div>
		</div>
		<div class="wrap">
			<p class="vb-disclaimer">Case results and testimonials describe past outcomes for specific clients. They do not guarantee or predict a similar result in any future matter. Every immigration case depends on its own facts and circumstances.</p>
		</div>
	</section>

	<!-- ==========================================================
	     C · Latest insights
	     ========================================================== -->
	<section class="vb-section vb-section--linen" aria-labelledby="insights-h-b">
		<div class="wrap">
			<div class="vb-insights__head">
				<div>
					<span class="vb-eyebrow">From The Blog</span>
					<h2 id="insights-h-b" class="vb-h2">Latest <span class="vb-accent">insights</span></h2>
				</div>
				<a class="vb-btn vb-btn--ghost" href="#">View More</a>
			</div>
			<div class="vb-grid-3">
				<article class="vb-insight-card">
					<img src="https://placehold.co/400x260/660000/F7F5F2?text=Insight" alt="">
					<div class="vb-insight-card__body">
						<h3 class="vb-h3"><!-- PLACEHOLDER: real post title needed -->What to Expect at Your Green Card Interview</h3>
						<span class="vb-insight-card__date"><!-- PLACEHOLDER -->Coming soon</span>
					</div>
				</article>
				<article class="vb-insight-card">
					<img src="https://placehold.co/400x260/F7F5F2/660000?text=Insight" alt="">
					<div class="vb-insight-card__body">
						<h3 class="vb-h3"><!-- PLACEHOLDER -->Understanding the N-400 Naturalization Process</h3>
						<span class="vb-insight-card__date"><!-- PLACEHOLDER -->Coming soon</span>
					</div>
				</article>
				<article class="vb-insight-card">
					<img src="https://placehold.co/400x260/F7F5F2/660000?text=Insight" alt="">
					<div class="vb-insight-card__body">
						<h3 class="vb-h3"><!-- PLACEHOLDER -->DACA Renewal: Key Deadlines to Track</h3>
						<span class="vb-insight-card__date"><!-- PLACEHOLDER -->Coming soon</span>
					</div>
				</article>
			</div>
		</div>
	</section>

	<!-- ==========================================================
	     C · Contact / consultation
	     ========================================================== -->
	<section id="consultation-b" class="vb-contact" aria-labelledby="consult-heading-b">
		<div class="wrap vb-contact__grid">
			<div class="vb-contact__info">
				<span class="vb-eyebrow vb-contact__eyebrow">Get Started</span>
				<h2 id="consult-heading-b" class="vb-h2 vb-contact__heading">Do you have a case?</h2>
				<p class="vb-lede vb-contact__lede">We offer free consultations, and respond to every inquiry within one business day.</p>
				<dl class="vb-contact__details">
					<div><span aria-hidden="true">&#9742;</span> <a href="tel:+13175550100">(317) 555-0100</a></div>
					<div><span aria-hidden="true">&#128205;</span> <!-- PLACEHOLDER -->1 Monument Circle, Suite 400, Indianapolis, IN 46204</div>
				</dl>
			</div>
			<form class="vb-intake" data-intake-form novalidate>
				<div class="vb-field">
					<label for="intake-name-b">Full name</label>
					<input type="text" id="intake-name-b" name="name" required autocomplete="name">
				</div>
				<div class="vb-field">
					<label for="intake-email-b">Email</label>
					<input type="email" id="intake-email-b" name="email" required autocomplete="email">
				</div>
				<div class="vb-field">
					<label for="intake-phone-b">Phone</label>
					<input type="tel" id="intake-phone-b" name="phone" autocomplete="tel">
				</div>
				<div class="vb-field">
					<label for="intake-practice-area-b">Practice area</label>
					<select id="intake-practice-area-b" name="practice_area">
						<?php foreach ( $practice_areas as $area ) : ?>
							<option value="<?php echo esc_attr( $area['label'] ); ?>"><?php echo esc_html( $area['label'] ); ?></option>
						<?php endforeach; ?>
						<option value="Other">Other / Not sure</option>
					</select>
				</div>
				<div class="vb-field">
					<label for="intake-description-b">Briefly describe your situation</label>
					<textarea id="intake-description-b" name="case_description" rows="4"></textarea>
				</div>

				<button type="submit" class="vb-btn vb-btn--primary vb-btn--block">Request My Consultation</button>
				<p class="vb-intake__status" data-intake-status role="status" aria-live="polite"></p>
			</form>
		</div>
	</section>

	<!-- ==========================================================
	     C · Footer
	     ========================================================== -->
	<div class="vb-footer">
		<div class="wrap vb-footer__grid">
			<div>
				<img class="vb-logo" src="<?php echo esc_url( WARRNER_URI . '/assets/images/logo.png' ); ?>" alt="Warrner Legal">
				<p class="vb-footer__blurb"><!-- PLACEHOLDER -->We represent clients throughout Indianapolis who need experienced, direct guidance in immigration, naturalization, and removal proceedings.</p>
			</div>
			<div>
				<h3 class="vb-footer__heading">Quick Links</h3>
				<ul class="vb-footer__links">
					<li><a href="#practice-heading-b">Practice Areas</a></li>
					<li><a href="#bio-heading-b">Attorney</a></li>
					<li><a href="#results-heading-b">Case Results</a></li>
					<li><a href="#consultation-b">Contact</a></li>
				</ul>
			</div>
			<div>
				<h3 class="vb-footer__heading">Contact</h3>
				<p><!-- PLACEHOLDER -->1 Monument Circle, Suite 400<br>Indianapolis, IN 46204</p>
				<p><a href="tel:+13175550100">(317) 555-0100</a></p>
			</div>
		</div>
		<div class="wrap vb-footer__bottom">
			<span>&copy; <?php echo esc_html( date( 'Y' ) ); ?> Warrner Legal, PLLC. Attorney Advertising.<!-- PLACEHOLDER: confirm entity name/type --></span>
			<span class="vb-footer__coords">39.7684&deg; N&nbsp;&nbsp;&nbsp;86.1581&deg; W</span>
		</div>
	</div>

</div><!-- /#variant-b -->

<div id="variant-c" data-variant-panel="c" hidden>

	<!-- ==========================================================
	     C · Nav
	     ========================================================== -->
	<div class="vc-topbar">
		<img class="vc-logo" src="<?php echo esc_url( WARRNER_URI . '/assets/images/logo.png' ); ?>" alt="Warrner Legal">
		<ul class="vc-nav">
			<li><a href="#practice-heading-c">Practice Areas</a></li>
			<li><a href="#bio-heading-c">Attorney</a></li>
			<li><a href="#insights-heading-c">Insights</a></li>
			<li><a href="#consultation-c" class="vc-nav-cta">Free Consultation</a></li>
		</ul>
	</div>

	<!-- ==========================================================
	     C · Hero — full-bleed
	     ========================================================== -->
	<section class="vc-hero" style="background-image: url('<?php echo esc_url( WARRNER_URI . '/assets/images/indy-evening.jpg' ); ?>');">
		<div class="wrap vc-hero__content">
			<span class="vc-eyebrow">Immigration Law · Indianapolis</span>
			<h1 class="vc-h1">A steady hand through a complex process.</h1>
			<p class="vc-lede">Warrner Legal represents individuals and families across every stage of the U.S. immigration system, from Indianapolis.</p>
			<div class="vc-hero__actions">
				<a class="vc-btn vc-btn--primary" href="#consultation-c">Request a Free Consultation</a>
				<a class="vc-link" href="tel:+13175550100">Call (317) 555-0100 →</a>
			</div>
		</div>
	</section>

	<!-- ==========================================================
	     C · Editorial tile row
	     ========================================================== -->
	<div class="vc-tiles">
		<a class="vc-tile" href="#bio-heading-c">
			<img class="vc-tile__bg vc-tile__bg--portrait" src="<?php echo esc_url( WARRNER_URI . '/assets/images/erin-warrner.jpg' ); ?>" alt="">
			<div class="vc-tile__content">
				<span class="vc-eyebrow">Founding Attorney</span>
				<h3 class="vc-tile__title">Meet Erin Warrner</h3>
				<span class="vc-link">Read More →</span>
			</div>
		</a>
		<a class="vc-tile vc-tile--solid" href="#practice-heading-c">
			<div class="vc-tile__content">
				<span class="vc-eyebrow">Serving Indianapolis</span>
				<h3 class="vc-tile__title">Rooted in the Community We Serve</h3>
				<span class="vc-link">Read More →</span>
			</div>
		</a>
		<a class="vc-tile" href="#consultation-c">
			<img class="vc-tile__bg" src="https://placehold.co/600x600/111111/A89E8D?text=Client+Story+%28placeholder%29" alt="">
			<div class="vc-tile__content">
				<span class="vc-eyebrow">Client Outcomes</span>
				<h3 class="vc-tile__title"><!-- PLACEHOLDER: replace with a real anonymized story -->A Family Reunited</h3>
				<span class="vc-link">Read More →</span>
			</div>
		</a>
	</div>

	<!-- ==========================================================
	     C · Pull-quote carousel
	     ========================================================== -->
	<section class="vc-section vc-section--white">
		<div class="vc-quote" data-quote-carousel>
			<div class="vc-quote__slide" data-active="true">
				<p class="vc-quote__text">"<!-- PLACEHOLDER: real client quote, with permission -->Erin walked us through every step and always called back the same day."</p>
				<p class="vc-quote__cite">— Client, Family-Based Petition</p>
			</div>
			<div class="vc-quote__slide">
				<p class="vc-quote__text">"<!-- PLACEHOLDER -->I finally understood what was happening with my case instead of just waiting and hoping."</p>
				<p class="vc-quote__cite">— Client, Asylum Case</p>
			</div>
			<div class="vc-quote__slide">
				<p class="vc-quote__text">"<!-- PLACEHOLDER -->Direct, honest, and always reachable."</p>
				<p class="vc-quote__cite">— Client, Employment Visa</p>
			</div>
			<div class="vc-quote__dots" role="tablist" aria-label="Client testimonials">
				<button type="button" class="vc-quote__dot" aria-current="true" aria-label="Testimonial 1"></button>
				<button type="button" class="vc-quote__dot" aria-label="Testimonial 2"></button>
				<button type="button" class="vc-quote__dot" aria-label="Testimonial 3"></button>
			</div>
		</div>
	</section>

	<!-- ==========================================================
	     C · Practice areas
	     ========================================================== -->
	<section class="vc-section vc-section--gray" aria-labelledby="practice-heading-c">
		<div class="wrap">
			<span class="vc-eyebrow">How We Help</span>
			<h2 id="practice-heading-c" class="vc-h2">Practice Areas</h2>
			<div class="vc-grid-3">
				<?php foreach ( $practice_areas as $area ) : ?>
					<a class="vc-card" href="<?php echo esc_url( $area['url'] ); ?>">
						<h3 class="vc-card__title"><?php echo esc_html( $area['label'] ); ?></h3>
						<p class="vc-card__desc"><?php echo esc_html( $area['description'] ); ?></p>
					</a>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

	<!-- ==========================================================
	     C · "Why Warrner Legal" story panel
	     ========================================================== -->
	<section class="vc-story" id="bio-heading-c" style="background-image: url('<?php echo esc_url( WARRNER_URI . '/assets/images/erin-warrner.jpg' ); ?>');">
		<span class="vc-story__label">Why Warrner Legal</span>
		<div class="vc-story__list">
			<div class="vc-story__item">Free Initial Consultation</div>
			<div class="vc-story__item">Direct Attorney Access</div>
			<div class="vc-story__item">Clear Communication, Every Step</div>
			<div class="vc-story__item"><!-- PLACEHOLDER -->10+ Years Serving Indianapolis</div>
		</div>
	</section>

	<!-- ==========================================================
	     C · Featured insights
	     ========================================================== -->
	<section class="vc-section vc-section--white" aria-labelledby="insights-heading-c">
		<div class="wrap">
			<h2 id="insights-heading-c" class="vc-h2">Featured Insights</h2>
			<div class="vc-insights-grid">
				<article>
					<p class="vc-insight__meta"><!-- PLACEHOLDER --> Guide</p>
					<h3 class="vc-insight__title">Understanding the N-400 Naturalization Process</h3>
					<p class="vc-insight__desc"><!-- PLACEHOLDER: real article excerpt -->What to prepare, what to expect at your interview, and how long the process typically takes.</p>
				</article>
				<article>
					<p class="vc-insight__meta"><!-- PLACEHOLDER --> Guide</p>
					<h3 class="vc-insight__title">What to Expect at Your Asylum Interview</h3>
					<p class="vc-insight__desc"><!-- PLACEHOLDER -->A walkthrough of the process, from filing to decision.</p>
				</article>
				<article>
					<p class="vc-insight__meta"><!-- PLACEHOLDER --> Guide</p>
					<h3 class="vc-insight__title">Recent Changes to Employment-Based Visas</h3>
					<p class="vc-insight__desc"><!-- PLACEHOLDER -->What employers and applicants need to know this year.</p>
				</article>
			</div>
		</div>
	</section>

	<!-- ==========================================================
	     C · Consultation form
	     ========================================================== -->
	<section id="consultation-c" class="vc-section vc-section--black" aria-labelledby="consult-heading-c">
		<div class="wrap" style="max-width: 640px;">
			<span class="vc-eyebrow">Get Started</span>
			<h2 id="consult-heading-c" class="vc-h2">Request a Free Consultation</h2>
			<p class="vc-lede">Tell us briefly about your situation. We respond within one business day.</p>

			<form class="vc-intake" data-intake-form novalidate>
				<div class="vc-field">
					<label for="intake-name-c">Full name</label>
					<input type="text" id="intake-name-c" name="name" required autocomplete="name">
				</div>
				<div class="vc-field">
					<label for="intake-email-c">Email</label>
					<input type="email" id="intake-email-c" name="email" required autocomplete="email">
				</div>
				<div class="vc-field">
					<label for="intake-phone-c">Phone</label>
					<input type="tel" id="intake-phone-c" name="phone" autocomplete="tel">
				</div>
				<div class="vc-field">
					<label for="intake-practice-area-c">Practice area</label>
					<select id="intake-practice-area-c" name="practice_area">
						<?php foreach ( $practice_areas as $area ) : ?>
							<option value="<?php echo esc_attr( $area['label'] ); ?>"><?php echo esc_html( $area['label'] ); ?></option>
						<?php endforeach; ?>
						<option value="Other">Other / Not sure</option>
					</select>
				</div>
				<div class="vc-field">
					<label for="intake-description-c">Briefly describe your situation</label>
					<textarea id="intake-description-c" name="case_description" rows="4"></textarea>
				</div>

				<button type="submit" class="vc-btn vc-btn--primary vc-btn--block">Request My Consultation</button>
				<p class="vc-intake__status" data-intake-status role="status" aria-live="polite"></p>
			</form>
		</div>
	</section>

	<!-- ==========================================================
	     C · Location
	     ========================================================== -->
	<section class="vc-section vc-section--white" aria-labelledby="location-heading-c">
		<div class="wrap vc-location">
			<div class="vc-location__map">
				<!-- PLACEHOLDER: confirm real office address before launch -->
				<?php if ( defined( 'GOOGLE_MAPS_API_KEY' ) && GOOGLE_MAPS_API_KEY ) : ?>
					<iframe
						src="https://www.google.com/maps/embed/v1/place?key=<?php echo esc_attr( GOOGLE_MAPS_API_KEY ); ?>&q=1+Monument+Circle,+Indianapolis,+IN+46204"
						title="Warrner Legal office location"
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
					></iframe>
				<?php else : ?>
					<a class="vc-location__map-fallback" href="https://www.google.com/maps/search/?api=1&query=1+Monument+Circle,+Indianapolis,+IN+46204" target="_blank" rel="noopener">
						View on Google Maps →
					</a>
				<?php endif; ?>
			</div>
			<div>
				<span class="vc-eyebrow">Visit Us</span>
				<h2 id="location-heading-c" class="vc-h2">Our Office</h2>
				<dl class="vc-location__details">
					<dt>Address</dt>
					<dd><!-- PLACEHOLDER -->1 Monument Circle, Suite 400<br>Indianapolis, IN 46204</dd>
					<dt>Phone</dt>
					<dd><a href="tel:+13175550100">(317) 555-0100</a></dd>
					<dt>Office Hours</dt>
					<dd>Monday–Friday, 9:00 AM–5:00 PM</dd>
				</dl>
			</div>
		</div>
	</section>

	<!-- ==========================================================
	     C · Footer
	     ========================================================== -->
	<div class="vc-footer">
		<div class="wrap">
			<div class="vc-footer__top">
				<img class="vc-logo" style="height:56px;" src="<?php echo esc_url( WARRNER_URI . '/assets/images/logo.png' ); ?>" alt="Warrner Legal">
				<ul class="vc-footer__nav">
					<!-- PLACEHOLDER: wire real pages before launch -->
					<li><a href="#">Privacy Policy</a></li>
					<li><a href="#">Terms of Use</a></li>
					<li><a href="#">Attorney Advertising</a></li>
				</ul>
			</div>
			<div class="vc-footer__bottom">
				<span>© <?php echo esc_html( date( 'Y' ) ); ?> Warrner Legal. Attorney Advertising.</span>
				<span>Indianapolis, IN — 39.7684° N, 86.1581° W</span>
			</div>
		</div>
	</div>

</div><!-- /#variant-c -->

<div id="variant-d-orig" data-variant-panel="d" hidden>

	<!-- ==========================================================
	     D · Nav
	     ========================================================== -->
	<div class="vd-topbar">
		<img class="vd-logo" src="<?php echo esc_url( WARRNER_URI . '/assets/images/logo.png' ); ?>" alt="Warrner Legal">
		<ul class="vd-nav">
			<li><a href="#services-heading-d">Practice Areas</a></li>
			<li><a href="#approach-heading-d">Our Approach</a></li>
			<li><a href="#faq-heading-d">FAQ</a></li>
			<li><a href="#consultation-d" class="vd-btn vd-btn--primary">Free Consultation</a></li>
		</ul>
	</div>

	<!-- ==========================================================
	     D · Hero
	     ========================================================== -->
	<section class="vd-hero">
		<div class="wrap vd-hero__content">
			<span class="vd-eyebrow">Immigration Law · Indianapolis</span>
			<h1 class="vd-h1">Immigration law, guided by <span class="vd-accent">trust</span>.</h1>
			<p class="vd-lede">Warrner Legal represents individuals and families across every stage of the U.S. immigration system — with the personal attention a larger firm can't offer.</p>
			<div class="vd-hero__actions">
				<a class="vd-btn vd-btn--primary" href="#consultation-d">Request a Free Consultation</a>
				<a class="vd-btn vd-btn--ghost" href="tel:+13175550100">Call (317) 555-0100</a>
			</div>
			<ul class="vd-badges">
				<li><div class="vd-badge__num"><!-- PLACEHOLDER -->10+</div><div class="vd-badge__label">Years Practicing</div></li>
				<li><div class="vd-badge__num"><!-- PLACEHOLDER -->500+</div><div class="vd-badge__label">Clients Served</div></li>
				<li><div class="vd-badge__num">IN</div><div class="vd-badge__label">State Bar</div></li>
			</ul>
		</div>
	</section>

	<!-- ==========================================================
	     D · Services grid
	     ========================================================== -->
	<section class="vd-section vd-section--paper" id="services-heading-d" aria-labelledby="services-h-d">
		<div class="wrap">
			<span class="vd-eyebrow">How We Help</span>
			<h2 id="services-h-d" class="vd-h2">Practice areas built on <span class="vd-accent">trust</span> and deep expertise</h2>
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
	     D · Process steps
	     ========================================================== -->
	<section class="vd-section vd-section--cream" aria-labelledby="steps-h-d">
		<div class="wrap">
			<span class="vd-eyebrow">Getting Started</span>
			<h2 id="steps-h-d" class="vd-h2">Simple to <span class="vd-accent">request</span>, thorough in delivery</h2>
			<div class="vd-steps">
				<div>
					<div class="vd-step__num">1</div>
					<h3 class="vd-step__title">Schedule a Consultation</h3>
					<p class="vd-step__desc">Tell us briefly about your situation using the form below, or call the office directly.</p>
				</div>
				<div>
					<div class="vd-step__num">2</div>
					<h3 class="vd-step__title">Discuss Your Case</h3>
					<p class="vd-step__desc">Meet with Erin directly to go over your options, timeline, and what to expect.</p>
				</div>
				<div>
					<div class="vd-step__num">3</div>
					<h3 class="vd-step__title">Move Forward with a Plan</h3>
					<p class="vd-step__desc">We handle the filing and keep you updated at every stage, in plain language.</p>
				</div>
			</div>
		</div>
	</section>

	<!-- ==========================================================
	     D · Fees
	     ========================================================== -->
	<section class="vd-section vd-section--paper" aria-labelledby="fees-h-d">
		<div class="wrap">
			<span class="vd-eyebrow">What It Costs</span>
			<h2 id="fees-h-d" class="vd-h2">Fees built on <span class="vd-accent">clarity</span>, not surprises</h2>
			<div class="vd-fees">
				<div class="vd-fee">
					<h3 class="vd-fee__title">Free Consultation</h3>
					<p class="vd-fee__desc">Your first conversation costs nothing — we'll tell you honestly whether we can help.</p>
				</div>
				<div class="vd-fee">
					<h3 class="vd-fee__title"><!-- PLACEHOLDER: confirm real fee structure -->Flat-Fee Petitions</h3>
					<p class="vd-fee__desc">Most petitions are billed at a flat rate, agreed to in writing before we start.</p>
				</div>
				<div class="vd-fee">
					<h3 class="vd-fee__title">Payment Plans Available</h3>
					<p class="vd-fee__desc">We work with clients to structure payments that fit their circumstances.</p>
				</div>
			</div>
		</div>
	</section>

	<!-- ==========================================================
	     D · Case-type tag cloud
	     ========================================================== -->
	<section class="vd-section vd-section--cream" aria-labelledby="tags-h-d">
		<div class="wrap">
			<span class="vd-eyebrow">Filings We Handle</span>
			<h2 id="tags-h-d" class="vd-h2">Every case type, from filing to <span class="vd-accent">decision</span></h2>
			<div class="vd-tags">
				<span class="vd-tag">I-130 · Family Petition</span>
				<span class="vd-tag">I-485 · Adjustment of Status</span>
				<span class="vd-tag">N-400 · Naturalization</span>
				<span class="vd-tag">I-589 · Asylum</span>
				<span class="vd-tag">H-1B · Work Visa</span>
				<span class="vd-tag">DACA Renewal</span>
				<span class="vd-tag">I-751 · Removal of Conditions</span>
				<span class="vd-tag vd-tag--outline">Removal Defense</span>
			</div>
		</div>
	</section>

	<!-- ==========================================================
	     D · Our approach (dark)
	     ========================================================== -->
	<section class="vd-section vd-section--forest" id="approach-heading-d" aria-labelledby="approach-h-d">
		<div class="wrap vd-approach">
			<div>
				<span class="vd-eyebrow">Our Philosophy</span>
				<h2 id="approach-h-d" class="vd-h2">Our <span class="vd-accent">approach</span> to your case</h2>
				<ul class="vd-approach-list">
					<li><strong>Direct Attorney Access</strong><span>You work with Erin directly — never handed off to a paralegal or call center.</span></li>
					<li><strong>Clear Communication</strong><span>Plain-language updates at every stage, so you always know where your case stands.</span></li>
					<li><strong>Personal Attention</strong><span>Every case is different. We take the time to understand yours.</span></li>
					<li><strong>Community Rooted</strong><span><!-- PLACEHOLDER -->10+ years serving immigrant families in Indianapolis.</span></li>
				</ul>
			</div>
			<div class="vd-approach__portrait">
				<img src="<?php echo esc_url( WARRNER_URI . '/assets/images/erin-headshot.jpg' ); ?>" alt="Erin Warrner, founding attorney of Warrner Legal">
			</div>
		</div>
	</section>

	<!-- ==========================================================
	     D · FAQ accordion
	     ========================================================== -->
	<section class="vd-section vd-section--paper" id="faq-heading-d" aria-labelledby="faq-h-d">
		<div class="wrap">
			<span class="vd-eyebrow">Questions</span>
			<h2 id="faq-h-d" class="vd-h2">Common <span class="vd-accent">questions</span>, answered</h2>
			<div class="vd-faq" data-accordion>
				<div class="vd-faq__item" data-open="true">
					<button type="button" class="vd-faq__q" aria-expanded="true">
						How long does the immigration process take?
						<span class="vd-faq__icon" aria-hidden="true">+</span>
					</button>
					<div class="vd-faq__a">
						<p><!-- PLACEHOLDER -->It depends on the case type — some petitions take months, others longer. We'll give you a realistic timeline at your consultation.</p>
					</div>
				</div>
				<div class="vd-faq__item" data-open="false">
					<button type="button" class="vd-faq__q" aria-expanded="false">
						What should I bring to my consultation?
						<span class="vd-faq__icon" aria-hidden="true">+</span>
					</button>
					<div class="vd-faq__a">
						<p><!-- PLACEHOLDER -->Any immigration paperwork you've already filed, identification documents, and a summary of your situation. We'll tell you exactly what's needed when you schedule.</p>
					</div>
				</div>
				<div class="vd-faq__item" data-open="false">
					<button type="button" class="vd-faq__q" aria-expanded="false">
						Do you offer payment plans?
						<span class="vd-faq__icon" aria-hidden="true">+</span>
					</button>
					<div class="vd-faq__a">
						<p>Yes — we work with clients to structure payments that fit their circumstances. Ask us at your consultation.</p>
					</div>
				</div>
				<div class="vd-faq__item" data-open="false">
					<button type="button" class="vd-faq__q" aria-expanded="false">
						Can you help if I'm already in removal proceedings?
						<span class="vd-faq__icon" aria-hidden="true">+</span>
					</button>
					<div class="vd-faq__a">
						<p><!-- PLACEHOLDER -->Yes. Call the office as soon as possible — deadlines in removal cases are strict, and earlier representation gives you more options.</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- ==========================================================
	     D · Testimonials
	     ========================================================== -->
	<section class="vd-section vd-section--cream" aria-labelledby="testimonials-h-d">
		<div class="wrap">
			<span class="vd-eyebrow">Client Outcomes</span>
			<h2 id="testimonials-h-d" class="vd-h2">Who we've <span class="vd-accent">helped</span></h2>
			<div class="vd-grid-3">
				<figure class="vd-testimonial">
					<p>"<!-- PLACEHOLDER -->Erin walked us through every step and always called back the same day."</p>
					<figcaption><cite>— Client, Family-Based Petition</cite></figcaption>
				</figure>
				<figure class="vd-testimonial">
					<p>"<!-- PLACEHOLDER -->I finally understood what was happening with my case instead of just waiting and hoping."</p>
					<figcaption><cite>— Client, Asylum Case</cite></figcaption>
				</figure>
				<figure class="vd-testimonial">
					<p>"<!-- PLACEHOLDER -->Direct, honest, and always reachable."</p>
					<figcaption><cite>— Client, Employment Visa</cite></figcaption>
				</figure>
			</div>
			<p class="vd-lede" style="font-size: var(--text-xs); margin-top: var(--space-8);">Case results and testimonials describe past outcomes for specific clients and do not guarantee a similar result in any future matter.</p>
		</div>
	</section>

	<!-- ==========================================================
	     D · Timeline
	     ========================================================== -->
	<section class="vd-section vd-section--paper" aria-labelledby="timeline-h-d">
		<div class="wrap">
			<span class="vd-eyebrow">What To Expect</span>
			<h2 id="timeline-h-d" class="vd-h2">Your case, <span class="vd-accent">step by step</span></h2>
			<div class="vd-timeline">
				<div class="vd-timeline__item">
					<div class="vd-timeline__stage">Stage 1</div>
					<h3 class="vd-timeline__title">Initial Consultation</h3>
					<p class="vd-timeline__desc">We review your situation and outline a plan.</p>
				</div>
				<div class="vd-timeline__item">
					<div class="vd-timeline__stage">Stage 2</div>
					<h3 class="vd-timeline__title">Petition Filed</h3>
					<p class="vd-timeline__desc">We prepare and file your case with the appropriate agency.</p>
				</div>
				<div class="vd-timeline__item">
					<div class="vd-timeline__stage">Stage 3</div>
					<h3 class="vd-timeline__title">Biometrics &amp; Interview</h3>
					<p class="vd-timeline__desc">We prepare you for any required appointments or interviews.</p>
				</div>
				<div class="vd-timeline__item">
					<div class="vd-timeline__stage">Stage 4</div>
					<h3 class="vd-timeline__title">Decision &amp; Next Steps</h3>
					<p class="vd-timeline__desc">We explain the outcome and what it means going forward.</p>
				</div>
			</div>
		</div>
	</section>

	<!-- ==========================================================
	     D · CTA banner
	     ========================================================== -->
	<section class="vd-cta-banner">
		<div class="wrap">
			<h2 class="vd-h2">Ready to move forward?</h2>
			<p class="vd-lede" style="margin-inline: auto; color: inherit; opacity: 0.85;">Schedule your free consultation today.</p>
			<a class="vd-btn vd-btn--primary" href="#consultation-d" style="margin-top: var(--space-6);">Request a Free Consultation</a>
		</div>
	</section>

	<!-- ==========================================================
	     D · Consultation form
	     ========================================================== -->
	<section id="consultation-d" class="vd-section vd-section--forest" aria-labelledby="consult-h-d">
		<div class="wrap" style="max-width: 640px;">
			<span class="vd-eyebrow">Get Started</span>
			<h2 id="consult-h-d" class="vd-h2">Request a free consultation</h2>
			<p class="vd-lede">Tell us briefly about your situation. We respond within one business day.</p>

			<form class="vd-intake" data-intake-form novalidate>
				<div class="vd-field">
					<label for="intake-name-d">Full name</label>
					<input type="text" id="intake-name-d" name="name" required autocomplete="name">
				</div>
				<div class="vd-field">
					<label for="intake-email-d">Email</label>
					<input type="email" id="intake-email-d" name="email" required autocomplete="email">
				</div>
				<div class="vd-field">
					<label for="intake-phone-d">Phone</label>
					<input type="tel" id="intake-phone-d" name="phone" autocomplete="tel">
				</div>
				<div class="vd-field">
					<label for="intake-practice-area-d">Practice area</label>
					<select id="intake-practice-area-d" name="practice_area">
						<?php foreach ( $practice_areas as $area ) : ?>
							<option value="<?php echo esc_attr( $area['label'] ); ?>"><?php echo esc_html( $area['label'] ); ?></option>
						<?php endforeach; ?>
						<option value="Other">Other / Not sure</option>
					</select>
				</div>
				<div class="vd-field">
					<label for="intake-description-d">Briefly describe your situation</label>
					<textarea id="intake-description-d" name="case_description" rows="4"></textarea>
				</div>

				<button type="submit" class="vd-btn vd-btn--primary vd-btn--block">Request My Consultation</button>
				<p class="vd-intake__status" data-intake-status role="status" aria-live="polite"></p>
			</form>
		</div>
	</section>

	<!-- ==========================================================
	     D · Location
	     ========================================================== -->
	<section class="vd-section vd-section--paper" aria-labelledby="location-h-d">
		<div class="wrap vd-location">
			<div class="vd-location__map">
				<!-- PLACEHOLDER: confirm real office address before launch -->
				<?php if ( defined( 'GOOGLE_MAPS_API_KEY' ) && GOOGLE_MAPS_API_KEY ) : ?>
					<iframe
						src="https://www.google.com/maps/embed/v1/place?key=<?php echo esc_attr( GOOGLE_MAPS_API_KEY ); ?>&q=1+Monument+Circle,+Indianapolis,+IN+46204"
						title="Warrner Legal office location"
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
					></iframe>
				<?php else : ?>
					<a class="vd-location__map-fallback" href="https://www.google.com/maps/search/?api=1&query=1+Monument+Circle,+Indianapolis,+IN+46204" target="_blank" rel="noopener">
						View on Google Maps →
					</a>
				<?php endif; ?>
			</div>
			<div>
				<span class="vd-eyebrow">Visit Us</span>
				<h2 id="location-h-d" class="vd-h2">Our Office</h2>
				<dl class="vd-location__details">
					<dt>Address</dt>
					<dd><!-- PLACEHOLDER -->1 Monument Circle, Suite 400<br>Indianapolis, IN 46204</dd>
					<dt>Phone</dt>
					<dd><a href="tel:+13175550100">(317) 555-0100</a></dd>
					<dt>Office Hours</dt>
					<dd>Monday–Friday, 9:00 AM–5:00 PM</dd>
				</dl>
			</div>
		</div>
	</section>

	<!-- ==========================================================
	     D · Footer
	     ========================================================== -->
	<div class="vd-footer">
		<div class="wrap">
			<div class="vd-footer__top">
				<img class="vd-logo" src="<?php echo esc_url( WARRNER_URI . '/assets/images/logo.png' ); ?>" alt="Warrner Legal">
				<ul class="vd-footer__nav">
					<!-- PLACEHOLDER: wire real pages before launch -->
					<li><a href="#">Privacy Policy</a></li>
					<li><a href="#">Terms of Use</a></li>
					<li><a href="#">Attorney Advertising</a></li>
				</ul>
			</div>
			<div class="vd-footer__bottom">
				<span>© <?php echo esc_html( date( 'Y' ) ); ?> Warrner Legal. Attorney Advertising.</span>
				<span>Indianapolis, IN — 39.7684° N, 86.1581° W</span>
			</div>
		</div>
	</div>

</div><!-- /#variant-d-orig -->

</main>

<?php
get_footer();
