//Navbar fixed
window.onscroll = function() {
    const header = document.querySelector("header");
    const fixedNav = header.offsetTop; // awalnya 0 akan bertambah berdasarkan scroll yang dilakukan

    if (window.scrollY > fixedNav){
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}


// Hamburger button
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click",function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

