<?php
session_start();
ob_start();
include("autoload.php");
$mainDAO =new MainDAO();

$avatar=$_REQUEST['name'];
$email=$_REQUEST['email'];
$token=$_REQUEST['token'];
if($mainDAO->registerUser($avatar,$email,$token)){
	$result="{success:true}";
}else{
	$result="{success:false}";
}
echo $result;
?>