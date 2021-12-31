const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
// const methodOverride = require("method-override");

const NutritionModel = require("./models/nutrition");

// mongoose.connect('mongodb://localhost:27017/nutritions', {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true
// })

mongoose.connect("mongodb://localhost:27017/nutritions");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const app = express();
const port = 9999;

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.redirect("/api/nutritions");
});

app.get("/api/nutritions", async (req, res) => {
  const nutritions = await NutritionModel.find({});
  res.status(200).send(JSON.stringify(nutritions));
});

app.listen(port, () => {
  console.log(`Serving on port ${port}`);
});
