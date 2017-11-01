var index = 1;
var timer;
var slideTime;

window.onload = function () {
    carousel();
    slide();

};

function carousel() {
    var container = document.getElementsByClassName("imgContainer")[0];

    autoPlay();

    container.onmouseout = autoPlay;
    container.onmousemove = stopPlay;

    splotClick();

}

function autoPlay() {

    timer = setInterval(function () {
        nextMove();
    }, 1000);
}

function stopPlay() {
    clearInterval(timer);
}

function changeImg(index) {
    var img = document.getElementsByClassName("imgList")[0].getElementsByTagName("img");
    var len = img.length;

    for (var i = 0; i < len; i++) {
        img[i].className = "";
    }

    img[index - 1].className = "img-on";
}

function changeIndex(index) {
    var indexList = document.getElementsByClassName("spot")[0].getElementsByTagName("span");
    var len = indexList.length;

    for (var i = 0; i < len; i++) {
        indexList[i].className = "";
    }

    indexList[index - 1].className = "on";

}

function changeText(index) {
    var textList = document.getElementsByClassName("text")[0].getElementsByTagName("a");
    var len = textList.length;

    for (var i = 0; i < len; i++) {
        textList[i].className = "";
    }

    indexList[index - 1].className = "text-on";
}
function nextMove() {

    index += 1;

    if (index > 4) {
        index = 1;
    }
    if (index < 1) {
        index = 4;
    }

    changeIndex(index);
    changeImg(index);
}

function splotClick() {
    var indexList = document.getElementsByClassName("spot")[0].getElementsByTagName("span");
    var len = indexList.length;

    for (var i = 0; i < len; i++) {
        (function (i) {
            indexList[i].onclick = function () {
                index = indexList[i].getAttribute("index");
                changeIndex(index);
                changeImg(index);
            }
        })(i)
    }
}

function slide() {
    var notice = document.getElementsByClassName("notice")[0];
   autoSlide();
    notice.onmousemove = stopSlide;

    notice.onmouseout = autoSlide;
}

function autoSlide() {
    var notice = document.getElementsByClassName("notice")[0];
    var table = notice.getElementsByTagName("table")[0];
    var distance=parseInt(table.style.top);

    slideTime = setInterval(function () {
        distance-=5;

        if(parseInt(distance)<-350){
            distance = 300;
        }
        table.style.top = distance+"px";
    },1000)
}
function stopSlide() {
    clearInterval(slideTime);
}