import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);

describe('Interventions Routes Test Suite', () => {
  describe('GET /api/v1/interventions', () => {
    it('should get all the interventions', (done) => {
      chai.request(app)
        .get('/api/v1/interventions')
        .end((error, response) => {
          expect(response.status).to.equal(200);
          expect(response.type).to.equal('application/json');
          expect(response.body).to.be.an('object');
          expect(response.body.status).to.equal(200);
          expect(response.body.data).to.be.an('array');
          done();
        });
    });
  });

  describe('GET /api/v1/interventions/:id', () => {
    it('should get a specific intervention', (done) => {
      chai.request(app)
        .get('/api/v1/interventions/2')
        .end((error, response) => {
          expect(response.status).to.equal(200);
          expect(response.type).to.equal('application/json');
          expect(response.body).to.be.an('object');
          expect(response.body.status).to.equal(200);
          expect(response.body.data).to.be.an('array');
          done();
        });
    });
  });

  describe('POST /api/v1/interventions/', () => {
    it('should create an intervention', (done) => {
      const incident1 = {
        title: 'new title',
        createdOn: new Date().toDateString(),
        createdBy: 1,
        type: 'intervention',
        location: 'lat-long coords',
        status: 'under investigation',
        Images: '',
        Videos: '',
        comment: '',
      };
      chai.request(app)
        .post('/api/v1/interventions/')
        .set('content-type', 'application/json')
        .send(incident1)
        .end((error, response) => {
          expect(response.status).to.equal(201);
          expect(response.body).to.be.an('object');
          expect(response.type).to.equal('application/json');
          expect(response.body.status).to.equal(201);
          expect(response.body.data).to.be.an('array');
          done();
        });
    });
  });

  describe('if the title is empty while creating an intervention', () => {
    it('should not create an intervention', (done) => {
      const incident2 = {
        title: 'new',
        createdOn: new Date().toDateString(),
        createdBy: 1,
        type: 'intervention',
        location: 'lat-long coords',
        status: 'under investigation',
        Images: '',
        Videos: '',
        comment: '',
      };
      chai.request(app)
        .post('/api/v1/interventions')
        .set('content-type', 'application/json')
        .send(incident2)
        .end((error, response) => {
          expect(response.status).to.equal(400);
          expect(response.body).to.be.an('object');
          expect(response.body.status).to.equal(400);
          expect(response.body.error).to.be.a('string');
          expect(response.body.error).to.equal('incident title is required and should be minimum 5 characters.');
          done();
        });
    });
  });

  describe('PATCH an intervention', () => {
    it('should update the specified intervention', (done) => {
      const incidentUpdate = {
        title: 'new title',
        createdOn: new Date().toDateString(),
        createdBy: 1,
        type: 'intervention',
        location: 'lat-long coords',
        status: 'under investigation',
        Images: '',
        Videos: '',
        comment: '',
      };

      chai.request(app)
        .patch('/api/v1/interventions/2')
        .set('content-type', 'application/json')
        .send(incidentUpdate)
        .end((error, response) => {
          expect(response.status).to.equal(201);
          expect(response.body).to.be.an('object');
          expect(response.body.status).to.equal(201);
          expect(response.body.data).to.be.an('array');
          done();
        });
    });
  });

  describe('PATCH an intervention', () => {
    it('should not update the specified intervention if id not found', (done) => {
      chai.request(app)
        .patch('/api/v1/interventions/100')
        .set('content-type', 'application/json')
        .end((error, response) => {
          expect(response.status).to.equal(404);
          expect(response.body).to.be.an('object');
          expect(response.body.status).to.equal(404);
          expect(response.body.error).to.be.a('string');
          expect(response.body.error).to.equal('incident not found');
          done();
        });
    });
  });

  describe('PATCH an intervention', () => {
    it('should not update the specified intervention if title is invalid', (done) => {
      const incidentUpdate = {
        title: 'new',
        createdOn: new Date().toDateString(),
        createdBy: 1,
        type: 'intervention',
        location: 'lat-long coords',
        status: 'under investigation',
        Images: '',
        Videos: '',
        comment: '',
      };

      chai.request(app)
        .patch('/api/v1/interventions/1')
        .set('content-type', 'application/json')
        .send(incidentUpdate)
        .end((error, response) => {
          expect(response.status).to.equal(400);
          expect(response.body).to.be.an('object');
          expect(response.body.status).to.equal(400);
          expect(response.body.error).to.be.a('string');
          expect(response.body.error).to.equal('incident title is required and should be minimum 5 characters.');
          done();
        });
    });
  });
  describe('PATCH /api/v1/interventions/1', () => {
    it('should not update the specified intervention if the status is invalid', (done) => {
      const incidentUpdate = {
        title: 'new title',
        createdOn: new Date().toDateString(),
        createdBy: 1,
        type: 'intervention',
        location: 'lat-long coords',
        status: '',
        Images: '',
        Videos: '',
        comment: '',
      };

      chai.request(app)
        .patch('/api/v1/interventions/1')
        .set('content-type', 'application/json')
        .send(incidentUpdate)
        .end((error, response) => {
          expect(response.status).to.equal(400);
          expect(response.body).to.be.an('object');
          expect(response.body.status).to.equal(400);
          expect(response.body.error).to.be.a('string');
          done();
        });
    });
  });

  describe('DELETE an intervention', () => {
    it('should not delete the specified intervention if id not found', (done) => {
      chai.request(app)
        .delete('/api/v1/interventions/100')
        .set('content-type', 'application/json')
        .end((error, response) => {
          expect(response.status).to.equal(404);
          expect(response.body).to.be.an('object');
          expect(response.body.status).to.equal(404);
          expect(response.body.error).to.be.a('string');
          expect(response.body.error).to.equal('incident not found');
          done();
        });
    });
  });
  describe('DELETE an intervention', () => {
    it('should delete the specified intervention', (done) => {
      chai.request(app)
        .delete('/api/v1/interventions/2')
        .set('content-type', 'application/json')
        .end((error, response) => {
          expect(response.status).to.equal(200);
          expect(response.body).to.be.an('object');
          expect(response.body.status).to.equal(200);
          expect(response.body.data).to.be.an('array');
          done();
        });
    });
  });
});
