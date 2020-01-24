const supertest = require("supertest")
const db = require("./data/config")
const server = require("./index")

beforeEach(async () => {
    await db.seed.run()
})

test("get the dogs", async () => {
    const res = await supertest(server).get("/dogs")
    expect(res.status).toBe(200)
    expect(res.type).toBe("application/json")
    expect(res.body.length).toBeGreaterThan(0)
})