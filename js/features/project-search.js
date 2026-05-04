const projects = [
  { name: "Portfolio" },
  { name: "E-commerce" }
];

document.getElementById("search").addEventListener("input", e => {
  const value = e.target.value.toLowerCase();

  const filtered = projects.filter(p =>
    p.name.toLowerCase().includes(value)
  );

  render(filtered);
});

function render(data) {
  document.getElementById("projects").innerHTML =
    data.map(p => `<p>${p.name}</p>`).join("");
}