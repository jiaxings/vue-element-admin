const express = require('express')
const router = express.Router();
const Report = require('../models/report');
const fs = require('fs');
const generateReport = require('../libs/generateReport');


router.post('/report/generate', (req, res) => {
  //使用Movie model上的create方法储存数据
  Report.findOne({"caseID": req.body.caseID}, (err, report) => {
    if (!report) {
      res.json({"code":"9010101"})
    }else{
      // prod deploy
      let out = fs.createWriteStream('example.docx');
      // let out = fs.createWriteStream('/server/nodeserver/example.docx')


      generateReport(out,report);
      res.json({"code":"success"})
    }


  })
})

router.post('/report/download', (req, res) => {
  //使用Movie model上的create方法储存数据
  // var stats = fs.statSync("./server/example.docx");
  res.setHeader("Content-Type","application/octet-stream;",);
  res.setHeader('Content-disposition','attachment; filename=ValuationReport.pdf');
  // res.setHeader('Content-Length', stats.size);

  // prod deploy
  // let fileStream = fs.createReadStream('/server/nodeserver/example.txt');
  let fileStream = fs.createReadStream('./server/ValuationReport.pdf');
  // fileStream.on('data',(chunk)=>res.write(chunk,'binary'))

  // fileStream.setEncoding('UTF-8');
  fileStream.pipe(res);
  // res.download('./server/example.docx')

  // res.write(data, 'binary');

})

module.exports = router
