const express = require('express');
const { 
  updatefirstVisitedTime,
  updatesecondVisitedTime,
  updatethirdVisitedTime,
  updatefourthVisitedTime,
  updatefifthVisitedTime,
  updatesixthVisitedTime,
  selectVisitedTime,
 } = require('../controller/time')
 const { SuccessModel, ErrorModel } = require('../model/model')
 
const router = express.Router()

router.post('/updatefirstVisitedTime', function(req, res) {
  const { countTime } = req.body
  console.log('countTime',countTime)
  updatefirstVisitedTime(countTime).then(data => {
    if(data){
      res.json(new SuccessModel())
      return
    }
    res.json(new ErrorModel('查找失败'))
  })
});

router.post('/updatesecondVisitedTime', function(req, res) {
  const { countTime } = req.body
  updatesecondVisitedTime(countTime).then(data => {
    if(data){
      res.json(new SuccessModel())
      return
    }
    res.json(new ErrorModel('查找失败'))
  })
});

router.post('/updatethirdVisitedTime', function(req, res) {
  const { countTime } = req.body
  updatethirdVisitedTime(countTime).then(data => {
    if(data){
      res.json(new SuccessModel())
      return
    }
    res.json(new ErrorModel('查找失败'))
  })
});

router.post('/updatefourthVisitedTime', function(req, res) {
  const { countTime } = req.body
  updatefourthVisitedTime(countTime).then(data => {
    if(data){
      res.json(new SuccessModel())
      return
    }
    res.json(new ErrorModel('查找失败'))
  })
});

router.post('/updatefifthVisitedTime', function(req, res) {
  const { countTime } = req.body
  updatefifthVisitedTime(countTime).then(data => {
    if(data){
      res.json(new SuccessModel())
      return
    }
    res.json(new ErrorModel('查找失败'))
  })
});

router.post('/updatesixthVisitedTime', function(req, res) {
  const { countTime } = req.body
  updatesixthVisitedTime(countTime).then(data => {
    if(data){
      res.json(new SuccessModel())
      return
    }
    res.json(new ErrorModel('查找失败'))
  })
});

router.post('/selectVisitedTime', function(req, res) {
  selectVisitedTime().then(data => {
    if(data){
      res.json(new SuccessModel(data))
      return
    }
    res.json(new ErrorModel('查找失败'))
  })
});

module.exports = router