$(()=>{
    $.ajax({
        type: "get",
        url: "/getPostsList",
        data:{
            pagenum:1,
            pagesize:2
        },
        dataType: "json",
        success: function (res) {
            if(res.code==200){
                var htmlStr = template('postsListTmp',res)
                $('tbody').html(htmlStr)
            }
        }
    });
})