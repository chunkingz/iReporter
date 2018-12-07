const incident = [
  {
    id: 1,
    title: 'red-flag title',
    createdOn: new Date().toDateString(),
    createdBy: 1,
    type: 'red-flag',
    location: 'lat-long coords',
    status: 'resolved',
    attachment: '',
    comment: '',
  },
  {
    id: 2,
    title: 'red-flag title',
    createdOn: new Date().toDateString(),
    createdBy: 2,
    type: 'intervention',
    location: 'lat-long coords',
    status: 'draft',
    attachment: '',
    comment: '',
  },
];

export default incident;
