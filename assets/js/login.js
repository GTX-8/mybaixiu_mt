$(function(){
    $(".btnlogin").on("click",function(){
        var email = $("[name='email']").val()
        var password = $("[name='password']").val()
        $.ajax({
            type: "post",
            url: "/login",
            beforeSend:function(){
                if(!/\w+[@]\w+[.]\w+/.test(email)){
                    $('.alert-danger>span').text('请输入正确的邮箱号')
                    $('.alert-danger').fadeIn(500).delay(2000).fadeOut(500)
                    return false
                }
                if(password.trim().length==0){
                    $('.alert-danger>span').text('请输入正确的密码')
                    $('.alert-danger').fadeIn(500).delay(2000).fadeOut(500)
                    return false
                }
            },
            data: $(".loginform").serialize(),
            dataType: "json",
            success: function (res) {
                console.log(res)
               if(res.code==200){
                   location.href='/admin'
               }else{
                $('.alert-danger>span').text(res.msg)
                $('.alert-danger').fadeIn(500).delay(2000).fadeOut(500)
               }
            }
        });
    })
})