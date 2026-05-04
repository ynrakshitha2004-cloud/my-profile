const form = document.querySelector("form");

form.addEventListener("input", () => {
  localStorage.setItem("formData",
    JSON.stringify({
      name: form.name.value
    })
  );
});

window.onload = () => {
  const data = JSON.parse(localStorage.getItem("formData"));
  if (data) form.name.value = data.name;
};