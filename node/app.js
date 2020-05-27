// app.js
const createError = require('http-errors');
const express = require("express");
const app = express();
const fs = require('fs');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
let RedisStore = require('connect-redis')(session);
let redisClient = require('./dao/redis');

let userRouter = require('./routes/user');
let personRouter = require('./routes/person');
let infoRouter = require('./routes/information');
let payRouter = require('./routes/pay');
let checkRouter = require('./routes/checkin');
let noticeRouter = require('./routes/notice');
let greenRouter = require('./routes/greenchannel')

// 设置跨域访问
/*app.use("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type, X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});*/

const logFileName = path.join(__dirname, 'logs', 'access.log')
const writeStream = fs.createWriteStream(logFileName, {
  flags: 'a'
})
app.use(logger('combined', {
  stream: writeStream
}))

app.use(session({
  secret: 'Xam_is195#*^0',
  resave: false,
  saveUninitialized: true,
  store: new RedisStore({
    client: redisClient
  }),
  cookie: {
    // path: '/',  // 默认
    // httpOnly: true,  // 默认
    maxAge: 24 * 60 * 60 * 1000
  }
}));


app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());

app.use('/api/user', userRouter);
app.use('/api/person', personRouter);
app.use('/api/info', infoRouter);
app.use('/api/pay', payRouter);
app.use('/api/check', checkRouter);
app.use('/api/notice', noticeRouter);
app.use('/api/green', greenRouter);

app.use(function (req, res, next) {
  next(createError(404));
});


module.exports = app;