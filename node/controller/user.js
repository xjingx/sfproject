const query= require('../dao/query').query;
const $sqlQuery = require('../dao/sqlCRUD').user;
const {
  genPassword
} = require('../utils/crypto.js')

const Studentslogin = (snumber, spassword) => {
        spassword = genPassword(spassword)
        return query($sqlQuery.Studentslogin, [snumber, spassword])
               .catch(e => {
                    console.log('login error', JSON.stringify(e));
                    return {
                        errmsg: JSON.stringify(e)
                    }
               })
}
const Adminlogin = (anumber, apassword) => {
  apassword = genPassword(apassword)
  return query($sqlQuery.Adminlogin, [anumber, apassword])
         .catch(e => {
              console.log('login error', JSON.stringify(e));
              return {
                  errmsg: JSON.stringify(e)
              }
         })
}


const insertUser = (snumber, sname,sidnumber) => {
  spassword = sidnumber.slice(-6)
  spassword = genPassword(spassword)
  return query($sqlQuery.insertUserBySnumber, [snumber, spassword, sname])
         .catch(e => {
              console.log('login error', JSON.stringify(e));
              return {
                  errmsg: JSON.stringify(e)
              }
         })
}

module.exports = {
  Studentslogin,
  Adminlogin, 
  insertUser
}