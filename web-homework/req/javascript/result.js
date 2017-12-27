window.onload = () => {
    var btn = document.getElementById('btn');
    var result = document.getElementById('result');
    btn.addEventListener('click', function () {
        var name = document.getElementById("name").value;
        $.ajax({
            url: "http://127.0.0.1:3000/result/",
            method: "GET",
            data: {
                name: name
            },
            dataType: "jsonp",
            jsonpCallback: "result",
            success: (data) => {

                if (data.status === "1") {
                    console.log(data);
                    if (data.area === "null") {
                        result.innerHTML = data.name + "  :\t" + data.state;

                    }
                    else{
                        result.innerHTML = data.name +"  :\t"+data.state+"  in  "+data.area;
                    }
                }
                if (data.status === "0") {
                    alert("查询失败，请稍后再试！");
                }
            }
        });
    }, false);
};