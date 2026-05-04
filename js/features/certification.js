

    // const certifications = [
    //     { title: "Full Stack Web Dev", org: "Udemy", year: "2025", icon: "💻" },
    //     { title: "Python AI ML", org: "GFG", year: "2025", icon: "📊" },
    //     { title: "Java", org: "Coursera", year: "2025", icon: "⚡" }
    // ];

   const certifications = [
  {
    title: "JavaScript Advanced",
    issuer: "Udemy",
    date: "2025",
    category: "Frontend",
    link: "#"
  },
  {
    title: "MERN Stack",
    issuer: "Coursera",
    date: "2025",
    category: "Full Stack",
    link: "#"
  }
];

function renderCertifications() {
  const container = document.getElementById("certifications-container");
  const filters = document.getElementById("certifications-filters");

  if (!container) return;

  let current = "All";

  function display(category) {
    container.innerHTML = "";

    const data = category === "All"
      ? certifications
      : certifications.filter(c => c.category === category);

    data.forEach(c => {
      const card = document.createElement("div");

      card.className = "bg-gray-100 p-5 rounded shadow";

      card.innerHTML = `
        <h3 class="font-bold text-lg">${c.title}</h3>
        <p>${c.issuer}</p>
        <p class="text-sm text-gray-500">${c.date}</p>
        <a href="${c.link}" class="text-blue-500">View</a>
      `;

      container.appendChild(card);
    });
  }

  if (filters) {
    const cats = ["All", ...new Set(certifications.map(c => c.category))];

    filters.innerHTML = "";

    cats.forEach(cat => {
      const btn = document.createElement("button");

      btn.textContent = cat;
      btn.className = "px-4 py-2 bg-gray-200 rounded";

      btn.onclick = () => {
        current = cat;
        display(cat);
      };

      filters.appendChild(btn);
    });
  }

  display(current);
}

document.addEventListener("DOMContentLoaded", renderCertifications);