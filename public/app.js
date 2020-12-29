// SELECTORS
const body = document.querySelector("body");
const menu = document.querySelector(".menu");
const footer = document.querySelector("footer");
const main = document.querySelector("main");
const header = document.querySelector("header");

const navButton = document.querySelector(".navButton");

const menuNavButton = document.querySelectorAll(".menuNavButton");
const homeContainer = document.querySelector("#homeContainer");
const strContainer = document.querySelector("#strContainer");
const teamContainer = document.querySelector("#teamContainer");

const contactButton = document.querySelector(".contactButton");
const impButton = document.querySelectorAll(".impButton");
const stmtButton = document.querySelectorAll(".stmtButton");
// NAV MENU TOGGLE FUNCTION
// EXTENDS/RETRACTS THE NAV SIDE MENU AND FOOTER WHEN CALLED
let navExtended = false;
// false = Menu Hidden
// true = Menu Extended
const navToggle = () => {
    if (navExtended == false) {
        navButton.classList.remove("navButtonRotateOut")
        menu.classList.toggle("menuExtended");
        footer.classList.toggle("footerHidden");
        navButton.classList.add("navButtonRotateIn");
        navExtended = true;
    } else {
        navButton.classList.remove("navButtonRotateIn");
        menu.classList.toggle("menuExtended");
        footer.classList.toggle("footerHidden");
        navButton.classList.add("navButtonRotateOut");
        navExtended = false;
    }
}
// EVENTLISTENERS FOR NAV MENU TOGGLE
navButton.addEventListener("click", () => {
    navToggle()
})
for (let button of menuNavButton) {
    button.addEventListener("click", () => {
        navToggle()
    })
}
contactButton.addEventListener("click", () => {
    navToggle();
})
//SCRIPT TO HIDE THE SIDEBAR IF LEGAL NOTICE OR PRIVACY STATEMENT ARE OPENED FROM SIDEBAR
impButton[0].addEventListener("click", () => {
    navToggle();
})
stmtButton[0].addEventListener("click", () => {
    navToggle();
})
// TOGGLE SIDE BAR BY HOVERING OFF IT
main.addEventListener("mouseenter", (event) => {
    if (event.target == main && navExtended == true) {
        navToggle();
    }
})
header.addEventListener("mouseenter", (event) => {
    if (event.target == header && navExtended == true) {
        navToggle();
    }
})
// TOGGLE FUNCTIONS FOR MAIN CONTENT SECTIONS
const showHome = () => {
    resetOpacity();
    homeContainer.classList.remove("noDisplay");
    homeContainer.classList.add("fullOpacity");
    strContainer.classList.add("nullOpacity");
    teamContainer.classList.add("nullOpacity");
    impContainer.classList.add("nullOpacity");
    stmtContainer.classList.add("nullOpacity");
    setTimeout(() => {
        strContainer.classList.add("noDisplay");
        teamContainer.classList.add("noDisplay");
        impContainer.classList.add("noDisplay");
        stmtContainer.classList.add("noDisplay");
        resetOpacity();
    }, 500)
}
const showStr = () => {
    resetOpacity();
    strContainer.classList.remove("noDisplay");
    strContainer.classList.add("fullOpacity");
    homeContainer.classList.add("nullOpacity");
    teamContainer.classList.add("nullOpacity");
    impContainer.classList.add("nullOpacity");
    stmtContainer.classList.add("nullOpacity");
    setTimeout(() => {
        homeContainer.classList.add("noDisplay");
        teamContainer.classList.add("noDisplay");
        impContainer.classList.add("noDisplay");
        stmtContainer.classList.add("noDisplay");
        resetOpacity();
    }, 500)
}
const showTeam = () => {
    resetOpacity();
    teamContainer.classList.remove("noDisplay");
    teamContainer.classList.add("fullOpacity");
    homeContainer.classList.add("nullOpacity");
    strContainer.classList.add("nullOpacity");
    impContainer.classList.add("nullOpacity");
    stmtContainer.classList.add("nullOpacity");
    setTimeout(() => {
        homeContainer.classList.add("noDisplay");
        strContainer.classList.add("noDisplay");
        impContainer.classList.add("noDisplay");
        stmtContainer.classList.add("noDisplay");
        resetOpacity();
    }, 500)
}
const showStmt = () => {
    resetOpacity();
    stmtContainer.classList.remove("noDisplay");
    stmtContainer.classList.add("fullOpacity");
    homeContainer.classList.add("nullOpacity");
    strContainer.classList.add("nullOpacity");
    teamContainer.classList.add("nullOpacity");
    impContainer.classList.add("nullOpacity");
    setTimeout(() => {
        homeContainer.classList.add("noDisplay");
        strContainer.classList.add("noDisplay");
        teamContainer.classList.add("noDisplay");
        impContainer.classList.add("noDisplay");
        resetOpacity();
    }, 500)
}
const showImp = () => {
    resetOpacity();
    impContainer.classList.remove("noDisplay");
    impContainer.classList.add("fullOpacity");
    homeContainer.classList.add("nullOpacity");
    strContainer.classList.add("nullOpacity");
    teamContainer.classList.add("nullOpacity");
    stmtContainer.classList.add("nullOpacity");
    setTimeout(() => {
        homeContainer.classList.add("noDisplay");
        strContainer.classList.add("noDisplay");
        teamContainer.classList.add("noDisplay");
        stmtContainer.classList.add("noDisplay");
        resetOpacity();
    }, 500)
}
//RESET OPACITY CLASSES FUNCTION
const resetOpacity = () => {
    homeContainer.classList.remove("fullOpacity")
    homeContainer.classList.remove("nullOpacity")
    strContainer.classList.remove("fullOpacity")
    strContainer.classList.remove("nullOpacity")
    teamContainer.classList.remove("fullOpacity")
    teamContainer.classList.remove("nullOpacity")
    impContainer.classList.remove("fullOpacity");
    impContainer.classList.remove("nullOpacity");
    stmtContainer.classList.remove("fullOpacity");
    stmtContainer.classList.remove("nullOpacity");
}

