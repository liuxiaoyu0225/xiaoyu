<?php
@require_once("config.php");
$username=$_GET["username"];
$userpwd=$_GET["userpwd"];

$str="select count(*) from userinfo where username='$username'";
$result=mysql_query($str);
$item=mysql_fetch_array($result);
// echo json_encode($item);
$obj=array();
// 判断是否存在
if($item[0]>0){
    $obj["code"]=0;
    $obj["msg"]="用户已存在";
}else{
$str1="insert into userinfo (username,userpwd,type) values('$username','$userpwd',1)";
mysql_query($str1);
$count=mysql_affected_rows();
if($count>0){
    $obj["code"]=1;
    $obj["msg"]="注册成功,请前往登录";
}else{
    $obj["code"]=0;
    $obj["msg"]="注册失败";
}
}
echo json_encode($obj);

?>