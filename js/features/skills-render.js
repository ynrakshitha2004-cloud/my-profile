// js/features/skills-render.js

// 
// js/features/skills-render.js

window.renderSkills = function (data) {
  const container = document.getElementById("skills-container");

   if (!container) {
     console.error("skills-container not found");
     return;
   }

  container.innerHTML = "";

  if (!data || data.length === 0) {
    container.innerHTML =
      "<p class='text-center text-slate-500 col-span-full'>No skills found</p>";
    return;
  }

  const fragment = document.createDocumentFragment();

  data.forEach(skill => {
    const card = document.createElement("div");

    card.className = `
      relative p-6 rounded-2xl text-center

      bg-gradient-to-br from-white via-sky-50/40 to-blue-50/30
      border border-sky-100

      shadow-sm hover:shadow-xl
      hover:-translate-y-2

      transition-all duration-300
      group
    `;

    card.innerHTML = `
      <!-- ICON -->
      <div class="
        text-4xl mb-3
        transform group-hover:scale-110
        transition
      ">
        ${skill.icon}
      </div>

      <!-- TITLE -->
      <h3 class="
        text-lg font-bold text-slate-800
        tracking-wide
      ">
        ${skill.name}
      </h3>

      <!-- DESCRIPTION -->
      <p class="
        text-sm text-slate-500
        mt-2 mb-3 leading-relaxed
      ">
        ${skill.description}
      </p>

      <!-- CATEGORY BADGE -->
      <span class="
        inline-block text-xs font-semibold px-3 py-1 rounded-full

        bg-sky-100 text-sky-700
        border border-sky-200

        group-hover:bg-sky-200
        transition
      ">
        ${skill.category}
      </span>

      <!-- SOFT GLOW EFFECT -->
      <div class="
        absolute inset-0 rounded-2xl
        opacity-0 group-hover:opacity-100
        bg-gradient-to-r from-sky-200/20 to-blue-100/10
        transition duration-300 pointer-events-none
      "></div>
    `;

    fragment.appendChild(card);
  });

  container.appendChild(fragment);
};