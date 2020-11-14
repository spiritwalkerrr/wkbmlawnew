const body = document.querySelector("body")
const sectionOne = document.querySelector("#wrapper1")
const sectionTwo = document.querySelector("#wrapper2")
const sectionThree = document.querySelector("#wrapper3")
const sectionFour = document.querySelector("#wrapper4")
const aboutButton = document.querySelector(".aboutButton")
const servicesButton = document.querySelector(".servicesButton")
const membersButton = document.querySelector(".membersButton")
const contactButton = document.querySelector(".contactButton")
const aboutButtonSmall = document.querySelector(".aboutButtonSmall")
const servicesButtonSmall = document.querySelector(".servicesButtonSmall")
const membersButtonSmall = document.querySelector(".membersButtonSmall")
const contactButtonSmall = document.querySelector(".contactButtonSmall")
const noticeButton = document.querySelector(".noticeButton")
const noticeText = document.querySelector(".noticeText")
const navToggler = document.querySelector(".navToggler")
const smallNav = document.querySelector(".smallNav")
const footer = document.querySelector(".footer")

const page1 = document.querySelector(".page1")
const page2 = document.querySelector(".page2")
const page3 = document.querySelector(".page3")
const page4 = document.querySelector(".page4")
const page1on = document.querySelector(".page1on")
const page2on = document.querySelector(".page2on")
const page3on = document.querySelector(".page3on")
const page4on = document.querySelector(".page4on")
const pUp = document.querySelector(".pUp")
const pDown = document.querySelector(".pDown")

//FUNCTIONS FOR SCROLLING TO SPECIFIC POINT
let currentpage
const scrollToOne = function(){
    sectionOne.scrollIntoView();
    currentPage = 1;
    page1on.style.display = "block" 
    page2on.style.display = "none" 
    page3on.style.display = "none" 
    page4on.style.display = "none"
    page1.style.display = "none"
    page2.style.display = "block"
    page3.style.display = "block"
    page4.style.display = "block"
    pUp.style.color = "rgba(255, 255, 255, 0.1)"
    pDown.style.color= "white"
    footer.style.opacity ="1"

}
const scrollToTwo = function(){
    sectionTwo.scrollIntoView();
    currentPage = 2;
    page1on.style.display = "none" 
    page2on.style.display = "block" 
    page3on.style.display = "none" 
    page4on.style.display = "none"
    page1.style.display = "block"
    page2.style.display = "none"
    page3.style.display = "block"
    page4.style.display = "block"
    pUp.style.color = "white"
    pDown.style.color = "white"
    footer.style.opacity ="1"
}
const scrollToThree = function(){
    sectionThree.scrollIntoView();
    currentPage = 3;
    page1on.style.display = "none" 
    page2on.style.display = "none" 
    page3on.style.display = "block" 
    page4on.style.display = "none"
    page1.style.display = "block"
    page2.style.display = "block"
    page3.style.display = "none"
    page4.style.display = "block"
    pUp.style.color = "white"
    pDown.style.color = "white"
    footer.style.opacity ="1"
}
const scrollToFour = function(){
    sectionFour.scrollIntoView();
    currentPage = 4;
    page1on.style.display = "none" 
    page2on.style.display = "none" 
    page3on.style.display = "none" 
    page4on.style.display = "block"
    page1.style.display = "block"
    page2.style.display = "block"
    page3.style.display = "block"
    page4.style.display = "none"
    pUp.style.color = "white"
    pDown.style.color = "rgba(255, 255, 255, 0.1)"
    footer.style.opacity ="0"
}
scrollToOne();
//SCROLLDOWN AND SCROLLUP FUNCTIONS
const scrollDown = ()=>{
    if (currentPage === 1) {
        scrollToTwo();
    } else if (currentPage === 2) {
        scrollToThree();
    } else if (currentPage === 3) {
        scrollToFour()
    }
}
const scrollUp =()=>{
    if (currentPage === 2) {
        scrollToOne();
    } else if (currentPage === 3) {
        scrollToTwo();
    } else if (currentPage === 4) {
        scrollToThree();
    }
}
//SCROLLING SCRIPT
const timeIt = () =>{
    setTimeout(()=>{
        window.addEventListener("wheel", scrollDetect)
    },700)
}
const scrollDetect = (event) => {
    window.removeEventListener("wheel", scrollDetect)
    timeIt();
    if (event.deltaY > 0) {
        scrollDown()
    } else if (event.deltaY < 0) {
        scrollUp();
    }
}
//SCROLL EVENTLISTENER
window.addEventListener("wheel", scrollDetect)
//HOP TO BUTTONS
aboutButton.addEventListener("click", () => {
    scrollToOne();
})
servicesButton.addEventListener("click", () => {
    scrollToTwo();
})
membersButton.addEventListener("click", () => {
    scrollToThree();
})
contactButton.addEventListener("click", () => {
    scrollToFour();
})
aboutButtonSmall.addEventListener("click", () => {
    scrollToOne();
})
servicesButtonSmall.addEventListener("click", () => {
    scrollToTwo();
})
membersButtonSmall.addEventListener("click", () => {
    scrollToThree();
})
contactButtonSmall.addEventListener("click", () => {
    scrollToFour();
})
//UP & DOWN BUTTONS
pDown.addEventListener("click", ()=>{
    scrollDown();
})
pUp.addEventListener("click", ()=>{
    scrollUp();
})
//SIDE CIRCLES SCROLL
page1.addEventListener("click", ()=>{
    scrollToOne();
})
page2.addEventListener("click", ()=>{
    scrollToTwo();
})
page3.addEventListener("click", ()=>{
    scrollToThree();
})
page4.addEventListener("click", ()=>{
    scrollToFour();
})
// ARROW KEY SCROLL
document.onkeydown = checkKey;
function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '38') {
        scrollUp();
    }
    else if (e.keyCode == '40') {
        scrollDown()
    }
}
//LEGAL NOTICE SCROLL
noticeButton.addEventListener("click", ()=>{
    scrollToFour()
})
//NAVTOGGLER
smallNav.style.opacity = "0"
smallNav.style.display ="none"
const navToggle =()=>{
    if (smallNav.style.opacity === "0" && smallNav.style.display ==="none"){
        navToggler.style.transform = "rotate(90deg)";
        smallNav.style.display = "flex"
        smallNav.style.opacity = "1";
    } else {
        navToggler.style.transform = "rotate(0deg)";
        smallNav.style.opacity = "0";
        smallNav.style.display ="none"
    }
}
navToggler.addEventListener("click", navToggle)

