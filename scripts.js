// ============================
// Fetch and Insert Navbar
// ============================
document.addEventListener("DOMContentLoaded", () => {
    fetch("navbar.html")
        .then(res => res.text())
        .then(data => document.getElementById("navbar-placeholder").innerHTML = data)
        .catch(err => console.error("Error loading navbar:", err));
});

// ============================
// Fetch and Insert Footer
// ============================
fetch('footer.html')
.then(response => response.text())
.then(data => {
    document.getElementById('footer-placeholder').innerHTML = data;
});

// ============================
// Counter Section Animation
// ============================
// Select all counter elements
const counters = document.querySelectorAll(".counter");
const counterSection = document.querySelector(".counter-section");

// Function to animate counters
const animateCounter = (counter) => {
    const target = +counter.dataset.target;
    let count = +counter.innerText;
    const increment = Math.max(1, target / 120); // Minimum increment

    const updateCount = () => {
        count = Math.min(Math.ceil(count + increment), target);
        counter.innerText = count;

        if (count < target) setTimeout(updateCount, 30); // Adjust speed
    };

    updateCount();
};

// IntersectionObserver to trigger animation when visible
const counterObserver = new IntersectionObserver(
    ([entry]) => {
        if (entry.isIntersecting) {
            counters.forEach(animateCounter);
            counterObserver.unobserve(entry.target); // Stop observing after activation
        }
    },
    { threshold: 0.5 } // Trigger when 50% visible
);

// Observe the counter section
counterObserver.observe(counterSection);



// ============================
// Slide-Up Animation for "We Are" Section
// ============================

// Select all the .we-are-subsection elements
const weAreSubsections = document.querySelectorAll(".we-are-subsection");

// Create an IntersectionObserver to detect when the subsections come into view
const sectionObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Add the 'show' class to trigger the slide-up animation
                entry.target.classList.add("show");
                // Stop observing the element after animation is triggered
                sectionObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.5 } // Trigger when 50% of the subsection is in view
);

// Observe each .we-are-subsection
weAreSubsections.forEach((subsection) => {
    sectionObserver.observe(subsection);
});


// ============================
// Rotating Testimonials Carousel
// ============================

const wrapper = document.querySelector(".testimonials-wrapper");
const items = document.querySelectorAll(".testimonial-item");
const totalItems = items.length;
const visibleItems = 4; // Number of testimonials visible at a time
let index = 0;

function rotateTestimonials() {
    index++;

    // Smoothly slide to the next set of testimonials
    wrapper.style.transition = "transform 1s ease";
    wrapper.style.transform = `translateX(-${index * (100 / visibleItems)}%)`;

    // When the last set of testimonials is reached, reset the position and continue seamlessly
    if (index >= totalItems - visibleItems) {
        setTimeout(() => {
            wrapper.style.transition = "none";
            wrapper.style.transform = "translateX(0)";
            index = 0;
        }, 1000); // Match the transition duration
    }
}

// Rotate testimonials every 3 seconds
setInterval(rotateTestimonials, 3000);

// ============================
// Navbar Toggle for Mobile Menu
// ============================

const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");
const sections = document.querySelectorAll("section"); // Select all sections
const footerPlaceholder = document.getElementById("footer-placeholder"); // Select dynamically loaded footer

menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("show");
    menuToggle.classList.toggle("open"); // Toggle "X" state

    // Toggle visibility of all sections
    sections.forEach((section) => {
        section.classList.toggle("hidden"); // Add or remove the "hidden" class
    });

    // Hide dynamically loaded footer
    if (footerPlaceholder) {
        footerPlaceholder.classList.toggle("hidden");
    }
});

// ============================
// Dropdown Menu Toggle in Navbar
// ============================

document.querySelectorAll(".navbar .dropdown > a").forEach((dropdownLink) => {
    dropdownLink.addEventListener("click", function (e) {
        e.preventDefault();
        const parentDropdown = this.parentElement;

        // Toggle the current dropdown
        parentDropdown.classList.toggle("active");

        // Close other dropdowns
        document.querySelectorAll(".navbar .dropdown").forEach((dropdown) => {
            if (dropdown !== parentDropdown) {
                dropdown.classList.remove("active");
            }
        });
    });
});


//Navbar Links
function handleWebDevelopmentClick() {
    window.location.href = "../kutumbinfo_new/Pages/web_dev.html";
}

function handleMobileAppDevClick() {
    window.location.href = "../Pages/mob_app.html";
}

function handleCustomSoftDevClick() {
    window.location.href = "../Pages/custom_soft.html";
}

function handleUIUXDesignClick() {
    window.location.href = "../Pages/ui_ux_design.html";
}

function handleAPIdevClick() {
    window.location.href = "../Pages/api_dev.html";
}

function handleMaintainanceSupportClick() {
    window.location.href = "../Pages/maintain_support.html";
}

