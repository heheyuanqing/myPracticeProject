var slideTime;

window.onload = function () {
    slide();
};

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