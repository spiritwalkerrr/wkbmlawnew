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

const impButton = document.querySelector(".impButton");
const stmtButton = document.querySelector(".stmtButton");

const lawyerContainer = document.querySelectorAll(".lawyerContainer");
const lawyerName = document.querySelectorAll(".lawyerName");
const lawyerInfo = document.querySelectorAll(".lawyerInfo");
const chevron = document.querySelectorAll(".chevron");

const map = document.querySelector(".map");

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
    }, 250)
})
for (let button of menuNavButton) {
    button.addEventListener("click", () => {
        if (currentPage == 1){
            footer.classList.remove("footerTransparent")
        }
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
    if (currentPage == 3 || currentPage == 6) {
        setTimeout(() => {
            footer.classList.toggle("footerHidden");
        }, 250)
    } else {
        footer.classList.toggle("footerHidden");
    }
}
// LOAD IMAGES SCRIPT
// LOAD MAP
let mapLoaded = false;
const loadMap = () =>{
    if (mapLoaded == false){
        map.classList.add("mapLoaded");
        mapLoaded = true;
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
    loadMap();
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
        footerToggle();
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
// 2 = PORTRAIT
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
//SCRIPT THAT SHOWS THE CORRECT MAIN SECTION FOR "PORTRAIT"
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
impButton.addEventListener("click", () => {
    if (currentPage !== 5) {
        window.scrollTo(0, 0);
        showImp();
        footerToggle();
        currentPage = 5;
    }
})
stmtButton.addEventListener("click", () => {
    if (currentPage !== 6) {
        window.scrollTo(0, 0);
        showStmt();
        footerToggle();
        currentPage = 6;
    }
})
// EXTEND LAWYER DESCRIPTION SCRIPT
chevronExtended = [false, false, false, false];
chevron[0].addEventListener("click", () => {
    lawyerContainer[0].classList.toggle("lawyerContainerExtended");
    lawyerName[0].classList.toggle("lawyerNameExtended");
    lawyerInfo[0].classList.toggle("lawyerInfoExtended");
    if (chevronExtended[0] == false) {
        chevron[0].classList.toggle("chevronRotateIn");
        chevronExtended[0] = true;
    } else {
        chevron[0].classList.add("chevronRotateOut");
        chevronExtended[0] = false;
        setTimeout(() => {
            chevron[0].classList.remove("chevronRotateIn", "chevronRotateOut")
        }, 250)
    }

})
chevron[1].addEventListener("click", () => {
    lawyerContainer[1].classList.toggle("lawyerContainerExtended");
    lawyerName[1].classList.toggle("lawyerNameExtended");
    lawyerInfo[1].classList.toggle("lawyerInfoExtended");
    if (chevronExtended[1] == false) {
        chevron[1].classList.toggle("chevronRotateIn");
        chevronExtended[1] = true;
    } else {
        chevron[1].classList.add("chevronRotateOut");
        chevronExtended[1] = false;
        setTimeout(() => {
            chevron[1].classList.remove("chevronRotateIn", "chevronRotateOut")
        }, 250)
    }

})
chevron[2].addEventListener("click", () => {
    lawyerContainer[2].classList.toggle("lawyerContainerExtended");
    lawyerName[2].classList.toggle("lawyerNameExtended");
    lawyerInfo[2].classList.toggle("lawyerInfoExtended");
    if (chevronExtended[2] == false) {
        chevron[2].classList.toggle("chevronRotateIn");
        chevronExtended[2] = true;
    } else {
        chevron[2].classList.add("chevronRotateOut");
        chevronExtended[2] = false;
        setTimeout(() => {
            chevron[2].classList.remove("chevronRotateIn", "chevronRotateOut")
        }, 250)
    }

})
chevron[3].addEventListener("click", () => {
    lawyerContainer[3].classList.toggle("lawyerContainerExtended");
    lawyerName[3].classList.toggle("lawyerNameExtended");
    lawyerInfo[3].classList.toggle("lawyerInfoExtended");
    if (chevronExtended[3] == false) {
        chevron[3].classList.toggle("chevronRotateIn");
        chevronExtended[3] = true;
    } else {
        chevron[3].classList.add("chevronRotateOut");
        chevronExtended[3] = false;
        setTimeout(() => {
            chevron[3].classList.remove("chevronRotateIn", "chevronRotateOut")
        }, 250)
    }

})
