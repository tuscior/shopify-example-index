window.onload = function() {
    window.onscroll = function() {toggleClass()};

    var navbar = document.querySelector(".sticky-nav");
    var sticky = navbar.offsetHeight;
    function toggleClass() {
        if(window.innerWidth > 900){
            if (window.pageYOffset >= sticky) {
                navbar.classList.add("sticky")
            } else {
                navbar.classList.remove("sticky");
            }
        }
    }
}
