const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dbConnect = require("./config/dbConnect");
const authRoutes = require("./routes/authRoutes");

const app = express();

dbConnect();

app.use(cors());
app.use(bodyParser.json());
app.use("/api/auth", authRoutes);

module.exports = app;
