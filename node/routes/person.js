const express = require('express');
const { queryPersonInfo, changePersonInfo, insertPersonInfo, selectInfoFinish } = require('../controller/personInfo')
const { SuccessModel, ErrorModel } = require('../model/model')

const router = express.Router()

router.post('/queryPersonInfo', (req, res, next) => {
  const { snumber, sname } = req.body
  queryPersonInfo(snumber, sname).then(data => {
    if(data[0]){
      res.json(new SuccessModel(data[0]))
      return
    }
    res.json(new ErrorModel('查找失败'))
  })
})

router.post('/changePersonInfo', (req, res, next) => {
  const { snumber, sname, stestnumber, sidnumber, sbirthday } = req.body
  changePersonInfo( snumber, sname, stestnumber, sidnumber, sbirthday ).then(data => {
    if(data){
      res.json(new SuccessModel())
      return
    }
    res.json(new ErrorModel('更新失败'))
  })
})

router.post('/insertPerson', (req, res, next) => {
  const { snumber, sname, sidnumber, stestnumber, sdepartment, smajor, sbirthday, sgender } = req.body
  insertPersonInfo( snumber, sname, sidnumber, stestnumber, sdepartment, smajor, sbirthday, sgender ).then(data => {
    if(data){
      res.json(new SuccessModel())
      return
    }
    res.json(new ErrorModel('插入失败'))
  })
})

router.post('/selectInfoFinish', (req, res, next) => {
  selectInfoFinish().then(data => {
    if(data){
      res.json(new SuccessModel(data))
      return
    }
    res.json(new ErrorModel('查找失败'))
  })
})
module.exports = router