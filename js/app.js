$( document ).ready(function() {
	$( "#cat1" ).click(function() {
		var count = $("#count1").text();
		count = parseInt(count) + 1;
		$("#count1").text(count);
	});

	$( "#cat2" ).click(function() {
		var count = $("#count2").text();
		count = parseInt(count) + 1;
		$("#count2").text(count);
	});
});
