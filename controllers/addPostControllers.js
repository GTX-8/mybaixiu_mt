const postAddModule = require('../modules/postAddModule.js')
const querystring = require('querystring')
module.exports = {
    addpost(req,res){
        let obj = req.body
        // let id =querystring.parse(req.headers.cookie).id
        obj.views = 0
        obj.likes = 0
        obj.user_id = req.session.currentUser.id
        postAddModule.addpost(obj,(err,data)=>{
            if(err) return res.json({code:400,msg:'文章添加失败'})
            res.json({code:200,msg:'文章添加成功'})
        })
    },
    editorPost(req,res){
        let obj = req.body
        let views = 0
        let likes = 0
        postAddModule.editorPost(obj,(err,data)=>{
            if(err) return res.json({code:400,msg:'文章编辑失败'})
            res.json({code:200,msg:'文章编辑成功'})
        })
    }
}