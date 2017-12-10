window.onload = function () {
    var name = document.getElementsByClassName("name")[0].value,
        psw = document.getElementsByClassName("psw_f")[0].value,
        btn = document.getElementsByClassName("btn")[0];


        btn.addEventListener('click',function () {
            var xmlHttp;

            if (window.XMLHttpRequest){
                xmlHttp = new XMLHttpRequest();
            }
            else{
                xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
            }

            xmlHttp.onreadystatechange = function () {
              if (xmlHttp.readyState === 4 &&xmlHttp.status === 200){
                  var information = JSON.parse(xmlHttp.responseText);
              }
            };

            xmlHttp.open("POST","/code/project/sign-in&up/infor.txt",true);
            xmlHttp.send();
        },false);

};

