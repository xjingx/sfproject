const query= require('../dao/query').query;
const $sqlQuery = require('../dao/sqlCRUD').user;

insertInfo = (title, type, object, sname, snumber, content) => {
  return query($sqlQuery.insertInfo, [title, type, object, sname, snumber, content])
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

queryContent = ( title, snumber ) => {
  return query($sqlQuery.queryContent, [title, snumber])
          .catch(e => {
              console.log('query error', JSON.stringify(e));
              return {
                  errmsg: JSON.stringify(e)
              }
          })
}

module.exports = {
  insertInfo,
  queryInfo,
  queryContent
}