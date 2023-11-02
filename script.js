
document.addEventListener("DOMContentLoaded", function () {
    const expandButtons = document.querySelectorAll(".expand-button");
    const extraDetailsList = document.querySelectorAll(".interest-details");

    expandButtons.forEach((button, index) => {
        const chevronIcon = button.querySelector(".fa-chevron-down");

        button.addEventListener("click", () => {
            // Toggle visibility of the extra details
            extraDetailsList[index].classList.toggle("visible");

            // Toggle the arrow direction
            if (extraDetailsList[index].classList.contains("visible")) {
                chevronIcon.classList.replace("fa-chevron-down", "fa-chevron-up");
            } else {
                chevronIcon.classList.replace("fa-chevron-up", "fa-chevron-down");
            }
        });
    });

    const expandButtons2 = document.querySelectorAll(".expand-button-2");
    const extraDetailsList2 = document.querySelectorAll(".key-features");

    expandButtons2.forEach((button, index) => {
        const chevronIcon = button.querySelector(".fa-chevron-down");

        button.addEventListener("click", () => {
            // Toggle visibility of the extra details
            extraDetailsList2[index].classList.toggle("visible");

            // Toggle the arrow direction
            if (extraDetailsList2[index].classList.contains("visible")) {
                chevronIcon.classList.replace("fa-chevron-down", "fa-chevron-up");
            } else {
                chevronIcon.classList.replace("fa-chevron-up", "fa-chevron-down");
            }
        });
    });
}); 












