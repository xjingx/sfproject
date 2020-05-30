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

selectStudentInfo = () => {
  return query($sqlQuery.selectStudentInfo)
           .catch(e => {
             console.log('select error', JSON.stringify(e));
             return {
               errmsg: JSON.stringify(e)
             }
           })
}

updateStudents = (snumber,sname,sdepartment,smajor,stestnumber,sbirthday,sgender) => {
  return query($sqlQuery.updateStudentsBySnumber, [sname,sdepartment,smajor,stestnumber,sbirthday,sgender,snumber])
           .catch(e => {
             console.log('select error', JSON.stringify(e));
             return {
               errmsg: JSON.stringify(e)
             }
           })
}

deleteStudents = (snumber) => {
  return query($sqlQuery.deleteStudentsBySnumber, [snumber])
           .catch(e => {
             console.log('select error', JSON.stringify(e));
             return {
               errmsg: JSON.stringify(e)
             }
           })
}

module.exports = {
  queryPersonInfo,
  changePersonInfo,
  insertPersonInfo,
  selectInfoFinish,
  selectStudentInfo,
  updateStudents,
  deleteStudents
}