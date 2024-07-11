const request = require('supertest');
const app = require('../server');

describe('POST /api/login', () => {
  test('It should return an access token', async () => {
    const response = await request(app)
      .post('/api/login')
      .send({
        email: 'varshithab.008@gmail.com',
        password: 'password123',
      })
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body.accessToken).toBeDefined();
  });
});
