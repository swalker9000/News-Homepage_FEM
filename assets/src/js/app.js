window.onloadstart = function () {
    closeNav();
}

window.onload = function () {
    initHamburgerMenu();
    initCloseNav();
}

function openNav () {
    var mobileNav = document.getElementById("mobile-nav");

    mobileNav.classList.remove("close");
    mobileNav.classList.add("open");
}

function closeNav () {
    var mobileNav = document.getElementById("mobile-nav");

    mobileNav.classList.remove("open");
    mobileNav.classList.add("close");
}


/**
     * Init the Hamburger on click
     */
function initHamburgerMenu() {
    var hamburger = document.getElementById("hamburger");
    var mobileNav = document.getElementById("mobile-nav");

    mobileNav.classList.add("close");
    hamburger.addEventListener("click", () => {
       openNav(); }
    );
}

function initCloseNav() {
    var exitNav = document.getElementById("close-nav");
    exitNav.addEventListener("click", () => {
        closeNav();
    });
}



