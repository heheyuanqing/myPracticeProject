window.onload = () => {
    var btn = document.getElementById('btn');

    btn.addEventListener('click', function () {
        var name = document.getElementById("name").value;
        var tel = document.getElementById('tel').value;
        var vol = document.getElementById('vol').value;
        var due = document.getElementById('due').value;
        $.ajax({
            url: "http://127.0.0.1:3000/appli/",
            method: "GET",
            data: {
                name: name,
                tel:tel,
                vol :vol,
                due:due
            },
            dataType: "jsonp",
            jsonpCallback: "appli",
            success: (data) => {

                if (data.status === "1") {
                    alert("申请成功");
                }
                else if (data.status === "0") {
                    alert("申请失败，请稍后再试！");
                }
            }
        });
    }, false);
};