$(document).ready(function() {
	
	//Collect all of the user's input values
	var name = sessionStorage.getItem('name'); 
	var idsSaved = (JSON.parse(sessionStorage.getItem('idString')));
	var productsSaved = (JSON.parse(sessionStorage.getItem('productString')));
	var brandsSaved = (JSON.parse(sessionStorage.getItem('brandString')));
	var pricesSaved = (JSON.parse(sessionStorage.getItem('priceString')));
	var quantitiesSaved = (JSON.parse(sessionStorage.getItem('quantityString')));
	var total = 0;
	

    //function to calculate the total cost
	function calcTotal() {
		$(pricesSaved).each(function (i) {
			var price = Number(pricesSaved[i].substring(1));
			var quantity = Number(quantitiesSaved[i]);
			total += (price * quantity);
			
			document.getElementById("total").innerHTML = "Total: " + "$" + total.toFixed(2);
		});
	}
	
	//Function to build the shopping cart table
	function writeTable() {
    var body = $('#finalOrder');
		for (var i = 0; i < productsSaved.length; i++) {
			var tr = $('<tr/>').appendTo(body);
			tr.append("<td style='display:none;'><input type='text' class='id' name='product_ids[] ' value= " + "'" + idsSaved[i] + "'" + " readonly></td>").
			append("<td><input type='text' class='pr' name='products[] ' value= " + "'" + productsSaved[i] + "'" + " readonly></td>").append("<td><input type='text' class='br' name='brands[] ' value= " + "'" + brandsSaved[i] + "'" + " readonly></td>")
			.append("<td><input type='text' class='qu' name='quantities[] ' value= " + "'" + quantitiesSaved[i] + "'" + " readonly></td>").append("<td><input type='text' class='co' name='prices[] '  style='display:none;' value= " + "'" + pricesSaved[i] + "'" + " readonly></td>").
			append('<td style="border: none;"><a href="#" class="remove_field">Remove</a></td>');
		}
	}
	
	writeTable();
	calcTotal();

	
	//Functionality to remove an item from the cart (removes each form input from the DOM by this row and the session stored arrays)
	$('.remove_field').click(function() {

		var $row = $(this).closest('tr');
		var quantity = Number($row.find(".qu").val());
		var price = Number($row.find(".co").val().substring(1));
		
		total -= (price * quantity);

		document.getElementById("total").innerHTML = "Total: " + "$" + total.toFixed(2);
		
		$row.remove();
		
		var idIndex = idsSaved.indexOf($row.find(".id").val());
		var productIndex = productsSaved.indexOf($row.find(".pr").val());
		var brandIndex = brandsSaved.indexOf($row.find(".br").val());
		var quantityIndex = quantitiesSaved.indexOf($row.find(".qu").val());
		var priceIndex = pricesSaved.indexOf($row.find(".co").val());
		
		var tmp_idsSaved = (JSON.parse(sessionStorage.getItem('idString')));
		var tmp_productsSaved = (JSON.parse(sessionStorage.getItem('productString')));
		var tmp_brandsSaved = (JSON.parse(sessionStorage.getItem('brandString')));
		var tmp_pricesSaved = (JSON.parse(sessionStorage.getItem('priceString')));
		var tmp_quantitiesSaved = (JSON.parse(sessionStorage.getItem('quantityString')));
		
		tmp_idsSaved.splice(idIndex, 1);
		tmp_productsSaved.splice(productIndex, 1);
		tmp_brandsSaved.splice(brandIndex, 1);
		tmp_pricesSaved.splice(quantityIndex, 1);
		tmp_quantitiesSaved.splice(priceIndex, 1);
		
		sessionStorage.setItem("idString", JSON.stringify(tmp_idsSaved));
		sessionStorage.setItem('productString', JSON.stringify(tmp_productsSaved)); 
		sessionStorage.setItem('brandString', JSON.stringify(tmp_brandsSaved));  
		sessionStorage.setItem('priceString', JSON.stringify(tmp_pricesSaved));  
		sessionStorage.setItem('quantityString', JSON.stringify(tmp_quantitiesSaved)); 

	});
	
	//Submit final order
	$("#submit1").button().click(function() {  
		
		 /* Get form elements values */
		var values = $('#form1').serialize(); 

		//Use ajax to push form data to be processed by PHP, on success of POST, user has completed order and will be redirected to deli kiosk start page
		$.ajax({
			url: "deliBehindCounter2.php",
			type: "post",
			data: values ,
			success: function () {     
				$('#form1').submit();
			},
			error: function() {
				alert("Error loading order!");;
			}
		});
     }); 
	 
	 //Continue shopping
	$('.meat_btn').button().click(function() {
		window.location.href = "meat.html";
	});
	$('.cheese_btn').button().click(function() {
		window.location.href = "cheese.html";
	});
	$('.seafood_btn').button().click(function() {
		window.location.href = "seafood.html";
	});
	$('.side_btn').button().click(function() {
		window.location.href = "side.html";
	});
	
});