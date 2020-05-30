const query= require('../dao/query').query;
const $sqlQuery = require('../dao/sqlCRUD').user;

updateFinish = (snumber, sname) => {
    return query($sqlQuery.updateFinishBysnumber, [snumber, sname])
            .catch(e => {
                console.log('select error', JSON.stringify(e));
                return {
                    errmsg: JSON.stringify(e)
                }
            })
}

selectFinish = (snumber, sname) => {
  return query($sqlQuery.selectFinishBysnumber, [snumber, sname])
          .catch(e => {
              console.log('select error', JSON.stringify(e));
              return {
                  errmsg: JSON.stringify(e)
              }
          })
}

const insertCheckin = (snumber, sname, active, finish, department, major) => {
  return query($sqlQuery.insertCheckinBySnumber, [snumber, sname, active, finish, department, major])
         .catch(e => {
              console.log('insert error', JSON.stringify(e));
              return {
                  errmsg: JSON.stringify(e)
              }
         })
}

module.exports = {
  updateFinish,
  selectFinish,
  insertCheckin
}