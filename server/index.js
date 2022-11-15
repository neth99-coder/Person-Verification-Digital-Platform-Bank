const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");

const qrRoute = require("./routes/qrRoute");

//middleware
const bodyParser = require("body-parser");

app.use(express.json());
app.use(cors());
app.options("*", cors());
require("dotenv").config();
app.use(express.static("public"));
app.use("/api/qr", qrRoute);

const PORT = process.env.PORT || 3004;

app.listen(PORT, () => {
  console.log("Listening to port number " + PORT);
});
