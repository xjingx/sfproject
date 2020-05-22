const express = require('express');
const { updateFinish,selectFinish } = require('../controller/checkin')
const { SuccessModel, ErrorModel } = require('../model/model')

const router = express.Router()

router.post('/updateFinish', (req, res, next) => {
  const { snumber, sname } = req.body
  updateFinish ( snumber, sname ).then(data => {
    if(data){
      res.json(new SuccessModel())
      return
    }
    res.json(new ErrorModel('更新失败'))
  })
})

router.post('/selectFinish', (req, res, next) => {
  const { snumber, sname } = req.body
  selectFinish ( snumber, sname ).then(data => {
    if(data){
      res.json(new SuccessModel(data))
      return
    }
    res.json(new ErrorModel('查询失败'))
  })
})
module.exports = router