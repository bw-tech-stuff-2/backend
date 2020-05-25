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

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const update = req.body;

    Request.findById(id)
    .then(requests => {
        if (requests) {
            Request.update(update, id)
            .then(updated => {
                res.status(201).json(updated)
            })
        } else {
            res.status(404).json({message: 'Unable to find id'})
        }
    })
    .catch(error => {
        res.status(500).json({message: error})
    })
})

router.post('/', (req, res) => {
    const requestInfo = req.body;

    Request.add(requestInfo)
    .then(requests => {
        res.status(201).json(requests)
    })
    .catch(error => {
        res.status(500).json({message: error})
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;

    Request.remove(id)
        .then(deleted => {
            if (deleted) {
                res.status(200).json({removed: deleted})
            } else {
                res.status(404).json({message: 'Could not find that id'});
            }
        })
        .catch(error => {
            res.status(500).json({message: error})
        })
})

module.exports = router;