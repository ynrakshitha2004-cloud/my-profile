// js/features/skills-filter.js

document.addEventListener("DOMContentLoaded", () => {
  const filterContainer = document.getElementById("skills-filters");

  if (!filterContainer) {
     console.error("skills-filters not found");
     return;
   }

  const filters = ["All", "Frontend", "Backend", "Database", "Tools"];

  filters.forEach(filter => {
    const btn = document.createElement("button");

    btn.textContent = filter;
    btn.className =
      "px-5 py-2 rounded-full bg-white shadow hover:bg-blue-500 hover:text-white transition";

    btn.onclick = (e) => {
      // remove active
      document.querySelectorAll("#skills-filters button").forEach(b => {
        b.classList.remove("bg-blue-500", "text-white");
      });

      // add active
      e.target.classList.add("bg-blue-500", "text-white");

      // filtering
      if (filter === "All") {
        renderSkills(window.skillsData);
      } else {
        const filtered = window.skillsData.filter(
          skill => skill.category === filter
        );
        renderSkills(filtered);
      }
    };

    filterContainer.appendChild(btn);
  });

  // default active button
  document
    .querySelector("#skills-filters button")
    ?.classList.add("bg-blue-500", "text-white");

  // initial render
  renderSkills(window.skillsData);
});