document.addEventListener("DOMContentLoaded", function() {

  //Your Code Here
document
	.getElementById("payment-form")
	.addEventListener("submit", function(event) {
		event.preventDefault();

		var firstname = document
			.getElementById("firstname")
			.value;

		var lastname = document
			.getElementById("lastname")
			.value;


		if (firstname === "" || lastname === "") {
			alert("Please enter first and last name!");
			return;
	}

	var cc = document
		.getElementById("credit-card")
		.value;

	if (cc.length !== 16) {
		alert("Please enter a 16 digit credit card number!");
		return;
	}

	var ccNum = parseInt(cc);

	if (isNaN(ccNum)) {
		alert("Please enter only numbers for credit card!")
		return;
	}
	var exp = document
		.getElementById("expiration")
		.value;

	if (exp === "") {
		alert("please enter expiration date!")
		return;
	}
	if (isNaN(exp)) {
		alert("Please enter only numbers for expiration date!")
		return;
	}
	var cv = document
		.getElementById("cvc")
		.value;

	if (cv === "") {
		alert("please enter CV Code!")
		return;
	}
	if (isNaN(cv)) {
		alert("Please enter only numbers for CV Codes!")
		return;
	}





	});



});