const express = require('express');
const router = express.Router();
const IPO = require('../models/ipo');

// 查询所有电影
router.get('/ipo/list', (req, res) => {

  IPO.find({})
  // .sort({ update_at : -1})
    .then(ipo => {
      res.json(ipo)
      console.log('I get the message')
    })
    .catch(err => {
      res.json(err)
    })
});

router.get('/ipo/info', (req, res) => {


  IPO.findOne({"ipo_code": req.query.ipo_code}, (err, ipo) => {
    if (!ipo) {
      res.json("9010102")
    }else{
      res.json(ipo)
    }


  })
});

module.exports = router;
