require('dotenv').config();
const router = require('express').Router();
const Class = require('./class-controller');

router.get('/', (req, res) => {
    Class.find()
        .then(cl => {
        res.json(cl);
        })
        .catch(error => res.send(error));
    });


    module.exports = router;