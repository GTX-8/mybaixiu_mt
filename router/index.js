//引入express模块
const express = require('express')
const pageControllers = require('../controllers/pagesControllers.js')
//封装路由模块
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













module.exports = router