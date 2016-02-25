"use strict";

// setup your IIFE (Immediately Invoked Function Expression)
(function () {

	if (document.getElementById("about") != null) {
		console.log("About Page");
			
			var naruto;
			naruto = document.getElementById("naruto");
			naruto.innerHTML="This was my final project in the first semester for web and internet fundamentels. Perticularly in this project I learned how to use jQuery slider and integrate google maps on website. " 
		

	} else if (document.getElementById("projects") != null) {
		console.log("Project Page");

	} else if (document.getElementById("contact") != null) {
		console.log("Contact Page");

		var email = document.getElementById("email");
		var password = document.getElementById("password");
		var checkMeOut = document.getElementById("checkMeOut");
		var submitButton = document.getElementById("submitButton");

		checkMeOut.addEventListener("change", function () {
			if (checkMeOut.checked) {
				console.log("it's checked");
			}
			else {
				console.log("it's unchecked");
			}
		}); // end addEventListener
		
		submitButton.addEventListener("click", function(event){
			event.preventDefault();
			console.log("Email: " + email.value);
			console.log("Password: " + password.value);
			
			
			
		});
		
		
	} // end else if

})();

