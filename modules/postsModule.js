const connection = require('./commonMysql.js')
module.exports = {
    /*
    *params:它是一个对象,里面有三个属性
    *pagenum:页码
    *pagesize:每页记录数
    *query:用户搜索条件   query.cate:分类条件  query.statu状态条件,约定query是一个对象,里面有两个属性
    * */
    //获取数据库中所有数据
    getPostsList(params,callback) {
        let sql = `select posts.*, users.id uid,users.nickname,categories.name
        from posts
        inner join users on posts.user_id = users.id
        inner join categories on posts.category_id = categories.id
        where 1=1 `
        if(params.cate){
            sql+=` and posts.category_id=${params.cate}`
        }
        if(params.statu){
            sql+=` and posts.status='${params.statu}'`
        }
        sql+=` order by posts.id desc
        limit ${(params.pagenum-1)*params.pagesize},${params.pagesize}`
        connection.query(sql,(err,result)=>{
            if(err) return callback(err)
            sql = `select count(*) cnt,posts.*, users.id uid,users.nickname,categories.name from posts
                inner join users on posts.user_id = users.id
                inner join categories on posts.category_id = categories.id
                where 1=1 `
                if(params.cate) sql+=` and posts.category_id=${params.cate}`
                if(params.statu)sql+=` and posts.status='${params.statu}'`
            connection.query(sql,(err1,data1)=>{
                if(err1) return callback(err1)
                callback(null,{result:result,total:data1[0].cnt})
            })
        })
    },
    //删除数据库中一条数据
    delPostList(id,callback){
        let sql = 'delete from posts where id='+id
        connection.query(sql,(err,data)=>{
            if(err) return callback(err)
            callback(null)
        })
    },
    getPostById(id,callback){
        let sql=`select * from posts where id=`+id
        connection.query(sql,(err,results)=>{
            if(err) return callback(err)
            callback(null,results[0])
        })
    }
}