//引入posts页面的数据库模块
const postsModule = require('../modules/postsModule.js')
module.exports = {
    getPostsList(req,res){
        let page = req.query
        console.log(req.query)
        postsModule.getPostsList(page,(err,data)=>{
            if(err) return res.json({
                code:400,
                msg:'获取数据失败'
            })
            res.json({
                code:200,
                msg:'获取数据成功',
                data:data
            })
        })
    }
}