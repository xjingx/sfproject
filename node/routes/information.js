const express = require('express');
const { insertInfo, queryInfo } = require('../controller/insertinfo')
const { SuccessModel, ErrorModel } = require('../model/model')

const router = express.Router()

router.post('/insertInfo', (req, res, next) => {
  const { title, type, object, sname, content } = req.body
  insertInfo(title, type, object, sname, content).then(data => {
    if(data){
      res.json(new SuccessModel())
      return
    }
    res.json(new ErrorModel('登录失败'))
  })
})

router.post('/queryInfo', (req, res, next) => {
  queryInfo().then(data => {
    if(data){
      res.json(new SuccessModel(data))
      return
    }
    res.json(new ErrorModel('登录失败'))
  })
})

router.post('/queryMoreInfo', (req, res, next) => {
  queryInfo().then(data => {
    if(data){
      res.json(new SuccessModel(data))
      return
    }
    res.json(new ErrorModel('登录失败'))
  })
})

module.exports = router