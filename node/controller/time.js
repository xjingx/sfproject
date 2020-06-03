const query= require('../dao/query').query;
const $sqlQuery = require('../dao/sqlCRUD').time;

const updatefirstVisitedTime = (countTime) => {
  return query($sqlQuery.updatefirstVisitedTime, [countTime])
         .catch(e => {
              console.log('update error', JSON.stringify(e));
              return {
                  errmsg: JSON.stringify(e)
              }
         })
}

const updatesecondVisitedTime = (countTime) => {
  return query($sqlQuery.updatesecondVisitedTime, [countTime])
         .catch(e => {
              console.log('update error', JSON.stringify(e));
              return {
                  errmsg: JSON.stringify(e)
              }
         })
}

const updatethirdVisitedTime = (countTime) => {
  return query($sqlQuery.updatethirdVisitedTime, [countTime])
         .catch(e => {
              console.log('update error', JSON.stringify(e));
              return {
                  errmsg: JSON.stringify(e)
              }
         })
}

const updatefourthVisitedTime = (countTime) => {
  return query($sqlQuery.updatefourthVisitedTime, [countTime])
         .catch(e => {
              console.log('update error', JSON.stringify(e));
              return {
                  errmsg: JSON.stringify(e)
              }
         })
}

const updatefifthVisitedTime = (countTime) => {
  return query($sqlQuery.updatefifthVisitedTime, [countTime])
         .catch(e => {
              console.log('update error', JSON.stringify(e));
              return {
                  errmsg: JSON.stringify(e)
              }
         })
}

const updatesixthVisitedTime = (countTime) => {
  return query($sqlQuery.updatesixthVisitedTime, [countTime])
         .catch(e => {
              console.log('update error', JSON.stringify(e));
              return {
                  errmsg: JSON.stringify(e)
              }
         })
}

const selectVisitedTime = () => {
  return query($sqlQuery.selectVisitedTime)
         .catch(e => {
              console.log('select error', JSON.stringify(e));
              return {
                  errmsg: JSON.stringify(e)
              }
         })
}

module.exports = {
  updatefirstVisitedTime,
  updatesecondVisitedTime,
  updatethirdVisitedTime,
  updatefourthVisitedTime,
  updatefifthVisitedTime,
  updatesixthVisitedTime,
  selectVisitedTime
}