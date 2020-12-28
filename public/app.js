// SELECTORS
const body = document.querySelector("body");
const menu = document.querySelector(".menu");
const navButton = document.querySelector(".navButton");
const menuButton = document.querySelector(".menuButton");
const menuNavButton = document.querySelectorAll(".menuNavButton");
const homeContainer = document.querySelector("#homeContainer");
const strContainer = document.querySelector("#strContainer");
const teamContainer = document.querySelector("#teamContainer");
const stmtContainer = document.querySelector("#stmtContainer");
// NAV MENU TOGGLE FUNCTION
// EXTENDS/RETRACTS THE NAV SIDE MENU WHEN CALLED
const navToggle = () => {
    menu.classList.toggle("menuExtended");
}
// EVENTLISTENERS FOR NAV MENU TOGGLE
navButton.addEventListener("click", () => {
    navToggle()
})
menuButton.addEventListener("click", () => {
    navToggle()
})
for (let button of menuNavButton) {
    button.addEventListener("click", () => {
        navToggle()
    })
}
//NAVIGATION SCRIPT
let currentPage = 1
// 1 = HOME
// 2 = TEAM
// 3 = STATEMENT

// TOGGLE FUNCTIONS
const showHome = () => {
    resetOpacity();
    homeContainer.classList.remove("noDisplay");
    homeContainer.classList.add("fullOpacity");
    strContainer.classList.add("nullOpacity");
    teamContainer.classList.add("nullOpacity");
    stmtContainer.classList.add("nullOpacity");
    setTimeout(() => {
        strContainer.classList.add("noDisplay");
        teamContainer.classList.add("noDisplay");
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
    stmtContainer.classList.add("nullOpacity");
    setTimeout(() => {
        homeContainer.classList.add("noDisplay");
        teamContainer.classList.add("noDisplay");
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
    stmtContainer.classList.add("nullOpacity");
    setTimeout(() => {
        homeContainer.classList.add("noDisplay");
        strContainer.classList.add("noDisplay");
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
    setTimeout(() => {
        homeContainer.classList.add("noDisplay");
        strContainer.classList.add("noDisplay");
        teamContainer.classList.add("noDisplay");
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
    stmtContainer.classList.remove("fullOpacity")
    stmtContainer.classList.remove("nullOpacity")
}

//SCRIPT THAT SHOWS THE CORRECT MAIN SECTION FOR "HOME"
menuNavButton[0].addEventListener("click", () => {
    if (currentPage !== 1) {
        window.scrollTo(0,0);
        showHome();
        currentPage = 1;
    }
})
//SCRIPT THAT SHOWS THE CORRECT MAIN SECTION FOR "STRENGTHS"
menuNavButton[1].addEventListener("click", () => {
    if (currentPage !== 2) {
        window.scrollTo(0,0);
        showStr();
        currentPage = 2;
    }
})
//SCRIPT THAT SHOWS THE CORRECT MAIN SECTION FOR "TEAM"
menuNavButton[2].addEventListener("click", () => {
    if (currentPage !== 3) {
        window.scrollTo(0,0);
        showTeam();
        currentPage = 3;
    }
})
//SCRIPT THAT SHOWS THE CORRECT MAIN SECTION FOR "STATEMENT"
menuNavButton[3].addEventListener("click", () => {
    if (currentPage !== 4) {
        window.scrollTo(0,0);
        showStmt();
        currentPage = 4;
    }
})