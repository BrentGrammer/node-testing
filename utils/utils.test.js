const expect = require('expect');

const utils = require('./utils')

describe('Utils', () => {
  describe('#add', () => {
    it('should add two numbers', () => {
      const res = utils.add(1, 2);
      expect(res).toBe(3).toBeA('number');
    });  
  });

  
  it('should square a number', () => {
    const res = utils.square(3);
    expect(res).toBe(9).toBeA('number');
  });
  
  it('should set first and last names', () => {
    const res = utils.setName({ age: 22 }, 'First Last');
    expect(res).toInclude({ firstName: 'First', lastName: 'Last'}).toBeA('object');
  });
  
  it('should async add two numbers', (done) => {
    const res = utils.asyncAdd(4, 3, (sum) => {
      expect(sum).toBe(7).toBeA('number');
      done();
    });
  });
  
  it('should async square a number', (done) => {
    const res = utils.asyncSquare(3, (square) => {
      expect(square).toBe(9).toBeA('number');
      done();
    });
  })
});



// it('should expect some values', () => {
//   expect(12).toNotBe(11);
//   expect([2,3,4]).toInclude(2);
//   expect([4,5,6]).toExclude(10);
//   expect({ name: 'Brent', age: 25 }).toInclude({ age: 25 }).toExclude({ propDoesnotExist: 1 });
// })