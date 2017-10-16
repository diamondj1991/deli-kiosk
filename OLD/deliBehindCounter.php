<!DOCTYPE html>
<html>
   <head>
      <meta charset = "utf-8">
      <title>Search Results</title>
   <script type="text/JavaScript">
	  function btnOnClk ()
	  {
		 window.location.href = "submission.html";
		
	  }
   </script>
   <style type = "text/css">
         body  { font-family: sans-serif;
                 background-color: lightyellow; } 
         table { background-color: lightgreen; 
                 border-collapse: collapse; 
                 border: 1px solid gray; }
         td    { padding: 5px; }
         tr:nth-child(odd) {
                 background-color: lightblue; }
      </style>
   </head>
<body>

<?php

	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "deli";

	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);

	// Check connection
	if ($conn->connect_error) 
	{
		die("Connection failed: " . $conn->connect_error);
	} 

	if(isset($_POST["name"]) && isset($_POST["products"]) && isset($_POST["brands"]) && isset($_POST["quantities"])) {
    
		for ($x = 0; $x <count($_POST["products"]); $x++) {
	
			$last_id = $conn->insert_id;
			$name = $_POST["name"];
			$product = $_POST["products"][$x];
			$brand = $_POST["brands"][$x];
			$quantity = $_POST["quantities"][$x];

			//build insert query to put all of customer's orders in to the database
			$insert_row = $conn->query( " INSERT INTO delicounter (name, food_type, brand, amount) VALUES ( '$name' , '$product', '$brand', '$quantity') " );

		} 
	}

	//build select query to retrieve data for table display
	$grab_row = $conn->query( " SELECT * FROM delicounter ");

	$conn->close();

?>

<table>
<?php	   
	echo "DELI ORDERS";
    echo "<tr ><td>NAME</td><td>FOOD TYPE</td><td>BRAND</td><td>AMOUNT</td></tr>";
   
    while ($row = mysqli_fetch_array($grab_row)) {
		echo "<tr>";
        echo "<td>". $row["name"] . "</td>";
        echo "<td>". $row["food_type"] . "</td>";
		echo "<td>". $row["brand"] . "</td>";
		echo "<td>". $row["amount"] . "</td>";
        echo "</tr>";
     }
?>
</table><br>
<form>
	<input type = "button" name = "testJS" value = "BACK" onclick="btnOnClk()">
</form>
</body>
</html>