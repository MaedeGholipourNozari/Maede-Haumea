

let body=document.body;

let footer=document.createElement("footer");

body.appendChild(footer);

const today=new Date();
const thisYear=today.getFullYear();

const myFooter= document.querySelector("footer");

const copyright=document.createElement('p');
copyright.innerHTML=`&copy; Maede Gholipour   ${thisYear}`;

myFooter.appendChild(copyright)



const skills=["JavaScript", "HTML", "CSS", "C# in .NET", "GitHub","ASP.NET Core","Bootstrap","jQuery"];

const skillsSection=document.querySelector("#Skills")
const skillsList=skillsSection.querySelector("ul");


skills.forEach(item => {
    const skill=document.createElement("li");
    skill.innerHTML=item;
    skillsList.appendChild(skill);
})