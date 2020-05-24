const router = require('express').Router();

const Tech = require('./tech-model');

router.get('/', (req, res) => {
    Tech.find()
    .then(tech => {
        res.status(200).json(tech)
    })
    .catch(error => {
        res.status(500).json({message: error})
    })
})