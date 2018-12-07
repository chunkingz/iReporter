/* eslint-disable class-methods-use-this */
/* eslint-disable array-callback-return */

import incident from '../data/incident';
import saveNewIncident from '../helpers/index.helper';

const result = incident.filter(res1 => res1.type === 'intervention');

/**
 * check if the incident id is correct
 * @param  {Object} req the request object
 * @return  {Function} calls the next middleware if test passes
 */
function checkIncident(req) {
  return incident.find(c => c.id === parseInt(req, 10));
}

/** Class representing interventtion records */
class interventionnController {
  /**
   * Get all intervention records.
   * @param {object} req the request object.
   * @param {object} res the response object.
   * @return  {Function} next calls the next middleware
   *
   */
  getAllInterventions(req, res) {
    return res.status(200).send({
      status: 200,
      data: [{
        message: 'All Intervention Records successfully retrieved',
        result,
      }]
    });
  }

  /**
   * Get a specific intervention record.
   * @param {object} req the request object.
   * @param {object} res the response object.
   * @return  {Function} next calls the next middleware
   *
   */
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
    });
    return res.status(400).send({
      status: 400,
      error: 'That id does not belong to an intervention record',
    });
  }

  /**
   * Create a new intervention record.
   * @param {object} req the request object.
   * @param {object} res the response object.
   * @return  {Function} next calls the next middleware
   *
   */
  createIntervention(req, res) {
<<<<<<< HEAD
    const r = req.body;
    const v = saveNewIncident(r.title,
      r.createdBy, r.type, r.location,
      r.status, r.attachment, r.comment);
=======
    const newIncident = {
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
    incident.push(newIncident);
>>>>>>> 051799c1a262e86dcbb9c39d47c7f81e5581fe76
    return res.status(201).send({
      status: 201,
      data: [{
        message: 'Intervention added successfuly',
<<<<<<< HEAD
        v: v[v.length - 1],
=======
        newIncident,
>>>>>>> 051799c1a262e86dcbb9c39d47c7f81e5581fe76
      }]
    });
  }

  /**
   * Update an intervention record.
   * @param {object} req the request object.
   * @param {object} res the response object.
   * @return  {Function} next calls the next middleware
   *
   */
  updateIntervention(req, res) {
    const incidentId = checkIncident(req.params.id);

    const id = parseInt(req.params.id, 10);
    incident.map((data) => {
      if (data.id === id && data.type === 'intervention') {
        // insert values
        incidentId.title = req.body.title;
        incidentId.createdOn = req.body.createdOn;
        incidentId.createdBy = req.body.createdBy;
        incidentId.type = req.body.type;
        incidentId.location = req.body.location;
        incidentId.status = req.body.status;
        incidentId.Images = req.body.Images;
        incidentId.Videos = req.body.Videos;
        incidentId.comment = req.body.comment;
        return res.status(201).send({
          status: 201,
          data: [{
            message: 'Incident record updated successfully',
            incidentId,
          }],
        });
      }
    });
    return res.status(400).send({
      status: 400,
      error: 'That id does not belong to an intervention record',
    });
  }

  /**
   * Delete an intervention record.
   * @param {object} req the request object.
   * @param {object} res the response object.
   * @return  {Function} next calls the next middleware
   *
   */
  deleteIntervention(req, res) {
    // check if it exists
    const incidentId = incident.find(c => c.id === parseInt(req.params.id, 10));

    const id = parseInt(req.params.id, 10);
    incident.map((data) => {
      if (data.id === id && data.type === 'intervention') {
        // Delete the incident
        // using its id
        const index = incident.indexOf(incidentId);
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
