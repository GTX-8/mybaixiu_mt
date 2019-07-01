const fs = require('fs')
module.exports = {
    getIndexPage(req,res){
        console.log(__dirname)
        fs.readFile(__dirname+'/../views/index.html',(err,data)=>{
            console.log(data)
            if(err) return res.end('404')
            res.end(data)
        })
    }
}