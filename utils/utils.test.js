const utils = require('./utils');

it('should add two numbers', () => {
    var res = utils.add(33, 11);

    if (res !== 44) {
        throw new Error(`expected 44, but returned ${res},`)
    }
});

it('should square two numbers', () => {
   var res = utils.square(2, 2);

   if (res !== 4) {
       throw new Error(`expected a squared number, but returned ${res},`)
   }
});