<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
session_start();
ob_start();
include("autoload.php");
$mainDAO =new MainDAO();
$questionId=$_REQUEST['questionId'];
$allPosts=$mainDAO->fetchAllAnswers($questionId);
echo json_encode($allPosts);
?>