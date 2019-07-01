//引入express模块
const express = require('express')
const pageControllers = require('../controllers/userControllers.js')
//封装路由模块
const router = express.Router()
//前台页面的请求显示
router.get('/',pageControllers.getIndexPage)
.get('/detail',pageControllers.getDetailPage)
.get('/list',pageControllers.getListPage)
//后台页面的请求
.get('/admin',pageControllers.getAdminIndexPage)


module.exports = router