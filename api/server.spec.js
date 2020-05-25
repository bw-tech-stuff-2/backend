const supertest = require("supertest");

const server = require("./server.js");
const db = require("../database/dbConfig");

describe("GET /", () => {
    it("should return http status code 200 OK", () => {
      return (
        supertest(server)
          .get("/")
          // .expect(200) // from supertest
          .then(response => {
            // from jest
            expect(response.status).toBe(200);
          })
      );
    });
});

describe("GET /", () => {
    it("should return { api: 'Ready To Rent Tech!!!' }", () => {
        return supertest(server)
          .get("/")
          .then(response => {
            expect(response.body).toEqual({ api: "Ready To Rent Tech!!!" });
            expect(response.body.api).toBeDefined();
            expect(response.body.api).toBe("Ready To Rent Tech!!!");
          });
      });
    });