//NAVIGATION SCRIPT
let currentPage = 1
// 1 = HOME
// 2 = STRENGTHS
// 3 = TEAM
// 4 = LEGAL NOTICE
// 5 = PRIVACY STATEMENT

//SCRIPT THAT SHOWS THE CORRECT MAIN SECTION FOR "HOME"
menuNavButton[0].addEventListener("click", () => {
    if (currentPage !== 1) {
        window.scrollTo(0, 0);
        showHome();
        currentPage = 1;
    }
})
//SCRIPT THAT SHOWS THE CORRECT MAIN SECTION FOR "STRENGTHS"
menuNavButton[1].addEventListener("click", () => {
    if (currentPage !== 2) {
        window.scrollTo(0, 0);
        showStr();
        currentPage = 2;
    }
})
//SCRIPT THAT SHOWS THE CORRECT MAIN SECTION FOR "TEAM"
menuNavButton[2].addEventListener("click", () => {
    if (currentPage !== 3) {
        window.scrollTo(0, 0);
        showTeam();
        currentPage = 3;
    }
})
// SCRIPT THAT SHOWS THE CORRECT SECTION FOR "PRIVACY STATEMENT"
for (let button of stmtButton) {
    button.addEventListener("click", () => {
        if (currentPage !== 5) {
            window.scrollTo(0, 0);
            showStmt();
            currentPage = 5;
        }
    })
}
// SCRIPT THAT SHOWS THE CORRECT SECTION FOR "LEGAL NOTICE"
for (let button of impButton) {
    button.addEventListener("click", () => {
        if (currentPage !== 4) {
            window.scrollTo(0, 0);
            showImp();
            currentPage = 4;
        }
    })
}

