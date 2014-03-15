<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
session_start();
ob_start();
include("autoload.php");
$mainDAO =new MainDAO();
$userId=$_REQUEST['userId'];;
$question=$_REQUEST['question'];
if($mainDAO->saveQ($userId,$question)){
	$result="{success:true}";
}else{
	$result="{success:false}";
}
echo $result;
?>