var isMobileApp = true;
var isApp = true;
var isDesktop = false;

var setStatusBar;

$(function() {
	setStatusBar = setInterval(function() {
		try {
			StatusBar.backgroundColorByHexString("#280071");
			clearInterval(setStatusBar);
		} catch (e) {}
	}, 500);


	$("#readme").attr("target", "_self");

	$.ajax({
		url: "http://bonkeyword.tk",	// BonkeyWORD, huh? Let's check it out.
		timeout: 7777, 					// GRAND SEAMUS!
		type: "GET",					// WINDOWS XP?!?!
		cache: false					// GRAND SEAMUS
	}).fail(function() { 				// GRAND SEAMUS?!?!
		$("#page_error").show();		// WHAT THE SHIT "GRAND SEAMUS"
	});									// OHHHH

	$(".app_showcase").append(
		'<a class="app_chrome">' +
			'<img src="./img/app/desktop.png" alt="This is retarded BonziWORLD." />' +
		'</a>'
	);
});