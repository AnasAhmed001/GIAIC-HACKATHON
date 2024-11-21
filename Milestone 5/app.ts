const form = document.getElementById('resume-form') as HTMLFormElement;
const DisplayElement = document.getElementById('resume-display') as HTMLDivElement;
const shareableContainer = document.getElementById('shareable-link') as HTMLDivElement;
const shareableLink = document.getElementById('link') as HTMLAnchorElement;
const btn = document.getElementById('download-btn') as HTMLButtonElement;

form.addEventListener('submit', (event: Event)=>{
    event.preventDefault();

    const username = (document.getElementById('username') as HTMLInputElement).value;
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;

    const resumeHTML = `
    <h2><b>Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b><span contenteditble="true">${name}</span><p>
    <p><b>Email:</b><span contenteditble="true">${email}</span><p>
    <p><b>Phone:</b><span contenteditble="true">${phone}</span><p>

    <h3>Education:</h3>
    <p contenteditble="true"> ${education}</p>

    <h3>Experience:</h3>
    <p contenteditble="true"> ${experience}</p>

    <h3>Skills:</h3>
    <p contenteditble="true"> ${skills}</p>
    `;

    if(DisplayElement){
        DisplayElement.innerHTML = resumeHTML
    } else {
        alert("Please fill all field")
    }

    const shareableURL = `${window.location.origin}?username=${encodeURIComponent(username)}`;

    shareableContainer.style.display = 'block';
    shareableLink.href = shareableURL;
    shareableLink.textContent = shareableURL;

    
});


btn.addEventListener('click' , ()=>{
    window.print();
});

window.addEventListener('DOMContent', ()=>{
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');

    if(username){
        const saveData = localStorage.getItem(username);

        if(saveData){
            const ResumeData = JSON.parse(saveData);

            (document.getElementById('username') as HTMLInputElement).value = username;
            (document.getElementById('name') as HTMLInputElement).value = ResumeData.name;
            (document.getElementById('email') as HTMLInputElement).value = ResumeData.email;
            (document.getElementById('phone') as HTMLInputElement).value = ResumeData.phone;
            (document.getElementById('education') as HTMLInputElement).value = ResumeData.education;
            (document.getElementById('experience') as HTMLInputElement).value = ResumeData.experience;
            (document.getElementById('skills') as HTMLInputElement).value = ResumeData.skills;

        }
    }
});
