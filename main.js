const cookie_container = document.querySelector(".cookie-banner");
const cookie_button = document.querySelector(".cookie_accept");
let mybutton = document.getElementById("up_button");
var rootElement = document.documentElement
window.onscroll = function() {scrollFunction()};




function top_function() {

  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })

}

cookie_button.addEventListener("click", () => {
    cookie_container.classList.remove("active");
});
/*
setTimeout(() => {
    cookie_container.classList.add("active");
}, 500);
*/
function cookie_show() {
  cookie_container.classList.add("active");
}




function trigger_theme_switch(){
	var element = document.body;
	element.classList.toggle("darkmode")
}
function cookie_sign(){
		
	window.alert("when you click close, a cookie banner should appear. First we wanted to let it pop up automaticly, but over time it`s getting annoying. (It`s sadly not possible to store that information in a cookie, because cookies work only on Websites and not on local files :( )");
	cookie_show();
}
function search(){
	window.alert("You searched for [put search here] and we ourself cant find it either :( . Or maybe we are just to lazy to make it function.");
}
function refuse_cookie_banner(){
	window.alert("ouch! you have seen the refuse button. GRRR EU-regulations!");

	window.close();
}

