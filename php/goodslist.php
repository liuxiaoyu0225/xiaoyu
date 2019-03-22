<?php
@require_once("config.php");
$shownum=$_GET["shownum"];
$startnum=$_GET["startnum"];
$paixu=$_GET["paixu"];
$str="SELECT * FROM goodinfo2 WHERE type='家居'  order by price $paixu LIMIT $startnum,$shownum";

//  echo $str;
$result=mysql_query($str);
// $item=mysql_fetch_array($result);
$list=array();
while($item=mysql_fetch_array($result,MYSQL_ASSOC)){
$list[]=$item;
}

echo json_encode($list);





?>