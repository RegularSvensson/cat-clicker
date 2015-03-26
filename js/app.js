$( document ).ready(function() {
	$( "#clicker" ).click(function() {
		var count = $("#counter").text();
		count = parseInt(count) + 1;
		$("#counter").text(count);
	});
});
