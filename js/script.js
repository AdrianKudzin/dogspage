{

    const welcome = () => {
        console.log("Witam developerów");
    };

    const onChangeBackgroundClick = () => {
        let darkMode = document.querySelector(".js-darkMode");
        const body = document.querySelector(".body");

        body.classList.toggle("darkMode");
        darkMode.innerText === "Włącz" ? darkMode.innerText = "Wyłącz" : darkMode.innerText = "Włącz";
    };

    const init = () => {
        const button = document.querySelector(".header__button");
        button.addEventListener("click", onChangeBackgroundClick);

        welcome();
    };

    init();
}