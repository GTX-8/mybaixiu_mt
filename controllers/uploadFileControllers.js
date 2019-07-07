const formidable = require('formidable')
const path = require('path')
module.exports = {
    uploadFile(req,res){
        //使用formidable来实现文件的上传操作
        //1.创建文件上传对象
        let form = new formidable.IncomingForm()
        //2.设置编码:因为这个模块不仅仅可以实现文件的上传,还可以实现普通参数的传递(键值对)
        form.encoding = 'utf-8'
        //3.设置文件上传保存路径
        form.uploadDir = __dirname+'/../uploads'
        //4.设置保留文件扩展名
        form.keepExtensions = true
        //5.实现文件上传操作
        // form.parse(请求报文对象,上串完成时的回调函数)
        // 毁掉函数中有三个参数:
        // 1.err:错误优先的回调函数--错误信息
        // 2.field:字段: 传递的普通键值对,它是一个对象
        // 3.files:这是文件上传成功后的相关信息--如存储信息
        form.parse(req,(err,fields,files)=>{
            console.log(files)
            if(err) return res.json({code:400,msg:'文件上传失败'})
            //path.basename是path模块中的方法 失去文件链接的最后一部分
            let filename = path.basename(files.img.path)
            res.json({code:200,msg:'文件上传成功',img:filename})
        })
    }
}