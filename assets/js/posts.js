$(()=>{
    var pagenum = 1
    var pagesize = 1
    init()
    function init(){
        $.ajax({
            type: "get",
            url: "/getPostsList",
            data:{
                pagenum:pagenum,
                pagesize:pagesize
            },
            dataType: "json",
            success: function (res) {
                if(res.code==200){
                    var htmlStr = template('postsListTmp',res.data)
                    $('tbody').html(htmlStr)
                    //生成分页结构
                    setPage(Math.ceil(res.data.total)/pagesize)
                }
            }
        });
    }
    //实现分页
    function setPage(count) {
        $(".pagination").bootstrapPaginator({
            //设置版本号
            bootstrapMajorVersion: 3,
            // 显示第几页：会添加对应的样式
            currentPage: pagenum,
            // 总页数:当前数据表的记录总数 / 每页所显示的记录数
            totalPages: count,
            //当单击页码按钮的时候, 执行该函数, 调用ajax渲染页面
            onPageClicked: function (event,originalEvent,type,page) {
                // 我们发现，这个page就是当前的合理页码值，我们只需要将全局的pagenum重置，并且重新获取数据就可以了
                pagenum = page
                // 重新获取数据
                init()
            }
        })
    }
})