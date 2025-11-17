"use strict"

window.addEventListener('load', windowLoad)


function windowLoad() {



	sliderInit();
}






function sliderInit() {
	const sliderReviews = new Swiper('.slider-works', {
		// Optional parameters
		loop: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		slidesPerView: 3,
		spaceBetween: 24,
		breakpoints: {
			320: {
				slidesPerView: 1.1,
				spaceBetween: 10,
			},
			600: {
				slidesPerView: 1.4,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			1050: {
				slidesPerView: 3,
				spaceBetween: 24,
			},
		},





	});
}