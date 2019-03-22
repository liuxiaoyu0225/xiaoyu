<?php
@require_once("config.php");
$id=$_GET["id"];
$str="SELECT * FROM goodsinfo where id='$id' and type=1";
$result=mysql_query($str);
$item=mysql_fetch_array($result,MYSQL_ASSOC);
echo json_encode($item);



?>