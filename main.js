const cookie_container = document.querySelector(".cookie-banner");
const cookie_button = document.querySelector(".cookie_accept");
let mybutton = document.getElementById("up_button");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function top_function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
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





