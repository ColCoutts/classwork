const { AnimalConstructor, animalFactory } = require('../lib/index.js');

describe('animal constructor function', () => {
    it('has name property', ()=> {
        const dog = new AnimalConstructor('rover');
        expect(dog.name).toEqual('rover');
    });
    it('has name and species property', () => {
        const dog = new AnimalConstructor('rover', 'dog');
        expect(dog).toEqual({ 'name':'rover', 'species':'dog' });
    });
    it('speak method display name and species', () => {
        const dog = new AnimalConstructor('rover', 'dog');
        expect(dog.speak()).toEqual('my name is rover and i am a dog');
    });
    describe('animal factory function', () => {
        it('has name property', () => {
            const dog = animalFactory('rover');
            expect(dog.name).toEqual('rover');
        });
        it('has species property', () => {
            const dog = animalFactory('rover', 'dog');
            expect(dog.species).toEqual('dog');
        });
        it('speak method to display name/species', () => {
            const dog = animalFactory('rover', 'dog');
            expect(dog.speak()).toEqual('hi my name is rover and i am a dog');
        });
    });
    

});
