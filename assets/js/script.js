// GET ELEMENT
const navMenu = document.getElementById("nav-menu"),
  toggleMenu = document.getElementById("nav-toggle"),
  closeMenu = document.getElementById("nav-close");

// SHOW MENU
if (navMenu && toggleMenu) {
  toggleMenu.addEventListener("click", () => {
    navMenu.classList.add("show");
  });
}

// CLOSE MENU
if (navMenu && closeMenu) {
  closeMenu.addEventListener("click", () => {
    navMenu.classList.remove("show");
  });
}
