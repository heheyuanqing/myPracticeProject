window.onload = () => {
    var btn = document.getElementById('btn');

    btn.addEventListener('click', function () {
        var name = document.getElementById("name").value;
        var tel = document.getElementById('tel').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;
        $.ajax({
            url: "http://127.0.0.1:3000/message/",
            method: "GET",
            data: {
                name: name,
                email:email,
                tel:tel,
                mes:message
            },
            dataType: "jsonp",
            jsonpCallback: "message",
            success: (data) => {

                if (data.status === "1") {
                    alert("投稿成功");
                }
                else if (data.status === "0") {
                    alert("投稿失败，请稍后再试！");
                }
            }
        });
    }, false);
};