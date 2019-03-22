<?php

@require_once("config.php");
$paixu=$_GET["paixu"];
$str="SELECT * FROM goodinfo2 WHERE type='家居' order by price $paixu";
$result=mysql_query($str);

$list=array();
while($item=mysql_fetch_array($result,MYSQL_ASSOC)){
$list[]=$item;
}
echo json_encode($list);

?>