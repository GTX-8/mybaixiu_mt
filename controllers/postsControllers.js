//引入posts页面的数据库模块
const postsModule = require('../modules/postsModule.js')
module.exports = {
    getPostsList(req,res){
        postsModule.getPostsList((err,data)=>{
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