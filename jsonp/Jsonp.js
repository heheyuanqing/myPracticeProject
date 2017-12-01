function jsonp(params) {
    var options = params || {};
    var ohead = document.getElementsByTagName("head")[0];
    var oscript = document.createElement("script");
    var url = params.url || "";
    var callback = ("jsonp_" + Math.random()).replace(".","");
    var json = callback;

    url = url +"?appkey="+options.appkey+"&zipcode="+options.zipcode+"&callback="+callback;

    //发送请求
    oscript.src = url;
    ohead.appendChild(oscript);

    //创建回调函数
    window[callback] = function (json) {
        ohead.removeChild(oscript);
        clearTimeout(oscript.timer);
        window[callback] = null;
        options.success&&options.success(json);
    };

    //设置超时
    if (options.time){
        oscript.timer = setTimeout(function () {
            window[callback]=null;
            ohead.removeChild(oscript);
            options.erro&&options.erro({
                message:"连接超时"
            })
        },options.time);
    }

}