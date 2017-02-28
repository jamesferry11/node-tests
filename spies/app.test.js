const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {
    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);

    it('should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy('Kooper', 4);
        expect(spy).toHaveBeenCalledWith('Kooper', 4);
    });

    it('should call saveUser with user object', () => {
        var email = 'Kooper@exmample.com';
        var password = '123asdf';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    });

});