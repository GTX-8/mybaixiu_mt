//引入express
const express = require('express')
const router = require('./router/index.js')
const app = express()
//添加对指定端口的监听
app.listen(3000,()=>{
    console.log('The several is running at http://127.0.0.1:3000')
})
//添加静态资源的托管
app.use('/assets',express.static('assets'))
app.use('/uploads',express.static('uploads'))

app.use(router)