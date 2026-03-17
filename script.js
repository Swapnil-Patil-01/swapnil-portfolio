const roles = [
  "QA Automation Engineer ",
  "Selenium | TestNG | Cucumber ",
  "API Testing (Postman) ",
  "3+ Years Experience in QA "
];

let i = 0;
let j = 0;
let currentRole = "";
let isDeleting = false;

function type() {
  currentRole = roles[i];
  
  if (isDeleting) {
    document.getElementById("typing").innerText = currentRole.substring(0, j--);
  } else {
    document.getElementById("typing").innerText = currentRole.substring(0, j++);
  }

  if (!isDeleting && j === currentRole.length) {
    isDeleting = true;
    setTimeout(type, 1000);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % roles.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type();

// SCROLL ANIMATION
const sections = document.querySelectorAll(".section, .about-section");

function reveal() {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const boxTop = section.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      section.classList.add("show");
    }
  });
}

window.addEventListener("scroll", reveal);
reveal();


const navLinks = document.querySelectorAll(".menu a");

window.addEventListener("scroll", () => {
  let current = "";

  document.querySelectorAll("section").forEach(section => {
    const sectionTop = section.offsetTop - 100;

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(a => {
    a.classList.remove("active");
    if (a.getAttribute("href") === "#" + current) {
      a.classList.add("active");
    }
  });
});

function sendMessage() {
  // Get values
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  // Basic validation
  if (name === "" || email === "" || message === "") {
    alert("Please fill all required fields");
    return;
  }

  // Show success message
  document.getElementById("successMsg").style.display = "block";

  // Clear form
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("message").value = "";
}

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});