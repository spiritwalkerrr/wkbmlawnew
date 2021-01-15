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
const mapInfo = document.querySelector(".mapInfo")
const contactInfo = document.querySelector(".contactInfo")

// NAV MENU TOGGLE FUNCTION
// EXTENDS/RETRACTS THE NAV SIDE MENU AND FOOTER WHEN CALLED
let navExtended = false;
// false = Menu Hidden
// true = Menu Extended
const navToggle = () => {
    if (navExtended == false) { //EXTENDS THE MENU AND CHANGES THE STYLING OF THE NAV BUTTON
        navButton.classList.remove("navButtonRotateOut")
        menu.classList.toggle("menuExtended");
        navButton.classList.add("navButtonRotateIn");
        body.classList.toggle("hideOverflow"); //DISABLES SCROLL TO AVOID THE SCROLLBAR FROM SHOWING UP DUE TO THE FOOTER SCRIPT
        setTimeout(() => {
            navExtended = true;
        }, 250)
    } else { //HIDES THE MENU AND CHANGES THE STYLE OF THE NAV BUTTON BACK TO DEFAULT
        navButton.classList.remove("navButtonRotateIn");
        menu.classList.toggle("menuExtended");
        navButton.classList.add("navButtonRotateOut");
        body.classList.toggle("hideOverflow"); //ENABLES THE SCROLL AGAIN
        navExtended = false;
    }
}

