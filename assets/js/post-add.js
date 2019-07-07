$(()=>{
      //加载所有的分类数据
      $.ajax({
        type: "get",
        url: "/getCateList",
        data: "data",
        dataType: "json",
        success: function (res) {
            if(res.code==200){
                var htmlStr = ``
                for(var i=0;i<res.data.length;i++){
                    htmlStr += `<option value="${res.data[i].id}">${res.data[i].name}</option>`
                }
                $('#category').html(htmlStr)
            }
        }
    });
    //初始化富文本框,创建一个富文本框覆盖指定id号的textarea
    CKEDITOR.replace('content')
    //保存文章数据--实现文章的新增
    $('.btnSave').on("click",function(event){
        event.preventDefault()
        //同步数据:将富文本框中的数据与textarea中的数据进行同步--两者同步之后的数据会一样
        CKEDITOR.instances.content.updateElement()
        //serialize:获取当前表单中所有拥有name属性的value值
        // console.log($('.row').serialize())
        //1.直接富文本框中的数据
        //instances:可以获取到当前CKEDITTOE的所有实例,通过replace方法可以创建实例
        // getData是可以获取到数据,但是对我们而言,需要额外的进行参数的拼接 --不方便
        $.ajax({
            type: "post",
            url: "/addpost",
            data: $('.row').serialize(),
            dataType: "json",
            success: function (res) {
                if(res.code==200){
                    location.href='/admin/posts'
                }
            }
        });
    })
    //实现数据的上传
    $('#feature').on('change',function(){
        //1.获取当前被选择文件对象
        //files:可以获取当前所有被选择文件对象,它是一个数组,里面的每一个值都是当前被选择的一个一个文件对象
        var myfile = document.querySelector('#feature').files[0]
        //2.创建formadata
        var formdata = new FormData()
        //3.追加参数
        formdata.append('img',myfile)
        $.ajax({
            type: "post",
            url: "/uploadFile",
            data: formdata,
            processData:false, //让ajax不要进行数据的处理,因为formdata会进行处理
            contentType:false, //让ajax不要对数据进行编码,因为formdata会进行编码处理
            dataType: "json",
            success: function (res) {
                // console.log(res)
               if(res.code==200){
                    //将文件名称存储到指定的隐藏域中
                   $('[name=feature]').val(res.img)
                   $('.thumbnail').attr('src','/uploads/'+res.img).fadeIn(1000)
               }
            }
        });
    })
})