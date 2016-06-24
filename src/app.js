(function() {
	$('.prevent').on('click', function (e) {
        e.preventDefault();
    });
	function openLeftMenu() {
	    $('body').addClass('slide');
	    $('.overlay').fadeIn();
	    $('.sidebar').animate({
	        left: 0
	    }, 200);
	}

	function closeLeftMenu() {
	    $('body').removeClass('slide');
	    $('.overlay').fadeOut();
	    $('.sidebar').animate({
	        left: '-100%'
	    }, 200);
	}
	$('.open-menu').on('click', function(){
		openLeftMenu();
	});
	$('.overlay').on('click', function () {
        closeLeftMenu();
    });
})();


