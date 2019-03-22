<?php
@require_once("config.php");
$str="SELECT count(*) FROM goodinfo2 WHERE type='家居' ";
$result=mysql_query($str);

$count=mysql_fetch_array($result);

echo json_encode($count[0]);

?>