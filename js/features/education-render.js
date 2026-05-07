const educationContainer = document.getElementById("education-container");

educationData.forEach((item) => {

    educationContainer.innerHTML += `

    <div class="group relative bg-white/70 backdrop-blur-xl 
    border border-gray-200 rounded-3xl p-8 shadow-lg 
    hover:shadow-2xl hover:-translate-y-3 
    transition-all duration-500 overflow-hidden">

        <!-- Gradient Hover Glow -->
        <div class="absolute inset-0 
        bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-purple-500/10 
        opacity-0 group-hover:opacity-100 transition duration-500"></div>

        <!-- Education Badge -->
        <span class="relative z-10 inline-block px-4 py-1 mb-5 
        text-xs font-semibold tracking-wider uppercase 
        bg-gradient-to-r from-blue-500 to-cyan-500 
        text-white rounded-full shadow-md">

            ${item.type}

        </span>

        <!-- Title -->
        <h3 class="relative z-10 text-2xl font-bold text-gray-800 mb-2">
            ${item.title}
        </h3>

        <!-- College -->
        <p class="relative z-10 text-lg text-gray-600 mb-2">
            ${item.company}
        </p>

        <!-- Duration -->
        <p class="relative z-10 text-sm text-gray-500 mb-4">
            📅 ${item.duration}
        </p>

        <!-- Description -->
        <p class="relative z-10 text-gray-600 leading-relaxed mb-6">
            ${item.description}
        </p>

        <!-- Skills -->
        <div class="relative z-10 flex flex-wrap gap-2">

            ${item.skills.map(skill => `

                <span class="px-3 py-1 text-sm rounded-full 
                bg-gray-100 text-gray-700 border border-gray-200
                hover:bg-blue-500 hover:text-white transition duration-300">

                    ${skill}

                </span>

            `).join("")}

        </div>

    </div>

    `;
});