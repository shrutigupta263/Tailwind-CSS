document.addEventListener("DOMContentLoaded", function () {
    const navButtons = document.querySelectorAll(".nav-btn");
    const contentSections = document.querySelectorAll(".content");

    navButtons.forEach(button => {
        button.addEventListener("click", function () {
            const target = this.getAttribute("data-target");
            
            contentSections.forEach(section => {
                section.classList.add("hidden");
            });

            document.getElementById(target).classList.remove("hidden");
        });
    });
});
