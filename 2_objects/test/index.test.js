const { AnimalConstructor } = require('../lib/index.js');

describe('animal constructor function', ()=> {
    it('has name property', ()=> {
        const dog = new AnimalConstructor('rover');
        expect(dog.name).toEqual('rover');
    });
});
