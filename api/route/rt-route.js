const router = require('express').Router();
const r = require('./rt-controller')

router.get("/" ,(req, res) => {
    r.getPunch()
    .then(data => {
    if (data.length) {
        res.status(200).json(data);
    } else {
        res.status(404).json({ message: "Nothing Found" });
    }
    })
    .catch(error => {
        res.status(500).json(error);
    });
});
//returns empty bracket but adds to database
router.post("/", (req, res) => {
    r.addPunch(req.body)
        .then(data => {
        res.status(201).json(data);
        })
        .catch(error => {
        res.status(500).json(error);
        });
    }); 





module.exports = router;