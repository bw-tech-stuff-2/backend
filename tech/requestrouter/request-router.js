const router = require('express').Router();

const request = require('./request-model');

router.get('/', (req, res) => {
    request.find()
    .then(requests => {
        res.status(200).json(requests)
    })
    .catch(error => {
        res.status(500).json({message: error})
    })
})

module.exports = router;