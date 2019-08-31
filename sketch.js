const WIDTH = 800,
			HEIGHT = 400,
			LIFE_SPAN = 5,
			MUTATION_RATE = 0.02,
			TARGET = 'Abdelghafour rakhma is my name',
			POPULATION_SIZE = 100;

let population = [], generation = 0, iterations = 0, MAX_FITNESS = 0;

function setup() {
	createCanvas(WIDTH, HEIGHT)
	population = new Population()
}

function draw() {
	background(255)
	textSize(15);
	fill(255, 0, 0);
	text(`Generation: ${generation}`, WIDTH-300, 15);
	text(`Max fitness: ${MAX_FITNESS.toFixed(4)}`, WIDTH-300, 35);
	text(`Target word => [ ${TARGET} ]`, WIDTH-300, 55);
	if(population.finished) {
		fill(0, 255, 0);
	}else {
		fill(0, 0, 255);
	}
	text(`Best Match: ${population.bestMatch}`, WIDTH-300, 75);
	if (population.finished) {
		noLoop()
	}
	population.run()
	
	iterations++
	if (iterations >= LIFE_SPAN) {
		population.reproduction()
		population.selection()
		generation++
		iterations = 0
	}
}
