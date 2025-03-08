import subjectService from '../services/subject.service.js';
import Subject from '../models/subject.model.js';

async function createSubject(req, res) {
    try {
        const subject = await subjectService.createSubject(req.body);
        res.status(201).json(subject);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

async function getSubjects(req, res) {
    try {
        const subjects = await subjectService.getSubjects();
        res.status(200).json(subjects);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

async function getSubjectById(req, res) {
    try {
        const subject = await subjectService.getSubjectById(req.params.id);
        if (subject) {
            res.status(200).json(subject);
        } else {
            res.status(404).json({ message: 'Subject not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

async function updateSubject(req, res) {
    try {
        const subject = await subjectService.updateSubject(req.params.id, req.body);
        if (subject) {
            res.status(200).json(subject);
        } else {
            res.status(404).json({ message: 'Subject not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

async function deleteSubject(req, res) {
    try {
        const subject = await subjectService.deleteSubject(req.params.id);
        if (subject) {
            res.status(200).json({ message: 'Subject deleted' });
        } else {
            res.status(404).json({ message: 'Subject not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

async function getAlumniBySubject(req, res) {
    try {
        const subject = await subjectService.getSubjectById(req.params.id);
        if (subject) {
            res.status(200).json(subject.alumni);
        } else {
            res.status(404).json({ message: 'Subject not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export default {
    createSubject,
    getSubjects,
    getSubjectById,
    updateSubject,
    deleteSubject,
    getAlumniBySubject
};
