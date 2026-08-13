(function () {
	'use strict';

	// Mobile nav toggle — wired once header.php grows a real nav (Step 2).
	var navToggle = document.querySelector('[data-nav-toggle]');
	var nav = document.querySelector('[data-nav]');
	if (navToggle && nav) {
		navToggle.addEventListener('click', function () {
			var isOpen = nav.getAttribute('data-open') === 'true';
			nav.setAttribute('data-open', String(!isOpen));
			navToggle.setAttribute('aria-expanded', String(!isOpen));
		});
	}

	// Consultation intake form(s) — the homepage may show more than one
	// while multiple design options are being reviewed side by side.
	var forms = document.querySelectorAll('[data-intake-form]');
	if (!forms.length || typeof window.warrnerData === 'undefined') {
		return;
	}

	forms.forEach(function (form) {
		var status = form.querySelector('[data-intake-status]');
		var submitBtn = form.querySelector('[type="submit"]');

		form.addEventListener('submit', function (event) {
			event.preventDefault();

			submitBtn.disabled = true;
			status.textContent = 'Sending…';
			status.removeAttribute('data-state');

			var formData = new FormData(form);
			formData.append('action', 'warrner_legal_intake');
			formData.append('nonce', window.warrnerData.nonce);

			fetch(window.warrnerData.ajaxUrl, {
				method: 'POST',
				body: formData,
				credentials: 'same-origin',
			})
				.then(function (response) { return response.json(); })
				.then(function (data) {
					if (data.success) {
						status.textContent = data.data.message;
						status.setAttribute('data-state', 'success');
						form.reset();
					} else {
						status.textContent = data.data.message || 'Something went wrong. Please try again.';
						status.setAttribute('data-state', 'error');
					}
				})
				.catch(function () {
					status.textContent = 'Something went wrong. Please call the office directly.';
					status.setAttribute('data-state', 'error');
				})
				.finally(function () {
					submitBtn.disabled = false;
				});
		});
	});

	// Testimonial pull-quote carousel (Option C).
	var carousel = document.querySelector('[data-quote-carousel]');
	if (carousel) {
		var slides = carousel.querySelectorAll('.vc-quote__slide');
		var dots = carousel.querySelectorAll('.vc-quote__dot');
		dots.forEach(function (dot, i) {
			dot.addEventListener('click', function () {
				slides.forEach(function (slide, j) { slide.setAttribute('data-active', String(i === j)); });
				dots.forEach(function (d, j) { d.setAttribute('aria-current', String(i === j)); });
			});
		});
	}

	// FAQ accordion (Option D).
	var accordion = document.querySelector('[data-accordion]');
	if (accordion) {
		var items = accordion.querySelectorAll('.vd-faq__item');
		items.forEach(function (item) {
			var q = item.querySelector('.vd-faq__q');
			q.addEventListener('click', function () {
				var isOpen = item.getAttribute('data-open') === 'true';
				item.setAttribute('data-open', String(!isOpen));
				q.setAttribute('aria-expanded', String(!isOpen));
			});
		});
	}

	// Design-option toggle — review tool only, remove alongside the losing
	// variant's markup once a direction is picked.
	var toggleBtns = document.querySelectorAll('[data-variant-btn]');
	var panels = document.querySelectorAll('[data-variant-panel]');
	if (toggleBtns.length && panels.length) {
		var STORAGE_KEY = 'warrnerVariant';

		var setVariant = function (variant) {
			panels.forEach(function (panel) {
				panel.hidden = panel.getAttribute('data-variant-panel') !== variant;
			});
			toggleBtns.forEach(function (btn) {
				btn.setAttribute('aria-pressed', String(btn.getAttribute('data-variant-btn') === variant));
			});
			try {
				sessionStorage.setItem(STORAGE_KEY, variant);
			} catch (e) { /* storage unavailable — ignore */ }
		};

		toggleBtns.forEach(function (btn) {
			btn.addEventListener('click', function () {
				setVariant(btn.getAttribute('data-variant-btn'));
			});
		});

		var saved = null;
		try {
			saved = sessionStorage.getItem(STORAGE_KEY);
		} catch (e) { /* storage unavailable — ignore */ }
		if (saved) {
			setVariant(saved);
		}
	}
})();
