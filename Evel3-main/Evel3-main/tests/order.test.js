const request = require('supertest');
const app = require('../server');

describe('GET /api/orders', () => {
  test('It should respond with an array of orders', async () => {
    const response = await request(app)
      .get('/api/orders')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body).toBeInstanceOf(Array);
  });
});
