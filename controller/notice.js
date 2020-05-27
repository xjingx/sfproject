const query= require('../dao/query').query;
const $sqlQuery = require('../dao/sqlCRUD').user;

insertNotice = (ntitle, ncontent) => {
  return query($sqlQuery.insertNotice, [ntitle, ncontent])
          .catch(e => {
              console.log('insert error', JSON.stringify(e));
              return {
                  errmsg: JSON.stringify(e)
              }
          })
}

queryNotice = () => {
  return query($sqlQuery.queryNotice)
          .catch(e => {
              console.log('query error', JSON.stringify(e));
              return {
                  errmsg: JSON.stringify(e)
              }
          })
}

queryContent = (ntitle) => {
  return query($sqlQuery.queryContent, ntitle)
          .catch(e => {
              console.log('query error', JSON.stringify(e));
              return {
                  errmsg: JSON.stringify(e)
              }
          })
}

queryAllNotice = () => {
  return query($sqlQuery.queryAllNotice)
          .catch(e => {
              console.log('query error', JSON.stringify(e));
              return {
                  errmsg: JSON.stringify(e)
              }
          })
}

module.exports = {
  insertNotice,
  queryNotice,
  queryContent,
  queryAllNotice 
}