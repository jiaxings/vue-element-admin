const express = require('express');
const router = express.Router();
const Event = require('../models/event');
const User = require('../models/user')
const isAuthenticated = require("../core/gateway").isAuthenticated;

// 查询所有电影
router.get('/event/list', (req, res) => {

  Event.find({})
  // .sort({ update_at : -1})
    .then(events => {
      res.json(events)
      console.log('I get the message')
    })
    .catch(err => {
      res.json(err)
    })
})


module.exports = router
