const rightBtn = document.querySelector('#right-btn');
const leftBtn = document.querySelector('#left-btn');
const carousel = document.querySelector('#carousel');

var carouselItems = document.querySelectorAll('.carousel');
var i = 0;

function showItem(index) {
    carouselItems.forEach(item => item.style.opacity = 0);
    carouselItems[index].style.opacity = 1;
    carousel.style.transform = `translateX(${-index*100}%)`;
}

function next() {
    i = (i + 1) % carouselItems.length;
    showItem(i);
}

function prev() {
    i = (i - 1 + carouselItems.length) % carouselItems.length;
    showItem(i);
}

showItem(i);

var video = document.querySelectorAll('video');
function stopVideo() {
    video.pause();
    video.currentTime = 0;
}

$("#upcoming-event-info").hover(function() {
    $(".link").style.color = "var(--link-color)";
    $("#event-img").style.transform = "translateY(-10px)";
}, function() {
    $(".link").style.color = "inherit";
    $("#event-img").style.transform = "translateY(0)";
});