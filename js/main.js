// Shrink Nav on Scroll

if (window.innerWidth > 1024) { 
    window.onscroll = function() {scrollFunction()};
}

function scrollFunction() {
if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("navbar").className = "navbarScroll";
    document.getElementById("logo").style.width = "5.5vw";
    // document.getElementById("menu-links").className = "nav-linksScroll";
} else {
    document.getElementById("navbar").className = "navbar";
    document.getElementById("logo").style.width = "6.5vw";
    // document.getElementById("menu-links").className = "nav-links";
}
}
