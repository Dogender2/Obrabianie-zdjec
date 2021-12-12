window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);

    var header = document.querySelector("header");
    header.classList.toggle("sticky1", window.scrollY > 1500);
})

//Load
$(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
});

//Autoscroll
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}