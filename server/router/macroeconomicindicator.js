const express = require('express');
const router = express.Router();
const Macroeconomicindicator = require('../models/macroeconomicindicator');


router.get('/macroeconomicindicator/list', (req, res) => {
  if(req.headers['x-token'] !== null || req.headers['x-token'] !== undefined || req.headers['x-token'] !== ''){
    Macroeconomicindicator.find({ 'macro_economic_indicator': 'GDP' })
    // .sort({ update_at : -1})
      .then(macroeconomicindicator => {
        res.json(macroeconomicindicator)
        console.log('I get the message')
      })
      .catch(err => {
        res.json(err)
      })
  }else
    res.json('Invalid Request')

})




module.exports = router
