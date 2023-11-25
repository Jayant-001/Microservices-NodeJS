// this is products service
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const PORT = 4003;

app.use(cors());
app.use(morgan("dev"));

app.get("/products/all", (req, res) => {
    res.send("products service is running");
});

app.use((req, res) => {
    res.send("products service Error : path not found");
});

app.listen(PORT, () => {
    console.log(`App 3 is listening on PORT = ${PORT}`);
});
