$(document).ready(function(){

	var $write = $('#write'),
        shift = false,
        capslock = false;

//Hide the keyboard until user clicks in to the 'write (name: ______)' field	
	$('#keyboard').hide();
	

	$write.click(function() {
		$('#keyboard').show();
	});	
			
//Control the keyboard input    
	
	$('#keyboard li').click(function(){
        var $this = $(this),
            character = $this.html(); // If it's a lowercase letter, nothing happens to this variable
         
        // Shift keys
        if ($this.hasClass('left-shift') || $this.hasClass('right-shift')) {
            $('.letter').toggleClass('uppercase');
            $('.symbol span').toggle();
             
            shift = (shift === true) ? false : true;
            capslock = false;
            return false;
        }
         
        // Caps lock
        if ($this.hasClass('capslock')) {
            $('.letter').toggleClass('uppercase');
            capslock = true;
            return false;
        }
         
        // Delete
        if ($this.hasClass('delete')) {
            var html = $write.html();
             
            $write.html(html.substr(0, html.length - 1));
            return false;
        }
         
        // Special characters
        if ($this.hasClass('symbol')) character = $('span:visible', $this).html();
        if ($this.hasClass('space')) character = ' ';
        if ($this.hasClass('tab')) character = "\t";
        if ($this.hasClass('return')) character = "\n";
         
        // Uppercase letter
        if ($this.hasClass('uppercase')) character = character.toUpperCase();
         
        // Remove shift once a key is clicked.
        if (shift === true) {
            $('.symbol span').toggle();
            if (capslock === false) $('.letter').toggleClass('uppercase');
             
            shift = false;
        }
         
        // Add the character
        $write.html($write.html() + character);
    }); //end of keyboard 
	
	//Function to verify first name entered correctly
	function checkName() {
		var nameRegex = /^[a-zA-Z ]+$/;
		var $name = $('#write').val();
		var $nameLength = $('#write').val().length;
		
		if ($nameLength == 0) {
			$('#p1').text(" * Please enter a name!");
			$write.focus();
			return false;
		}
		else if (!$name.match(nameRegex)) {
			$('#p1').text(" * Name must only contain letters and spaces!");
			$write.focus();
			return false;
		}
		else 
			return true;
	}

	// Create strings that will eventually hold all of the product, brand, and quantity values -- sessionStorage doesn't like objects so we serialize the later-to-be-used arrays in to strings with JSON.stringify() and JSON.parse()
	var iArray = new Array(); 
	sessionStorage.setItem("idString", JSON.stringify(iArray));
	
	var pArray = new Array(); 
	sessionStorage.setItem("productString", JSON.stringify(pArray));

	var bArray = new Array(); 
	sessionStorage.setItem("brandString", JSON.stringify(bArray));
	
	var prArray = new Array(); 
	sessionStorage.setItem("priceString", JSON.stringify(prArray));

	var qArray = new Array(); 
	sessionStorage.setItem("quantityString", JSON.stringify(qArray));

	//If the name entered is legitimate, allow the user to select desired products by button click redirect -- save the user name for later
    $('#meat_btn').button().click(function() {
			var result = checkName();
			if (result == true) {
				sessionStorage.setItem('name', $('#write').val());
				window.location.href = "meat.html"; 
			}
		});
	$('#cheese_btn').button().click(function() {
		var result = checkName();
			if (result == true) {
				sessionStorage.setItem('name', $('#write').val());
				window.location.href = "cheese.html"; 
			} 
		});
	$('#seafood_btn').button().click(function() {
		var result = checkName();
			if (result == true) {
				sessionStorage.setItem('name', $('#write').val());
				window.location.href = "seafood.html"; 
			}  
		});
	$('#side_btn').button().click(function() {
		var result = checkName();
			if (result == true) {
				sessionStorage.setItem('name', $('#write').val());
				window.location.href = "side.html"; 
			}  
		});
	
});
