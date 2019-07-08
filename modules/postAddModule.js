const connection = require('./commonMysql.js')
module.exports = {
    addpost(obj,callback){
        // let sql =`INSERT INTO students (null,obj.slug,obj.title,obj.feature,obj.created,obj.content,520,1314,obj.status,1,obj.category_id)
        // VALUES (id,?,?,?,?,?,?,?,?,?,?) `
        // console.log(sql)
        // connection.query(sql,[obj.slug,obj.title,obj.feature,obj.created,obj.content,520,1314,obj.status,1,obj.category_id],(err,result)=>{
        //     if(err) return callback(err)
        //     callback(null,result)
        // })
        var sql = `INSERT INTO posts (id,slug,title,feature,created,content,views,likes,status,user_id,category_id) VALUES (NULL,?,?,?,?,?,?,?,?,?,?)`
        connection.query(sql, [obj.slug,obj.title,obj.feature,obj.created,obj.content,obj.views,obj.likes,obj.status,obj.user_id,obj.category_id], (err, result) => {
            if (err) return callback(err)
            callback(null)
        })
    },
    //文章的编辑
    editorPost(obj,callback){
        let sql = `update posts set ? where id = ?`
        connection.query(sql,[obj,obj.id],(err,results)=>{
            if(err) return callback(null)
            callback(null,results)
        })
    }
}