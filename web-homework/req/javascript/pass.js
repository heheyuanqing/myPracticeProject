window.onload = () => {

    $.ajax({
        url: "http://127.0.0.1:3000/appli/",
        method: "GET",
        data: {},
        dataType: "jsonp",
        jsonpCallback: "pass",
        success: (data) => {
            if (data.status === "1") {
                console.log(data.infor.length);
                recover(data.infor);
            }
            else {
                alert("网络出错！");
            }
        }
    });

    function recover(data) {
        var parent = document.getElementById('appli-table');
        var tr = document.createElement('tr');
        var name = document.createElement('td');
        var vol = document.createElement('td');
        var resu = document.createElement('td');

        parent.appendChild(tr);
        tr.appendChild(name);
        tr.appendChild(vol);
        tr.appendChild(resu);

        name.innerHTML = "名字";
        vol.innerHTML = "志愿地区";
        resu.innerHTML = "申请理由";


        for (var i = 0; i < data.length; i++) {
            var tr = document.createElement('tr');
            var name = document.createElement('td');
            var vol = document.createElement('td');
            var resu = document.createElement('td');

            parent.appendChild(tr);
            tr.appendChild(name);
            tr.appendChild(vol);
            tr.appendChild(resu);

            name.innerHTML = data[i].name;
            vol.innerHTML = data[i].volu;
            resu.innerHTML = data[i].resu;

        }

    }

    var btn = document.getElementById('btn');

    btn.addEventListener('click', function () {
        var name = document.getElementById("name").value;
        var state = document.getElementById('state').value;
        var area = document.getElementById('area').value;
        $.ajax({
            url: "http://127.0.0.1:3000/xuandiao/",
            method: "GET",
            data: {
                name: name,
                state: state,
                area: area
            },
            dataType: "jsonp",
            jsonpCallback: "tijiao",
            success: (data) => {
                if (data.status === "1") {
                    console.log("提交成功");
                    window.location.href = data.url;
                }
                else if (data.status === "0") {
                    console.log("提交失败，请稍后再试！");
                }
            }
        });
    }, false);
};