<?php
session_start();
ob_start();
include("autoload.php");
$mainDAO =new MainDAO();
$name=$_REQUEST['name'];
$email=$_REQUEST['email'];
$token=$_REQUEST['token'];
$userId=$_REQUEST['userId'];

if($userId==null || $userId==""){
	$token=uniqid();		
	if($userId=$mainDAO->saveSettings($name,$email,$token)){
		$result="{'success':true,userId:'$userId',token:'$token',id:'$token',name:'$name',email:'$email'}";
	}else{
		$result="{'success':false}";
	}
}else{	
	$updateFlag=$mainDAO->updateSettings($_REQUEST,$userId);
	if($updateFlag>0){
		//$result="{success:true,guid:'$guid',name:'$name',email:'$email'}";
		$result="{'success':true,userId:'$userId',token:'$token',id:'$token',name:'$name',email:'$email'}";
	}else{
		$result="{'success':false}";	
	}	
}
//$result+="]";
echo $result;
?>