const router = require('express').Router();

const Request = require('./request-model');

router.get('/', (req, res) => {
    Request.find()
    .then(requests => {
        res.status(200).json(requests)
    })
    .catch(error => {
        res.status(500).json({message: error})
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id;

    Request.findById(id)
    .then(requests => {
        if (requests) {
            res.status(200).json(requests)
        } else {
            res.status(404).json({message: 'Could not find id'})
        }
    })
    .catch(err => {
        res.status(500).json({message: err})
    })
})

module.exports = router;