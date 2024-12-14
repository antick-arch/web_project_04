function animation(){
    var at = gsap.timeline()

at.to("#back1",{
    top: "-100%",
    delay:0.5,
    duration:0.5,
    ease:"expo.out"
})
at.from("#back2",{
    top: "100%",
    delay:1,
    duration:0.5,
    ease:"expo.out"
},"same")
at.to("#back-ward h1",{
    delay:0.6,
    color:"black"
},"same")
at.to("#back-ward",{
    display:"none"
})
}
animation();

const scroll = new LocomotiveScroll({
    el: document.querySelector('#container'),
    smooth: true
});



var dark = document.getElementById("dark");
var light = document.getElementById("light");
var body = document.getElementById("body");

dark.addEventListener("click", function () {
    body.classList.add("dark-theme");
    body.classList.remove("light-theme");
});

light.addEventListener("click", function () {
    body.classList.add("light-theme");
    body.classList.remove("dark-theme");
});
