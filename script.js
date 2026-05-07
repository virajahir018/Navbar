let nav = document.querySelector("nav")
let ul = document.querySelector("ul");
let toggle = document.getElementById("toggle")


nav.addEventListener("click", () => {
    ul.classList.toggle("active");
})