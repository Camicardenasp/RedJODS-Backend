const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT|| 3030;
const MONGO_URI= process.env.MONGO_URI

const v1UserRouter = require("./src/v1/routes/userRoutes");
const connectionOptions = { useUnifiedTopology: true, useNewUrlParser: true };

app.use(express.json());
app.use(cors());

mongoose.set('strictQuery', false);

mongoose.connect(MONGO_URI, connectionOptions)
    .then(() => console.log("Connected successfully"))
    .catch((err) => console.error(err));

app.use("/api/v1/users", v1UserRouter);

app.listen(PORT, () => {
    console.log(" 🚀 The server is listening on port " + PORT);
});

app.get("/", (req, res) => {
    res.send(`<h1> ¡Bienvenido! 😃 Este es el servidor de la API Users de la Cohorte 7 🚀</h1>`);
});