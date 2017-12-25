var btn = document.getElementById('in');

btn.addEventListener('click',function () {
    var name = document.getElementById("name").value;
    var psw = document.getElementById("psw").value;


    $.ajax({
        url:'http://127.0.0.1:3000',
        method:'POST',
        data:{
            name:name,
            psw:psw
        },
        dataType:'jsonp',
        jsonpCallback:'data',
        success:function (data) {
          window.location.href=data.url;
        }
    });
},false);

