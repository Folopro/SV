(function () {


const firebaseConfig = {
  
  //JOEYS KEY
apiKey: "AIzaSyBzvy1WBkg8rGVye2FKwvonniwNQGHaxrY",authDomain: "cs354-200cd.firebaseapp.com",databaseURL: "https://cs354-200cd.firebaseio.com",projectId: "cs354-200cd",storageBucket: "cs354-200cd.appspot.com",messagingSenderId: "464971554756",appId: "1:464971554756:web:a7c964467473cdeb95ce91",measurementId: "G-5B9GGCQXK5"



/* MY PRACTICE KEY 
  apiKey: "AIzaSyCfrxVH3DyizKkqXXF2Ss7kTI4ajYyKQhk",
  authDomain: "project7-2a6a1.firebaseapp.com",
  databaseURL: "https://project7-2a6a1.firebaseio.com",
  projectId: "project7-2a6a1",
  storageBucket: "project7-2a6a1.appspot.com",
  messagingSenderId: "51969140184",
  appId: "1:51969140184:web:104eb724d72b6307b53ead",
  measurementId: "G-97HQQN0XK4"*/
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();


const txtEmail = document.getElementById("txtEmail");
const txtPassword = document.getElementById("txtPassword");
//const btnSignUp = document.getElementById("btnSignUp");

const btnLogin = document.getElementById("btnLogin");
const btnLogout = document.getElementById("btnLogout");

btnLogin.addEventListener("click", e=> {
	const email = txtEmail.value;
	const pw = txtPassword.value;
	//document.getElementById("contactLink").style.display = "block";

	//const auth = firebase.auth();
	//const promise = auth.signInWithEmailAndPassword(email, pw);
	//promise.catch(e => console.log(e.message));

	var provider = new firebase.auth.GoogleAuthProvider();
	provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
	provider.addScope('profile');
    provider.addScope('email');

	provider.setCustomParameters({
       'login_hint': 'user@gmail.com'});


  firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
  }).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
  });



});

/*btnSignUp.addEventListener("click", e=> {
	const email = txtEmail.value;
	const pw = txtPassword.value;
	const auth = firebase.auth();

	const promise = auth.createUserWithEmailAndPassword(email, pw);
	promise.catch(e => console.log(e.message));
});*/

btnLogout.addEventListener("click", e=> {
   firebase.auth().signOut();
   //firebase.auth.GoogleAuthProvider().signOut();
   //var provider = new firebase.auth.GoogleAuthProvider();
   //provider.signOut();

});	

firebase.auth().onAuthStateChanged(firebaseUser => {
	if(firebaseUser){
		console.log(firebaseUser);
		console.log("Logged in");
		document.getElementById("contactLink").style.display = "block";
		document.getElementById("btnLogout").style.display = "block";
		//btnLogout.classList.remove("hide");
	} else {
		console.log("Not Logged in");
		document.getElementById("contactLink").style.display = "none";
		document.getElementById("btnLogout").style.display = "none";
		//btnLogout.classList.add("hide");
	}
});


}());