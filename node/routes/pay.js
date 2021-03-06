const express = require('express');
const { payCharge, selectPay, insertCharge, queryPayOff } = require('../controller/pay')
const { SuccessModel, ErrorModel } = require('../model/model')

const router = express.Router()

router.post('/payCharge', (req, res, next) => {
  const { snumber, sname } = req.body
  payCharge( snumber, sname ).then(data => {
    if(data){
      res.json(new SuccessModel())
      return
    }
    res.json(new ErrorModel('缴费失败'))
  })
})

router.post('/selectPay', (req, res, next) => {
  const { snumber, sname } = req.body
  selectPay( snumber, sname ).then(data => {
    if(data){
      res.json(new SuccessModel(data))
      return
    }
    res.json(new ErrorModel('查询失败'))
  })
})

router.post('/insertCharge', (req, res, next) => {
  const { snumber, sname, pay } = req.body
  insertCharge( snumber, sname, pay ).then(data => {
    if(data){
      res.json(new SuccessModel())
      return
    }
    res.json(new ErrorModel('插入失败'))
  })
})

router.post('/queryPayOff', (req, res, next) => {
  const { snumber, sname } = req.body
  queryPayOff( snumber, sname ).then(data => {
    if(data){
      res.json(new SuccessModel(data))
      return
    }
    res.json(new ErrorModel('查询失败'))
  })
})
module.exports = router