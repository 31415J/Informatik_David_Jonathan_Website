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





