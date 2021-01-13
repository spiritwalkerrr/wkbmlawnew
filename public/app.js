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
    if (navExtended == false) { //EXTENDS THE MENU AND CHANGES THE STYLING OF THE NAV BUTTON
        navButton.classList.remove("navButtonRotateOut")
        menu.classList.toggle("menuExtended");
        navButton.classList.add("navButtonRotateIn");
        body.classList.toggle("hideOverflow"); //DISABLES SCROLL TO AVOID THE SCROLLBAR FROM SHOWING UP DUE TO THE FOOTER SCRIPT
        setTimeout(() => {
            navExtended = true;
        }, 200)
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
    for (let button of menuNavButton){
        button.removeAttribute("disabled", ""); //UNLOCKS THE MENU BUTTONS FOR WHEN TRANSFORMATION IS OVER
    }
}
//SHOW HEADER FUNCTION FOR WHEN THE USER SWITCHES OFF FROM THE LANDING PAGE
const showHeader = () => {
    header.classList.remove("headerHidden");
}
const hideHeader= () => {
    header.classList.add("headerHidden");
}
// SHOW AND HIDE FOOTER FOOTER FUNCTION
const footerToggle = () => {
        footer.classList.toggle("footerHidden");
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
// 1 = HOME
// 2 = PORTRAIT
// 3 = TEAM
// 4 = CONTACT
// 5 = LEGAL NOTICE
// 6 = PRIVACY STATEMENT

//SCRIPT THAT SHOWS THE CORRECT MAIN SECTION FOR "PORTRAIT"
menuNavButton[0].addEventListener("click", () => {
    navToggle();
    footerToggle();
    if (currentPage !== 1) {
        window.scrollTo(0, 0);
        showHome();
        currentPage = 1;
    }
})
menuNavButton[1].addEventListener("click", () => {
    navToggle();
    footerToggle();
    if (currentPage !== 2) {
        window.scrollTo(0, 0);
        showAbout();
        currentPage = 2;
    }
})
//SCRIPT THAT SHOWS THE CORRECT MAIN SECTION FOR "TEAM"
menuNavButton[2].addEventListener("click", () => {
    navToggle();
    if (currentPage !== 3) {
        window.scrollTo(0, 0);
        showTeam();
        setTimeout(()=>{
            footerToggle()
        },250)
        currentPage = 3;
    } else {
        footerToggle();
    }
})
//SCRIPT THAT SHOWS THE CORRECT MAIN SECTION FOR "CONTACT"
menuNavButton[3].addEventListener("click", () => {
    navToggle();
    footerToggle();
    if (currentPage !== 4) {
        window.scrollTo(0, 0);
        showContact();
        currentPage = 4;
    }
})
//SCRIPT THAT SHOWS THE CORRECT MAIN SECTION FOR "LEGAL NOTICE"
menuNavButton[4].addEventListener("click", () => {
    navToggle();
    footerToggle();
    if (currentPage !== 5) {
        window.scrollTo(0, 0);
        showImp();
        currentPage = 5;
    }
})
//SCRIPT THAT SHOWS THE CORRECT MAIN SECTION FOR "DATA PROTECTION"
menuNavButton[5].addEventListener("click", () => {
    navToggle();
    if (currentPage !== 6) {
        window.scrollTo(0, 0);
        showStmt();
        setTimeout(()=>{
            footerToggle()
        },250)
        currentPage = 6;
    } else {
        footerToggle();
    }
})
// OTHER "REDIRECT" SCRIPTS - USING THE FOOTER BUTTONS
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
