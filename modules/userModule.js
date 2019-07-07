const connection = require('./commonMysql.js')  
module.exports = {
    login(email,callback){
        let sql =`SELECT * from users where email = '${email}'`
        connection.query(sql,(err,data)=>{
            if(err) return callback(err)
            callback(null,data[0])
        })
    }
}