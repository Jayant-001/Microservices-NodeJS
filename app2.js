// this is payment service
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const PORT = 4002;

app.use(cors());
app.use(morgan("dev"));

app.get("/payment/initiate", (req, res) => {
    res.send("payment service is running");
});

app.use((req, res) => {
    res.send("payment service Error : path not found");
});

app.listen(PORT, () => {
    console.log(`App 2 is listening on PORT = ${PORT}`);
});
