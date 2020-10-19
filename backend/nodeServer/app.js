require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const default_port = 4700;

app.use(express.json());
app.use("/api", require("./routes/auth_routes"));
app.use("/api", require("./routes/main_routes"));

mongoose
  .connect(
    process.env.DB_PRODUCTION || "mongodb://localhost:27017/alchemy-20-db",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to alchemy db");
  })
  .catch((err) => {
    console.log(
      "Error connection to db - " + process.env.DB_PRODUCTION ||
        "mongodb://localhost:27017/alchemy-20-db",
      err
    );
  });

app.listen(process.env.PORT || default_port, () => {
  console.log("Server listening...");
});
