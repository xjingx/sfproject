const express = require('express');
const { insertNotice, queryNotice, queryContent, queryAllNotice } = require('../controller/notice')
const { SuccessModel, ErrorModel } = require('../model/model')

const router = express.Router()

router.post('/insertNotice', (req, res, next) => {
  const { ntitle, ncontent } = req.body
  insertNotice(ntitle, ncontent).then(data => {
    if(data){
      res.json(new SuccessModel())
      return
    }
    res.json(new ErrorModel('插入失败'))
  })
})

router.post('/queryNotice', (req, res, next) => {
  queryNotice().then(data => {
    if(data){
      res.json(new SuccessModel(data))
      return
    }
    res.json(new ErrorModel('查找失败'))
  })
})

router.post('/queryContent', (req, res, next) => {
  const { ntitle } = req.body
  queryContent(ntitle).then(data => {
    if(data){
      res.json(new SuccessModel(data))
      return
    }
    res.json(new ErrorModel('查找失败'))
  })
})

router.post('/queryAllNotice', (req, res, next) => {
  queryAllNotice().then(data => {
    if(data){
      res.json(new SuccessModel(data))
      return
    }
    res.json(new ErrorModel('查找失败'))
  })
})


module.exports = router