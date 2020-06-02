const express = require('express');
const { insertInfo, queryInfo, queryContent } = require('../controller/insertinfo')
const { SuccessModel, ErrorModel } = require('../model/model')

const router = express.Router()

router.post('/insertInfo', (req, res, next) => {
  const { title, type, object, sname, snumber, content } = req.body
  insertInfo(title, type, object, sname, snumber, content).then(data => {
    if(data){
      res.json(new SuccessModel())
      return
    }
    res.json(new ErrorModel('插入失败'))
  })
})

router.post('/queryInfo', (req, res, next) => {
  queryInfo().then(data => {
    if(data){
      res.json(new SuccessModel(data))
      return
    }
    res.json(new ErrorModel('查找失败失败'))
  })
})

router.post('/queryContent', (req, res, next) => {
  const { title, snumber } = req.body
  console.log(title, snumber)
  queryContent( title, snumber ).then(data => {
    if(data){
      res.json(new SuccessModel(data))
      return
    }
    res.json(new ErrorModel('查找失败'))
  })
})

module.exports = router