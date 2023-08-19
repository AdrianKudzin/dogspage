let button = document.querySelector(".header__button");
let body = document.querySelector(".body");
let darkMode = document.querySelector(".js-darkMode");

button.addEventListener("click", () => {
    body.classList.toggle("darkMode")
    darkMode.innerText === "Włącz" ? darkMode.innerText = "Wyłącz" : darkMode.innerText = "Włącz";
}) 