
var qoute = document.getElementById("qoute");


function getdata() {


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

var db = firebase.database().ref().child("fortunes");
db.on('value', function(snapshot) {
	quote.innerHTML = snapshot.val();
}




}

//FIREBASE EXAMPLE
/*var userId = firebase.auth().currentUser.uid;
return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
  var username = (snapshot.val() && snapshot.val().username);

  document.getElementById('quote').innerHTML = username;
  // ...
});






var db = firebase.database();
db.ref('fortunes/' +fortunes).once('value').then(function (snapshot) {
    
	var quote = snapshot.val().quote;
	var rand = (Math.floor(Math.random()*110)+1);

	document.getElementById('quote').innerHTML = quote;
})/*



//db.collection('fortunes').get().then((snapshot) => {
// console.log(snapshot.docs);
//})


});