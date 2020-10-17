const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// const key=require('./models/api_keys')
const app = express();
const default_port = 4700;



dotenv.config();

app.use(express.json());
app.use("/api", require("./routes/auth_routes"));
app.use("/api", require("./routes/main_routes"));

db_connection=utils.db_connection()
console.log(process.env.db_url)

mongoose
  .connect(process.env.db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to alchemy db");
  })
  .catch((err) => {
    console.log("Error connection to db - ", err);
  });

app.listen(process.env.PORT || default_port, () => {
  console.log("Server listening at PORT:"+process.env.PORT || default_port);
});
