firebase.auth().OnAuthStateChanged(function(user) {
	if(user){
		//user is signed in
		document.getElementById("user_div").style.display="block";
		document.getElementById("login_div").style.display="none";

		var user = firebase.auth().currentUser;

		if(user != null){
			var email_id = userEmail;
			document.getElementById("user_p").innerHTML = "Welcome User: " + email_id;
		}
	} else {
		//no one signed in
		document.getElementById("user_div").style.display="none";
		document.getElementById("login_div").style.display="block";
	}
});


function lg(){
document.getElementById('lgbtn').addEventListener("click", lg1);
}

function lg1(){
	var userEmail = document.getElementById("em_field").value;
	var userPass = document.getElementById("pw_field").value;

	window.alert(userEmail + " " + userPass);
}


firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  window.alert("Error: " + errorMessage);
});

function logout(){
firebase.auth().signOut();
}