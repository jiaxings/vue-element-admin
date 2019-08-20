const express = require('express')
const router = express.Router()
const User = require('../models/user')
// const Movie = require('../models/movie')
const tokgen = require('../libs/tokgen')

// 查询所有电影
router.post('/user/verify', (req, res) => {

  User.findOne({"name": req.body.username}, (err, user) => {
    if (!user) {
      res.json({"code":"9010101"})
    }
    user.comparePassword(req.body.password, function(err, isMatch) {
      if (err)
        return done(err);

      if (isMatch !== true)
        return done(null, false, {
          message: req.t("InvalidPassword")
        });

      else
        res.json(user)

    });

    // user.comparePassword(req.body.password, function(err, isMatch) {
    //   if (isMatch !== true)
    //     res.json('10002');
    //   res.json({'token':tokgen()})
    //
    // });
  })
})

router.get('/user/info', (req, res) => {

  User.findOne({"token": req.query.token}, (err, user) => {
    if (!user) {
      res.json("9010102")
    }else{
      res.json(user)
    }

    // user.comparePassword(req.body.password, function(err, isMatch) {
    //   if (isMatch !== true)
    //     res.json('10002');
    //   res.json({'token':tokgen()})
    //
    // });
  })
})

router.post('/user/register', (req, res) => {
  //使用Movie model上的create方法储存数据
  let user = new User({
    name: req.body.name,
    username: req.body.token,
    token: tokgen(),
    password: req.body.password,
    roles:["pefund"]

  });

  user.save(function(err, user){
    if (err) {
      res.json(err)
    } else {
      res.json({"code":"200"})
      done(err, user);
    }
  })
})
// router.post('/user/verify', (req, res) => {
//   User.findOne({ "name": req.body.username})
//   // .sort({ update_at : -1})
//     .then(user => {
//       res.json(user)
//       console.log('@I get the message')
//     })
//     .catch(err => {
//       res.json(err)
//     })
// })


router.post('/user/logout', (req, res) => {
  res.json('success');
})

module.exports = router
