
function getLuckyNumbers() {

var number1, number2, number3, number4, number5, numbers;
    number1 = (Math.floor(Math.random()*69) +1);
	number2 = (Math.floor(Math.random()*69) +1);
	number3 = (Math.floor(Math.random()*69) +1);    
	number4 = (Math.floor(Math.random()*69) +1);
	number5 = (Math.floor(Math.random()*69) +1);

    numbers = [number1, number2, number3, number4, number5];
    numbers.join(", ")
    document.getElementById("luckyNumbers").innerHTML = numbers;
}    

//var numb2 = document.getElementById("number2");
//numb2.innerHTML = number2;

//var numb3 = document.getElementById("number3");
//numb3.innerHTML = Math.floor(Math.random()*69) +1;

//document.getElementById("number4").innerHTML = Math.floor(Math.random()*69) +1;

	//$(#luckyNumbers).html(number1);
	//return false;

	//document.getElementById("number2").innerHTML = new number2;

	//var ln = document.getElementById("number1");
	//ln.style.zIndex = (Math.floor(Math.random()*69) +1);;


	//document.getElementById("number1").set(number1);
	//document.getElementById("number2").setAttribute(number2);
	//number2 = document.getElementById("number2");
    
