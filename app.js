//引入express
const express = require('express')
//引入fs模块
const fs = require('fs')
const app = express()

//添加对指定端口的监听
app.listen(3000,()=>{
    console.log('The several is running at http://127.0.0.1:3000')
})
//添加静态资源的托管
app.use('/assets',express.static('assets'))
app.use('/uploads',express.static('uploads'))
app.get('/',(req,res)=>{
    //fs读写模块，拼接前端index页面的路径
    fs.readFile(__dirname+'/views/index.html',(err,data)=>{
        //如果有错误对象就进入if，返回给页面404，否则就返回data，data对象中存储index页面的源码
        if(err){
            res.end('404')
        }else{
            res.end(data)
        }
    })
})