// EVENTLISTENERS FOR NAV ICON WITH SPAM PROTECTION - OPENS/CLOSES NAVBAR BY PRESSING THE ICON
navButton.addEventListener("click", () => {
    navButton.setAttribute("disabled", ""); //SPAM PROTECTION
    navToggle(); //EXTENDS/HIDES NAV
    footerToggle(); //HIDES/EXTENDS FOOTER
    setTimeout(() => {
        navButton.removeAttribute("disabled", "");
    }, 250) //SPAM PROTECTION LASTS FOR 250MS
})
// FOOTER SHOULDNT BE VISIBLE UPON LANDING
for (let button of menuNavButton) { //LOOPS OVER ALL THE BUTTONS
    button.addEventListener("click", () => {
        if (currentPage == 1) {
            footer.classList.remove("footerTransparent") //ONCE YOU NAVIGATED AWAY FROM THE LANDING PAGE FOOTER STAYS
        }
        if (mapExpanded == true) { //RESETS THE MAP IF IT WAS ZOOMED
            mapToggle();
        }
    })
}
// TOGGLE SIDE BAR BY HOVERING OFF IT
main.addEventListener("mouseenter", (event) => {
    if (event.target == main && navExtended == true) { //TOGGLES WHEN YOU HOVER FROM MENU -> MAIN
        navToggle();
        footerToggle();
    }
})
header.addEventListener("mouseenter", (event) => {
    if (event.target == header && navExtended == true) { //TOGGLES WHEN YOU HOVER FROM MENU -> HEADER
        navToggle();
        footerToggle();
    }
})
//MENU NAV BUTTON SPAM PROTECTION
const menuLock = () => {
    for (let button of menuNavButton) {
        button.setAttribute("disabled", ""); //LOCKS THE MENU BUTTONS FOR WHEN THE PAGE IS TRANSFORMING
    }
}
const menuUnlock = () => {
    for (let button of menuNavButton) {
        button.removeAttribute("disabled", ""); //UNLOCKS THE MENU BUTTONS FOR WHEN TRANSFORMATION IS OVER
    }
}
//SHOW HEADER FUNCTION FOR WHEN THE USER SWITCHES OFF FROM THE LANDING PAGE
const showHeader = () => {
    header.classList.remove("headerHidden");
}
const hideHeader = () => {
    header.classList.add("headerHidden");
}
// SHOW AND HIDE FOOTER FOOTER FUNCTION
const footerToggle = () => {
    if (currentPage == 1) {
        footer.classList.add("footerTransparent");
    } else {
        footer.classList.remove("footerTransparent");
    }
    if (previousPage == 3 || previousPage == 6) { //THIS SCRIPT DELAYS THE FOOTER HIDING AWAY IN CASE THE PAGE HAS CHANGED SIZE (CAUSES CHOPPY VISUALS OTHERWISE)
        setTimeout(() => {
            footer.classList.toggle("footerHidden");
            previousPage = 1; //NEEDED BECAUSE IT SHOULD ONLY BE SLOWED ONCE
            footerButtonUsed = true;
        }, 250)
    } else {
        footer.classList.toggle("footerHidden");
    }
}
// FOOTER RELATIVE/FIXED SWITCHING SCRIPTS FOR WORKING MOBILE VIEW
const footerRelative = () => {
    if (window.innerWidth < 768) {
        footer.classList.add("footerRelative");
    }
}
const footerFixed = () => {
    if (window.innerWidth < 768) {
        footer.classList.remove("footerRelative");
    }
}
// LOAD IMAGES SCRIPT
// LOAD MAP ONLY WHEN "CONTACT IS ACCESSED TO REDUCE LAG/STUTTER ON BAD HARDWARE"
let mapLoaded = false;
const loadMap = () => {
    if (mapLoaded == false) {
        map.classList.add("mapLoaded");
        mapLoaded = true;
    }
}
// TOGGLE FUNCTIONS FOR MAIN CONTENT SECTIONS
const showHome = () => {
    menuLock();
    hideHeader();
    resetOpacity();
    teamContainer.classList.add("nullOpacity");
    aboutContainer.classList.add("nullOpacity");
    contactContainer.classList.add("nullOpacity");
    impContainer.classList.add("nullOpacity");
    stmtContainer.classList.add("nullOpacity");
    setTimeout(() => {
        teamContainer.classList.add("noDisplay");
        aboutContainer.classList.add("noDisplay");
        contactContainer.classList.add("noDisplay");
        impContainer.classList.add("noDisplay");
        stmtContainer.classList.add("noDisplay");
        homeContainer.classList.remove("noDisplay");
        homeContainer.classList.add("fullOpacity");
    }, 250)
    setTimeout(() => {
        resetOpacity();
        menuUnlock();
    }, 500)
}
const showAbout = () => { //SHOWS "PORTRAIT"
    menuLock(); //LOCK MENU
    resetOpacity(); //CLEARS THE CLASSES USED TO TRANSITION SMOOTHLY
    // FADES OUT THE CURRENT MAIN CONTENT
    homeContainer.classList.add("nullOpacity");
    contactContainer.classList.add("nullOpacity");
    teamContainer.classList.add("nullOpacity");
    impContainer.classList.add("nullOpacity");
    stmtContainer.classList.add("nullOpacity");
    // SHOWS THE HEADER IN CASE USER NAVIGATED FROM LANDING PAGE
    showHeader();
    setTimeout(() => { //WHEN MAIN CONTENT HAS FADED OUT, THIS DISABLES THE DISPLAY FOR THE NON-SELECTED MAIN SECTIONS, THEN ADDS DISPLAY FOR THE SELECTED ONE AND FADES IT IN
        contactContainer.classList.add("noDisplay");
        homeContainer.classList.add("noDisplay");
        teamContainer.classList.add("noDisplay");
        impContainer.classList.add("noDisplay");
        stmtContainer.classList.add("noDisplay");
        aboutContainer.classList.remove("noDisplay");
        aboutContainer.classList.add("fullOpacity");
    }, 250)
    setTimeout(() => {
        resetOpacity(); //AGAIN RESETS THE OPACITY CLASSES, AS ONLY "noDisplay" MATTERS ONCE PAGE HAS TRANSFORMED
        menuUnlock(); //UNLOCKS MENU BUTTONS
    }, 500)
}
const showTeam = () => {
    menuLock();
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
        resetOpacity();
        menuUnlock();
    }, 500)
}
const showContact = () => {
    loadMap();
    menuLock();
    resetOpacity();
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
        menuUnlock();
    }, 500)
}
const showImp = () => {
    menuLock();
    resetOpacity();
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
        menuUnlock();
    }, 500)
}
const showStmt = () => {
    menuLock();
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
        menuUnlock();
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
let previousPage = 1
// 1 = HOME
// 2 = PORTRAIT
// 3 = TEAM
// 4 = CONTACT
// 5 = LEGAL NOTICE
// 6 = PRIVACY STATEMENT

//SCRIPT THAT SHOWS THE CORRECT MAIN SECTION FOR "PORTRAIT"
menuNavButton[0].addEventListener("click", () => {
    navToggle();
    if (currentPage !== 1) {
        previousPage = currentPage;
        currentPage = 1;
        window.scrollTo(0, 0);
        showHome();
    }
    footerFixed();
    footerToggle();
})
menuNavButton[1].addEventListener("click", () => {
    navToggle();
    if (currentPage !== 2) {
        previousPage = currentPage;
        currentPage = 2;
        window.scrollTo(0, 0);
        showAbout();
    }
    footerFixed();
    footerToggle();
})
//SCRIPT THAT SHOWS THE CORRECT MAIN SECTION FOR "TEAM"
menuNavButton[2].addEventListener("click", () => {
    navToggle();
    if (currentPage !== 3) {
        previousPage = currentPage;
        currentPage = 3;
        window.scrollTo(0, 0);
        showTeam();
        setTimeout(() => {
            footerRelative();
            footerToggle()
        }, 250)
    } else {
        footerRelative();
        footerToggle();
    }
})
//SCRIPT THAT SHOWS THE CORRECT MAIN SECTION FOR "CONTACT"
menuNavButton[3].addEventListener("click", () => {
    navToggle();
    if (currentPage !== 4) {
        previousPage = currentPage;
        currentPage = 4;
        window.scrollTo(0, 0);
        showContact();
    }
    footerFixed();
    footerToggle();
})
//SCRIPT THAT SHOWS THE CORRECT MAIN SECTION FOR "LEGAL NOTICE"
menuNavButton[4].addEventListener("click", () => {
    navToggle();
    if (currentPage !== 5) {
        previousPage = currentPage;
        currentPage = 5;
        window.scrollTo(0, 0);
        showImp();
    }
    footerFixed();
    footerToggle();
})
//SCRIPT THAT SHOWS THE CORRECT MAIN SECTION FOR "DATA PROTECTION"
menuNavButton[5].addEventListener("click", () => {
    navToggle();
    if (currentPage !== 6) {
        previousPage = currentPage;
        currentPage = 6;
        window.scrollTo(0, 0);
        showStmt();
        setTimeout(() => {
            footerRelative();
            footerToggle()
        }, 250)
    } else {
        footerRelative();
        footerToggle();
    }
})
// OTHER "REDIRECT" SCRIPTS - USING THE FOOTER BUTTONS
impButton.addEventListener("click", () => {
    if (currentPage !== 5) {
        previousPage = currentPage; // REQUIRED TO FIX THE FOOTER TWITCHING OUT WHEN COMING FROM SCROLLABLE PAGE, NOT PERFECT BUT IT WORKS
        if (previousPage == 3 || previousPage == 6) {
            footer.classList.toggle("footerTransparent");
            setTimeout(() => {
                footer.classList.toggle("footerTransparent");
            }, 250);
        } 
        previousPage = 1;// NOT TRUE, BUT NEEDED TO MAKE SURE NAVTOGGLE WORKS AS INTENDED
        currentPage = 5;
        window.scrollTo(0, 0);
        showImp();
        footerFixed();
    }

})
stmtButton.addEventListener("click", () => {
    if (currentPage !== 6) {
        previousPage = 1; // NOT TRUE, BUT NEEDED TO MAKE SURE NAVTOGGLE WORKS AS INTENDED
        currentPage = 6;
        footer.classList.toggle("footerHidden") // NEEDED WHEN YOU COME FROM A NON-SCROLLABLE PAGE TO A SCROLLABLE ONE (LIKE THIS ONE LEADS TO)
        setTimeout(() => {
            footer.classList.toggle("footerHidden")
        }, 250);
        window.scrollTo(0, 0);
        showStmt();
        footerRelative();
    }
})
// EXTEND LAWYER DESCRIPTION SCRIPT
chevronExtended = [false, false, false, false];
for (let i = 0; i <= 3; i++) {
    chevron[i].addEventListener("click", () => {
        lawyerContainer[i].classList.toggle("lawyerContainerExtended");
        lawyerName[i].classList.toggle("lawyerNameExtended");
        lawyerInfo[i].classList.toggle("lawyerInfoExtended");
        if (chevronExtended[i] == false) {
            chevron[i].classList.toggle("chevronRotateIn");
            chevronExtended[i] = true;
        } else {
            chevron[i].classList.add("chevronRotateOut");
            chevronExtended[i] = false;
            setTimeout(() => {
                chevron[i].classList.remove("chevronRotateIn", "chevronRotateOut")
            }, 250)
        }

    })
}

// ENLARGE MAP SCRIPT
let mapExpanded = false;
const mapToggle = () => {
    map.classList.toggle("mapEnlarged");
    contactInfo.classList.toggle("contactInfoHidden");
    if (mapExpanded == false) {
        mapInfo.innerHTML = "Click to Hide";
        mapExpanded = true;
    } else {
        mapInfo.innerHTML = "Click to Enlarge";
        mapExpanded = false;
    }
}
map.addEventListener("click", () => {
    if (window.innerWidth >= 768) {
        mapToggle();
    }
})
