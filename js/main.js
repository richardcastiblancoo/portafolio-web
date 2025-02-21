function toggleMenu() {
    const menuMovil = document.getElementById("menuMovil");
    menuMovil.classList.toggle("active");
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

document.getElementById("year").textContent = new Date().getFullYear();