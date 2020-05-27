const query= require('../dao/query').query;
const $sqlQuery = require('../dao/sqlCRUD').user;

insertGreenChanneldk = (snumber, sname, sclass, major, department, greentype, serialnumber, reason) => {
  return query($sqlQuery.insertGreenChanneldk, [snumber, sname, sclass, major, department, greentype, serialnumber, reason])
          .catch(e => {
              console.log('insert error', JSON.stringify(e));
              return {
                  errmsg: JSON.stringify(e)
              }
          })
}

insertGreenChannelhj = (snumber, sname, sclass, major, department, greentype, delaymoney, delaydate, reason) => {
  return query($sqlQuery.insertGreenChannelhj, [snumber, sname, sclass, major, department, greentype, delaymoney, delaydate, reason])
          .catch(e => {
              console.log('insert error', JSON.stringify(e));
              return {
                  errmsg: JSON.stringify(e)
              }
          })
}

module.exports = {
  insertGreenChanneldk,
  insertGreenChannelhj
}