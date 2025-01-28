const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
// const coursesRoute = require("./routes/courses");
// const lessonsRoute = require("./routes/lessons");
// const lessonsCompletedRoute = require("./routes/lessonsCompleted");
// const loginRoute = require("./routes/login");

const dataPath = path.join(__dirname, "data.json");
let data = {};

fs.readFile(dataPath, "utf8", (err, fileData) => {
    if (err) {
        console.error("Error reading JSON file", err);
        return;
    }
    data = JSON.parse(fileData);
});

app.use(express.json());

app.get("/courses", (req, res) => {
    if (req.query.id) {
        res.json(
            data.courses.find((course) => course.id === parseInt(req.query.id))
        );
    } else {
        res.json(data.courses);
    }
});

app.get("/lessons", (req, res) => {
    if (req.query.courseId) {
        res.json(
            data.lessons.filter(
                (lesson) => lesson.course_id === parseInt(req.query.courseId)
            )
        );
    } else {
        res.json("Auccun id de cours spécifié");
    }
});

app.get("/lessons-completed", (req, res) => {
    if (req.query.courseId && req.query.userId && req.query.status) {
        res.json(
            data.progress.filter(
                (lessonCompleted) =>
                    lessonCompleted.course_id ===
                        parseInt(req.query.courseId) &&
                    lessonCompleted.user_id === parseInt(req.query.userId) &&
                    lessonCompleted.status === req.query.status
            )
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

app.get("/login", (req, res) => {
    if (req.query.email && req.query.password) {
        data.users.forEach((user) => {
            if (
                user.email === req.query.email &&
                user.password === req.query.password
            ) {
                res.json({ success: true });
            }
        });
        res.json({ success: false });
    } else {
        res.json("Veuillez saisir votre email et votre mot de passe");
    }
});

app.get("/", (req, res) => {
    res.send("Hello World");
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
