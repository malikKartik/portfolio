let home = document.getElementById("nav-home")
let about = document.getElementById("nav-about")
let skills = document.getElementById("nav-skills")
let exp = document.getElementById("nav-experiences")
let projects = document.getElementById("nav-projects")

home.addEventListener('click',()=>{
    home.classList.add('home')
    about.classList.remove("home")
    skills.classList.remove("home")
    exp.classList.remove("home")
    projects.classList.remove("home")
})

about.addEventListener('click',()=>{
    about.classList.add('home')
    home.classList.remove("home")
    skills.classList.remove("home")
    exp.classList.remove("home")
    projects.classList.remove("home")
})

skills.addEventListener('click',()=>{
    skills.classList.add('home')
    home.classList.remove("home")
    about.classList.remove("home")
    exp.classList.remove("home")
    projects.classList.remove("home")
})

exp.addEventListener('click',()=>{
    exp.classList.add('home')
    about.classList.remove("home")
    skills.classList.remove("home")
    home.classList.remove("home")
    projects.classList.remove("home")
})

projects.addEventListener('click',()=>{
    projects.classList.add('home')
    about.classList.remove("home")
    skills.classList.remove("home")
    exp.classList.remove("home")
    home.classList.remove("home")
})