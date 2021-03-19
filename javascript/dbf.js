
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getFortune() {
    var number, docRef;

    number = getRandomInt(110) + 1;
    
    var db = firebase.firestore();
    
    docRef = db.collection('fortunes').doc(''+number);
    
    var duh = docRef.get().then(function(doc) {
        console.log(doc.data().quote);
        setFooter(", Fortune: " + doc.data().quote);
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
}


function setFooter(msg) {
    var footer;
    footer = document.querySelector('footer');
    
    console.log(msg);
    footer.textContent += msg;
    
}


$(document).ready(function () {
    var footer;
    footer = document.querySelector('footer');
    footer.textContent = "";
    
    
    setFooter("Lucky Numbers: " + getLuckyNumbers());
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            getFortune();
        }
    });
    
});
