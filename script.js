const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    navbar.classList.add("responsive");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    navbar.classList.remove("responsive");
    menuOpen = false;
  }
});
