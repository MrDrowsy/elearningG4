const express = require("express");
const router = express.Router();

router.get("/lessons", (req, res) => {
    if (req.query.courseId) {
        res.json("Données des leçon du cours avec l'id " + req.query.courseId);
    } else {
        res.json("Auccun id de cours spécifié");
    }
});

module.exports = router;
