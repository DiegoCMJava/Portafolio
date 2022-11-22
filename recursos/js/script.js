// variables
const desplazarArriba = document.querySelector("#desplazar-arriba");
const hamburguesa = document.querySelector("#menu-hamburguesa");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");
const navLink = document.querySelectorAll(".nav-link");

// funcionalidad de desplazar hacia arriba
desplazarArriba.addEventListener("click", ()=> {
window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
});
});

//funcionalidad menú hamburguesa
hamburguesa.addEventListener("click", ()=>{
    ul.classList.toggle("show");
});

// cerrar el menú de navegación cuando se hace click en el enlace
navLink.forEach((link) =>
link.addEventListener("click", () =>{
    ul.classList.remove("show");
}));


