$(document).ready(function() {
	$("#go-to-top").click(function(event) {
		event.preventDefault();
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});
});
$(window).scroll(function() {
	var height = $(window).scrollTop();
	if (height > 100) {
	    $('#go-to-top').fadeIn();
	} else {
	    $('#go-to-top').fadeOut();
	}
});