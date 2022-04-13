var val = 0;
//Lambda Expression
var ref;
function myfunstart() {
ref = setInterval(() => {
val++;
document.getElementById("txt").innerHTML = val;
}, 1000);



document.getElementById("startbtn").disabled = true;



document.getElementById("stopbtn").disabled = false;
}
function myfunstop() {
clearInterval(ref);
document.getElementById("startbtn").disabled = false;
document.getElementById("stopbtn").disabled = true;
}