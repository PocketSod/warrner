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
				<a class="vd-btn vd-btn--phone" href="<?php echo warrner_phone_tel_href(); ?>"><span aria-hidden="true">&#9742;</span> Call <?php echo warrner_phone_display(); ?></a>
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
				<?php if ( defined( 'GOOGLE_MAPS_API_KEY' ) && GOOGLE_MAPS_API_KEY ) : ?>
					<iframe
						src="https://www.google.com/maps/embed/v1/place?key=<?php echo esc_attr( GOOGLE_MAPS_API_KEY ); ?>&q=<?php echo warrner_address_maps_query(); ?>"
						title="Warrner Legal office location"
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
					></iframe>
				<?php else : ?>
					<a class="vd-location__map-fallback" href="https://www.google.com/maps/search/?api=1&query=<?php echo warrner_address_maps_query(); ?>" target="_blank" rel="noopener">
						View on Google Maps →
					</a>
				<?php endif; ?>
			</div>
			<div>
				<span class="vd-eyebrow">Visit Us</span>
				<h2 id="location-h-d" class="vd-h2">Our Office</h2>
				<dl class="vd-location__details">
					<dt>Address</dt>
					<dd><?php echo warrner_address_street(); ?><br><?php echo warrner_address_city_state_zip(); ?></dd>
					<dt>Phone</dt>
					<dd><a href="<?php echo warrner_phone_tel_href(); ?>"><?php echo warrner_phone_display(); ?></a></dd>
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
				<span>Indianapolis, IN — <?php echo warrner_address_coords(); ?></span>
			</div>
		</div>
	</div>

</div><!-- /#variant-d-orig -->
