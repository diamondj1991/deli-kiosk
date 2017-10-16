
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
	
	//SQL to build table for clerk's view of the order's that have been input in to the database
	$grabSQL = $conn->query("SELECT order.name, order.order_id, product.product_id, product.brand, product.description, product.price, orderline.quantity, orderline.filled FROM `order`
JOIN orderline ON order.order_id = orderline.order_id
JOIN product ON orderline.product_id = product.product_id WHERE orderline.filled = 0");
	
	echo "DELI ORDERS";
    echo "<tr ><td>NAME</td><td>ORDER ID</td><td>PRODUCT ID</td><td>BRAND</td><td>DESCRIPTION</td><td>PRICE</td><td>QUANTITY</td><td></td></tr>";
   
    while ($row = mysqli_fetch_array($grabSQL)) {
		echo "<div id='responsecontainer'>";
		echo "<tr>";
        echo "<td>". $row["name"] . "</td>";
        echo "<td id='order_id'>". $row["order_id"] . "</td>";
		echo "<td id='product_id'>". $row["product_id"] . "</td>";
		echo "<td>". $row["brand"] . "</td>";
		echo "<td>". $row["description"] . "</td>";
		echo "<td>". $row["price"] . "</td>";
		echo "<td>". $row["quantity"] . "</td>";
		echo "<td style='border: none;' background-color='blue';><a href='#' class='remove_order'>" . "Remove" . "</a></td>";
        echo "</tr>";
		echo "</div>";
     }
	 $conn->close();
?>
