(function () {
var db = firebase.firestore();


var rand = (Math.floor(Math.random()*110) +1);
var docRef = db.collection("fortunes").doc('' +rand);

docRef.get().then(function(doc) {
    if (doc) {
        console.log("Document data:", doc.data().quote);

                var x = doc.data().quote;
                document.getElementById("qoute").innerHTML = x;
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});


});



/*function getFortune() {
                    var x = doc.data().quote;
                document.getElementById("qoute").innerHTML = x;
}
*/



/*function getFortune() {
    var rand, docRef;

    rand = (Math.floor(Math.random()*110) +1);
    
    //var db = firebase.firestore();
    
    docRef = db.collection('fortunes').doc(''+rand);

    docRef.get().then(function(doc) {
        console.log(doc.data().quote);

        var x = doc.data().quote;
    })
    
    document.getElementById("qoute").innerHTML = x;
}*/


    /*var duh = docRef.get().then(function(doc) {
        console.log(doc.data().quote);
        setFooter(", Fortune: " + doc.data().quote);
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });*/