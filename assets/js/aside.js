
//实现导航菜单项的合理的展开和合并
$(function(){
     // 获取当前页面的地址
     var href = location.href
    // 接受common的返回值调用里面呢的方法,定义一个变量接受common里面的返回值
    var routerName = utils.getRouterName(href)
    var menu_posts = $('#menu-posts')
    if(routerName=='posts'||routerName=='post-add'||routerName=='categories'){
        menu_posts.addClass('in')
        menu_posts.attr('aria-expanded',true)
    }
    var menu_settings = $('#menu-settings')
    if(routerName=='nav-menus'||routerName=='slides'||routerName=='settings'){
        menu_settings.addClass('in')
        menu_settings.attr('aria-expanded',true)
    }
    $('li').removeClass('active')
    $('#'+routerName).addClass('active')
    
    
})