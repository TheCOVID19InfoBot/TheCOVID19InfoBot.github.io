//Responsive Nav Bar
var TurnsNBOn = document.getElementById("TheResponsiveNavBar");
var addani = document.getElementById("addsnavani");
var hambar = document.getElementById("randomfactstext");
var hambar2 = document.getElementById("randomfactstexton");
var hambaroff = document.getElementsByClassName("rnavbutton")[0];
var hambaron = document.getElementsByClassName("rnavbuttonon")[0];
var bg = document.getElementsByClassName("TheResponsiveNavBarbackground")[0];
// When the user clicks the button, open the bar 
hambar.onclick = function() {
	TurnsNBOn.style.display = "block";
  	addani.classList.add("rnavanimation");
	hambaroff.style.display = "none";
	hambaron.style.display = "inline";
	bg.style.display = "inline";
}
// When the user clicks on the button again, close the modal
hambar2.onclick = function() {
    TurnsNBOn.style.display = "block";
	addani.classList.remove("rnavanimation");
	hambaroff.style.display = "inline";
	hambaron.style.display = "none";
	bg.style.display = "none";
}
// When the user clicks anywhere outside of the bar, close it
bg.onclick = function(event) {
    TurnsNBOn.style.display = "block";
	addani.classList.remove("rnavanimation");
	hambaroff.style.display = "inline";
	hambaron.style.display = "none";
	bg.style.display = "none";
}
