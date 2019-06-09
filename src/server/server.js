const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const path = require("path");
const data = require("./data");
//const proxy = require('http-proxy-middleware');


const app = express(),
      PORT = process.env.PORT || 3000;
      API_ROOT_PATH = '/api';
      router = express.Router(),
      dev_db_url = "mongodb+srv://nrohweder:rohweder@cluster0-e0ymr.mongodb.net/test?retryWrites=true",
      mongoDB = process.env.MONGODB_URI || dev_db_url;

//app.use('/api', proxy({ target: 'localhost:3000', changeOrigin: true }));
app.use(cors());
//app.use(express.json());
app.use(express.static('build'));

// connect to db
mongoose.connect(mongoDB, { useNewUrlParser: true } );
let db = mongoose.connection;
db.once("open", () => console.log("connected to the database"));
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// endpoints
// app.get('*', (req, res, next) => {
//   if (req.url.startsWith(API_ROOT_PATH)) {
//     return next();
//   }
//   res.sendFile(path.join(__dirname, '../../build/index.html'));
// });

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../../build/index.html'));
});

router.get("/getPosts", (req, res) => {
  data.find((err, data) => {
    if (err) {
        return res.json({ success: false, error: err });
    }
    //res.send(data);
    return res.json({ success: true, data: data });
  });
});

app.use("/api", router);

app.listen(PORT, () => console.log(`LISTENING ON PORT ${PORT}`));











// app.get('/ping', function (req, res) {
//   return res.send('pong');
//  });

// router.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// router.get("/getData", (req, res) => {
//   Data.find((err, data) => {
//     if (err) return res.json({ success: false, error: err });
//     return res.json({ success: true, data: data });
//   });
// });

// router.post("/updateData", (req, res) => {
//   const { id, update } = req.body;
//   Data.findOneAndUpdate(id, update, err => {
//     if (err) return res.json({ success: false, error: err });
//     return res.json({ success: true });
//   });
// });

// router.delete("/deleteData", (req, res) => {
//   const { id } = req.body;
//   Data.findOneAndDelete(id, err => {
//     if (err) return res.send(err);
//     return res.json({ success: true });
//   });
// });

// router.post("/putData", (req, res) => {
//   let data = new Data();
//   const { id, title, imgSrc, content, type } = req.body;

//   console.log(id + title + imgSrc + content + type);
//   if ((!id && id !== 0) || !title || !imgSrc || !content || !type) {
//     return res.json({
//       success: false,
//       error: "INVALID INPUTS"
//     });
//   }
//   data.title = title;
//   data.imgSrc = imgSrc;
//   data.content = content;
//   data.id = id;
//   data.type = type;
//   data.save(err => {
//     if (err) return res.json({ success: false, error: err });
//     return res.json({ success: true });
//   });
// });
