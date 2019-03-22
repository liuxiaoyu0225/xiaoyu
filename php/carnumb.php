<?php
@require_once("config.php");
$id=$_GET["id"];
$userid=$_GET["userid"];
$goodsnum=$_GET["goodsnum"];
$str="UPDATE shopingcar set goodsnum='$goodsnum' where userid='$userid' and id='$id'";
mysql_query($str);
$count=mysql_affected_rows();
$obj=array();
if($count>0){
    $obj["code"]=1;
    $obj["msg"]="成功";
}else{
    $obj["code"]=0;
    $obj["msg"]="网络繁忙请稍后再试";
}

echo json_encode($obj);



?>