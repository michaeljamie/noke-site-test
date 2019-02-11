// Shrink Banner on Scroll

if (window.innerWidth > 1024) { 
    window.onscroll = function() {scrollFunction()};
}

function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        document.getElementById("navbar").className = "navbarScroll";
        // document.getElementById("logo").style.width = "4vw";
        document.getElementById("logo-scroll").className = "noke-logoScroll";
        var items = document.getElementsByClassName("menu-item");
        for (var i = items.length-1; i >=0; i--) {
            items[i].className = "menu-itemScroll";
        }
        document.getElementById("bannerText").className = "bannerTextScroll";
        document.getElementById("banner").className = "bannerScroll";
    } else {
        document.getElementById("navbar").className = "navbar";
        // document.getElementById("logo").style.width = "6.5vw";
        document.getElementById("logo-scroll").className = "noke-logo";
        var items = document.getElementsByClassName("menu-item");
        for (var i = items.length-1; i >=0; i--) {
            items[i].className = "menu-item";
        }
        document.getElementById("bannerText").className = "bannerText";
        document.getElementById("banner").className = "banner";
    }
}
