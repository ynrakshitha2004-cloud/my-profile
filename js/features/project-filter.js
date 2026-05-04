// function filterProject(){
//     const projectsContainer=document.getElementById("projects-container");
//     if(!projectsContainer){
//         console.log("Projects were not found");
//         return;
//     }
//     projectsContainer.textContent=""
//     projectsData.forEach(function(project){
//         // to create outercards first
//         const card=document.createElement("div");
//         card.className="relative p-8 text-center bg-white rounded-3xl shadow-lg";

//         //to craete name of project 
//         const projectName=document.createElement("h2");
//         projectName.className="text-xl font-bold mb-2";
//         projectName.textContent=project.name;

//         //to create category of the project
//         const projectCategory=document.createElement("h5");
//         projectCategory.className="text-xl font-bold-sm mb-2 text-blue-800";
//         projectCategory.textContent=project.category;

//         //to create description of the project
//         const projectDescription=document.createElement("p");
//         projectDescription.className="text-sm font-bold-sm mb-2";
//         projectDescription.textContent=project.description;

//         //to create Technologies of the project
//         const projectTechnologies=document.createElement("span");
//         projectTechnologies.className="text-lg font-bold-lg mb-2 text-green-600 ";
//         projectTechnologies.textContent=project.technologies;

//         //to create status of project
//         const projectStatus=document.createElement("div");
//         projectStatus.className="absolute top-2 right-2 bg-red-500 text-sm font-bold-sm mb-2 rounded-lg p-1";
//         projectStatus.textContent=project.status;

//         //to create livedemo
//         const projectliveDemo=document.createElement("div");
//         projectliveDemo.className="text-blue-500 text-sm font-bold-sm mb-2 pl-5 pr-5 bg-blue-200 rounded-sm";
//         projectliveDemo.textContent=project.liveDemo;

//         //to create github link
//         const projectgithub=document.createElement("div");
//         projectgithub.className="text-blue-500 text-sm font-bold-sm mb-2 pl-5 pr-5 bg-blue-200 rounded-sm";
//         projectgithub.textContent=project.github;
        
//         card.appendChild(projectName);
//         card.appendChild(projectCategory);
//         card.appendChild(projectDescription);
//         card.appendChild(projectTechnologies);
//         card.appendChild(projectStatus);
//         card.appendChild(projectliveDemo);
//         card.appendChild(projectgithub);
//         projectsContainer.appendChild(card);
//     })
// }

// const filterButtons = document.querySelectorAll(".filter-btn");
// const projectCards = document.querySelectorAll(".project-card"); 
// // IMPORTANT: your project cards MUST have class="project-card"

// filterButtons.forEach((button) => {
//     button.addEventListener("click", () => {

//         // remove active state
//         filterButtons.forEach(btn =>
//             btn.classList.remove("bg-cyan-500", "text-black")
//         );

//         button.classList.add("bg-cyan-500", "text-black");

//         const filter = button.getAttribute("data-filter").toLowerCase();

//         projectCards.forEach((card) => {
//             const category = card.getAttribute("data-category")?.toLowerCase();

//             if (filter === "all" || category === filter) {
//                 card.style.display = "block";
//             } else {
//                 card.style.display = "none";
//             }
//         });

//     });
// });


// ================================
// PROJECT RENDER + FILTER SYSTEM
// ================================

// function renderProjects() {
//     const projectsContainer = document.getElementById("projects-container");

//     if (!projectsContainer) {
//         console.log("Projects container not found");
//         return;
//     }

//     projectsContainer.innerHTML = "";

//     projectsData.forEach((project) => {

//         const card = document.createElement("div");

//         // IMPORTANT: required for filtering
//         card.className = "project-card relative p-8 text-center bg-white rounded-3xl shadow-lg";
//         card.setAttribute("data-category", project.category.toLowerCase());

//         card.innerHTML = `
//             <h2 class="text-xl font-bold mb-2">${project.name}</h2>

//             <h5 class="text-sm font-semibold mb-2 text-blue-800">
//                 ${project.category}
//             </h5>

//             <p class="text-sm mb-2 text-gray-600">
//                 ${project.description}
//             </p>

//             <span class="text-green-600 font-medium mb-2 block">
//                 ${project.technologies}
//             </span>

//             <div class="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-lg">
//                 ${project.status}
//             </div>

//             <div class="mt-3 flex justify-center gap-3">
//                 <a href="${project.liveDemo}" target="_blank"
//                    class="text-blue-600 text-sm px-3 py-1 bg-blue-100 rounded">
//                    Live Demo
//                 </a>

