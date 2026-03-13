const request = require('supertest')
const app = require('../../backend/src/app')

describe('Health API', () => {

    it('deve retornar status ok', async () => {
        const res = await request(app).get('/health')

        expect(res.statusCode).toBe(200)
        expect(res.body.status).toBe('API OK')
    })

})