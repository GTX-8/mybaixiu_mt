//引入posts页面的数据库模块
const postsModule = require('../modules/postsModule.js')
const moment = require('moment')
module.exports = {
    //获取数据库数据渲染页面
    getPostsList(req,res){
        let obj = req.query
        postsModule.getPostsList(obj,(err,result)=>{
            if(err) return res.json({
                code:400,
                msg:'获取数据失败'
            })
            res.json({
                code:200,
                msg:'获取数据成功',
                data:result
            })
        })
    },
    //删除数据操作
    delPostList(req,res){
        let id = req.query.id
        postsModule.delPostList(id,(err,data)=>{
            if(err) return res.json({
                code:400,
                msg:'删除数据失败'
            })
            res.json({
                code:200,
                msg:'删除数据成功',
                data:data
            })
        })
    },
    //根据id获取文章数据
    getPostById(req,res){
        let id = req.query.url
        postsModule.getPostById(id,(err,data)=>{
            
            if(err) return res.json({
                code:400,
                msg:'数据获取失败'
            })
            data.created=moment(data.created).format('YYYY-MM-DDTHH:mm:ss')
            res.json({
                code:200,
                msg:'数据获取成功',
                data:data
            })
        })
    }

}