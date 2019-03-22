 //滚动条滚动到指定距离 头部做固定定位
 $(window).scroll(function () {
    var height = parseInt($("#top").css("height"));
    if ($(window).scrollTop() >= height) {
        $("#header").css({ "position": "fixed", "top": "0", "left": "0", "z-index": "10" })
    }
    if ($(window).scrollTop() <= height) {
        $("#header").css("position", "static");
    }
});
// 轮播图
var timer = null;
var index = 0;
var imgList = document.querySelectorAll("#ad #ad-img li");
var navList = document.querySelectorAll("#ad #ad-nav li p");
lunbo();
function lunbo() {
    var maxLength = navList.length;
    timer = setInterval(function () {
        index++;
        if (index >maxLength - 1) {
            index = 0;
        }
        show()

    }, 2000)
};
// 设置鼠标放在nav点上时出现对应图片,并清除定时器
for(let j=0;j<navList.length;j++){
    let temp=navList[j];
// 鼠标移上
    temp.onmouseover=function(){
        index=j;
        show()
        clearInterval(timer);
    }
    // 鼠标移出
    temp.onmouseout=function(){
        lunbo();
    }
}
function show() {
    for (let i = 0; i < navList.length; i++) {
        imgList[i].className = "";
        navList[i].className = "";

    }
    imgList[index].className = "item";
    navList[index].className = "item";
}