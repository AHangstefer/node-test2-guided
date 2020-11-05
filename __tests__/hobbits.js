const supertest = require("supertest")
const db = require("../data/config")
const server = require("../server")


afterAll(async ()=> {
 await db.destroy()
})

describe("hobbits integration tests", ()=> {
    it("gets a list of hobbits", async ()=> {
        const res = await supertest(server).get("/hobbits")
        expect(res.statusCode).toBe(200)
        expect(res.type).toBe("application/json")
        expect(res.body).toHaveLength(4)
        expect(res.body[0].name).toBe("sam")
    })
})