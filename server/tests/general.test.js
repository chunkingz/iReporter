/* eslint-disable quote-props */
/* eslint-disable prefer-destructuring */
import chai from 'chai';
import { describe, it } from 'mocha';
import app from '../index';

const expect = chai.expect;

chai.use(require('chai-http'));

describe('General Routes Test Suite', () => {
  describe('GET the root', () => {
    it('should get the root welcome page', (done) => {
      chai.request(app)
        .get('/')
        .end((error, response) => {
          expect(response.status).to.equal(200);
          expect(response.body).to.be.an('object');
          done();
        });
    });
  });

  describe('GET the main api route', () => {
    it('should get the main api page', (done) => {
      chai.request(app)
        .get('/api/v1/')
        .end((error, response) => {
          expect(response.status).to.equal(200);
          expect(response.body).to.be.an('object');
          done();
        });
    });
  });

  describe('GET the unknown routes', () => {
    it('should return 404', (done) => {
      chai.request(app)
        .get('/awRFr')
        .end((error, response) => {
          expect(response.status).to.equal(404);
          done();
        });
    });
  });
});
