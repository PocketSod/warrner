	// Horizontal scroll row arrow buttons — Option C (.vb-scroll-card, id="variant-b").
	document.querySelectorAll('[data-scroll-row]').forEach(function (row) {
		var track = row.querySelector('[data-scroll-track]');
		var prevBtn = row.querySelector('[data-scroll-prev]');
		var nextBtn = row.querySelector('[data-scroll-next]');
		if (!track) return;
		var scrollByCard = function (dir) {
			var card = track.querySelector('.vb-scroll-card');
			var amount = card ? card.getBoundingClientRect().width + 24 : 240;
			track.scrollBy({ left: dir * amount, behavior: 'smooth' });
		};
		if (prevBtn) prevBtn.addEventListener('click', function () { scrollByCard(-1); });
		if (nextBtn) nextBtn.addEventListener('click', function () { scrollByCard(1); });
	});
