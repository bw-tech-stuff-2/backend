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
      it("should return http status code 400", () => {
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
    it("should return http status code 400", () => {
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
  it("should return http status code 400", () => {
    return (
      supertest(server)
        .get("/api/tech/owners/2")
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



describe("POST /tech/", () => {
  it("should return http status code 400", () => {
  return (
    supertest(server)
      .post("/api/tech/")
      .then(response => {
        expect(response.status).toBe(400);
      })
  );
  });
  })


  test("POST /api/tech/ to be failing", async () => {
    const res = await supertest(server)
      .post("/api/tech")
      .send({ username: "" });
    expect(res.status).toBe(400);
    expect(res.body).toMatchObject({
      message: "Please provide the authentication information"
    });
  });

  describe("PUT /tech/:id", () => {
    it("should return http status code 400", () => {
    return (
      supertest(server)
        .put("/api/tech/2")
        .then(response => {
          expect(response.status).toBe(400);
        })
    );
    });
    })

    test("PUT /api/tech/:id to be failing", async () => {
      const res = await supertest(server)
        .put("/api/tech/2")
        .send({ username: "" });
      expect(res.status).toBe(400);
      expect(res.body).toMatchObject({
        message: "Please provide the authentication information"
      });
    });
  
    describe("DELETE /tech/:id", () => {
      it("should return http status code 400", () => {
      return (
        supertest(server)
          .delete("/api/tech/2")
          .then(response => {
            expect(response.status).toBe(400);
          })
      );
      });
      })
  
      test("DELETE /api/tech/:id to be failing", async () => {
        const res = await supertest(server)
          .delete("/api/tech/2")
          .send({ username: "" });
        expect(res.status).toBe(400);
        expect(res.body).toMatchObject({
          message: "Please provide the authentication information"
        });
      });






//request tests

describe("GET /request", () => {
  it("should return http status code 200 OK", () => {
    return (
      supertest(server)
        .get("/api/request")
        .then(response => {
          // from jest
          expect(response.status).toBe(400);
        })
    );
  });
})

describe("GET /request", () => {
it("should return { api: 'Please provide the authentication information' }", () => {
  return supertest(server)
    .get("/api/request")
    .then(response => {
      expect(response.body).toMatchObject({
        message: "Please provide the authentication information"
      });
    });
});
});

describe("GET /request/:id", () => {
it("should return http status code 200 OK", () => {
  return (
    supertest(server)
      .get("/api/request/2")
      .then(response => {
        // from jest
        expect(response.status).toBe(400);
      })
  );
});
})

describe("GET /request/:id", () => {
it("should return { api: 'Please provide the authentication information' }", () => {
return supertest(server)
  .get("/api/request/2")
  .then(response => {
    expect(response.body).toMatchObject({
      message: "Please provide the authentication information"
    });
  });
});
});

describe("GET /request/renters/:id", () => {
it("should return http status code 200 OK", () => {
return (
  supertest(server)
    .get("/api/request/renters/2")
    .then(response => {
      // from jest
      expect(response.status).toBe(400);
    })
);
});
})

describe("GET /request/renters/:id", () => {
it("should return { api: 'Please provide the authentication information' }", () => {
return supertest(server)
.get("/api/request/renters/2")
.then(response => {
  expect(response.body).toMatchObject({
    message: "Please provide the authentication information"
  });
});
});
});

describe("POST /request/", () => {
  it("should return http status code 400", () => {
  return (
    supertest(server)
      .post("/api/request/")
      .then(response => {
        expect(response.status).toBe(400);
      })
  );
  });
  })


  test("POST /api/request/ to be failing", async () => {
    const res = await supertest(server)
      .post("/api/request")
      .send({ username: "" });
    expect(res.status).toBe(400);
    expect(res.body).toMatchObject({
      message: "Please provide the authentication information"
    });
  });


  describe("PUT /request/:id", () => {
    it("should return http status code 400", () => {
    return (
      supertest(server)
        .put("/api/request/2")
        .then(response => {
          expect(response.status).toBe(400);
        })
    );
    });
    })

    test("PUT /api/request/:id to be failing", async () => {
      const res = await supertest(server)
        .put("/api/request/2")
        .send({ username: "" });
      expect(res.status).toBe(400);
      expect(res.body).toMatchObject({
        message: "Please provide the authentication information"
      });
    });
  

    describe("DELETE /request/:id", () => {
      it("should return http status code 400", () => {
      return (
        supertest(server)
          .delete("/api/request/2")
          .then(response => {
            expect(response.status).toBe(400);
          })
      );
      });
      })
  
      test("DELETE /api/request/:id to be failing", async () => {
        const res = await supertest(server)
          .delete("/api/request/2")
          .send({ username: "" });
        expect(res.status).toBe(400);
        expect(res.body).toMatchObject({
          message: "Please provide the authentication information"
        });
      });






///users tests

describe("GET /users/renters/", () => {
  it("should return http status code 400", () => {
  return (
    supertest(server)
      .get("/api/users/renters")
      .then(response => {
        // from jest
        expect(response.status).toBe(400);
      })
  );
  });
  })
  
  describe("GET /users/renters/:id", () => {
  it("should return { api: 'Please provide the authentication information' }", () => {
  return supertest(server)
  .get("/api/users/renters/2")
  .then(response => {
    expect(response.body).toMatchObject({
      message: "Please provide the authentication information"
    });
  });
  });
  });


describe("GET /users/owners/", () => {
  it("should return http status code 400", () => {
  return (
    supertest(server)
      .get("/api/users/owners")
      .then(response => {
        expect(response.status).toBe(400);
      })
  );
  });
  })
  
  describe("GET /users/owners/:id", () => {
  it("should return { api: 'Please provide the authentication information' }", () => {
  return supertest(server)
  .get("/api/users/owners/2")
  .then(response => {
    expect(response.body).toMatchObject({
      message: "Please provide the authentication information"
    });
  });
  });
  });