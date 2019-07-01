const fs = require('fs')
module.exports = {
    //前台页面的请求处理
    getIndexPage(req,res){
       res.render('index.ejs')
    },
    getDetailPage(req,res){
        res.render('detail.ejs')
    },
    getListPage(req,res){
        res.render('list.ejs')
    },
    //后台页面的请求处理
    getAdminIndexPage(req,res){
        res.render('admin/index.ejs')
    }
}