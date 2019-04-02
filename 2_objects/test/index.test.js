const { AnimalConstructor } = require('../lib/index.js');

describe('animal constructor function', ()=> {
    it('has name property', ()=> {
        const dog = new AnimalConstructor('rover');
        expect(dog.name).toEqual('rover');
    });
    it('has name and species property', ()=> {
        const dog = new AnimalConstructor('rover', 'dog');
        expect(dog).toEqual({ 'name':'rover', 'species':'dog' });
    });
    it('speak method display name and species', ()=> {
        const dog = new AnimalConstructor('rover', 'dog');
        expect(dog.speak()).toEqual('my name is rover and i am a dog');
    });
});
