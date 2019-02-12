/**
 * Test Spies
 */
const expect = require('expect');
const rewire = require('rewire');

// pass in the file you are testing into rewire instead of bringing it in via require:
const app = rewire('./app');

describe('App', () => {
  // You can use a spy to simulate the database export used in app.js instead of the actual db object with database calls:
  const db = {
    saveUser: expect.createSpy()
  };
  // Now replace the db used in the app.js file with the spy created above:
  // first arg is the variable in the original file you want to replace (as a string), and the second arg is what you are replacing it with (the spy):
  app.__set__('db', db);

  it('should call the spy correctly', () => {
    const spy = expect.createSpy();
    spy('arg', 2);
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith('arg', 2);
  });

  it('should call saveUser with user object', () => {
    const email ='email@gmail.com';
    const password = '123';
    // this will call the db method, but it will be using the spy setup with rewire instead of the original:
    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({ email, password });
  });
});