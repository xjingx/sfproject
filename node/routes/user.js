const express = require('express');
const { Studentslogin, Adminlogin, insertUser } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/model')

const router = express.Router()

router.post('/login', (req, res, next) => {
  const { number, password, identity } = req.body
  if (identity === 'students'){
    Studentslogin(number, password).then(data => {
        if (data[0]) {
          console.log("成功")
          req.session.number = data[0].snumber
          req.session.name = data[0].sname
          req.session.identity = 'student'
          res.json(new SuccessModel(data[0],'student'))
          return
        }
        res.json(new ErrorModel('登录失败'))
    })
    } else if (identity === 'admin'){
      Adminlogin(number, password).then(data => {
        if (data[0]) {
          console.log("成功")
          req.session.number = data[0].anumber
          req.session.name = data[0].aname
          req.session.identity = 'admin'
          res.json(new SuccessModel(data[0],'admin'))
          return
        }
        res.json(new ErrorModel('登录失败'))
      })
    }
})

router.get('/logout', function(req, res) {

  // 第二种退出登录
  req.session.destroy(function(err){
      console.log(err);
  });
  // 回调到首页
  res.redirect('/');
});

router.get('/login-test', (req, res, next) => {
  if (req.session.name && req.session.number && req.session.identity) {
    if (req.session.identity === 'student') {
      res.json({
        error: 0,
        msg: 'student'
      })
    } else if (req.session.identity === 'admin') {
      res.json({
        error: 0,
        msg: 'admin'
      })
    }
  } else {
    res.json({
      error: -1,
      msg: '未登录'
    })
  }
})

router.get('/session-test', (req, res, next) => {
  const session = req.session
  if (session.viewNum == null) {
    session.viewNum = 0
  }
  session.viewNum++
  if (session) {
    res.json({
      viewNum: session.viewNum
    })
  }
})

router.post('/insertUser', (req, res, next) => {
  const { snumber, sname, sidnumber } = req.body
  insertUser( snumber, sname, sidnumber ).then(data => {
    if(data){
      res.json(new SuccessModel())
      return
    }
    res.json(new ErrorModel('插入失败'))
  })
})

module.exports = router