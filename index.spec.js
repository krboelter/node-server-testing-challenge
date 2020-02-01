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

test("post a new dog", async () => {
    const res = await supertest(server)
        .post("/dogs")
        .send({
            name: "Chloe",
            breed: "Maltise-Poodle",
            height: 10
        })
    expect(res.status).toBe(201)
    expect(res.type).toBe("application/json")
    expect(res.body).toEqual({
        id: 4,
        name: "Chloe",
        breed: "Maltise-Poodle",
        height: 10
    })
})

test("delete a dog", async () => {
    const res = await supertest(server).delete("/dogs/2")
    expect(res.status).toBe(200)
    expect(res.type).toBe("application/json")
    expect(res.body).toEqual({ message: "Dog has been removed." })
})