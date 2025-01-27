const express = require("express");
const router = express.Router();

router.get("/lessonsCompleted", (req, res) => {
    if (req.query.courseId && req.query.userId && req.query.status) {
        res.json(
            "Leçons du cours avec l'id " +
                req.query.courseId +
                " complétée par l'utilisateur avec l'id " +
                req.query.userId +
                " et le statut " +
                req.query.status
        );
    } else {
        res.json(
            !req.query.courseId
                ? "Aucun id de cours spécifié"
                : !req.query.userId
                ? "Aucun id d'utilisateur spécifié"
                : "Aucun statut spécifié"
        );
    }
});

module.exports = router;
