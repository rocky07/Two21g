<?php
session_start();
ob_start();
include("autoload.php");
$mainDAO =new MainDAO();
$userId=$_REQUEST['userId'];;
$title=$_REQUEST['title'];
$blog=$_REQUEST['blog'];
if($mainDAO->saveBlogs($userId,$title,$blog)){
	$result="{success:true}";
}else{
	$result="{success:false}";
}
echo $result;
?>