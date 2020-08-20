const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('../auth/authenticate-middleware.js');
const ownersAuthRouter = require('../auth/owners-auth-router.js');
const rentersAuthRouter = require('../auth/renters-auth-router.js');
const techRouter = require('../tech/techrouter/tech-router');
const requestRouter = require('../tech/requestrouter/request-router');
const ownersRouter = require('../users/owners/owners-router');
const rentersRouter = require('../users/renters/renters-router');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/users/owners', authenticate, ownersRouter);
server.use('/api/users/renters', authenticate, rentersRouter);
server.use('/api/owners/auth', ownersAuthRouter);
server.use('/api/renters/auth', rentersAuthRouter);
server.use('/api/tech', authenticate, techRouter);
server.use('/api/request', authenticate, requestRouter)

server.get("/", (req, res) => {
    res.json({ api: "Ready To Rent Tech!!!" });
  });

module.exports = server;
