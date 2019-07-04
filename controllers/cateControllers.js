const cateModule = require('../modules/cateModule.js')
module.exports = {
    getCateList(req,res){
        cateModule.getCateList((err,data)=>{
            if(err) return res.json({
                code:400,
                msg:'查询数据失败'
            })
            res.json({
                code:200,
                msg:'查询数据成功',
                data:data
            })
        })
    }
}