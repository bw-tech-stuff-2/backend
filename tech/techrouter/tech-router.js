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

router.get('/:id', (req, res) => {
    const id = req.params.id;

    Tech.findById(id)
    .then(tech => {
        if (tech) {
            res.status(200).json(tech)
        } else {
            res.status(404).json({message: 'Could not find that tech'})
        }
    })
    .catch(error => {
        res.status(500).json({message: error})
    })
})

module.exports = router;