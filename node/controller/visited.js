const query= require('../dao/query').query;
const $sqlQuery = require('../dao/sqlCRUD').stastics;

const updateLoginVisitedNumber = () => {
  return query($sqlQuery.updateLoginVisitedNumber)
         .catch(e => {
              console.log('update error', JSON.stringify(e));
              return {
                  errmsg: JSON.stringify(e)
              }
         })
}

const updatefirstVisitedNumber = () => {
  return query($sqlQuery.updatefirstVisitedNumber)
         .catch(e => {
              console.log('update error', JSON.stringify(e));
              return {
                  errmsg: JSON.stringify(e)
              }
         })
}

const updatesecondVisitedNumber = () => {
  return query($sqlQuery.updatesecondVisitedNumber)
         .catch(e => {
              console.log('update error', JSON.stringify(e));
              return {
                  errmsg: JSON.stringify(e)
              }
         })
}

const updatethirdVisitedNumber = () => {
  return query($sqlQuery.updatethirdVisitedNumber)
         .catch(e => {
              console.log('update error', JSON.stringify(e));
              return {
                  errmsg: JSON.stringify(e)
              }
         })
}

const updatefourthVisitedNumber = () => {
  return query($sqlQuery.updatefourthVisitedNumber)
         .catch(e => {
              console.log('update error', JSON.stringify(e));
              return {
                  errmsg: JSON.stringify(e)
              }
         })
}

const updatefifthVisitedNumber = () => {
  return query($sqlQuery.updatefifthVisitedNumber)
         .catch(e => {
              console.log('update error', JSON.stringify(e));
              return {
                  errmsg: JSON.stringify(e)
              }
         })
}

const updatesixthVisitedNumber = () => {
  return query($sqlQuery.updatesixthVisitedNumber)
         .catch(e => {
              console.log('update error', JSON.stringify(e));
              return {
                  errmsg: JSON.stringify(e)
              }
         })
}

const selectVisitedNumber = () => {
  return query($sqlQuery.selectVisitedNumber)
         .catch(e => {
              console.log('select error', JSON.stringify(e));
              return {
                  errmsg: JSON.stringify(e)
              }
         })
}

module.exports = {
  updateLoginVisitedNumber,
  updatefirstVisitedNumber,
  updatesecondVisitedNumber,
  updatethirdVisitedNumber,
  updatefourthVisitedNumber,
  updatefifthVisitedNumber,
  updatesixthVisitedNumber,
  selectVisitedNumber
}