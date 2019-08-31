class Sentence {
	constructor(dna) {
		this.targetArray = TARGET.split('')
		this.dna = dna || new DNA(this.randomSentenceArray(TARGET.length))
		this.fitness = 0
	}

	update() {

	}

	show(pos) {
		const word = this.dna.genes.join('')
		textSize(15);
		fill(0);
		text(word, 5, 15 + pos*20);
	}

	calculateFitness() {
		let matches = 0
		for ( var i = 0; i < this.dna.genes.length; i++ ) {
			if(this.dna.genes[i] === this.targetArray[i])
				matches++
		 }
		 this.fitness = matches / this.targetArray.length
		 return this.fitness
	}

	getWord() {
		return this.dna.genes.join('')
	}

	randomCharacter() {
		const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz. ';
		return characters.charAt(Math.floor(Math.random() * characters.length))
	}
	randomSentenceArray(length) {
		let wordArray = []
		for ( var i = 0; i < length; i++ ) {
			wordArray.push(this.randomCharacter());
	 	}
		return wordArray
	}
}
