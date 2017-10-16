<!DOCTYPE html>
<html>
   <head>
      <meta charset = "utf-8">
      <title>Search Results</title>
   <style type = "text/css">
         body  { font-family: sans-serif;
                 background-color: lightyellow; } 
         table { background-color: lightgreen; 
                 border-collapse: collapse; 
                 border: none; }
         td    { padding: 5px; border: 1px solid gray;}
		 td:nth-child(8) {
			background-color: lightyellow; 
			border: none;
		}
         tr:nth-child(odd) {
                 background-color: lightblue; }
      </style>
	  <script type="text/javascript" src="js/jquery-2.1.4.min.js"></script>
	  <script type="text/javascript">
	  $(document).ready(function () {
		
		var ajaxCall = function () {
			$.ajax({    //create an ajax request to load_page.php
				type: "GET",
				url: "<?php echo $_SERVER['PHP_SELF']; ?>",             
				dataType: "html",   //expect html to be returned                
				success: function(response){                    
				$("#responsecontainer").html(response); 
				//alert(response);
				}
			});
		}
		setInterval(ajaxCall, 5000);
			//$('.remove_order').click(function() {

			//var $row = $(this).closest('tr');
			//$row.remove();

			//});
	  
	  });
	  </script>
   </head>
<body>

<table>
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
	$grabSQL = $conn->query("SELECT order.name, order.order_id, product.product_id, product.brand, product.description, product.price, orderline.quantity FROM `order`
JOIN orderline ON order.order_id = orderline.order_id
JOIN product ON orderline.product_id = product.product_id");
	
	echo "DELI ORDERS";
    echo "<tr ><td>NAME</td><td>ORDER ID</td><td>PRODUCT ID</td><td>BRAND</td><td>DESCRIPTION</td><td>PRICE</td><td>QUANTITY</td><td></td></tr>";
   
    while ($row = mysqli_fetch_array($grabSQL)) {
		echo "<div id='responsecontainer'>";
		echo "<tr>";
        echo "<td>". $row["name"] . "</td>";
        echo "<td>". $row["order_id"] . "</td>";
		echo "<td>". $row["product_id"] . "</td>";
		echo "<td>". $row["brand"] . "</td>";
		echo "<td>". $row["description"] . "</td>";
		echo "<td>". $row["price"] . "</td>";
		echo "<td>". $row["quantity"] . "</td>";
		echo "<td style='border: none;' background-color='blue';><a href='#' class='remove_order'>" . "Remove" . "</a></td>";
        echo "</tr>";
		echo "</div>";
     }
?>
</table><br>
</body>
</html>