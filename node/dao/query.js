const pool = require('./connect');
module.exports = {
    /**
     * 通过连接池执行数据CRUD操作
     */
    query: function (sqlString, params) {
        return new Promise((resolve, reject) => {//我们可以从创建的连接池中获取到一个我们需要的连接：
            pool.getConnection(function (err, connection) { //使用回调函数的参数connection来查询数据库
                if (err) {
                    reject(err)
                } else {
                    connection.query(sqlString, params, (err, rows) => {
                        if (err) {
                            console.log('err:',err)
                            reject(err)
                        }  else {
                            console.log('rows:',rows)
                            resolve(rows)
                        }
                        connection.release()
                    })
                }
            })
        })
    }
}