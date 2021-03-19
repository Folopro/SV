(function () {


const firebaseConfig = {
  apiKey: "AIzaSyCfrxVH3DyizKkqXXF2Ss7kTI4ajYyKQhk",
  authDomain: "project7-2a6a1.firebaseapp.com",
  databaseURL: "https://project7-2a6a1.firebaseio.com",
  projectId: "project7-2a6a1",
  storageBucket: "project7-2a6a1.appspot.com",
  messagingSenderId: "51969140184",
  appId: "1:51969140184:web:104eb724d72b6307b53ead",
  measurementId: "G-97HQQN0XK4"
};
firebase.initializeApp(firebaseConfig);


const txtEmail = document.getElementById("txtEmail");
const txtPassword = document.getElementById("txtPassword");
const btnLogin = document.getElementById("btnLogin");
const btnSignUp = document.getElementById("btnSignUp");
const btnLogout = document.getElementById("btnLogout");

btnLogin.addEventListener("click", e=> {
	const email = txtEmail.value;
	const pw = txtPassword.value;
	const auth = firebase.auth();

	const promise = auth.signInWithEmailAndPassword(email, pw);
	promise.catch(e => console.log(e.message));
});

btnSignUp.addEventListener("click", e=> {
	const email = txtEmail.value;
	const pw = txtPassword.value;
	const auth = firebase.auth();

	const promise = auth.createUserWithEmailAndPassword(email, pw);
	promise.catch(e => console.log(e.message));
});

firebase.auth().onAuthStateChanged(firebaseUser => {
	if(firebaseUser){
		console.log(firebaseUser);
		btnLogout.classList.remove("hide");
	} else {
		console.log("Not Logged in");
		btnLogout.classList.add("hide");
	}
});




}());