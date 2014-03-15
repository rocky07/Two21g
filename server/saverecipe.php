<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
session_start();
ob_start();
include("autoload.php");
$mainDAO =new MainDAO();
$title=$_REQUEST['title'];
$ingredients=$_REQUEST['ingredients'];
$prep=$_REQUEST['prep'];
$notes=$_REQUEST['notes'];
$avatar_id=1;
$evolved_from=1;
if($mainDAO->modifyRecipes($title,$ingredients,$prep,$notes,$avatar_id,$evolved_from)){
	$result="{success:true}";
}else{
	$result="{success:false}";
}
echo $result;
?>