const express = require('express');
const router = express.Router();
const http = require('http');
const request = require('request');


router.post('/valuation', (req, res) => {
  //使用Movie model上的create方法储存数据
  request(
    { url: "http://119.3.234.85:5000/api/valuation",
      method: "POST", json: true,
      headers: {
        "content-type": "application/json",
      },
      body:{"param": "100"} },
      function(error, response, body) {
        res.json(response.body["result"])} );

})

module.exports = router
