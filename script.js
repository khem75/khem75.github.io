// DARK / LIGHT MODE
const toggle = document.getElementById("theme-toggle");
toggle.onclick = () => {
    document.body.classList.toggle("light");
    toggle.innerHTML = document.body.classList.contains("light")
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';
};

// SCROLL REVEAL
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    reveals.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            section.classList.add("active");
        }
    });
});
