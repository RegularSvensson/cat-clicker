$( document ).ready(function() {

	/* ======= Model ======= */
	var model = {
		cats: [
			{
				clickCount: 0,
				name: "Meron",
				imgSrc: "img/cat1.jpg"
			},
			{
				clickCount: 0,
				name: "Paula",
				imgSrc: "img/cat2.jpg"	
			}
		]
		
	};

	/* ======= View ======= */
	var catView = {
		init: function() {
			this.catCountElem = document.getElementById('cat-count');
			this.catNameElem = document.getElementById('cat-name');
			this.catImageElem = document.getElementById('cat-img');

			this.catImageElem.addEventListener('click', function(){
				octopus.incrementCounter();
			});

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
		},
		incrementCounter: function() {
			model.cat.clickCount++;
			catView.render();
		}
	};

	octopus.init();

});
