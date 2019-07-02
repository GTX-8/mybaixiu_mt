var utils = {
    getRouterName: (href) => {
        //调用indexof方法判断地址栏中是否含有?
        //如果返回的结果大于-1则证明有?如果等于-1则没有?
        var index = href.indexOf('?')
        var routerName = ''
        if (index > -1) {
            // substring方法是截取字符串,有两个参数,都是字符串的索引值
            //这个判断是地址栏中有问号,用substring方法截取最后一个/和?之前的字符串
            routerName = href.substring(href.lastIndexOf('/') + 1, href.indexOf('?'))
        } else {
            //这个判断时地址栏中没有问号,截取最后一个/后面的字符串
            routerName = href.substring(href.lastIndexOf('/') + 1)
        }
        return routerName
    }
}