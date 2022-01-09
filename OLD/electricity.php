<?php
$servername = "localhost";
$username = "root";
$password = "";
$conn = mysqli_connect($servername, $username, $password,"complaint_box");
ini_set("smtp_port","25");
if(!$conn)
{
	echo "Failed";
}
else
{
echo "Connected";
$nm=$_POST['name'];
$city=$_POST['add1'];
$state=$_POST['add2'];
$dist=$_POST['dist'];
$pincode=(int)$_POST['pin'];
$email=$_POST['mail'];
$complaint=$_POST['comp'];
$sql="insert into electricityvalues('$nm','$dist','$city','$state','$pincode','$email','$complaint')";
$que=mysql_query($sql,$conn);
echo "inserted";
?>