const request = require('supertest');
const app = require('../server');

describe('GET /api/books', () => {
  test('It should respond with an array of books', async () => {
    const response = await request(app)
      .get('/api/books')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body).toBeInstanceOf(Array);
  });
});
