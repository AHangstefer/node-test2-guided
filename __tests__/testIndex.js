// test("a placeholder test", (=>{

// }))

const supertest = require("supertest")
const server = require("../server")

test("GET /", async ()=> {
    const res = await supertest(server).get("/")
    console.log(res)
})