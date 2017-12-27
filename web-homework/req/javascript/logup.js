window.onload = () => {
    var btn = document.getElementById('btn');

    btn.addEventListener('click',function () {

        var name = document.getElementById("name").value;
        var psw = document.getElementById("psw").value;
        $.ajax({
            url:"http://127.0.0.1:3000/logup/",
            method:"GET",
            data:{
                name:name,
                psw:psw
            },
            dataType:"jsonp",
            jsonpCallback:"logup",
            success:(data)=>{

                if (data.status === "1"){
                    window.location.href = data.url;
                }
                if (data.status === "0"){
                    alert("注册失败，请重新注册！");
                }
            }
        });
    },false);
};