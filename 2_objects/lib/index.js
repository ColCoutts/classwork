function AnimalConstructor(name, species) {
    this.name = name;
    this.species = species;
}

AnimalConstructor.prototype.speak = function() {
    return `my name is ${this.name} and i am a ${this.species}`;
};

module.exports = {
    AnimalConstructor
};
