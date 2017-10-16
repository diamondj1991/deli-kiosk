<?php	   
	
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "deli_tester2";

	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);

	// Check connection
	if ($conn->connect_error) 
	{
		die("Connection failed: " . $conn->connect_error);
	} 
	
	//echo $_GET['order_id'] . $_GET['product_id'];
	//SQL to build table for clerk's view of the order's that have been input in to the database
	$oid = $_GET['order_id'];
	$pid = $_GET['product_id'];
	//$query = "UPDATE orderline SET filled = 1 WHERE order_id =" . $oid . "AND product_id ="."'".$pid."'";
	$query = "UPDATE orderline SET filled = 1 WHERE order_id = ".$oid." AND product_id = "."'".$pid."'";
	$updateSQL = $conn->query($query);
	
?>