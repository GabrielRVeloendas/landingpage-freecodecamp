const hamburguer = document.querySelector(".hamburguer");
const navmenu = document.querySelector(".list");
const navitem = document.querySelector(".list");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle('active');
    navmenu.classList.toggle('active');
})
navitem.addEventListener("click", () => {
    hamburguer.classList.toggle('active');
    navmenu.classList.toggle('active');
})
