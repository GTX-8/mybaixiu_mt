$(()=>{
    //每页显示的当前页码
    var pagenum = 1
    //每页显示的数量
    var pagesize = 1
    //定义query,目的是获取用户数据(删选的value值)
    var query={}
    init({})
    //实现用户数据的筛选
    $('.btn-search').on("click",function(event){
        event.preventDefault()
        query = {}
        if($('.cateSelector').val()!='all'){
            query.cate=$('.cateSelector').val() //1
        }
       if($('.statuSelector').val()!='all'){
           query.statu = $('.statuSelector').val() //drafted
       }
       //发起请求
       init(query)
    })
    //实现数据的删除,使用事件委托
    $('tbody').on('click','.btn-del',function(){
        console.log(111)
        var id = $(this).data('id')
        console.log(id)
        $.ajax({
            type: "get",
            url: "/delPostList",
            data: {id:id},
            success: function (res) {
                console.log(res)
                if(res.code==200){
                    alert('数据删除成功!')
                    init()
                }
            }
        });
    })
    function init(query){
        $.ajax({
            type: "get",
            url: "/getPostsList",
            data:{
                pagenum:pagenum,
                pagesize:pagesize,
                //展开运算符,可以将一个对象的具体属性进行展开,展开为一组一组的键值对
                //将query中用户筛选获取的数据传递给后端进行判断
                ...query
                
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
    //在页面渲染筛选条件
    ;(function(){
        $.ajax({
            type: "get",
            url: "/getCateList",
            success: function (res) {
                var htmlStr = `<option value="all">所有分类</option>`
                // 遍历获取到数据,和模板字符串混合使用
                for(var i=0;i<res.data.length;i++){
                    htmlStr+=`<option value="${res.data[i].id}">${res.data[i].name}</option>`
                }
                $('.cateSelector').html(htmlStr)
            }
        });
    })();
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
                init(query)
            }
        })
    }
})