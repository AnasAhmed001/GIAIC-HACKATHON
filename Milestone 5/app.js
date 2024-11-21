var form = document.getElementById('resume-form');
var DisplayElement = document.getElementById('resume-display');
var shareableContainer = document.getElementById('shareable-link');
var shareableLink = document.getElementById('link');
var btn = document.getElementById('download-btn');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var resumeHTML = "\n    <h2><b>Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b><span contenteditble=\"true\">".concat(name, "</span><p>\n    <p><b>Email:</b><span contenteditble=\"true\">").concat(email, "</span><p>\n    <p><b>Phone:</b><span contenteditble=\"true\">").concat(phone, "</span><p>\n\n    <h3>Education:</h3>\n    <p contenteditble=\"true\"> ").concat(education, "</p>\n\n    <h3>Experience:</h3>\n    <p contenteditble=\"true\"> ").concat(experience, "</p>\n\n    <h3>Skills:</h3>\n    <p contenteditble=\"true\"> ").concat(skills, "</p>\n    ");
    if (DisplayElement) {
        DisplayElement.innerHTML = resumeHTML;
    }
    else {
        alert("Please fill all field");
    }
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    shareableContainer.style.display = 'block';
    shareableLink.href = shareableURL;
    shareableLink.textContent = shareableURL;
});
btn.addEventListener('click', function () {
    window.print();
});
window.addEventListener('DOMContent', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        var saveData = localStorage.getItem(username);
        if (saveData) {
            var ResumeData = JSON.parse(saveData);
            document.getElementById('username').value = username;
            document.getElementById('name').value = ResumeData.name;
            document.getElementById('email').value = ResumeData.email;
            document.getElementById('phone').value = ResumeData.phone;
            document.getElementById('education').value = ResumeData.education;
            document.getElementById('experience').value = ResumeData.experience;
            document.getElementById('skills').value = ResumeData.skills;
        }
    }
});
