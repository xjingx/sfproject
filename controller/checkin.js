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

module.exports = {
  updateFinish,
  selectFinish
}