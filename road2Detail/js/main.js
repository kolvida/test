function clicked() {

	var user = document.getElementById('username');
	var pass = document.getElementById('password');
	
	var currentuser = "admin";
	var currentpass = "admin";
	
	if(user.value == currentuser) {
	
		if(pass.value == currentpass) { 
			window.focus();
			window.alert("You are logged in as " + user.value);
			window.open("http://htmldog.com/");
		
		} else {
		
			window.alert("Incorrect username or password!");
		
		}
	
	} else {
	
			window.alert("Incorrect username or password!");
	
	}

}
function clickedRegister(){
	window.alert("Registration Success!");
	window.focus();
	window.open("login.html");
}
function clickedBack(){  
	window.focus();
	window.open("register.html");
}


document.getElementById("button").style.backgroundColor = "blue";
document.getElementById("button2").style.backgroundColor = "red";
document.getElementById("main").style.backgroundColor = "#696969"; 

 function registerBefore(obj) {
    obj.innerHTML = "Register"
}

function registerAfter(obj) {
    obj.innerHTML = "You sure?"
}

 