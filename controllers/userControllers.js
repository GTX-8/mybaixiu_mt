//这个表主要实现所有与user表相关的业务处理
const userModule = require('../modules/userModule.js')
module.exports = {
    login(req, res) {
        let obj = req.body
        userModule.login(obj.email, (err, data) => {
            if (err) {
                res.end(JSON.stringify({
                    code: 400,
                    msg: '服务器异常'
                }))
            } else {
                //服务器接收请求并返回数据
                if (data) {
                    if (data.password == obj.password) {
                        //将登录成功的状态写入coolkie
                        req.session.islogin='true'
                        req.session.currentUser=data
                        res.end(JSON.stringify({code: 200,
                            msg: '登录成功'
                        })
                            )
                    } else {
                        res.end(JSON.stringify({
                            code: 401,
                            msg: '密码有误'
                        }))
                    }
                }else{
                    res.end(JSON.stringify({
                        code:402,
                        msg:'邮箱错误'
                    }))
                }
            }
        })
    }
}