const cookie_container = document.querySelector(".cookie-banner");
const cookie_button = document.querySelector(".cookie_accept");


cookie_button.addEventListener("click", () => {
    cookie_container.classList.remove("active");
});

setTimeout(() => {
    cookie_container.classList.add("active");
}, 500);
