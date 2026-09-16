	// Testimonial pull-quote carousel (Option D — .vc-quote is variant-c/id="variant-c", despite the "vc" reading like Option C).
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
