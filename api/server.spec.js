const supertest = require("supertest");

const server = require("./server.js");
const db = require("../database/dbConfig");


//tests for /

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



    //register and login tests

    test("POST /api/owners/register to be failing", async () => {
      const res = await supertest(server)
        .post("/api/owners/auth/register")
        .send({ username: "", password: "meow" });
      expect(res.status).toBe(400);
      expect(res.body).toMatchObject({
        message: "please provide username and password and the password should be alphanumeric"
      });
    });

    test("POST /api/owners/register to be failing", async () => {
      const res = await supertest(server)
        .post("/api/owners/auth/register")
        .send({ username: "meow", password: "" });
      expect(res.status).toBe(400);
      expect(res.body).toMatchObject({
        message: "please provide username and password and the password should be alphanumeric"
      });
    });

    test("POST /api/owners/register to be failing", async () => {
      const res = await supertest(server)
        .post("/api/owners/auth/register")
        .send({ username: "", password: "" });
      expect(res.status).toBe(400);
      expect(res.body).toMatchObject({
        message: "please provide username and password and the password should be alphanumeric"
      });
    });

    test("POST /api/renters/register to be failing", async () => {
      const res = await supertest(server)
        .post("/api/renters/auth/register")
        .send({ username: "", password: "meow" });
      expect(res.status).toBe(400);
      expect(res.body).toMatchObject({
        message: "please provide username and password and the password should be alphanumeric"
      });
    });

    test("POST /api/renters/register to be failing", async () => {
      const res = await supertest(server)
        .post("/api/renters/auth/register")
        .send({ username: "meow", password: "" });
      expect(res.status).toBe(400);
      expect(res.body).toMatchObject({
        message: "please provide username and password and the password should be alphanumeric"
      });
    });

    test("POST /api/renters/register to be failing", async () => {
      const res = await supertest(server)
        .post("/api/renters/auth/register")
        .send({ username: "", password: "" });
      expect(res.status).toBe(400);
      expect(res.body).toMatchObject({
        message: "please provide username and password and the password should be alphanumeric"
      });
    });

    test("POST /api/owners/auth/login to be failing", async () => {
      const res = await supertest(server)
        .post("/api/owners/auth/login")
        .send({ username: "kitty", password: "meow" });
      expect(res.status).toBe(401);
    });

    test("POST /api/owners/auth/login to be failing", async () => {
      const res = await supertest(server)
        .post("/api/owners/auth/login")
        .send({ username: "", password: "meow" });
      expect(res.status).toBe(400);
      expect(res.body).toMatchObject({
        message: "please provide username and password and the password should be alphanumeric"
      });
    });

    test("POST /api/owners/auth/login to be failing", async () => {
      const res = await supertest(server)
        .post("/api/owners/auth/login")
        .send({ username: "", password: "" });
      expect(res.status).toBe(400);
      expect(res.body).toMatchObject({
        message: "please provide username and password and the password should be alphanumeric"
      });
    });

    test("POST /api/renters/auth/login to be failing", async () => {
      const res = await supertest(server)
        .post("/api/renters/auth/login")
        .send({ username: "kitty", password: "meow" });
      expect(res.status).toBe(401);
    });

    test("POST /api/renters/auth/login to be failing", async () => {
      const res = await supertest(server)
        .post("/api/renters/auth/login")
        .send({ username: "", password: "meow" });
      expect(res.status).toBe(400);
      expect(res.body).toMatchObject({
        message: "please provide username and password and the password should be alphanumeric"
      });
    });

    test("POST /api/renters/auth/login to be failing", async () => {
      const res = await supertest(server)
        .post("/api/renters/auth/login")
        .send({ username: "", password: "" });
      expect(res.status).toBe(400);
      expect(res.body).toMatchObject({
        message: "please provide username and password and the password should be alphanumeric"
      });
    });

    //tech tests


    describe("GET /tech", () => {
      it("should return http status code 200 OK", () => {
        return (
          supertest(server)
            .get("/api/tech")
            .then(response => {
              // from jest
              expect(response.status).toBe(400);
            })
        );
      });
    })

    describe("GET /tech", () => {
    it("should return { api: 'Please provide the authentication information' }", () => {
      return supertest(server)
        .get("/api/tech")
        .then(response => {
          expect(response.body).toMatchObject({
            message: "Please provide the authentication information"
          });
        });
    });
  });

  describe("GET /tech/:id", () => {
    it("should return http status code 200 OK", () => {
      return (
        supertest(server)
          .get("/api/tech/2")
          .then(response => {
            // from jest
            expect(response.status).toBe(400);
          })
      );
    });
  })

  describe("GET /tech/:id", () => {
  it("should return { api: 'Please provide the authentication information' }", () => {
    return supertest(server)
      .get("/api/tech/2")
      .then(response => {
        expect(response.body).toMatchObject({
          message: "Please provide the authentication information"
        });
      });
  });
});

describe("GET /tech/:id", () => {
  it("should return http status code 200 OK", () => {
    return (
      supertest(server)
        .get("/api/tech/2")
        .then(response => {
          // from jest
          expect(response.status).toBe(400);
        })
    );
  });
})

describe("GET /tech/owners/:id", () => {
it("should return { api: 'Please provide the authentication information' }", () => {
  return supertest(server)
    .get("/api/tech/owners/2")
    .then(response => {
      expect(response.body).toMatchObject({
        message: "Please provide the authentication information"
      });
    });
});
});