import incident from '../../data/incident';

/**
 * @param  {Object} req the request object
 * @param  {Object} res the resppnse object
 * @param  {Function} next calls the next middleware
 * @return  {Function} calls the next middleware if test passes
 */

module.exports = (req, res, next) => {
  const incidentId = incident.find(c => c.id === parseInt(req.params.id, 10));

  if (!incidentId) {
    return res.status(404).send({
      status: 404,
      error: 'incident not found',
    });
  }
  return next();
};
