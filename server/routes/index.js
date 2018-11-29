import express from 'express';
import redflagController from '../controller/redflagController';
import interventionController from '../controller/interventionController';

const router = express.Router();

// fetch all red-flag records
router.get('/api/v1/red-flags', redflagController.getAllRedFlags);

// fetch all intervention records
router.get('/api/v1/interventions', interventionController.getAllInterventions);

// fetch a specific red-flag record
router.get('/api/v1/red-flags/:id', redflagController.getRedFlag);

// fetch a specific intervention record
router.get('/api/v1/interventions/:id', interventionController.getIntervention);

// create a new red-flag record
router.post('/api/v1/red-flags', redflagController.createRedFlag);

// create a new intervention record
router.post('/api/v1/interventions', interventionController.createIntervention);

// update a red-flag record
router.patch('/api/v1/red-flags/:id', redflagController.updateRedFlag);

// update an intervention record
router.patch('/api/v1/interventions/:id', interventionController.updateIntervention);

// update a red-flag record comment
// router.patch('/api/v1/red-flags/:id/comment', redflagController.updateRedFlagComment);

// update an intervention record comment
// eslint-disable-next-line max-len
// router.patch('/api/v1/interventions/:id/comment', interventionController.updateInterventionComment);

// Delete a red-flag record
router.delete('/api/v1/red-flags/:id', redflagController.deleteRedFlag);

// Delete an intervention record
router.delete('/api/v1/interventions/:id', interventionController.deleteIntervention);


export default router;
