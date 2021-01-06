// SELECTORS
const body = document.querySelector("body");
const menu = document.querySelector(".menu");
const main = document.querySelector("main");
const header = document.querySelector("header");
const footer = document.querySelector("footer");

const navButton = document.querySelector(".navButton");
const menuNavButton = document.querySelectorAll(".menuNavButton");


const homeContainer = document.querySelector("#homeContainer");
const aboutContainer = document.querySelector("#aboutContainer")
const teamContainer = document.querySelector("#teamContainer");
const contactContainer = document.querySelector("#contactContainer");
const impContainer = document.querySelector("#impContainer");
const stmtContainer = document.querySelector("#stmtContainer");

const teamButton = document.querySelector(".teamButton");
// NAV MENU TOGGLE FUNCTION
// EXTENDS/RETRACTS THE NAV SIDE MENU AND FOOTER WHEN CALLED
let navExtended = false;
// false = Menu Hidden
// true = Menu Extended
const navToggle = () => {
    if (navExtended == false) {
        navButton.classList.remove("navButtonRotateOut")
        menu.classList.toggle("menuExtended");
        navButton.classList.add("navButtonRotateIn");
        setTimeout(() => {
            navExtended = true;
        }, 200)
    } else {
        navButton.classList.remove("navButtonRotateIn");
        menu.classList.toggle("menuExtended");
        navButton.classList.add("navButtonRotateOut");
        navExtended = false;
    }
}
// EVENTLISTENERS FOR NAV MENU TOGGLE WITH SPAM PROTECTION
navButton.addEventListener("click", () => {
    navButton.setAttribute("disabled", "");
    navToggle();
    footerToggle();
    setTimeout(() => {
        navButton.removeAttribute("disabled", "");
    }, 300)
})
for (let button of menuNavButton) {
    button.addEventListener("click", () => {
        navToggle();
    })
}
// TOGGLE SIDE BAR BY HOVERING OFF IT
main.addEventListener("mouseenter", (event) => {
    if (event.target == main && navExtended == true) {
        navToggle();
        footerToggle();
    }
})
header.addEventListener("mouseenter", (event) => {
    if (event.target == header && navExtended == true) {
        navToggle();
        footerToggle();
    }
})
//TOGGLE HEADER FUNCTION
const hideHeader = () => {
    header.classList.add("headerHidden");
}
const showHeader = () => {
    header.classList.remove("headerHidden");
}
// SHOW AND HIDE FOOTER FOOTER FUNCTIONS
const footerToggle = () => {
    if (currentPage == 3) {
        setTimeout(() => {
            footer.classList.toggle("footerHidden");
        }, 250)
    } else {
        footer.classList.toggle("footerHidden");
    }
}
// TOGGLE FUNCTIONS FOR MAIN CONTENT SECTIONS
const showAbout = () => {
    resetOpacity();
    footerToggle();
    homeContainer.classList.add("nullOpacity");
    contactContainer.classList.add("nullOpacity");
    teamContainer.classList.add("nullOpacity");
    impContainer.classList.add("nullOpacity");
    stmtContainer.classList.add("nullOpacity");
    showHeader();
    setTimeout(() => {
        contactContainer.classList.add("noDisplay");
        homeContainer.classList.add("noDisplay");
        teamContainer.classList.add("noDisplay");
        impContainer.classList.add("noDisplay");
        stmtContainer.classList.add("noDisplay");
        aboutContainer.classList.remove("noDisplay");
        aboutContainer.classList.add("fullOpacity");
    }, 250)
    setTimeout(() => {
        resetOpacity();
    }, 500)
}
const showTeam = () => {
    resetOpacity();
    homeContainer.classList.add("nullOpacity");
    aboutContainer.classList.add("nullOpacity");
    contactContainer.classList.add("nullOpacity");
    impContainer.classList.add("nullOpacity");
    stmtContainer.classList.add("nullOpacity");
    showHeader();
    setTimeout(() => {
        homeContainer.classList.add("noDisplay");
        aboutContainer.classList.add("noDisplay");
        contactContainer.classList.add("noDisplay");
        impContainer.classList.add("noDisplay");
        stmtContainer.classList.add("noDisplay");
        teamContainer.classList.remove("noDisplay");
        teamContainer.classList.add("fullOpacity");
    }, 250)
    setTimeout(() => {
        footerToggle();
        resetOpacity();
    }, 500)
}
const showContact = () => {
    resetOpacity();
    footerToggle();
    homeContainer.classList.add("nullOpacity");
    aboutContainer.classList.add("nullOpacity");
    teamContainer.classList.add("nullOpacity");
    impContainer.classList.add("nullOpacity");
    stmtContainer.classList.add("nullOpacity");
    showHeader();
    setTimeout(() => {
        homeContainer.classList.add("noDisplay");
        aboutContainer.classList.add("noDisplay");
        teamContainer.classList.add("noDisplay");
        impContainer.classList.add("noDisplay");
        stmtContainer.classList.add("noDisplay");
        contactContainer.classList.remove("noDisplay");
        contactContainer.classList.add("fullOpacity");
    }, 250)
    setTimeout(() => {
        resetOpacity();
    }, 500)
}
const showImp = () => {
    resetOpacity();
    footerToggle();
    homeContainer.classList.add("nullOpacity");
    aboutContainer.classList.add("nullOpacity");
    contactContainer.classList.add("nullOpacity");
    teamContainer.classList.add("nullOpacity");
    stmtContainer.classList.add("nullOpacity");
    showHeader();
    setTimeout(() => {
        homeContainer.classList.add("noDisplay");
        aboutContainer.classList.add("noDisplay");
        contactContainer.classList.add("noDisplay");
        teamContainer.classList.add("noDisplay");
        stmtContainer.classList.add("noDisplay");
        impContainer.classList.remove("noDisplay");
        impContainer.classList.add("fullOpacity");
    }, 250)
    setTimeout(() => {
        resetOpacity();
    }, 500)
}
const showStmt = () => {
    resetOpacity();
    footerToggle();
    homeContainer.classList.add("nullOpacity");
    aboutContainer.classList.add("nullOpacity");
    contactContainer.classList.add("nullOpacity");
    teamContainer.classList.add("nullOpacity");
    impContainer.classList.add("nullOpacity");
    showHeader();
    setTimeout(() => {
        homeContainer.classList.add("noDisplay");
        aboutContainer.classList.add("noDisplay");
        contactContainer.classList.add("noDisplay");
        teamContainer.classList.add("noDisplay");
        impContainer.classList.add("noDisplay");
        stmtContainer.classList.remove("noDisplay");
        stmtContainer.classList.add("fullOpacity");
    }, 250)
    setTimeout(() => {
        resetOpacity();
    }, 500)
}
//RESET OPACITY CLASSES FUNCTION & REMOVE HEADER BAR
const resetOpacity = () => {
    homeContainer.classList.remove("fullOpacity");
    homeContainer.classList.remove("nullOpacity");
    aboutContainer.classList.remove("fullOpacity");
    aboutContainer.classList.remove("nullOpacity");
    teamContainer.classList.remove("fullOpacity");
    teamContainer.classList.remove("nullOpacity");
    contactContainer.classList.remove("fullOpacity");
    contactContainer.classList.remove("nullOpacity");
    impContainer.classList.remove("fullOpacity");
    impContainer.classList.remove("nullOpacity");
    stmtContainer.classList.remove("fullOpacity");
    stmtContainer.classList.remove("nullOpacity");
    header.classList.remove("headerScrolled")
}

