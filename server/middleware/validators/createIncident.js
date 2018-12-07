const incidentStatusArray = [
  'draft', 'under investigation', 'resolved', 'rejected'
];

/**
 * @param  {Object} req the request object
 * @param  {Object} res the resppnse object
 * @param  {Function} next calls the next middleware
 * @return  {Function} calls the next middleware if test passes
 */

module.exports = (req, res, next) => {
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
  return next();
};
