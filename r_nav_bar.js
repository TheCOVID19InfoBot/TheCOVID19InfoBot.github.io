//Actual mobile responsive nav bar
var mobile_r_nav = document.getElementById("responsive_mobile_navbar");
var outsideofnavbg = document.getElementsByClassName("TheResponsiveNavBarbackground")[0];

//Plus button on click
function navbarfunction() {
	var mobile_r_nav = document.getElementById("responsive_mobile_navbar");
	var outsideofnavbg = document.getElementsByClassName("TheResponsiveNavBarbackground")[0];
	outsideofnavbg.style.display = "inline";
	mobile_r_nav.classList.remove("mobile_responsive_navbar_close");
	mobile_r_nav.classList.add("mobile_responsive_navbar_open");
	var theplusbtn = document.getElementById("plusbtn");
	var theplusbtnon = document.getElementById("plusbtnon");
	outsideofnavbg.style.display = "inline";
	var onplus = document.getElementsByClassName("on")[0];
	onplus.style.display = "inline";
	var offplus = document.getElementsByClassName("off")[0];
	offplus.style.display = "none";
}
//Plus button on click again
function navbarfunctionclose() {
	var mobile_r_nav = document.getElementById("responsive_mobile_navbar");
	mobile_r_nav.classList.remove("mobile_responsive_navbar_open");
	mobile_r_nav.classList.add("mobile_responsive_navbar_close");
	var outsideofnavbg = document.getElementsByClassName("TheResponsiveNavBarbackground")[0];
	outsideofnavbg.style.display = "none";
	var onplus = document.getElementsByClassName("on")[0];
	onplus.style.display = "none";
	var offplus = document.getElementsByClassName("off")[0];
	offplus.style.display = "inline";
}
// When the user clicks anywhere outside of the bar, close it
function closebar() {
	var mobile_r_nav = document.getElementById("responsive_mobile_navbar");
	mobile_r_nav.classList.remove("mobile_responsive_navbar_open");
	mobile_r_nav.classList.add("mobile_responsive_navbar_close");
	var outsideofnavbg = document.getElementsByClassName("TheResponsiveNavBarbackground")[0];
	outsideofnavbg.style.display = "none";
	var onplus = document.getElementsByClassName("on")[0];
	onplus.style.display = "none";
	var offplus = document.getElementsByClassName("off")[0];
	offplus.style.display = "inline";
}