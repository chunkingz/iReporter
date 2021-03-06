import incident from '../../data/incident';

/**
 * check if the incident id is correct
 * @param  {Object} req the request object
 * @return  {Function} calls the next middleware if test passes
 */
function checkIncident(req) {
  return incident.find(c => c.id === parseInt(req, 10));
}
/**
 * @param  {Object} req the request object
 * @param  {Object} res the resppnse object
 * @param  {Function} next calls the next middleware
 * @return  {Function} calls the next middleware if test passes
 */
module.exports = (req, res, next) => {
  if (!checkIncident(req.params.id)) return res.status(404).send('id not found');
  next();
};
