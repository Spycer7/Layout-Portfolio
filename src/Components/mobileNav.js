// Mobile Navigation
const mobileNavFunction = () => {
    const sidebar = document.getElementById("mobile-nav");
    const menubar = document.querySelector(".menubar");
    const openMenu = document.querySelector(".open-menu");
    const closeMenu = document.querySelector(".close-menu");

    let isMobileNavOpen = false;

    menubar.addEventListener('click', () => {
        isMobileNavOpen = !isMobileNavOpen;

        if (isMobileNavOpen) {
            sidebar.style.display = "flex";
            openMenu.style.display = "none";
            closeMenu.style.display = "block";
        }
        else {
            sidebar.style.display = "none";
            openMenu.style.display = "block";
            closeMenu.style.display = "none";
        }
    });
};

mobileNavFunction ();