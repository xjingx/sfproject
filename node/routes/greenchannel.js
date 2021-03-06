const express = require('express');
const { insertGreenChanneldk, insertGreenChannelhj, queryGreenInfo, deleteGreenInfo } = require('../controller/greenchannel')
const { SuccessModel, ErrorModel } = require('../model/model')

const router = express.Router()

router.post('/insertGreenChanneldk', (req, res, next) => {
  const { snumber, sname, sclass, major, department, greentype, serialnumber, reason } = req.body
  insertGreenChanneldk(snumber, sname, sclass, major, department, greentype, serialnumber, reason).then(data => {
    if(data){
      res.json(new SuccessModel())
      return
    }
    res.json(new ErrorModel('插入失败'))
  })
})

router.post('/insertGreenChannelhj', (req, res, next) => {
  const { snumber, sname, sclass, major, department, greentype, delaymoney, delaydate, reason } = req.body
  insertGreenChannelhj(snumber, sname, sclass, major, department, greentype, delaymoney, delaydate, reason).then(data => {
    if(data){
      res.json(new SuccessModel())
      return
    }
    res.json(new ErrorModel('插入失败'))
  })
})

router.post('/queryGreenInfo', (req, res, next) => {
  queryGreenInfo().then(data => {
    if(data){
      res.json(new SuccessModel(data))
      return
    }
    res.json(new ErrorModel('查找失败'))
  })
})

router.post('/deleteGreenInfo', (req, res, next) => {
  const { snumber } = req.body
  deleteGreenInfo(snumber).then(data => {
    if(data){
      res.json(new SuccessModel(data))
      return
    }
    res.json(new ErrorModel('删除失败'))
  })
})
module.exports = router