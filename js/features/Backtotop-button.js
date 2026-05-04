const btn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  btn.style.display = window.scrollY > 200 ? "block" : "none";
});

btn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};