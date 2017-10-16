$(document).ready(function() {
	
	// Set accordion widget for products
	$( "#accordion" ).accordion({collapsible: true});
	

	
	//Collect pre-declared array  from home_page.js and de-strinifgy it back in to an object (sessionStorage saves things as strings so we use JSON.stringify() and JSON.parse())
	// This way, each time there's a page redirect, it doesn't reinitialize the arrays every time this js is ran
	var idArray = JSON.parse(sessionStorage.getItem("idString"));
	var productArray = JSON.parse(sessionStorage.getItem("productString")); 
	var brandArray = JSON.parse(sessionStorage.getItem("brandString")); 
	var priceArray = JSON.parse(sessionStorage.getItem("priceString"));
	var quantityArray = JSON.parse(sessionStorage.getItem("quantityString")); 

	
	//Collect values to save for submit to DB on click of Add button
	$(".add_btn").button().click(function() {
		var $row = $(this).closest("tr"); //goes up the DOM to find the nearest tr
		var $product_id = $row.find(".product_id").text();  //goes down the DOM to find the element with product_id class
		var $product = $row.find(".product").text();  //goes down the DOM to find the element with product class
		var $brand = $row.find(".brand").text();  //goes down the DOM to find the element with brand class 
		var $price = $row.find(".price").text();  //goes down the DOM to find the element with price class
		var $quantity = $row.find(".quantity").val();
		
		idArray.push($product_id);
		
		productArray.push($product);
		
		brandArray.push($brand);
		
		priceArray.push($price);
		
		quantityArray.push($quantity);
		
		//$('.confirm-selection').html('	&#10004;	<b>Added to cart<b>').css( "color", "#96f226" );
		$(this).closest("td").after('<td style="border: none; color:#96f226">&nbsp;&nbsp;&#10004;	<b>Added to cart<b></td>');

	});
	

	// Traverse through different deli options
	$('.meat_btn').button().click(function() {
	    sessionStorage.setItem("idString", JSON.stringify(idArray));
		sessionStorage.setItem('productString', JSON.stringify(productArray)); 
		sessionStorage.setItem('brandString', JSON.stringify(brandArray));  
		sessionStorage.setItem('priceString', JSON.stringify(priceArray));  
		sessionStorage.setItem('quantityString', JSON.stringify(quantityArray)); 
		window.location.href = "meat.html";
	});
	$('.cheese_btn').button().click(function() {
		sessionStorage.setItem("idString", JSON.stringify(idArray));
		sessionStorage.setItem('productString', JSON.stringify(productArray)); 
		sessionStorage.setItem('brandString', JSON.stringify(brandArray)); 
		sessionStorage.setItem('priceString', JSON.stringify(priceArray));  
		sessionStorage.setItem('quantityString', JSON.stringify(quantityArray)); 
		window.location.href = "cheese.html";
	});
	$('.seafood_btn').button().click(function() {
		sessionStorage.setItem("idString", JSON.stringify(idArray));
		sessionStorage.setItem('productString', JSON.stringify(productArray)); 
		sessionStorage.setItem('brandString', JSON.stringify(brandArray)); 
		sessionStorage.setItem('priceString', JSON.stringify(priceArray));
		sessionStorage.setItem('quantityString', JSON.stringify(quantityArray)); 
		window.location.href = "seafood.html";
	});
	$('.side_btn').button().click(function() {
		sessionStorage.setItem("idString", JSON.stringify(idArray));
		sessionStorage.setItem('productString', JSON.stringify(productArray)); 
		sessionStorage.setItem('brandString', JSON.stringify(brandArray)); 
		sessionStorage.setItem('priceString', JSON.stringify(priceArray));
		sessionStorage.setItem('quantityString', JSON.stringify(quantityArray)); 
		window.location.href = "side.html";
	});
	
	// Redirect to the submission page
	$('#forward').button().click(function() {
		sessionStorage.setItem("idString", JSON.stringify(idArray));
		sessionStorage.setItem('productString', JSON.stringify(productArray)); 
		sessionStorage.setItem('brandString', JSON.stringify(brandArray)); 
		sessionStorage.setItem('priceString', JSON.stringify(priceArray));
		sessionStorage.setItem('quantityString', JSON.stringify(quantityArray)); 
		window.location.href = "submission.html";
	});
  
});

