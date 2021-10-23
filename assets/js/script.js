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

// Move Image
document.addEventListener("mousemove", moveImage);

function moveImage(e) {
  this.querySelectorAll(".move").forEach((layer) => {
    const speed = layer.getAttribute("data-speed");

    const x = (window.innerWidth - e.pageX * speed) / 120;
    const y = (window.innerHeight - e.pageY * speed) / 120;

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}
