const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
    if (req.query.email && req.query.password) {
        res.json("Connexion réussie");
    } else {
        res.json("Veuillez saisir votre email et votre mot de passe");
    }
});

module.exports = router;
