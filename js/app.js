$(document).ready(function() {

	console.log('ready');

	$("#button").click(function() {

		if ($('div#open').hasClass("hidden") === true) {
			$('div#spring').addClass("hidden");
			$('div#open').removeClass("hidden");
		} else {
			$('div#open').addClass("hidden");
			$('div#spring').removeClass("hidden");
		}
	});
})