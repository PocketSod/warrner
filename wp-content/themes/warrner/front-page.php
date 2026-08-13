<?php
/**
 * Homepage.
 *
 * Content marked [PLACEHOLDER] is copy that needs a real number, credential,
 * or quote before launch — left in bracket-free prose so it reads correctly,
 * but flagged here and in comments so nothing fabricated ships by accident.
 */

get_header();

$practice_areas = warrner_get_practice_areas();
?>

<main id="primary">

	<!-- ==========================================================
	     Hero
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
					<a class="btn btn--primary" href="#consultation">Request a Free Consultation</a>
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
	     Social proof / authority bar
	     ========================================================== -->
	<section class="section section--paper" aria-labelledby="proof-heading">
		<div class="wrap">
			<h2 id="proof-heading" class="screen-reader-text">Firm record</h2>
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
	     Practice areas
	     ========================================================== -->
	<section class="section section--light" aria-labelledby="practice-heading">
		<div class="wrap">
			<span class="eyebrow">How We Help</span>
			<h2 id="practice-heading" class="h2">Practice areas</h2>
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
	     Attorney bio
	     ========================================================== -->
	<section class="section section--paper" aria-labelledby="bio-heading">
		<div class="wrap bio">
			<div class="bio__photo">
				<img src="<?php echo esc_url( WARRNER_URI . '/assets/images/erin-warrner.jpg' ); ?>" alt="Erin Warrner">
			</div>
			<div>
				<span class="eyebrow">Founding Attorney</span>
				<h2 id="bio-heading" class="h2">Erin Warrner</h2>
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
	     Case results & testimonials
	     ========================================================== -->
	<section class="section section--light" aria-labelledby="results-heading">
		<div class="wrap">
			<span class="eyebrow">Client Outcomes</span>
			<h2 id="results-heading" class="h2">Recent outcomes</h2>

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
	     Consultation form
	     ========================================================== -->
	<section id="consultation" class="section section--dark" aria-labelledby="consult-heading">
		<div class="wrap" style="max-width: 640px;">
			<span class="eyebrow">Get Started</span>
			<h2 id="consult-heading" class="h2">Request a free consultation</h2>
			<p class="lede">Tell us briefly about your situation. We respond within one business day.</p>

			<form class="intake" data-intake-form novalidate>
				<div class="field">
					<label for="intake-name">Full name</label>
					<input type="text" id="intake-name" name="name" required autocomplete="name">
				</div>
				<div class="field">
					<label for="intake-email">Email</label>
					<input type="email" id="intake-email" name="email" required autocomplete="email">
				</div>
				<div class="field">
					<label for="intake-phone">Phone</label>
					<input type="tel" id="intake-phone" name="phone" autocomplete="tel">
				</div>
				<div class="field">
					<label for="intake-practice-area">Practice area</label>
					<select id="intake-practice-area" name="practice_area">
						<?php foreach ( $practice_areas as $area ) : ?>
							<option value="<?php echo esc_attr( $area['label'] ); ?>"><?php echo esc_html( $area['label'] ); ?></option>
						<?php endforeach; ?>
						<option value="Other">Other / Not sure</option>
					</select>
				</div>
				<div class="field">
					<label for="intake-description">Briefly describe your situation</label>
					<textarea id="intake-description" name="case_description" rows="4"></textarea>
				</div>

				<button type="submit" class="btn btn--primary btn--block">Request My Consultation</button>
				<p class="intake__status" data-intake-status role="status" aria-live="polite"></p>
			</form>
		</div>
	</section>

	<!-- ==========================================================
	     Location
	     ========================================================== -->
	<section class="section section--paper" aria-labelledby="location-heading">
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
				<h2 id="location-heading" class="h2">Our office</h2>
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

</main>

<?php
get_footer();
