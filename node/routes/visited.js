const express = require('express');
const { 
  updateLoginVisitedNumber,
  updatefirstVisitedNumber,
  updatesecondVisitedNumber,
  updatethirdVisitedNumber,
  updatefourthVisitedNumber,
  updatefifthVisitedNumber,
  updatesixthVisitedNumber,
  selectVisitedNumber,
 } = require('../controller/visited')
 const { SuccessModel, ErrorModel } = require('../model/model')
 
const router = express.Router()

router.post('/updateLoginVisitedNumber', function(req, res) {
  updateLoginVisitedNumber().then(data => {
    if(data){
      res.json(new SuccessModel())
      return
    }
    res.json(new ErrorModel('查找失败'))
  })
});

router.post('/updatefirstVisitedNumber', function(req, res) {
  updatefirstVisitedNumber().then(data => {
    if(data){
      res.json(new SuccessModel())
      return
    }
    res.json(new ErrorModel('查找失败'))
  })
});

router.post('/updatesecondVisitedNumber', function(req, res) {
  updatesecondVisitedNumber().then(data => {
    if(data){
      res.json(new SuccessModel())
      return
    }
    res.json(new ErrorModel('查找失败'))
  })
});

router.post('/updatethirdVisitedNumber', function(req, res) {
  updatethirdVisitedNumber().then(data => {
    if(data){
      res.json(new SuccessModel())
      return
    }
    res.json(new ErrorModel('查找失败'))
  })
});

router.post('/updatefourthVisitedNumber', function(req, res) {
  updatefourthVisitedNumber().then(data => {
    if(data){
      res.json(new SuccessModel())
      return
    }
    res.json(new ErrorModel('查找失败'))
  })
});

router.post('/updatefifthVisitedNumber', function(req, res) {
  updatefifthVisitedNumber().then(data => {
    if(data){
      res.json(new SuccessModel())
      return
    }
    res.json(new ErrorModel('查找失败'))
  })
});

router.post('/updatesixthVisitedNumber', function(req, res) {
  updatesixthVisitedNumber().then(data => {
    if(data){
      res.json(new SuccessModel())
      return
    }
    res.json(new ErrorModel('查找失败'))
  })
});

router.post('/selectVisitedNumber', function(req, res) {
  selectVisitedNumber().then(data => {
    if(data){
      res.json(new SuccessModel(data))
      return
    }
    res.json(new ErrorModel('查找失败'))
  })
});

module.exports = router