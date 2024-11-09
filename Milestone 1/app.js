var toggleButton = document.getElementById("toggle-skills");
var Skills = document.getElementById("skills");
toggleButton.addEventListener("click", function () {
    if (Skills.style.display === "none") {
        Skills.style.display = 'block';
    }
    else {
        Skills.style.display = 'none';
    }
});
