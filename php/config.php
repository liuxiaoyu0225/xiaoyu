<?php 
    // /*//公用数据库连接
    @header("content-type:text/html:charset=utf-8");
    @header("Access-Control-Allow-Origin:*");
    // //创建数据库连接
    $conn = @mysql_connect("localhost","root","root");
    // //指定访问的表
    mysql_select_db("fanji",$conn);
    // //指定编码格式
    // mysql_query("set names utf8");
    mysql_query("set character set 'utf8'");
    // //公用数据库连接
        // @header("content-type:text/html:charset=utf-8");
        // @header("Access-Control-Allow-Origin:*");
        // //创建数据库连接
        // $conn = @mysql_connect("b-kml3scaefr3nl5.bch.rds.gz.baidubce.com:3306","b_kml3scaefr3nl5","123456");
        // //指定访问的表
        // mysql_select_db("b_kml3scaefr3nl5");
        // //指定编码格式
        // mysql_query("set names utf8");
?>