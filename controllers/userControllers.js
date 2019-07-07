//这个表主要实现所有与user表相关的业务处理
const userModule = require('../modules/userModule.js')
module.exports = {
    login(req, res) {
        let obj = req.body
        console.log(obj)
        console.log(11111111111111111111111111111111111111111111111111)
        userModule.login(obj.email, (err, data) => {
            if (err) {
                res.json({
                    code: 400,
                    msg: '服务器异常'
                })
            } else {
                //服务器接收请求并返回数据
                if (data) {
                    console.log(222222222222222222222222)
                    console.log(data)
                    if (data.password == obj.password) {
                        res.json({
                            code: 200,
                            msg: '登录成功'
                        })
                    } else {
                        res.json({
                            code: 401,
                            msg: '密码有误'
                        })
                    }
                }else{
                    res.json({
                        code:402,
                        msg:'邮箱错误'
                    })
                }
            }
        })
    }
}