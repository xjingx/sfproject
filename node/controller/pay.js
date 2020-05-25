const query= require('../dao/query').query;
const $sqlQuery = require('../dao/sqlCRUD').user;

payCharge = (snumber, sname) => {
    return query($sqlQuery.updateChargeBySnumber, [snumber, sname])
            .catch(e => {
                console.log('pay error', JSON.stringify(e));
                return {
                    errmsg: JSON.stringify(e)
                }
            })
}

selectPay = (snumber, sname) => {
  return query($sqlQuery.selectPayBysnumber, [snumber, sname])
          .catch(e => {
              console.log('pay error', JSON.stringify(e));
              return {
                  errmsg: JSON.stringify(e)
              }
          })
}

queryPayOff = (snumber, sname) => {
  return query($sqlQuery.queryPayOffBysnumber, [snumber, sname])
          .catch(e => {
              console.log('pay error', JSON.stringify(e));
              return {
                  errmsg: JSON.stringify(e)
              }
          })
}

module.exports = {
  payCharge,
  selectPay,
  queryPayOff
}