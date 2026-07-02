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

// Contact Message 
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit",async function (event) {
    event.preventDefault();

    const contactData = {
        name:document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    try{
        const response = await fetch("http://localhost:8081/api/contact",{
          method: "POST",
          headers:{
            "Content-Type": "application/json"
          },
          body:JSON.stringify(contactData)
        });

        const result = await response.text();

        if(response.ok){
            formMessage.innerText = "✅ Message sent successfully!";
            formMessage.style.color="green";
            contactForm.reset();
        }
        else{
            formMessage.innerText="❌ Message could not be sent.";
            formMessage.style.color="red";
        }
    }catch(error){
        formMessage.innerText = "❌ Backend server is not running.";
        formMessage.style.color="red";
    }
    
})