<?php
/**
 * Homepage — two design options for client review.
 *
 * Option A: original concept (Indiana limestone / concentric-rings motif).
 * Option B: built from public/images/warrner_legal_brand_guide.md (the real
 * logo, Heritage Maroon/Precision Taupe, globe + coordinates motif).
 *
 * The floating toggle at the bottom is a REVIEW TOOL ONLY — strip it and
 * the losing variant's markup once a direction is picked.
 *
 * Content marked [PLACEHOLDER] is copy that needs a real number, credential,
 * or quote before launch — left in bracket-free prose so it reads correctly,
 * but flagged here and in comments so nothing fabricated ships by accident.
 */

get_header();

$practice_areas = warrner_get_practice_areas();
?>

<div class="variant-toggle" role="group" aria-label="Design option">
	<button type="button" class="variant-toggle__btn" data-variant-btn="a" aria-pressed="true">Option A</button>
	<button type="button" class="variant-toggle__btn" data-variant-btn="b" aria-pressed="false">Option B</button>
</div>

<main id="primary">

<div id="variant-a" data-variant-panel="a">

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
	     B · Top bar / nav
	     ========================================================== -->
	<div class="vb-topbar">
		<img class="vb-logo" src="<?php echo esc_url( WARRNER_URI . '/assets/images/logo-transparent.png' ); ?>" alt="Warrner Legal">
		<ul class="vb-nav">
			<li><a href="#practice-heading-b">Practice Areas</a></li>
			<li><a href="#bio-heading-b">Attorneys</a></li>
			<li><a href="#results-heading-b">Case Results</a></li>
			<li><a href="#consultation-b">Contact</a></li>
		</ul>
	</div>

	<!-- ==========================================================
	     B · Hero
	     ========================================================== -->
	<section class="vb-section vb-section--white vb-hero">
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
				<img class="vb-logo vb-hero__mark" src="<?php echo esc_url( WARRNER_URI . '/assets/images/logo-transparent.png' ); ?>" alt="Warrner Legal">
				<span class="vb-eyebrow">Immigration Law · Indianapolis, Indiana</span>
				<h1 class="vb-h1">Precision counsel for a global journey.</h1>
				<p class="vb-lede">Warrner Legal brings classical legal authority and analytical precision to every immigration matter, from petition to oath.</p>
				<p class="vb-hero__coords">39.7684° N&nbsp;&nbsp;&nbsp;86.1581° W — Indianapolis, Indiana</p>
				<div class="vb-hero__actions">
					<a class="vb-btn vb-btn--primary" href="#consultation-b">Request a Free Consultation</a>
					<a class="vb-btn vb-btn--ghost" href="tel:+13175550100">Call (317) 555-0100</a>
				</div>
			</div>
			<div class="vb-hero__photo">
				<img src="<?php echo esc_url( WARRNER_URI . '/assets/images/erin-warrner.jpg' ); ?>" alt="Erin Warrner, founding attorney of Warrner Legal">
			</div>
		</div>
	</section>

	<!-- ==========================================================
	     B · Social proof / authority bar
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
	     B · Practice areas
	     ========================================================== -->
	<section class="vb-section vb-section--white" aria-labelledby="practice-heading-b">
		<div class="wrap">
			<span class="vb-eyebrow">How We Help</span>
			<h2 id="practice-heading-b" class="vb-h2">Practice Areas</h2>
			<p class="vb-lede" style="margin-bottom: var(--space-12);">Every immigration case is different. Here's where we focus.</p>

			<div class="vb-grid-3">
				<?php foreach ( $practice_areas as $area ) : ?>
					<a class="vb-card" href="<?php echo esc_url( $area['url'] ); ?>">
						<h3 class="vb-card__title"><?php echo esc_html( $area['label'] ); ?></h3>
						<p class="vb-card__desc"><?php echo esc_html( $area['description'] ); ?></p>
					</a>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

	<!-- ==========================================================
	     B · Attorney bio
	     ========================================================== -->
	<section class="vb-section vb-section--linen" aria-labelledby="bio-heading-b">
		<div class="wrap vb-bio">
			<div class="vb-bio__photo">
				<img src="<?php echo esc_url( WARRNER_URI . '/assets/images/erin-warrner.jpg' ); ?>" alt="Erin Warrner">
			</div>
			<div>
				<span class="vb-eyebrow">Founding Attorney</span>
				<h2 id="bio-heading-b" class="vb-h2">Erin Warrner</h2>
				<p class="vb-lede"><!-- PLACEHOLDER: replace with real bio -->Erin founded Warrner Legal to give Indianapolis immigrant families and professionals direct access to experienced counsel, without the hand-off to junior staff common at larger firms.</p>
				<ul class="vb-credentials">
					<li><span class="vb-dot" aria-hidden="true"></span><!-- PLACEHOLDER -->J.D., [Law School]</li>
					<li><span class="vb-dot" aria-hidden="true"></span>Admitted to the Indiana State Bar</li>
					<li><span class="vb-dot" aria-hidden="true"></span><!-- PLACEHOLDER -->Member, American Immigration Lawyers Association (AILA)</li>
				</ul>
			</div>
		</div>
	</section>

	<!-- ==========================================================
	     B · Case results & testimonials
	     ========================================================== -->
	<section class="vb-section vb-section--white" aria-labelledby="results-heading-b">
		<div class="wrap">
			<span class="vb-eyebrow">Client Outcomes</span>
			<h2 id="results-heading-b" class="vb-h2">Recent Outcomes</h2>

			<div class="vb-results-grid">
				<div class="vb-result-card">
					<span class="vb-result-card__tag">Approved</span>
					Employment-based green card petition <!-- PLACEHOLDER: confirm anonymized case detail -->
				</div>
				<div class="vb-result-card">
					<span class="vb-result-card__tag">Approved</span>
					Family-sponsored spousal visa <!-- PLACEHOLDER -->
				</div>
				<div class="vb-result-card">
					<span class="vb-result-card__tag">Granted</span>
					Asylum relief for client fleeing persecution <!-- PLACEHOLDER -->
				</div>
			</div>

			<div class="vb-grid-3">
				<figure class="vb-testimonial">
					<p>"<!-- PLACEHOLDER: real client quote, with permission -->Erin walked us through every step and always called back the same day."</p>
					<figcaption><cite>— Client, Family-Based Petition</cite></figcaption>
				</figure>
				<figure class="vb-testimonial">
					<p>"<!-- PLACEHOLDER -->I finally understood what was happening with my case instead of just waiting and hoping."</p>
					<figcaption><cite>— Client, Asylum Case</cite></figcaption>
				</figure>
				<figure class="vb-testimonial">
					<p>"<!-- PLACEHOLDER -->Direct, honest, and always reachable."</p>
					<figcaption><cite>— Client, Employment Visa</cite></figcaption>
				</figure>
			</div>

			<p class="vb-disclaimer">Case results and testimonials describe past outcomes for specific clients. They do not guarantee or predict a similar result in any future matter. Every immigration case depends on its own facts and circumstances.</p>
		</div>
	</section>

	<!-- ==========================================================
	     B · Consultation form
	     ========================================================== -->
	<section id="consultation-b" class="vb-section vb-section--linen" aria-labelledby="consult-heading-b">
		<div class="wrap" style="max-width: 640px;">
			<span class="vb-eyebrow">Get Started</span>
			<h2 id="consult-heading-b" class="vb-h2">Request a Free Consultation</h2>
			<p class="vb-lede">Tell us briefly about your situation. We respond within one business day.</p>

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
	     B · Location
	     ========================================================== -->
	<section class="vb-section vb-section--white" aria-labelledby="location-heading-b">
		<div class="wrap vb-location">
			<div class="vb-location__map">
				<!-- PLACEHOLDER: confirm real office address before launch -->
				<?php if ( defined( 'GOOGLE_MAPS_API_KEY' ) && GOOGLE_MAPS_API_KEY ) : ?>
					<iframe
						src="https://www.google.com/maps/embed/v1/place?key=<?php echo esc_attr( GOOGLE_MAPS_API_KEY ); ?>&q=1+Monument+Circle,+Indianapolis,+IN+46204"
						title="Warrner Legal office location"
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
					></iframe>
				<?php else : ?>
					<a class="vb-location__map-fallback" href="https://www.google.com/maps/search/?api=1&query=1+Monument+Circle,+Indianapolis,+IN+46204" target="_blank" rel="noopener">
						View on Google Maps →
					</a>
				<?php endif; ?>
			</div>
			<div>
				<span class="vb-eyebrow">Visit Us</span>
				<h2 id="location-heading-b" class="vb-h2">Our Office</h2>
				<dl class="vb-location__details">
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

	<!-- ==========================================================
	     B · Footer strip (full footer.php build is a separate step)
	     ========================================================== -->
	<div class="vb-footer">
		<img class="vb-logo" src="<?php echo esc_url( WARRNER_URI . '/assets/images/logo-transparent.png' ); ?>" alt="Warrner Legal">
		<p class="vb-footer__coords">39.7684° N&nbsp;&nbsp;&nbsp;86.1581° W</p>
	</div>

</div><!-- /#variant-b -->

</main>

<?php
get_footer();
