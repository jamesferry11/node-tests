const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {
       describe('#add', () => {
           it('should add two numbers', () =>{
               var res = utils.add(33, 11);
               expect(res).toBe(44).toBeA('number');
       });
    });

    it('should async add two numbers', (done) => {
        utils.asyncAdd(4,3, (sum) => {
            expect(sum).toBe(7).toBeA('number');
            done();
        });
    });

    it('should square two numbers', () => {
        var res = utils.square(3);

        expect(res).toBe(9).toBeA('number');
    });

    it('should async square a number', (done) => {
        utils.asyncSquare(5, (res) => {
            expect(res).toBe(25).toBeA('number');
            done();
        });
    });
});



it('should set firstName and lastName', () => {
    var user = {location: 'Salt Lake City', age: 32};
    var res = utils.setName(user, 'James Ferry');

    expect(user).toInclude({
        firstName: 'James',
        lastName: 'Ferry'
    });
});

// it('should expect some values', () => {
//     //expect(12).toNotBe(12);
//     expect({name: 'Andrew'})
// });
