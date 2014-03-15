<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
session_start();
ob_start();
include("autoload.php");
$mainDAO =new MainDAO();
$userId=$_REQUEST['userId'];
$title=$_REQUEST['title'];
$blog=$_REQUEST['blog'];
if($_REQUEST['id']>0){
	if($mainDAO->updateBlog($_REQUEST)){
		$result="{success:true}";
	}else{
		$result="{success:false}";
	}	
}else{
	if($mainDAO->saveBlogs($userId,$title,$blog)){
		$result="{success:true}";
	}else{
		$result="{success:false}";
	}
}
echo $result;
?>