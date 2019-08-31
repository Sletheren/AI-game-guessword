class Population {
	constructor() {
		this.sentences = [...Array(POPULATION_SIZE)].map(() => new Sentence())
		this.matingPool = []
		this.finished = false
		this.bestMatch = ''
	}

	run() {
		for(let i=0; i<this.sentences.length; i++) {
			this.sentences[i].show(i)
		}
	}

	reproduction() {
		for(let i=0; i<this.sentences.length; i++) {
			const fitness = this.sentences[i].calculateFitness()
			if(fitness > MAX_FITNESS) {
				MAX_FITNESS = fitness
				this.bestMatch = this.sentences[i].getWord()
			}
			if (fitness === 1) {
				this.finished = true
			}
		}
		for(let i=0; i<this.sentences.length; i++) {
			this.sentences[i].fitness /= MAX_FITNESS
		}
		this.matingPool = []
		for(let i=0; i<this.sentences.length; i++) {
			const n = this.sentences[i].fitness * POPULATION_SIZE
			for(let j=0; j<n; j++) {
				this.matingPool.push(this.sentences[i])
			}
		}
	}

	selection() {
		const newSentences = []
		for(let i=0; i<this.sentences.length; i++) {
			const parent1DNA = random(this.matingPool).dna
			const parent2DNA = random(this.matingPool).dna
			const childDna = parent1DNA.crossOver(parent2DNA)
			childDna.mutation()
			newSentences[i] = new Sentence(childDna)
		}
		this.sentences = newSentences;
	}

}