//NAVIGATION SCRIPT
let currentPage = 1
// 1 = HOME
// 2 = ABOUT US
// 3 = TEAM
// 4 = CONTACT
// 5 = LEGAL NOTICE
// 6 = PRIVACY STATEMENT

//SCRIPT THAT SHOWS THE CORRECT MAIN SECTION FOR "HOME"
menuNavButton[0].addEventListener("click", () => {
    if (currentPage !== 2) {
        window.scrollTo(0, 0);
        showAbout();
        currentPage = 2;
    }
})
//SCRIPT THAT SHOWS THE CORRECT MAIN SECTION FOR "ABOUT US"
menuNavButton[1].addEventListener("click", () => {
    if (currentPage !== 3) {
        window.scrollTo(0, 0);
        showTeam();
        currentPage = 3;
    }
})
//SCRIPT THAT SHOWS THE CORRECT MAIN SECTION FOR "TEAM"
menuNavButton[2].addEventListener("click", () => {
    if (currentPage !== 4) {
        window.scrollTo(0, 0);
        showContact();
        currentPage = 4;
    }
})
//SCRIPT THAT SHOWS THE CORRECT MAIN SECTION FOR "CONTACT"
menuNavButton[3].addEventListener("click", () => {
    if (currentPage !== 5) {
        window.scrollTo(0, 0);
        showImp();
        currentPage = 5;
    }
})
//SCRIPT THAT SHOWS THE CORRECT MAIN SECTION FOR "LEGAL NOTICE"
menuNavButton[4].addEventListener("click", () => {
    if (currentPage !== 6) {
        window.scrollTo(0, 0);
        showStmt();
        currentPage = 6;
    }
})
// OTHER "REDIRECT" SCRIPTS NOT RELATED TO THE SIDEBAR BUTTONS
teamButton.addEventListener("click", () => {
    window.scrollTo(0, 0);
    showTeam();
    footerToggle();
    currentPage = 3;
})
