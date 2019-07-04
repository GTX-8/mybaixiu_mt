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
    getPostsList(params,callback) {
        let sql = `select posts.*, users.id,users.nickname,categories.name
        from posts
        inner join users on posts.user_id = users.id
        inner join categories on posts.category_id = categories.id
        limit ${(params.pagenum-1)*params.pagesize},${params.pagesize}`
        connection.query(sql,(err,result)=>{
            if(err) return callback(err)
            sql = 'select count(*) cnt from posts'
            connection.query(sql,(err1,data1)=>{
                if(err1) return callback(err1)
                callback(null,{result:result,total:data1[0].cnt})
            })
        })
    }
}