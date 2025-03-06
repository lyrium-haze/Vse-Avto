const topBar = document.querySelector(".top-bar");

window.addEventListener("scroll", () => {
  topBar.classList.toggle("is-pinned", window.scrollY > 0);
});

document.querySelector(".phone").addEventListener("input", function (e) {
  let x = e.target.value
    .replace(/\D/g, "")
    .match(/(\d{1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
  e.target.value = !x[2]
    ? "+7"
    : "+7 (" +
      x[2] +
      (x[3] ? ") " + x[3] : "") +
      (x[4] ? "-" + x[4] : "") +
      (x[5] ? "-" + x[5] : "");
});

function toggleMenu() {
  document.getElementById("menu1").classList.toggle("active");
  document.getElementById("menu2").classList.toggle("active");
  document.getElementById("menuButton").classList.toggle("active");
  document.querySelector(".menu-sheet").classList.toggle("menu-sheet-active");
  document.querySelector(".socials").classList.toggle("socials-menu");
}
