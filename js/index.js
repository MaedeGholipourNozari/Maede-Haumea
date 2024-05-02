

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
    newMessage.innerHTML=`<a href="mailto:${userEmail}">${userName}</a>: 
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

