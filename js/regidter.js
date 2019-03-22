
    $(document).on("click", "#register", function () {
        $("#register-shadow").show();
        $(document.body).css({
            "overflow-x": "hidden",
            "overflow-y": "hidden"
        });
        // 遮罩层出来就有验证码
        var yanzheng = yanzhengma1(4);
        $("#verification").html(yanzheng);
        // 点击验证码更新
        $("#verification").click(function () {
             yanzheng = yanzhengma1(4);
            $("#verification").html(yanzheng);
        })
    
    // 点击注册按钮
    $("#register-zhuce").click(function () {
        $("#zhucename-tips").html("");
        $("#zhuceyanzhen-tips").html("");
        $("#mima1-tips").html("");
        $("#mima2-tips").html("");
        var userpwd = $("#register-pwd").val();
        var userpwd1 = $("#register-pwd1").val();
        var username = $("#register-name").val();
        var yanzhengma = $("#verification-code").val();
        var usernameReg = /^1[3-8][0-9]{9}$/g;
        var username1Reg = /^[1-9a-z][0-9a-z]{4,10}[@][0-9a-z]{2,10}\.(com|cn)$/ig;
        var userpwdReg = /^[a-zA-Z0-9_$]{6,14}$/g;
        if (usernameReg.test(username) || username1Reg.test(username)) {
            $("#verification").click(function () {
                yanzheng = yanzhengma1(4);
                $("#verification").html(yanzheng);
            })
          

            var useryan = yanzhengma.toUpperCase();
            var suijiyan = yanzheng.toUpperCase();
            // 验证码是否正确
            console.log(useryan+"="+suijiyan);
            if (useryan == suijiyan) {

                // 密码是否合法
                if (userpwdReg.test(userpwd)) {
                    if (userpwd1 == userpwd) {
                        // 数据库
                        if ($("#registerbtn")[0].checked) {

                            $.ajax({
                                type: "get",
                                url: "../php/regiest.php",
                                data: {
                                    username: username,
                                    userpwd: userpwd
                                },
                                dataType: "json",
                                success: function (obj) {
                                    if (obj["code"] == 1) {
                                        confirm(obj["msg"]);
                                        $("#register-shadow").hide();
                                        $("#register-name").val("");
                                        $("#verification-code").val("");
                                        $("#register-pwd").val("");
                                        $("#register-pwd1").val("");
                                    } else {
                                        confirm(obj["msg"]);
                                    }
                                }
                            })

                        } else {
                            confirm("请点击同意本站协议");
                        }
                    } else {
                        $("#mima2-tips").html("两次密码不同");
                        $("#mima2-tips").css("color", "red");
                    }
                } else {
                    $("#mima1-tips").html("密码格式不正确");
                    $("#mima1-tips").css("color", "red");
                }

            } else {
                $("#zhuceyanzhen-tips").html("验证码输入错误");
                $("#zhuceyanzhen-tips").css("color", "red");
            }
        } else {
            $("#zhucename-tips").html("请先输入正确的手机号码或邮箱");
            $("#zhucename-tips").css("color", "red");
        }

    })
});





    //验证码
    function yanzhengma1(length) {
        var upperCodeList = [];
        var lowerCodeList = [];
        var numList = [];
        var otherList = ["$", "_"];

        for (var i = 65; i < (65 + 26); i++) { //A的编码为65  Z 65+25
            var upperCode = String.fromCharCode(i); //A  B  C
            var lowerCode = String.fromCharCode(i + 32); //a:97  A:65
            upperCodeList.push(upperCode);
            lowerCodeList.push(lowerCode);
            //大写的集合里面丢大写   小写的集合里面丢小写
        }
        for (var i = 0; i <= 9; i++) {
            numList.push(String(i)); //["0","1","2"]
        }

        var bigList = otherList.concat(numList, upperCodeList, lowerCodeList);
        // alert(bigList);
        var str = "";
        for (var k = 0; k < length; k++) {
            var codeIndex = Math.round(Math.random() * (bigList.length - 1));
            var code = bigList[codeIndex];
            str += code;
        }
        return str;
    }


    // 注册x的点击事件
    $(".cancle").click(function () {
        // alert(1111)
        $("#register-shadow").hide();
        $(document.body).css({
            "overflow-x": "auto",
            "overflow-y": "auto"
        });
        $("#register-name").val("");
        $("#verification-code").val("");
        $("#register-pwd").val("");
        $("#register-pwd1").val("");

    });