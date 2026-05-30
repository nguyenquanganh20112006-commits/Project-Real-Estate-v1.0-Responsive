const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", function(){

    navMenu.classList.toggle("active");

});
const header = document.querySelector(".header");
const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    if (window.scrollY > hero.offsetHeight - 100) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});