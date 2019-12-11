var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var password = document.getElementById("psw").value;
if (password=="SmartServTest@123"){
alert ("Login successfully");
window.location = "dashb.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("Incorrect password entered! Check whether you have entered atleast one uppercase and lowercase character, a number and no special character other than '@'. Try again.");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}