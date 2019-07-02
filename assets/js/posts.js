$(()=>{
    $.ajax({
        type: "get",
        url: "/getPostsList",
        dataType: "json",
        success: function (res) {
            if(res.code==200){
                var htmlStr = template('postsListTmp',res)
                $('tbody').html(htmlStr)
            }
        }
    });
})