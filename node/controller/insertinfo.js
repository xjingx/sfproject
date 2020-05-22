const query= require('../dao/query').query;
const $sqlQuery = require('../dao/sqlCRUD').user;

insertInfo = (title, type, object, sname, content) => {
  return query($sqlQuery.insertInfo, [title, type, object, sname, content])
          .catch(e => {
              console.log('insert error', JSON.stringify(e));
              return {
                  errmsg: JSON.stringify(e)
              }
          })
}

queryInfo = () => {
  return query($sqlQuery.queryAllInfo)
          .catch(e => {
              console.log('query error', JSON.stringify(e));
              return {
                  errmsg: JSON.stringify(e)
              }
          })
}

module.exports = {
  insertInfo,
  queryInfo
}