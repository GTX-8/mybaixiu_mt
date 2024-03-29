//引入express模块
const express = require('express')
const pageControllers = require('../controllers/pagesControllers.js')
//引入post页面数据模板
const postsControllers = require('../controllers/postsControllers.js')
//引入筛选数据模块
const cateControllers = require('../controllers/cateControllers.js')
//封装路由模块
const userControllers = require('../controllers/userControllers.js')
const uploadFileControllers = require('../controllers/uploadFileControllers.js')
const addPostControllers = require('../controllers/addPostControllers.js')
const router = express.Router()
//前台页面的请求显示
router.get('/',pageControllers.getIndexPage)
.get('/detail',pageControllers.getDetailPage)
.get('/list',pageControllers.getListPage)
//后台页面的请求，后台页面前缀统一使用admin
.get('/admin',pageControllers.getAdminIndexPage)
.get('/admin/categories',pageControllers.getCategoriesPage)
.get('/admin/comments',pageControllers.getCommentsPage)
.get('/admin/login',pageControllers.getLoginPage)
.get('/admin/nav-menus',pageControllers.getNavMenusPage)
.get('/admin/password-reset',pageControllers.getPasswordResetPage)
.get('/admin/post-add',pageControllers.getPostAddPage)
.get('/admin/posts',pageControllers.getPostsPage)
.get('/admin/profiles',pageControllers.getProfilesPage)
.get('/admin/settings',pageControllers.getSettingsPage)
.get('/admin/slides',pageControllers.getSlidesPage)
.get('/admin/users',pageControllers.getUsersPage)

//后端posts页面的请求
.get('/getPostsList',postsControllers.getPostsList)
.get('/getCateList',cateControllers.getCateList)
.get('/delPostList',postsControllers.delPostList)
//登录页面接口
.post('/login',userControllers.login)

.post('/uploadFile',uploadFileControllers.uploadFile)
//向后台发送文本框里面所有内容
.post('/addpost',addPostControllers.addpost)
.post('/editorPost',addPostControllers.editorPost)
.get('/getPostById',postsControllers.getPostById)













module.exports = router