
document.getElementById("hint").style.display = "none";

//I was going to encrypt this but holy fuck is that complex so if you came into the source code to root out the password, Hooray! You win at life!

var element = document.getElementById("pass");
var name = window.prompt("Enter the password: ");
if (name == "citrus") {
	alert("Correct!");
	element.innerHTML = "Youtube link here";
} else if (name == "mail"){
	alert("Incorrect");
	element.innerHTML = "Nice try";
} else if (name == "theory"){
	alert("Incorrect");
	document.getElementById("hint").style.display = "inline";
	element.innerHTML = "Incorrect";
} else {
	alert("Incorrect");
	element.innerHTML = "Incorrect";
}


