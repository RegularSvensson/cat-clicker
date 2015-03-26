$( document ).ready(function() {

	/* ======= Model ======= */
	var model = {
		cat: {
			imgSrc: "img/cat1.jpg"
		}
	};

	/* ======= Octopus ======= */
	var octopus = {
		init: function() {
			catView.init();
		},
		getCat: function() {
			return model.cat;
		}
	};



});
