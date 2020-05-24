const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('../auth/authenticate-middleware.js');
const ownersAuthRouter = require('../auth/owners-auth-router.js');
const rentersAuthRouter = require('../auth/renters-auth-router.js');
const techRouter = require('../tech/tech-router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/owners/auth', ownersAuthRouter);
server.use('/api/renters/auth', rentersAuthRouter);
// server.use('/api/tech', authenticate, techRouter);

server.get("/", (req, res) => {
    res.json({ api: "Ready To Rent Tech!!!" });
  });

module.exports = server;
