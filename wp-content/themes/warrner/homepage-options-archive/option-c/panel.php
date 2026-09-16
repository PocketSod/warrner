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
		<a class="vb-phone-pill" href="<?php echo warrner_phone_tel_href(); ?>"><span aria-hidden="true">&#9742;</span> <?php echo warrner_phone_display(); ?></a>
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
				<p class="vb-hero__coords"><?php echo warrner_address_coords_entities(); ?> &mdash; Indianapolis, Indiana</p>
				<div class="vb-hero__actions">
					<a class="vb-btn vb-btn--primary" href="#consultation-b">Request a Free Consultation</a>
					<a class="vb-btn vb-btn--phone" href="<?php echo warrner_phone_tel_href(); ?>"><span aria-hidden="true">&#9742;</span> Call <?php echo warrner_phone_display(); ?></a>
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
					<div><span aria-hidden="true">&#9742;</span> <a href="<?php echo warrner_phone_tel_href(); ?>"><?php echo warrner_phone_display(); ?></a></div>
					<div><span aria-hidden="true">&#128205;</span> <?php echo warrner_address_street(); ?>, <?php echo warrner_address_city_state_zip(); ?></div>
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
				<p><?php echo warrner_address_street(); ?><br><?php echo warrner_address_city_state_zip(); ?></p>
				<p><a href="<?php echo warrner_phone_tel_href(); ?>"><?php echo warrner_phone_display(); ?></a></p>
			</div>
		</div>
		<div class="wrap vb-footer__bottom">
			<span>&copy; <?php echo esc_html( date( 'Y' ) ); ?> Warrner Legal, PLLC. Attorney Advertising.<!-- PLACEHOLDER: confirm entity name/type --></span>
			<span class="vb-footer__coords"><?php echo warrner_address_coords_entities(); ?></span>
		</div>
	</div>

</div><!-- /#variant-b -->