//                 <a href="${project.github}" target="_blank"
//                    class="text-gray-700 text-sm px-3 py-1 bg-gray-100 rounded">
//                    GitHub
//                 </a>
//             </div>
//         `;

//         projectsContainer.appendChild(card);
//     });

//     // after render → activate filter system
//     initProjectFilter();
// }

// // ================================
// // FILTER SYSTEM (FIXED)
// // ================================

// function initProjectFilter() {
//     const filterButtons = document.querySelectorAll(".filter-btn");

//     filterButtons.forEach((button) => {
//         button.addEventListener("click", () => {

//             // UI active state reset
//             filterButtons.forEach(btn =>
//                 btn.classList.remove("bg-cyan-500", "text-black")
//             );

//             button.classList.add("bg-cyan-500", "text-black");

//             const filter = button.getAttribute("data-filter").toLowerCase();

//             const projectCards = document.querySelectorAll(".project-card");

//             projectCards.forEach((card) => {

//                 const category =
//                     (card.getAttribute("data-category") || "").toLowerCase();

//                 if (filter === "all" || category === filter) {
//                     card.style.display = "block";
//                 } else {
//                     card.style.display = "none";
//                 }
//             });

//         });
//     });
// }


// document.addEventListener("DOMContentLoaded", renderProjects);


// ================================
// PROJECT RENDER + FILTER SYSTEM (UPGRADED UI)
// ================================

function renderProjects() {
    const projectsContainer = document.getElementById("projects-container");

    if (!projectsContainer) {
        console.log("Projects container not found");
        return;
    }

    projectsContainer.innerHTML = "";

    projectsData.forEach((project) => {

        const card = document.createElement("div");

        // 🌟 Premium card styling (dark-light balanced)
        card.className = `
            project-card relative p-6 text-center
            bg-gradient-to-br from-white to-gray-50
            dark:from-gray-900 dark:to-gray-800
            rounded-2xl shadow-md hover:shadow-xl
            border border-gray-100 dark:border-gray-700
            transition-all duration-300
            hover:-translate-y-2
        `;

        card.setAttribute("data-category", project.category.toLowerCase());

        card.innerHTML = `
            <!-- STATUS BADGE -->
            <div class="absolute top-3 right-3 text-xs px-2 py-1 rounded-full
                ${project.status === "Live"
                    ? "bg-green-500 text-white"
                    : "bg-yellow-500 text-black"}">
                ${project.status}
            </div>

            <!-- TITLE -->
            <h2 class="text-xl font-bold mb-1 text-gray-900 dark:text-white">
                ${project.name}
            </h2>

            <!-- CATEGORY -->
            <h5 class="text-sm font-medium mb-3 text-blue-600 dark:text-blue-400">
                ${project.category}
            </h5>

            <!-- DESCRIPTION -->
            <p class="text-sm mb-3 text-gray-600 dark:text-gray-300 leading-relaxed">
                ${project.description}
            </p>

            <!-- TECH STACK -->
            <span class="text-xs font-semibold text-emerald-600 dark:text-emerald-400 block mb-4">
                ${project.technologies}
            </span>

            <!-- BUTTONS -->
            <div class="flex justify-center gap-3 mt-2">

                <a href="${project.liveDemo}" target="_blank"
                   class="px-3 py-1 text-sm rounded-lg
                   bg-blue-500 text-white hover:bg-blue-600 transition">
                   Live Demo
                </a>

                <a href="${project.github}" target="_blank"
                   class="px-3 py-1 text-sm rounded-lg
                   bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white
                   hover:opacity-80 transition">
                   GitHub
                </a>
            </div>
        `;

        projectsContainer.appendChild(card);
    });

    initProjectFilter();
}


// ================================
// FILTER SYSTEM (IMPROVED)
// ================================

function initProjectFilter() {
    const filterButtons = document.querySelectorAll(".filter-btn");

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {

            // reset UI state
            filterButtons.forEach(btn =>
                btn.classList.remove("bg-blue-500", "text-white", "shadow-md")
            );

            // active state (premium feel)
            button.classList.add("bg-blue-500", "text-white", "shadow-md");

            const filter = button.getAttribute("data-filter").toLowerCase();
            const projectCards = document.querySelectorAll(".project-card");

            projectCards.forEach((card) => {
                const category =
                    (card.getAttribute("data-category") || "").toLowerCase();

                if (filter === "all" || category === filter) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });

        });
    });
}


// ================================
// INIT
// ================================
document.addEventListener("DOMContentLoaded", renderProjects);