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

module.exports = router;