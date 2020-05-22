const express = require('express');
const { queryPersonInfo, changePersonInfo } = require('../controller/personInfo')
const { SuccessModel, ErrorModel } = require('../model/model')

const router = express.Router()

router.post('/queryPersonInfo', (req, res, next) => {
  const { snumber, sname } = req.body
  queryPersonInfo(snumber, sname).then(data => {
    if(data[0]){
      res.json(new SuccessModel(data[0]))
      return
    }
    res.json(new ErrorModel('登录失败'))
  })
})

router.post('/changePersonInfo', (req, res, next) => {
  const { snumber, sname, stestnumber, sidnumber, sbirthday } = req.body
  changePersonInfo( snumber, sname, stestnumber, sidnumber, sbirthday ).then(data => {
    if(data){
      res.json(new SuccessModel())
      return
    }
    res.json(new ErrorModel('登录失败'))
  })
})

module.exports = router