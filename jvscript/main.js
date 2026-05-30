const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const closeMenu = document.querySelector(".close-menu");

// Đóng mở menu
menuToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    navMenu.classList.toggle("active");
});

// Đóng bằng nút X
closeMenu.addEventListener("click", () => {
    navMenu.classList.remove("active");
});

// Click ngoài menu => đóng
document.addEventListener("click", (e) => {

    if (
        !navMenu.contains(e.target) &&
        !menuToggle.contains(e.target)
    ) {
        navMenu.classList.remove("active");
    }

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