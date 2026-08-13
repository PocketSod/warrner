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

	// Consultation intake form.
	var form = document.querySelector('[data-intake-form]');
	if (!form || typeof window.warrnerData === 'undefined') {
		return;
	}

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
})();
