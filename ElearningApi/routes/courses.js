const express = require("express");
const router = express.Router();

router.get("/courses", (req, res) => {
    if (req.query.id) {
        res.json("Données du cours avec l'id " + req.query.id);
    } else {
        res.json("Données des cours");
    }
});

module.exports = router;
