<?php
session_start();
ob_start();
include("autoload.php");
$mainDAO =new MainDAO();
$userId=$_REQUEST['userId'];
$answer=$_REQUEST['answer'];
$questionId=$_REQUEST['questionId'];
if($mainDAO->saveAnswers($userId,$questionId,$answer)){
	$result="{success:true}";
}else{
	$result="{success:false}";
}
echo $result;
?>