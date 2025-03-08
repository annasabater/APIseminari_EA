import express from 'express';
import subjectController from '../controllers/subject.controller.js';

const router = express.Router();

router.post('/', subjectController.createSubject);
router.get('/', subjectController.getSubjects);
router.get('/:id', subjectController.getSubjectById);
router.put('/:id', subjectController.updateSubject);
router.delete('/:id', subjectController.deleteSubject);
router.get('/:id/alumni', subjectController.getAlumniBySubject);

export default router;
