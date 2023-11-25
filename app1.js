// this is authentication service
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const PORT = 4001;

app.use(cors());
app.use(morgan("dev"));

app.get("/auth/user", (req, res) => {
    res.send("auth service is running");
});

app.use((req, res) => {
    res.send("AUth service Error : path not found");
});

app.listen(PORT, () => {
    console.log(`App 1 is listening on PORT = ${PORT}`);
});
