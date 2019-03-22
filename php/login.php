<?php

@require_once("config.php");
$usertel=$_GET["username"];

$userpwd=$_GET["userpwd"];
 $str="SELECT * from userinfo where type=1 and username='$usertel'";

$result=mysql_query($str);
$item=mysql_fetch_array($result);

$obj=array();
if($item){
    $exitpwd=$item["userpwd"];
    if( $exitpwd==$userpwd){
        $obj["id"]=$item["id"];
        $obj["code"]=1;
        $obj["msg"]="登录成功";
    }else{
        $obj["code"]=0;
        $obj["msg"]="账户与密码不匹配";
    }
}else{
    $obj["code"]=0;
    $obj["msg"]="账户不存在";
}


echo json_encode($obj);



?>