const path = require("path");
const axios = require("axios");
const router = require("express").Router();

// API Routes
router.get("/reports", (req, res) => {

    const queryURL = `http://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_KEY}`;
  
    axios
    .get(queryURL)
    .then((report) => {
      res.send(report.data);
    })
    .catch(err => console.log(err));

});

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;