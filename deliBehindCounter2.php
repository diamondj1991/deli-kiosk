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
	
	//Take the user's name from the HTML hidden form input and insert into order table, get back that record's order_id
	if (isset($_POST["name"])) {
		$name = $_POST["name"];
		$insert_order_SQL = $conn->query("INSERT INTO `order` (name) VALUES ('$name')");
		$order_id = $conn->insert_id;
	}
	
	
   //Insert form inputs along with collected order_id in to orderline
	if(isset($_POST["product_ids"]) && isset($_POST["quantities"])) {
    
		for ($x = 0; $x <count($_POST["product_ids"]); $x++) {
	
			$product_id = $_POST["product_ids"][$x];
			//$product = $_POST["products"][$x];
			//$brand = $_POST["brands"][$x];
			$quantity = $_POST["quantities"][$x];
			

			//build insert query to put all of customer's orders in to the database
			$insert_orderline_SQL = $conn->query( " INSERT INTO orderline (product_id, order_id, quantity)  VALUES ('$product_id', '$order_id', '$quantity') " );

		} 
	} 
	
	

	$conn->close();
    echo("done");
?>