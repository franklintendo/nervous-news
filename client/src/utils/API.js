const axios = require("axios");

export default {
    getReports: function (req, res) {
      return axios.get("/api/reports/");
    }
  };