
;(function(){

	// Get elements

	var menuBtn = document.querySelector('.menu-trigger');
	var closeBtn = document.querySelector('.close-btn');
	var menu = document.querySelector('.menu');
	var scrollDown = document.querySelector('.scroll-down');


	

	// Functions

	function openMobileMenu() {

		menu.classList.add('menu--active');
		
		setTimeout(function() {
			closeBtn.classList.add('close-btn--active');
		}, 300);

	}

	function closeMobileMenu() {
		menu.classList.remove('menu--active');
		closeBtn.classList.remove('close-btn--active');
	}

	// EventListeners

	menuBtn.addEventListener('click', openMobileMenu, false);
	menu.addEventListener('click', closeMobileMenu, false);
	closeBtn.addEventListener('click', closeMobileMenu, false);

}());