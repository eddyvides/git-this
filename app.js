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
	var exArray = expiration.split("/");

            var exMonth = exArray[0];
            var exDay = exArray[1];

            if (exMonth.length !== 4 || exDay.length !== 4) {
                alert("Please enter your expiration in format MM/DD");
                return;
            }

            var exMonthInt = parseInt(exMonth);
            var exDayInt = parseInt(exDay);

            if (isNa(exMonthInt) || isNa(exDayInt)) {
                alert("Please enter only numbers for expiration date");
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