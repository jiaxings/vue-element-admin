const express = require('express');
const router = express.Router();
const Company = require('../models/company');
const User = require('../models/user')
const isAuthenticated = require("../core/gateway").isAuthenticated;

// 查询所有电影
router.get('/company/list', (req, res) => {
  // if (req.headers.hasOwnProperty('x-token'))
  //   var token = req.headers.hasOwnProperty('x-token')
  //   User.findOne({"token": token}, (err, user) => {
  //     if (!user) {
  //       res.json({"code":"9010102"})
  //     }
  //   });

  Company.find({})
  // .sort({ update_at : -1})
    .then(companys => {
      res.json(companys)
      console.log('I get the message')
    })
    .catch(err => {
      res.json(err)
    })
})

router.post('/company/save', (req, res) => {
  //使用Movie model上的create方法储存数据
  Company.create(req.body, (err, company) => {
    if (err) {
      res.json(err)
    } else {
      res.json(company)
    }
  });







  //使用实例的save方法存储数据
  // let movie = new Movie({
  //   title : req.body.title,
  //   year : req.body.year,
  //   poster : req.body.poster,
  //   introduction : req.body.introduction
  // })
  // movie.save( (err,movie) => {
  //   if (err) {
  //     res.json(err)
  //   } else {
  //     res.json(movie)
  //   }
  // })

})

router.get('/company/info', (req, res) => {
  Company.findOne({"comp_code": req.query.comp_code}, (err, company) => {
    if (!company) {
      res.json("9010102")
    }else{
      res.json(company)
    }
  })
})

router.get('/company/rank', (req, res) => {
  Company.find({},{"comp_name":1,"project_rating_score":1}).limit(5).sort({project_rating_score: -1})
    .then(companys => {
      res.json(companys)
      console.log('I get the message')
    })
    .catch(err => {
      res.json(err)
    })
})

//更新一部电影
router.put('/movie/:id',(req,res) => {
  Company.findOneAndUpdate({ _id : req.params.id}
    ,{ $set : { title: req.body.title,
        rating : req.body.rating,
        poster : req.body.poster,
        introduction : req.body.introduction }
    },{
      new : true
    })
    .then(movie => res.json(movie))
    .catch(err => res.json(err))
})


module.exports = router
