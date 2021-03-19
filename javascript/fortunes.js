
function getFortunes() {

    var rand = (Math.floor(Math.random()*110) +1);
    
    var db = firebase.firestore();
    
    var Ref = db.collection('fortunes').doc(''+rand);
    
    var dbRef = Ref.get().then(function(doc) {
        setFooter(" Fortune: " + doc.data().quote);
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
}

function getLuckyNumber() {
    var number1, number2, number3, number4, number5, numbers;
    
    number1 = (Math.floor(Math.random()*69) +1);
    number2 = (Math.floor(Math.random()*69) +1);
    number3 = (Math.floor(Math.random()*69) +1);
    number4 = (Math.floor(Math.random()*69) +1);
    number5 = (Math.floor(Math.random()*69) +1);
    
    numbers = [number1, number2, number3, number4, number5];
    
    return numbers.join(", ")
    
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
    
    setFooter("Lucky Numbers: " + getLuckyNumber() +"\n");
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            getFortunes();
        }
    });
    
});