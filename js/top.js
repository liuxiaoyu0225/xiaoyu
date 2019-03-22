// 头部登录注册页面的显示和消失

if (getCookie("username")) {
    $("#login-tu").hide();
    $("#denglu-suce").show();
    $("#denglu-suce").hover(function () {
        $("#cancle-top").show();
    }, function () {
        $("#cancle-top").hide();
    })
};
$("#cancle-top").click(function () {
    $("#login-tu").show();
    $("#denglu-suce").hide();
    setCookie("username", username, -1);
})
// 获取焦点把内容替换
$("#login-tu").hover(function () {

    $("#login-tu").html(" <a id='register' style='cursor: pointer' >注册</a> /<a id='login' style='cursor: pointer'>登录</a> ");

}, function () {
    $("#login-tu").html("<img src='./images/index/top4.png'>");

});
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