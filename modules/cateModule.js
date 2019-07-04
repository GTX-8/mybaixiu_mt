//引入mysql模板
const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'baixiu',
    dateStrings: true //将读取到的时间以字符串展示
})
module.exports = {
    getCateList(callback){
        let sql = `SELECT * from categories`
        connection.query(sql,(err,results)=>{
            if(err) return callback(err)
            callback(null,results)
        })
    }
}
