const query= require('../dao/query').query;
const $sqlQuery = require('../dao/sqlCRUD').user;
const {
  genPassword
} = require('../utils/crypto.js')

const login = {
    login (snumber, spassword) {
        spassword = genPassword(spassword)
        return query($sqlQuery.login, [snumber, spassword])
               .catch(e => {
                    console.log('login error', JSON.stringify(e));
                    return {
                        errmsg: JSON.stringify(e)
                    }
               })
    }
}

module.exports = login