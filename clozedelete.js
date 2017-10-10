function ClozeCard(text, close) {
	this.cloze = cloze;
	this.text = text;
	this.partial = text.replace(cloze, '...');
}

module.exports = ClozeCard;