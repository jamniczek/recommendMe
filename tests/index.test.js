const { expect } = require('chai');
const request = require('supertest');

const mocks = require('./mocks');
const app = require('../src/index');

describe('POST /recommend - games', () => {
  it('should return 5 games', (done) => {
    request(app)
      .post('/recommend')
      .send(mocks.correctRequestGames)
      .expect((res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('Array');
        expect(res.body.length).to.equal(5);
        const notGames = res.body.filter(element => element.Type !== 'game');
        expect(notGames.length).to.equal(0);
      })
      .end(done);
  });

  it('should return 404 nothing found', (done) => {
    request(app)
      .post('/recommend')
      .send(mocks.noResultsRequest)
      .expect((res) => {
        expect(res.status).to.equal(404);
        expect(res.body.message).to.equal('No recommendations found!');
      })
      .end(done);
  });
});
