window.onload = function() {
  var response=prompt("What is your name?");
  alert("Hello "+response+",may you a nice dream.");
}

function add(a,b){
  return a+b;
}
console.log(add(20,30));
console.log(add(200,300));


function sayHello(){
  var x =document.getElementById("demo");
  x.style.fontSize="25px";
  x.style.color="white";
  x.innerHTML = "OK,nightynight";
}
