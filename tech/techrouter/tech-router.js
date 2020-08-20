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

router.post('/', (req, res) => {
    const techStuff = req.body;

    Tech.add(techStuff)
    .then(tech => {
        res.status(201).json(tech)
    })
    .catch(error => {
        res.status(500).json({message: error})
    })
})

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const updates = req.body;

    Tech.findById(id)
    .then(tech => {
        if (tech) {
            Tech.update(updates, id)
            .then(update => {
                res.status(201).json(update)
            })
        } else {
            res.status(404).json({message: 'Unable to find tech'})
        }
    })
    .catch(error => {
        res.status(500).json({message: error})
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;

    Tech.destroy(id)
        .then(bye => {
            if (bye) {
                res.status(200).json({removed: bye})
            } else {
                res.status(404).json({message: 'Could not find tech'});
            }
        })
        .catch(error => {
            res.status(500).json({message: error})
        })
})

router.get('/owner/:id', (req, res) => {
    const id = req.params.id;

    Tech.findByOwner(id)
        .then(tech => {
            if (tech) {
                res.status(200).json(tech)
            } else {
                res.status(404).json({message: 'Unable to find requests for that owner.'})
            }
        })
        .catch(error => {
            res.status(500).json({message: error})
        })
})

module.exports = router;