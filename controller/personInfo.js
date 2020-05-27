const query= require('../dao/query').query;
const $sqlQuery = require('../dao/sqlCRUD').user;

queryPersonInfo = (snumber, sname) => {
    return query($sqlQuery.queryBySnumber, [snumber, sname])
            .catch(e => {
                console.log('query error', JSON.stringify(e));
                return {
                    errmsg: JSON.stringify(e)
                }
            })
}

changePersonInfo = (snumber, sname, stestnumber, sidnumber, sbirthday) => {
    return query($sqlQuery.updateInfoBySnumber, [stestnumber, sidnumber, sbirthday, snumber, sname])
            .catch(e => {
                console.log('change error', JSON.stringify(e));
                return {
                    errmsg: JSON.stringify(e)
                }
            })
}

insertPersonInfo = (snumber, sname, sidnumber, stestnumber, sdepartment, smajor, sbirthday, sgender) => {
  return query($sqlQuery.insertInfoBySnumber, [snumber, sname, sidnumber, stestnumber, sdepartment, smajor, sbirthday, sgender])
          .catch(e => {
              console.log('change error', JSON.stringify(e));
              return {
                  errmsg: JSON.stringify(e)
              }
          })
}

selectInfoFinish = () => {
  return query($sqlQuery.selectInfoByfinish)
           .catch(e => {
             console.log('change error', JSON.stringify(e));
             return {
               errmsg: JSON.stringify(e)
             }
           })
}

module.exports = {
  queryPersonInfo,
  changePersonInfo,
  insertPersonInfo,
  selectInfoFinish
}