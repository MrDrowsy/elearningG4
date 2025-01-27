const express = require("express");
const app = express();
const coursesRoute = require("./routes/courses");
const lessonsRoute = require("./routes/lessons");
const lessonsCompletedRoute = require("./routes/lessonsCompleted");
const loginRoute = require("./routes/login");

app.use(express.json());

app.use("/api", coursesRoute);
app.use("/api", lessonsRoute);
app.use("/api", lessonsCompletedRoute);
app.use("/api", loginRoute);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
