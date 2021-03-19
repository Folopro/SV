
function imageChange2(){

//var logo = document.getElementById('footlogo').src="images/logo.jpg";
document.getElementById('footlogo').addEventListener("click", imageNew);
document.getElementById('footlogo').addEventListener("click", imageOld,true);


//document.getElementById("footlogo").addEventListener("click", imageChange());


function imageNew() {
    let new1 = document.getElementById('footlogo').setAttribute("src", 'images/UpsideDownlogo.jpg');

    //let new1 = document.getElementByClassName('footerlogo').setAttribute("src", 'images/fedexevent.jpg');
}

function imageOld() {
    let old1 = document.getElementById('footlogo').setAttribute("src", 'images/logo.jpg');

    //let old1 = document.getElementByClassName('footerlogo').setAttribute("src", 'images/logo.jpg');
}

}