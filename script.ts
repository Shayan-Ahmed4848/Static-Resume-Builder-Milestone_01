document.addEventListener("DOMContentLoaded", () => {
    // Select the toggle button and skills list elements
    const toggleSkillsBtn = document.getElementById("toggleSkillsBtn") as HTMLButtonElement;
    const skillsList = document.getElementById("skillsList") as HTMLUListElement;

    // Set initial display style for skillsList if it's not set in CSS
    skillsList.style.display = "block"; // Set initial state to visible

    // Add an event listener to the button for toggling visibility
    toggleSkillsBtn.addEventListener("click", () => {
        if (skillsList.style.display === "none") {
            skillsList.style.display = "block";
            toggleSkillsBtn.textContent = "Hide Skills";
        } else {
            skillsList.style.display = "none";
            toggleSkillsBtn.textContent = "Show Skills";
        }
    });
});
