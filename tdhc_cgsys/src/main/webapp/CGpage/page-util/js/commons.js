//获取网页链接后的参数
function getQueryString(name) {
    var reg = new RegExp("(&]*)(&|$)");
    var regs = new RegExp("=([\\s\\S]*?)&")
    var r = window.location.search.substr(1).match(regs);
    if (r != null) return r[1];
    return null;
}

// Ajax
function postWithAuth(url, data) {
    return $.ajax(Cake.Piper.getAuthUrl(url), {
        data: JSON.stringify(data),
        dataType: 'json',
        contentType: 'application/json',
        type: 'POST'
    });
}

//定义serializeObject方法，序列化表单
jQuery.prototype.serializeObject=function(){ 
    var obj=new Object(); 
    $.each(this.serializeArray(),function(index,param){ 
        if(!(param.name in obj)){ 
            obj[param.name]=param.value; 
        } 
    }); 
    return obj; 
}; 