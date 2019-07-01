//引入express模块
const express = require('express')
const pageControllers = require('../controllers/userControllers.js')
//封装路由模块
const router = express.Router()
//前台页面的请求显示
router.get('/',(req,res)=>{
    pageControllers.getIndexPage(req,res)
    console.log(111)
})
module.exports = router