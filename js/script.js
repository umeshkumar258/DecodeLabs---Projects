// ==========================
// Mobile Navigation
// ==========================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

// ==========================
// Dark Mode
// ==========================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        themeBtn.textContent = "☀️";

    }else{

        themeBtn.textContent = "🌙";

    }

});

// ==========================
// Scroll Animation
// ==========================

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

hiddenElements.forEach((element) => {

    observer.observe(element);

});

// ==========================
// Contact Form
// ==========================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const submitButton = contactForm.querySelector("button");

    submitButton.textContent = "Sending...";
    submitButton.disabled = true;

    setTimeout(() => {

        formMessage.textContent = "✅ Message sent successfully!";

        formMessage.className = "form-message success";

        contactForm.reset();

        submitButton.textContent = "Send Message";
        submitButton.disabled = false;

    }, 1000);

    setTimeout(() => {

        formMessage.className = "form-message";

    }, 4000);

});