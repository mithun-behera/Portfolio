const themeButton = document.getElementById("theme-btn");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeButton.innerText = "☀️";
        localStorage.setItem("javaTheme", "dark");
    } else {
        themeButton.innerText = "🌙";
        localStorage.setItem("javaTheme", "light");
    }
});

const savedTheme = localStorage.getItem("javaTheme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeButton.innerText = "☀️";
}