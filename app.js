//引入express
const express = require('express')
const router = require('./router/index.js')
const ejs = require('ejs')
const bodyparser = require('body-parser')
const querystring = require('querystring')
const app = express()
//添加对指定端口的监听
app.listen(3000,()=>{
    console.log('The several is running at http://127.0.0.1:3000')
})
//设置模板引擎为ejs
app.set('views engine','ejs')
//指定模板引擎的目录，后期使用ejs的时候就可以参照这个目录进行ejs解析
app.set('views','views')
//添加静态资源的托管
app.use('/assets',express.static('assets'))
app.use('/uploads',express.static('uploads'))
app.use(bodyparser.urlencoded({extened:false}))
app.use(bodyparser.json())
//添加对所有后台页面的登录判断
app.use(function(req,res,next){
    var cookie = querystring.parse(req.headers.cookie)
    if(cookie.islogin&&cookie.islogin=='true'||req.url=='/admin/login'||req.url.indexOf('/admin')==-1){
        next()
    }else{
        res.redirect('/admin/login')
    }
})

app.use(router)