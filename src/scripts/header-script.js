//handling header
const header = document.querySelector(".main-header");

window.addEventListener("scroll", () => {
    if(window.scrollY >= 700) {
        header.style.backgroundColor = "#fff";    
    } else {
        header.style.backgroundColor = "#ffffff9a";
    }
});