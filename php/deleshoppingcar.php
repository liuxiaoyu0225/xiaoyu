<?php
@require_once("config.php");

$id=$_GET["id"];
$userid=$_GET["userid"];
$str="UPDATE shopingcar set type='0' where userid='$userid' and id='$id'";
// id=9&userid=5
mysql_query($str);
$count=mysql_affected_rows();

$obj=array();
if($count>0){
    $obj["code"]=1;
    $obj["msg"]="删除成功";
}else{
    $obj["code"]=0;
    $obj["msg"]="网络繁忙请稍后再试";
}

echo json_encode($obj);



?>