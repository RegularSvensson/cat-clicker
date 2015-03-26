// grab cat class and store in var 
var cats = $(".cat");
// grab button class and store in var
var buttons = $("button");

//declare function to hide all cats
function hideAllCats(){
	for (var i=0; i<cats.length; i++){
		$(cats[i]).hide();
	}
}
hideAllCats();