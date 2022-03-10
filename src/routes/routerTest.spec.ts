import request from 'supertest'
import { app } from '../app'

describe("Test router", () => {
    it("GET '/'", async () => {
        const sut = await request(app).get('/')
        
        expect(sut.statusCode).toEqual(200)
    })
})