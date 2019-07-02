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
    getPostsList(callback) {
        let sql = `select posts.*, users.id,users.nickname,categories.name
        from posts
        inner join users on posts.user_id = users.id
        inner join categories on posts.category_id = categories.id`
        connection.query(sql,(err,data)=>{
            if(err) return callback(err)
            callback(null,data)
        })
    }
}