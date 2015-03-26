$( document ).ready(function() {

	/* ======= Model ======= */
	var model = {
		cat: {
			clickCount: 0,
			name: "Meron",
			imgSrc: "img/cat1.jpg"
		}
	};

	/* ======= View ======= */
	var catView = {
		init: function() {
			this.catCountElem = document.getElementById('cat-count');
			this.catNameElem = document.getElementById('cat-name');
			this.catImageElem = document.getElementById('cat-img');

			this.render();
		},
		render: function() {
			this.catCountElem.textContent = octopus.getCat().clickCount;
			this.catNameElem.textContent = octopus.getCat().name;
			this.catImageElem.src = octopus.getCat().imgSrc;
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

	octopus.init();

});
