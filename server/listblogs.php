<?php
session_start();
ob_start();
include("autoload.php");
$mainDAO =new MainDAO();
$start=$_REQUEST['start'];
$limit=$_REQUEST['limit'];
$allPosts=$mainDAO->fetchAllBlogs($start,$limit);
echo json_encode($allPosts);
?>