  
  
  $("#dianjizhuce").click(function(){
    $("#register-shadow").show();

  })
  
  // 登录

  $(document).on("click","#login",function(){
    $("#login-shadow").show();
    $(document.body).css({
        "overflow-x": "hidden",
        "overflow-y": "hidden"
    });

    $("#denglu").click(function () {
        var username = $("#username").val();
        var userpwd = $("#userpwd").val();
        $.ajax({
            type: "get",
            url: "../php/login.php",
            data: {
                username: username,
                userpwd: userpwd
            },
            dataType: "json",
            success: function (result) {
                if (result["code"] == 1) {
                    var userid=result["id"];
                    console.log(userid);
                    confirm(result["msg"]);
                    $("#login-shadow").hide();
                    if($("#remeber").attr("checked")){
            setCookie("username", username, 7);
            setCookie("userid", userid, 7);

        }else{
            setCookie("username", username, 1);
            setCookie("userid", userid, 7);
        }
        $("#login-tu").hide();
        $("#denglu-suce").show();
                } else {
                    $("#zhuanghu-tips").html(result["msg"]);
                    $("#zhuanghu-tips").css("color", "red");
                }
            }
        })

        // $("#login-shadow").hide();
        // $("#zhuanghu-tips").html("");
        $("#dianjizhuce").click(function(){
            $("#login-shadow").hide();
           $("#register-shadow").show();
        })
      
        $("#username").val("");
        $("#userpwd").val("");
    })

});
// 登录X的点击事件
$("#cancle").click(function () {
    $("#login-shadow").hide();
    $(document.body).css({
        "overflow-x": "auto",
        "overflow-y": "auto"
    });
    $("#zhuanghu-tips").html("");
    $("#username").val("");
    $("#userpwd").val("");
});