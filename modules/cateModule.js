const connection = require('./commonMysql.js')
module.exports = {
    getCateList(callback){
        let sql = `SELECT * from categories`
        connection.query(sql,(err,results)=>{
            if(err) return callback(err)
            callback(null,results)
        })
    }
}
