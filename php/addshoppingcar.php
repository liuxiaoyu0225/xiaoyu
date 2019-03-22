<?php
@require_once("config.php");
$goodsid=$_GET["goodsid"];
$goodsname=$_GET["goodsname"];
$goodsprice=$_GET["goodsprice"];
$goodskid=$_GET["goodskid"];
$goodsimg=$_GET["goodsimg"];
$goodstype=$_GET["goodstype"];
$goodsnum=$_GET["goodsnum"];
$userid=$_GET["userid"];
$str1="select count(*) from  shopingcar where  userid='$userid' and  goodsid='$goodsid' and goodskid='$goodskid' and type=1";
$result = mysql_query($str1);

$item  = mysql_fetch_array($result);
// echo json_encode($result);
if($item[0]>0){
    // 有就新增
$str="update  shopingcar set goodsnum = goodsnum+$goodsnum  where  userid=$userid and  goodsid=$goodsid";
}else{
    // 没有就添加
    $str="insert into shopingcar (goodsid,goodsname,goodsprice,goodskid,goodsimg,goodstype,goodsnum,userid,type) values('$goodsid','$goodsname','$goodsprice','$goodskid','$goodsimg','$goodstype','$goodsnum','$userid','1')";
}

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