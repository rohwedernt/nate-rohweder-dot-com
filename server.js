const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const Data = require('./data');
const API_PORT = 3001;
const app = express();
const router = express.Router();
const dbRoute = "mongodb+srv://nrohweder:rohweder@cluster0-e0ymr.mongodb.net/test?retryWrites=true";

app.use(cors());

mongoose.connect(
  dbRoute,
  { useNewUrlParser: true }
);

let db = mongoose.connection;
db.once("open", () => console.log("connected to the database"));
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// for logging
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

router.get("/getData", (req, res) => {
  Data.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

router.post("/updateData", (req, res) => {
  const { id, update } = req.body;
  Data.findOneAndUpdate(id, update, err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

router.delete("/deleteData", (req, res) => {
  const { id } = req.body;
  Data.findOneAndDelete(id, err => {
    if (err) return res.send(err);
    return res.json({ success: true });
  });
});

router.post("/putData", (req, res) => {
  let data = new Data();

  const { id, title, imgSrc, content, type } = req.body;

  if ((!id && id !== 0) || !title || !imgSrc || !content || !type) {
    return res.json({
      success: false,
      error: "INVALID INPUTS"
    });
  }
  data.title = title;
  data.imgSrc = imgSrc;
  data.content = content;
  data.id = id;
  data.type = type;
  data.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

app.use("/api", router);

app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
