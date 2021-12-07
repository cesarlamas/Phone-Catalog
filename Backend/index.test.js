const request = require("supertest");
const app = require("./index");
const mongoose = require("mongoose");
const { db } = require("./models/model.phone");

describe("Test the root path", () => {
    test("It should response the GET method", async() => {
      const response = await request(app).get("/phones");
        expect(response.statusCode).toBe(200);
  });
});
    
describe("POST /phones", () => {
    describe("", () => {
      test("should respond with a 201 status code", async () => {
        const response = await request(app).post("/mascots").send({
            "name": "Iphone 7",
            "manufacturer": "Apple",
            "description": "Lorem ipsum",
            "price": 432,
            "imageFileName": "http://res.cloudinary.com/dxrh21mkj/image/upload/v1638901229/m3abovdmm5t1xuxhdlfk.png",
            "screen": "4,7 inches",
            "processor": "S0 10",
            "ram": 4,
        })
        expect(response.statusCode).toBe(201)
      })
      test("should specify json in the content type header", async () => {
        const response = await request(app).post("/phones").send({
            "name": "Iphone 7",
            "manufacturer": "Apple",
            "description": "Lorem ipsum",
            "price": 432,
            "imageFileName": "http://res.cloudinary.com/dxrh21mkj/image/upload/v1638901229/m3abovdmm5t1xuxhdlfk.png",
            "screen": "4,7 inches",
            "processor": "S0 10",
            "ram": 4,
        })
        expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
      })
      test("response has Id", async () => {
        const response = await request(app).post("/phones").send({
            "name": "Iphone 7",
            "manufacturer": "Apple",
            "description": "Lorem ipsum",
            "price": 432,
            "imageFileName": "http://res.cloudinary.com/dxrh21mkj/image/upload/v1638901229/m3abovdmm5t1xuxhdlfk.png",
            "screen": "4,7 inches",
            "processor": "S0 10",
            "ram": 4,
        })
        expect(response.body._id).toBeDefined()
      })
    }) 
});
