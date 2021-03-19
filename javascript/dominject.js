function DomInject(){
	document.getElementById('domBtn').addEventListener("click", myFunction);
}

function myFunction(){
	//document.open("text/html", "replace");
	//document.write("<h2> Please Enter Your Login Information</h2>");
	//document.close();
document.getElementByTagName('H2')[0].setAttribute("class", "redClass");

}