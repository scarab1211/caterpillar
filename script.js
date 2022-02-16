
//I was going to encrypt this but holy fuck is that complex so if you came into the source code to root out the password, Hooray! You win at life!
var pass = "citrus";
var element = document.getElementById(id);
var name = window.prompt("Enter the password: ");
if (name != pass) {
 	alert("Incorrect");
	element.innerHTML = "Incorrect";
} else {
	alert("Correct!");
	element.innerHTML = "Youtube link here";
}


