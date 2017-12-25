var index = 1;
var timer;


window.onload = function () {
    carousel();

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

