/* eslint-disable class-methods-use-this */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable require-jsdoc */

// import users from '../data/users';
import incident from '../data/incident';

const incidentStatusArray = [
  'draft', 'under investigation', 'resolved', 'rejected'
];
const result = incident.filter(res1 => res1.type === 'intervention');

class interventionnController {
  getAllInterventions(req, res) {
    return res.status(200).send({
      status: 200,
      data: [{
        message: 'All Intervention Records successfully retrieved',
        result,
      }]
    });
  }

  getIntervention(req, res) {
    const id = parseInt(req.params.id, 10);
    incident.map((data) => {
      if (data.id === id && data.type === 'intervention') {
        return res.status(200).send({
          status: 200,
          data: [{
            message: 'Record retrieved successfully',
            data,
          }],
        });
      }
      const inci = incident.find(c => c.id === parseInt(req.params.id, 10));
      if (!inci) return res.status(404).send('id not found');
    });
    return res.status(400).send({
      status: 400,
      data: [{
        message: 'That id does not belong to an intervention record',
      }]
    });
  }

  createIntervention(req, res) {
    if (!req.body.title || req.body.title.length < 5) {
      return res.status(400).send({
        status: 400,
        error: 'incident title is required and should be minimum 5 characters.',
      });
    }
    if (!incidentStatusArray.includes(req.body.status)) {
      return res.status(400).send({
        status: 400,
        error: 'incident status must be set to either of the following: draft, under investigation, resolved, or rejected]',
      });
    }
    const incident1 = {
      id: incident.length + 1,
      title: req.body.title,
      createdOn: new Date().toDateString(),
      createdBy: req.body.createdBy,
      type: req.body.type,
      location: req.body.location,
      status: req.body.status,
      Images: req.body.Images,
      Videos: req.body.Videos,
      comment: req.body.comment,
    };
    incident.push(incident1);
    return res.status(201).send({
      status: 201,
      data: [{
        message: 'Intervention added successfuly',
        incident1,
      }]
    });
  }

  updateIntervention(req, res) {
    // check if it exists
    const inci = incident.find(c => c.id === parseInt(req.params.id, 10));
    if (!inci) {
      return res.status(404).send({
        status: 404,
        error: 'incident not found',
      });
    }

    if (!req.body.title || req.body.title.length < 5) {
      return res.status(400).send({
        status: 400,
        error: 'incident title is required and should be minimum 5 characters.',
      });
    }

    if (!incidentStatusArray.includes(req.body.status)) {
      return res.status(400).send({
        status: 400,
        error: 'incident status must be set to either of the following: draft, under investigation, resolved, or rejected]',
      });
    }

    const id = parseInt(req.params.id, 10);
    incident.map((data) => {
      if (data.id === id && data.type === 'intervention') {
        // insert values
        inci.title = req.body.title;
        inci.createdOn = req.body.createdOn;
        inci.createdBy = req.body.createdBy;
        inci.type = req.body.type;
        inci.location = req.body.location;
        inci.status = req.body.status;
        inci.Images = req.body.Images;
        inci.Videos = req.body.Videos;
        inci.comment = req.body.comment;
        return res.status(201).send({
          status: 201,
          data: [{
            message: 'Incident record updated successfully',
            inci,
          }],
        });
      }
    });
    return res.status(400).send({
      status: 400,
      error: 'That id does not belong to an intervention record',
    });
  }

  deleteIntervention(req, res) {
    // check if it exists
    const inci = incident.find(c => c.id === parseInt(req.params.id, 10));
    if (!inci) {
      return res.status(404).send({
        status: 404,
        error: 'incident not found',
      });
    }

    const id = parseInt(req.params.id, 10);
    incident.map((data) => {
      if (data.id === id && data.type === 'intervention') {
        // Delete the incident
        // using its id
        const index = incident.indexOf(inci);
        incident.splice(index, 1);

        // Return it
        const delResult = incident.filter(res1 => res1.type === 'intervention');

        return res.status(200).send({
          status: 200,
          data: [{
            message: 'Incident Deleted successfully',
            delResult,
          }]
        });
      }
    });
    return res.status(400).send({
      status: 400,
      error: 'That id does not belong to an intervention record',
    });
  }
}

const interventionController = new interventionnController();
export default interventionController;
