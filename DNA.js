class DNA {
	constructor(genes) {
		this.genes = genes
	}

	crossOver(partnerDNA) {
		const childGenes = []
		const midPoint = floor(random(this.genes.length))
		for(var i=0; i<this.genes.length; i++) {
			childGenes[i] = i > midPoint ? this.genes[i] : partnerDNA.genes[i]
		}
		return new DNA(childGenes)
	}

	mutation() {
		for(var i=0; i<this.genes.length; i++) {
			if(random(1) < MUTATION_RATE) {
				 this.genes[i] = Sentence.prototype.randomCharacter()
			}
		}
	}
}
