import incident from '../data/incident';

/**
   * Create a new record.
   * @param {object} newTitle the title of the incident.
   * @param {object} newCreatedBy who it was created by.
   * @param {object} newType the type of the incident.
   * @param {object} newLocation the location of the incident.
   * @param {object} newStatus the status of the incident.
   * @param {object} newAttachment the attached file(s).
   * @param {object} newComment the extra comments.
   * @return  {Function} next calls the next middleware
   *
   */
function saveNewIncident(newTitle, newCreatedBy,
  newType, newLocation, newStatus, newAttachment, newComment) {
  const newIncident = {
    id: incident.length + 1,
    title: newTitle,
    createdOn: new Date().toDateString(),
    createdBy: newCreatedBy,
    type: newType,
    location: newLocation,
    status: newStatus,
    attachment: newAttachment,
    comment: newComment,
  };
  incident.push(newIncident);
  return incident;
}

export default saveNewIncident;
