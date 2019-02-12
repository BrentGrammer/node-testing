const request = require('supertest');
const app = require('./server').app;
const expect = require('expect');

describe('Server', () => {
  describe('GET /', () => {
    it('should return page not found 404', (done) => {
      request(app)
        .get('/')
        .expect(404)
        .expect(res => {
          expect(res.body).toInclude({ error: 'Page not found.' });
        })
        .end(done);
    });
  });

  describe('GET /users', () => {
    it('should return my user object', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect(res => {
          expect(res.body).toInclude({ 
            name: 'My Name',
            age: 26 
          });
        })
        .end(done);
    });
  });
});

