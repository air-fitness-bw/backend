require('dotenv').config();
const router = require('express').Router();
const Class = require('./class-controller');
//get class list
router.get("/", (req, res) => {
    Class.getClass()
    .then(data => {
    if (data.length) {
        res.status(200).json(data);
    } else {
        res.status(404).json({ message: "No Classes Found" });
    }
    })
    .catch(error => {
        res.status(500).json(error);
    });
});
//get classs by ID
router.get("/:id", (req, res) => {
    Class.getClassById(req.params.id)
    .then(data => {
    if (data) {
        res.status(200).json(data);
    } else {
        res.status(404).json({ message: "No Class with that Id" });
    }
    })
    .catch(error => {
    console.log(error);
    res.status(500).json(error);
    });
});
//post class
router.post("/", (req, res) => {
Class.addCl(req.body)
    .then(data => {
    res.status(201).json(data);
    })
    .catch(error => {
    res.status(500).json(error);
    });
});

router.put("/:id", (req, res) => {
    Class.updateClass(req.params.id, req.body)
    .then(changeData => {
    if (changeData) {
        res.status(200).json(changeData);
    } else {
        res.status(404).json({ message: "no class with that id exists, sorry pal." });
    }
    })
    .catch(error => {
    res.status(500).json(error);
    });
});

router.delete("/:id", (req, res) => {
    Class.deleteClass(req.params.id)
    .then(badClass => {
        if (badClass) {
        res.status(200).json({ message: "class deleted, goodbye" });
        } else {
        res.status(404).json({ message: "no class with that id" });
    }
    })
    .catch(error => {
        res.status(500).json(error);
    });
});

module.exports = router;