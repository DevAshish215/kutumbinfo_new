// ============================
// Fetch and Insert Navbar
// ============================
document.addEventListener("DOMContentLoaded", () => {
    fetch("/kutumbinfo_new/navbar.html") // Corrected Path
        .then(res => res.text())
        .then(data => document.getElementById("navbar-placeholder").innerHTML = data)
        .catch(err => console.error("Error loading navbar:", err));
});

// ============================
// Fetch and Insert Footer
// ============================
document.addEventListener("DOMContentLoaded", () => {
    fetch("../footer.html") // Corrected Path
        .then(response => response.text())
        .then(data => document.getElementById("footer-placeholder").innerHTML = data)
        .catch(err => console.error("Error loading footer:", err));
});

//Navbar Links
function handleWebDevelopmentClick() {
    window.location.href = "../Pages/web_dev.html";
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
