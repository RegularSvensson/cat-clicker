$( document ).ready(function() {

	/* ======= Model ======= */
	var model = {
		cat: {
			clickCount: 0,
			name: "Meron",
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


	/* ======= View ======= */
	var catView = {
		init: function() {
			this.catImageElem = document.getElementById('cat-img');

			this.render();
		},
		render: function() {
			this.catImageElem.src = octopus.getCat().imgSrc;
		}
	};
	octopus.init();

});
