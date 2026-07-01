console.log("Portfolio Website Started...");
// mobile menu

const menuToggle = document.getElementById("menu-toggle");

const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click",() =>{
    navLinks.classList.toggle("active");
});

// =========================
// DARK MODE
// =========================

const themeBtn = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");

if(savedTheme === "dark"){

    document.body.classList.add("dark");

    themeBtn.textContent = "☀️";

}

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        themeBtn.textContent="☀️";

        localStorage.setItem("theme","dark");

    }else{

        themeBtn.textContent="🌙";

        localStorage.setItem("theme","light");

    }

});