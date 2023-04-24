const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY > 50) {
    nav.style.top = 0;
  } else {
    nav.style.top = "0";
  }
});
