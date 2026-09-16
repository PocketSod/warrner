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
				<a class="vc-btn vc-btn--phone" href="<?php echo warrner_phone_tel_href(); ?>"><span aria-hidden="true">&#9742;</span> Call <?php echo warrner_phone_display(); ?></a>
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
				<?php if ( defined( 'GOOGLE_MAPS_API_KEY' ) && GOOGLE_MAPS_API_KEY ) : ?>
					<iframe
						src="https://www.google.com/maps/embed/v1/place?key=<?php echo esc_attr( GOOGLE_MAPS_API_KEY ); ?>&q=<?php echo warrner_address_maps_query(); ?>"
						title="Warrner Legal office location"
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
					></iframe>
				<?php else : ?>
					<a class="vc-location__map-fallback" href="https://www.google.com/maps/search/?api=1&query=<?php echo warrner_address_maps_query(); ?>" target="_blank" rel="noopener">
						View on Google Maps →
					</a>
				<?php endif; ?>
			</div>
			<div>
				<span class="vc-eyebrow">Visit Us</span>
				<h2 id="location-heading-c" class="vc-h2">Our Office</h2>
				<dl class="vc-location__details">
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
				<span>Indianapolis, IN — <?php echo warrner_address_coords(); ?></span>
			</div>
		</div>
	</div>

</div><!-- /#variant-c -->
