document.addEventListener("DOMContentLoaded", function () {
    const expandButtons = document.querySelectorAll(".expand-button-two");
    const extraDetailsList = document.querySelectorAll(".key-features");

    expandButtons.forEach((button, index) => {
        const buttonText = button.querySelector("p");
        const chevronIcon = button.querySelector(".fa-chevron-down");

        button.addEventListener("click", () => {
            // Toggle visibility of the extra details
            extraDetailsList[index].classList.toggle("visible");

            // Toggle the text and icon
            if (extraDetailsList[index].classList.contains("visible")) {
                buttonText.textContent = "Less details";
                chevronIcon.classList.replace("fa-chevron-down", "fa-chevron-up");
            } else {
                buttonText.textContent = "More details";
                chevronIcon.classList.replace("fa-chevron-up", "fa-chevron-down");
            }
        });
    });
});