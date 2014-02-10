<?php
session_start();
ob_start();
include("autoload.php");
$mainDAO =new MainDAO();
$name=$_REQUEST['name'];
$email=$_REQUEST['email'];
$guid=$_REQUEST['guid'];
if($guid==null && $guid==""){	
	$guid=uniqid();
	if($mainDAO->saveSettings($name,$email,$guid)){
		$result="{success:true,guid:'$guid',name:'$name',email:'$email'}";
	}else{
		$result="{success:false}";
	}
}else{	
	$updateFlag=$mainDAO->saveSettings($_REQUEST,$guid);
	if($updateFlag>0){
		//$result="{success:true,guid:'$guid',name:'$name',email:'$email'}";
		$result="{success:true,id:'$guid',name:'$name',email:'$email'}";
	}else{
		$result="{success:false}";	
	}	
}
echo $result;
?>