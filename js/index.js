

let body=document.body;

 

const today = new Date();
const thisYear = today.getFullYear();

const myFooter = document.querySelector("footer .container");

const copyright = document.createElement('p');
copyright.innerHTML = `&copy; Maede Gholipour ${thisYear}`;

myFooter.appendChild(copyright);



const skills=["JavaScript", "HTML", "CSS", "C# in .NET", "GitHub","ASP.NET Core","Bootstrap","jQuery"];

const skillsSection=document.querySelector("#skills")
const skillsList=skillsSection.querySelector(".skills-list");


skills.forEach(item => {
    const skill=document.createElement("div");
    skill.innerHTML=item;
    skillsList.appendChild(skill);
})



//Leave Message Section
const messageForm=document.querySelector('[name="leave_message"]');

const messageSection=document.querySelector("#messages");
const messageList=messageSection.querySelector("ul");
 
    // Hide the #messages section, including the Messages header
    messageSection.style.display = 'none';
 

messageForm.addEventListener("submit",(event)=>{
 
    event.preventDefault();

    const formFileds=event.target;
    const userName=formFileds.usersName.value;
    const userEmail=formFileds.usersEmail.value;
    const userMessage=formFileds.usersMessage.value;

    messageSection.style.display = 'block';

    const newMessage=document.createElement("li");
    newMessage.innerHTML=`<a href="mailto:${userEmail}">${userName}</a> :  
    <span>${userMessage}</span>`;

    const removeButton = document.createElement('button');

    // Set the inner text to "remove"
    removeButton.innerText = "remove";

    // Set the type attribute to "button"
    removeButton.type = "button";

    // Add an event listener to the removeButton element that handles the "click" event
    removeButton.addEventListener('click', function() {
        // Inside the callback function, create a variable named entry that finds the button's parent element using DOM Traversal
        const entry = removeButton.parentNode;

        // Remove the entry element from the DOM
        entry.remove();

      messageSection.style.display = 'none';
    });

    // Append the removeButton to the newMessage element
    newMessage.appendChild(removeButton);

    // Append the newMessage to the messageList element
    messageList.appendChild(newMessage);

    messageForm.reset();
});




fetch("https://api.github.com/users/MaedeGholipourNozari/repos")
.then(Response => Response.json())
.then(data => {

const repositories=data;

const projectSection= document.querySelector("#projects");

const projectList= projectSection.querySelector(".project-list");

repositories.forEach(item => {

    const project=document.createElement("div");
    project.innerHTML=item.name;

    projectList.appendChild(project);
})

})
.catch(error => {
    // Handle any errors that occur during the fetch call
    console.error('Error fetching data:', error);
  });


  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* Navigation Menu   */
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.navigation').classList.toggle('active');
    document.querySelector('.menu-toggle').style.display = 'none';
    document.querySelector('.close-menu').style.display = 'block';

});

document.querySelector('.close-menu').addEventListener('click', function() {
    document.querySelector('.navigation').classList.remove('active');
    document.querySelector('.menu-toggle').style.display = 'block';
    document.querySelector('.close-menu').style.display = 'none';

});
  
document.querySelector('.heading-link').addEventListener('click', function() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
});


  