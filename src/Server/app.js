const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

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

// app.use(
//   express.urlencoded({
//     extended: true,
//   })
// );

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.redirect("/api/nutritions");
});

app.get("/api/nutritions", async (req, res) => {
  const nutritions = await NutritionModel.find({});
  res.status(200).send(JSON.stringify(nutritions));
});

app.post("/api/nutritions", async (req, res) => {
  console.log(req.body);
  const nutrition = new NutritionModel(req.body);
  await nutrition.save();
  res.status(200).send();
});

app.put("/api/nutritions", async (req, res) => {
  const nutrition = await NutritionModel.findByIdAndUpdate(req.body._id, {
    ...req.body,
  });
  console.log(req.body);
  console.log(nutrition);
  res.status(200).send();
});

app.delete("/:id", async (req, res) => {
  const { _id } = req.body;
  console.log(_id);
  await NutritionModel.findByIdAndDelete(_id);
  res.status(200).send();
});

app.listen(port, () => {
  console.log(`Serving on port ${port}`);
});
