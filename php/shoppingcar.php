<?php

@require_once("config.php");

$userid=$_GET["userid"];

$str="select * from shopingcar where userid='$userid' and type=1";

$result=mysql_query($str);
$list=array();
while($item=mysql_fetch_array($result,MYSQL_ASSOC)){
$list[]=$item;
}
echo json_encode($list);


?>