
function imageChange(){

document.getElementById('footlogo').addEventListener("click", imageNew);
//document.getElementById('footlogo').addEventListener("click", function());
//document.getElementById('footlogo').addEventListener("click", imageOld).setAttribute("src", 'images/logo.jpg');
//var logo = document.getElementById('footlogo').src="images/logo.jpg";
//document.getElementById('new1').addEventListener("click", imageNew);
//document.getElementById('old1').addEventListener("click", imageOld);

}

//document.getElementById("footlogo").addEventListener("click", imageChange());
//function() {
    //document.getElementById('footlogo').setAttribute("src", 'images/UpsideDownlogo.jpg');
//}

function imageNew() {
    document.getElementById('footlogo').setAttribute("src", 'images/UpsideDownlogo.jpg');

    //let new1 = document.getElementByClassName('footerlogo').setAttribute("src", 'images/fedexevent.jpg');
}

function imageOld() {
    let old1 = document.getElementById('footlogo').setAttribute("src", 'images/logo.jpg');

    //let old1 = document.getElementByClassName('footerlogo').setAttribute("src", 'images/logo.jpg');
}


    //var logo = document.getElementByClassName('footerlogo');
    //var image1 = ("images/blkwht_skyline_logo.png");
    //logo.setAttribute('src', "images/blkwht_skyline_logo.png");
    //var logo = document.getElementByClassName('footerlogo');
    //logo.src = 'images/fedexevent.jpg';
    //var logo = document.getElementById('footlogo');
    //logo.setAttribute("src", image1);
    //document.getElementById('footlogo').setAttribute("src", 'images/fedexevent.jpg');
    //document.getElementByClassName('footerlogo').setAttribute("src", 'images/fedexevent.jpg');
    //document.getElementById("footlogo").innerHTML = "YOU CLICKED ME!";
    //document.getElementById("fl").innerHTML = "YOU CLICKED ME!";

    //document.getElementById('footlogo')
    //logo.addEventListener("click", imageChange, true);
   // document.getElementByClassName('footerlogo').addEventListener("click", imageChange());;
   //document.getElementById("footlogo").addEventListener("click", imageChange());
//document.getElementByClassName('footerlogo').addEventListener("click", imageChange());;