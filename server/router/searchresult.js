const express = require('express')
const router = express.Router()
const Company = require('../models/company');
const Transaction = require('../models/transaction');
const IPO = require('../models/ipo');

// 查询所有电影
router.get('/searchresult/count', (req, res) => {
  let result = [];
  let params = []

  // result['Company'] = Company.count({'record_status':'01'});
  // result['IPO'] = IPO.count({'record_status':'01'});
  Transaction.count({$or : [{'trans_name':{$regex :req.query[0]}},
                            {'acquisition_description':{$regex :req.query[0]}}]}).
  then(counts => {
    // result['Transaction'] = counts
    result.push('Found '+ counts+' transaction records' );
    params.push({'class':'transaction'});
    Company.count({'record_status':'01'}).
    then(counts => {
      // result['Company'] = counts
      result.push('Found '+ counts+' company records' );
      params.push({'class':'company'});
      IPO.count({'record_status':'01'}).
      then(counts => {
        // result['IPO'] = counts
        result.push('Found '+ counts+' IPO records' );
        params.push({'class':'ipo'});

        res.json({'result':result,'params':params})
      })
      .catch(err => {
        res.json(err)
      });
    })
    .catch(err => {
      res.json(err)
    });
  })
  .catch(err => {
    res.json(err)
  });
})
module.exports = router
