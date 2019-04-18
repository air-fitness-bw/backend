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
    try{
        console.log(res.body);
        //.then(data => {
        {res.status(201).json(data);
        }}
        catch(error) {
        res.status(500).json(error);
    }});

//put 
router.put("/:id", (req, res) => {
    r.updatePunch(req.params.id, req.body)
    .then(changeData => {
    if (changeData) {
        res.status(200).json(changeData);
    } else {
        res.status(404).json({ message: "no punch card for that class" });
    }
    })
    .catch(error => {
    res.status(500).json(error);
    });
});
//delete
router.delete("/:id", (req, res) => {
    r.deletePunch(req.params.id)
    .then(bad => {
        if (bad) {
        res.status(200).json({ message: "punch deleted, if there was a probelem with your purchase please call 123-555-7032" });
        } else {
        res.status(404).json({ message: "no punch with that id" });
    }
    })
    .catch(error => {
        res.status(500).json(error);
    });
});



module.exports = router;