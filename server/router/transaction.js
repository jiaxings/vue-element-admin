const express = require('express');
const router = express.Router();
const Transaction = require('../models/transaction');
const User = require('../models/user')
const isAuthenticated = require("../core/gateway").isAuthenticated;

// 查询所有电影
router.get('/transaction/list', (req, res) => {

  Transaction.find({})
  // .sort({ update_at : -1})
    .then(transactions => {
      res.json(transactions)
      console.log('I get the message')
    })
    .catch(err => {
      res.json(err)
    })
})


router.get('/transaction/info', (req, res) => {


  Transaction.findOne({"trans_code": req.query.trans_code}, (err, transaction) => {
    if (!transaction) {
      res.json("9010102")
    }else{
      res.json(transaction)
    }


  })
});

module.exports = router
