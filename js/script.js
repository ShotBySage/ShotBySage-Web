const randomLines = [
    "FRAME 247",
    "ISO: VIBES",
    "DIGITAL, SORRY",
    "ONE MORE SHOT",
    "WHY IS IT SO DARK",
    "ROLL 03",
    "PROBABLY EDITING",
    "NO RAW FILES",
    "LOOKING BUSY",
    "BATTERY LOW",
    "TRUST THE PROCESS",
    "JUST ONE MORE",
    "WHO GAVE ME A CAMERA",
    "THIS SEEMED EASIER"
];


/* =========================
   RANDOM FILM TEXT
========================= */

const randomTextElements = document.querySelectorAll(".random-text");

randomTextElements.forEach((element) => {
    const randomIndex = Math.floor(
        Math.random() * randomLines.length
    );

    element.textContent = randomLines[randomIndex];
});


/* =========================
   MOBILE MENU
========================= */

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

if (menuToggle && siteNav) {

    menuToggle.addEventListener("click", () => {

        const isOpen = siteNav.classList.toggle("menu-open");

        menuToggle.classList.toggle("menu-open");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

    });


    /* Close menu when a link is clicked */

    const navLinks = siteNav.querySelectorAll("a");

    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            siteNav.classList.remove("menu-open");

            menuToggle.classList.remove("menu-open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}