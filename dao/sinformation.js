const query= require('./query').query;
const $sqlQuery = require('./sqlCRUD').user;

const sinformation = {
    queryinfor (snumber) {
        return query($sqlQuery.queryBySnumber, snumber)
               .catch(e => {
                    console.log('select information error', JSON.stringify(e));
                    return {
                        errmsg: JSON.stringify(e)
                    }
               })
    }
}

module.exports = sinformation