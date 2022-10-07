// mobile menu appear after click the hamburger button
const hamburgerMenu = document.querySelector(".hamburger-menu");

let menuOpen = false;
hamburgerMenu.addEventListener("click", ()=>{
    const mobileMenu = document.querySelector(".mobile-menu");
    const menuImage = document.querySelector("#menu-image");
    const bodyElement = document.querySelector("body");

    if(menuOpen === false){
        // make the mobile menu appear
        mobileMenu.style.display = "flex";
        // change the hamburger menu to close
        menuImage.src = "assets/close.svg"; 
        menuOpen = true;

        // add position fixed to the body element
        bodyElement.classList.add("position-fixed");
        mobileMenu.classList.remove("exit-mobile-menu");
    }
    else{
        // before closing the menu first translate it 100vw
        mobileMenu.classList.add("exit-mobile-menu");

        // make the mobile menu close after 1.5s
        setTimeout(function () {mobileMenu.style.display = "none";}, 1500);
        
        // change the close to hamburger menu
        menuImage.src = "assets/hamburger-menu.svg"; 
        menuOpen = false;
        
        // remove position fixed to the body element
        bodyElement.classList.remove("position-fixed");
    }
})
