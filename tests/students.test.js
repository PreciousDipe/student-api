const request = require('supertest');
const app = require('../index');
const db = require('../db');

beforeAll(async () => {
    await db.migrate.latest();
});

afterAll(async () => {
    await db.destroy();
});

describe('Student API', () => {
    it('should create a new student', async () => {
        const res = await request(app)
            .post('/api/v1/students')
            .send({ name: 'Mary Jane', age: 20, grade: 'A' });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('id');
        expect(res.body.name).toEqual('Mary Jane');
    });


    it('should get all students', async () => {
        const res = await request(app).get('/api/v1/students');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array);

    });


    it('should return 404 for non-existing student', async () => {
        const res = await request(app).get('/api/v1/students/999');
        expect(res.statusCode).toEqual(404);
    });
   
});


