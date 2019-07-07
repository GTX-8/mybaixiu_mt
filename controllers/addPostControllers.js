const postAddModule = require('../modules/postAddModule.js')
module.exports = {
    addpost(req,res){
        let obj = req.body
        obj.views = 0
        obj.likes = 0
        obj.user_id = 1
        console.log(obj)
        postAddModule.addpost(obj,(err,data)=>{
            if(err) return res.json({code:400,msg:'文章添加失败'})
            res.json({code:200,msg:'文章添加成功'})
        })
    }
}