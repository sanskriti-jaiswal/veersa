document.addEventListener("DOMContentLoaded", function () {
    // Initialize Lucide icons
    lucide.createIcons();

    // Toggle mobile menu
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    menuBtn.addEventListener("click", () => {
        if (mobileMenu.classList.contains("hidden")) {
            mobileMenu.classList.remove("hidden");
            setTimeout(() => {
                mobileMenu.classList.remove("opacity-0", "-translate-y-10");
            }, 10);
        } else {
            mobileMenu.classList.add("opacity-0", "-translate-y-10");
            setTimeout(() => {
                mobileMenu.classList.add("hidden");
            }, 300);
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
        const navbar = document.getElementById("navbar");
        const projectSection = document.getElementById("project");

        window.addEventListener("scroll", function () {
            const rect = projectSection.getBoundingClientRect();
            if (rect.top <= 80 && rect.bottom >= 80) {
                navbar.classList.add("light-mode");
            } else {
                navbar.classList.remove("light-mode");
            }
        });
    });