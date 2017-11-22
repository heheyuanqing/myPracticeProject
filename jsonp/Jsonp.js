function jsonp(json) {
    var url = json.url;

    var script = document.createElement("script");
    script.setAttribute('src', url + "?appkey=" + json.appkey + "&zipcode=" + json.zipcode + "&callback=" + json.callback);
    document.body.appendChild(script);

    json.success(data);
}