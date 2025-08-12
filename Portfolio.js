const skills = document.querySelectorAll(".skills li");
skills.forEach(li => {
    const span = li.appendChild(document.createElement("span"));
    span.style.width = li.getAttribute("data-width");
});


const observer=new IntersectionObserver((entries,observer)=>{
entries.forEach(li=>{
    setTimeout(() => {
        li.target.classList.add('active')
    });
})
},{
    root:null,
    threshold:1
})
// observer.observe(document.querySelector('skills li'))
