const express = require('express');
const router = express.Router();
const Investmentinstitution = require('../models/investmentinstitution');


router.get('/investmentinstitution/list', (req, res) => {
  if(req.headers['x-token'] !== null || req.headers['x-token'] !== undefined || req.headers['x-token'] !== ''){
    Investmentinstitution.find({})
    // .sort({ update_at : -1})
      .then(investmentinstitutions => {
        res.json(investmentinstitutions)
        console.log('I get the message')
      })
      .catch(err => {
        res.json(err)
      })
  }else
    res.json('Invalid Request')

});

router.get('/investmentinstitution/info', (req, res) => {


  Investmentinstitution.findOne({"investment_institution_code": req.query.investment_institution_code}, (err, capital) => {
    if (!capital) {
      res.json("9010102")
    }else{
      res.json(capital)
    }


  })
});


module.exports = router;
