const db = require('../db');

const Student = {
    create: async (data) => db('students').insert(data).returning('*'),
    findAll: async () => db('students').select('*'),
    findById: async (id) => db('students').where({ id }).first(),
    update: async (id, data) => db('students').where({ id }).update(data).returning('*'),
    delete: async (id) => db('students').where({ id }).del()
}

module.exports = Student;