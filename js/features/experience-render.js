
// document.addEventListener("DOMContentLoaded", () => {
//     const container = document.getElementById("experience-container");

//     if (!container) {
//         console.error("experience-container not found");
//         return;
//     }

//     renderExperience(experienceData);
// });

// function renderExperience(data) {
//     const container = document.getElementById("experience-container");

//     container.innerHTML = data.map(item => {
//         return `
//             <div class="bg-skyblue-500 rounded-2xl shadow-lg p-6 border-l-4 
//                 ${item.type === "experience" ? "border-blue-500" : "border-green-500"} 
//                 hover:scale-105 transition duration-300">

//                 <span class="text-xs font-bold uppercase tracking-wide 
//                     ${item.type === "experience" ? "text-blue-600" : "text-green-600"}">
//                     ${item.type}
//                 </span>

//                 <h3 class="text-xl font-bold mt-2">${item.title}</h3>

//                 <p class="text-gray-600 font-semibold">${item.company}</p>

//                 <p class="text-sm text-gray-500 mb-3">${item.duration}</p>

//                 <p class="text-gray-700 mb-4">${item.description}</p>

//                 <div class="flex flex-wrap gap-2">
//                     ${item.skills.map(skill => `
//                         <span class="text-xs bg-gray-200 px-3 py-1 rounded-full">
//                             ${skill}
//                         </span>
//                     `).join("")}
//                 </div>

//             </div>
//         `;
//     }).join("");
// }

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("experience-container");

    if (!container) {
        console.error("experience-container not found");
        return;
    }

    renderExperience(experienceData);
});

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("experience-container");

    if (!container) {
        console.error("experience-container not found");
        return;
    }

    renderExperience(experienceData);
});

function renderExperience(data) {
    const container = document.getElementById("experience-container");

    container.innerHTML = data.map(item => `
        <div class="
            relative p-6 rounded-2xl

            /* SKYBLUE PREMIUM CARD */
            bg-gradient-to-br from-sky-100/40 via-sky-50/30 to-white
            border border-sky-200/60

            shadow-md hover:shadow-xl
            hover:-translate-y-1

            transition-all duration-300
        ">

            <!-- TOP ROW -->
            <div class="flex items-center justify-between mb-4">

                <!-- TYPE BADGE -->
                <span class="
                    text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full
                    ${item.type === "experience"
                        ? "bg-sky-500/15 text-sky-700 border border-sky-300"
                        : "bg-emerald-500/15 text-emerald-700 border border-emerald-300"}
                ">
                    ${item.type}
                </span>

                <!-- DURATION -->
                <span class="text-xs text-sky-700/80 font-medium">
                    ${item.duration}
                </span>
            </div>

            <!-- TITLE -->
            <h3 class="text-lg font-bold text-slate-800">
                ${item.title}
            </h3>

            <!-- COMPANY -->
            <p class="text-sm text-slate-600 mt-1 font-medium">
                ${item.company}
            </p>

            <!-- DESCRIPTION -->
            <p class="text-sm text-slate-600 mt-3 leading-relaxed">
                ${item.description}
            </p>

            <!-- SKILLS -->
            <div class="flex flex-wrap gap-2 mt-4">
                ${item.skills.map(skill => `
                    <span class="
                        text-[11px] px-3 py-1 rounded-full
                        bg-sky-100 text-sky-700
                        border border-sky-200
                        hover:bg-sky-200
                        transition
                    ">
                        ${skill}
                    </span>
                `).join("")}
            </div>

            <!-- SUBTLE BLUE GLOW -->
            <div class="
                absolute inset-0 rounded-2xl
                pointer-events-none
                opacity-0 hover:opacity-100
                transition duration-300
                bg-gradient-to-r from-sky-200/20 to-blue-100/10
            "></div>

        </div>
    `).join("");
}