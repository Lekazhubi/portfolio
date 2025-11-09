 const projects = {
  
  hajem: {
    title: "HAJEM — Fast Food Project",
    img: "./images/HAJEMsc.png",
    desc: "Built with HTML, CSS, and JavaScript. Includes interactive menus, responsive layout, and clean design for a fast food concept.",
    links: `<a href="https://github.com/Lekazhubi/hajem" target="_blank">View Code</a> <a href="https://lekazhubi.github.io/hajem/" target="_blank">Live Demo</a>`
  },

 onfilm: {
    title: "ONFILM — Favorite Movies",
    img: "./images/ONFILMsc.png",
    desc: "Created a personal movie collection site. Learned API integration, dynamic content, and responsive layouts.",
    links: `<a href="https://github.com/Lekazhubi/onfilm" target="_blank">View Code</a> <a href="https://lekazhubi.github.io/onfilm/" target="_blank">Live Demo</a>`
  },

  coming: {
    title: "Coming Soon…",
    img: "./images/CLOTHINGsc.png",
    desc: "Next project is a website combining everything I've learned in React(Next.js) and Tailwind. Stay tuned!",
    links: ""
  }
};

function openModal(projectKey) {
  
  const modal = document.getElementById("promodal");
  const project = projects[projectKey];
  
  document.getElementById("title").innerText = project.title;
  document.getElementById("img").src = project.img;
  document.getElementById("desc").innerText = project.desc;
  document.getElementById("links").innerHTML = project.links;
  
  modal.style.display = "flex";
}

function closeModal() {
  
  document.getElementById("promodal").style.display = "none";
}
window.onclick = function(event) {
  
  const modal = document.getElementById("promodal");
  
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

const form = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

form.addEventListener("submit", function(e) {

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {

    e.preventDefault();
    formMsg.textContent = "⚠️ Please fill in all fields.";
    formMsg.style.color = "red";
  } 
  else {
  
    formMsg.textContent = "⏳ Sending...";
    formMsg.style.color = "blue";
  }


});


