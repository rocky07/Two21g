<?php
session_start();
ob_start();
include("autoload.php");
$mainDAO =new MainDAO();
$questionId=$_REQUEST['questionId'];
$allPosts=$mainDAO->fetchAllAnswers($questionId);
echo json_encode($allPosts);
?>