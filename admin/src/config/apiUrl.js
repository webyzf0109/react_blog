let ipUrl = 'http://127.0.0.1:7001/admin/' 

let servicePath = {
    checkLogin:ipUrl + 'checkLogin' ,  //  校验登录
    getTypeInfo:ipUrl + 'getTypeInfo' ,  //  获取分类
    addArticle:ipUrl + 'addArticle' ,  //  添加文章
    updateArticle:ipUrl + 'updateArticle' ,  //  修改文章
}
export default servicePath;