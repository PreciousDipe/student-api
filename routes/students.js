const express = require('express');
const router = express.Router();
const Student = require('../model/students');
const Joi = require('joi');

const studentSchema = Joi.object({
  name: Joi.string().required(),
  age: Joi.number().integer().required(),
  grade: Joi.string().required()
});

// Create a Student
router.post('/', async (req, res) => {
    try {
      console.log('Request body:', req.body); // Debug log
      const { error } = studentSchema.validate(req.body);
      if (error) {
        console.log('Validation error:', error.details); // Debug validation
        return res.status(400).json({ error: error.details[0].message });
      }
      const student = await Student.create(req.body);
      res.status(201).json(student[0]);
    } catch (error) {
      console.error('Error in POST /students:', error); // Detailed error log
      res.status(500).json({ error: error.message });
    }
  });

// Get all Students
router.get('/', async (req, res) => {
  try {
    const student = await Student.findAll();
    res.json(student);
  } catch (error) {
    console.error(error); // log the error
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get a student by ID
router.get('/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (student) res.json(student);
    else res.status(404).json({ error: 'Student not found' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Update a student
router.put('/:id', async (req, res) => {
  try {
    if (!req.params.id) return res.status(400).json({ error: 'Missing ID parameter' });
    const { error } = studentSchema.validate(req.body, { allowUnknown: true });
    if (error) return res.status(400).json({ error: error.details[0].message });
    const student = await Student.update(req.params.id, req.body);
    if (student.length > 0) res.json(student[0]);
    else res.status(404).json({ error: 'Student not found' });
  } catch (error) {
    console.error(error); // log the error
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete a student
router.delete('/:id', async (req, res) => {
  try {
    if (!req.params.id) return res.status(400).json({ error: 'Missing ID parameter' });
    const student = await Student.delete(req.params.id);
    if (student > 0) res.status(204).end();
    else res.status(404).json({ error: 'Student not found' });
  } catch (error) {
    console.error(error); // log the error
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
