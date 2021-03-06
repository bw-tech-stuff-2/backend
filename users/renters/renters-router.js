const router = require("express").Router();

const Renters = require("./renters-model");
const restricted = require("../../auth/authenticate-middleware");
const { isValid } = require("./renters-service");

router.use(restricted);

router.get("/", (req, res) => {
  Renters.findRenter()
    .then(users => {
      res.status(200).json({ users, jwt: req.jwt });
    })
    .catch(err => res.send(err));
});

router.get('/:id', (req, res) => {
  const id = req.params.id;

  Renters.findById(id)
  .then(renter => {
      if (renter) {
          res.status(200).json(renter)
      } else {
          res.status(404).json({message: 'Could not find renter'})
      }
  })
  .catch(error => {
      res.status(500).json({message: error})
  })
})


router.post("/", checkRoles(["admin"]), (req, res) => {
  const user = req.body;

  if (isValid(user)) {
    Renters.add(user)
      .then(saved => {
        res.status(201).json({ data: saved });
      })
      .catch(error => {
        res.status(500).json({ message: error.message });
      });
  } else {
    res.status(400).json({ message: "please provide all user information" });
  }
});

function checkRoles(roles) {
  return function (req, res, next) {
    const role = req.jwt.role;

    if (req.jwt && req.jwt.role && roles.includes(role)) {
      next();
    } else {
      res.status(403).json({ you: "have no power here" });
    }
  };
}

module.exports = router;