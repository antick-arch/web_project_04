function firstPage(){
    var tl = gsap.timeline()

 
tl.from("nav h1, nav h4, nav button",{
    y:-40,
    opacity:0,
    delay:0.5,
    duration:0.7,
    stagger:0.15
})
tl.from(".page1 h1",{
    x:-300,
    opacity:0,
    delay:1,
    duration:0.5,
})
tl.from(".page1 p",{
    x:-100,
    opacity:0,
    delay:1,
    duration:0.4,
})
tl.from(".page1 button",{
    opacity:0,
    duration:0.4,
})
tl.from(".page2 img",{
    opacity:0,
    duration:0.5,
},"-=1")
tl.from(".bottom img",{
    opacity:0,
    y:30,
    stagger:0.15,
    duration:0.6
})
}
firstPage()
function secondPage(){
    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:".section2",
            scroller:"body",
            start:"top 50%",
            end:"top 0",
            scrub:2,
        }
    })
    tl2.from(".services",{
        y:30,
        opacity:0,
        duration:0.5
    })
    tl2.from(".box.serial1.left",{
        x:-300,
        opacity:0,
        duration:1
    },"animation1")
    tl2.from(".box.serial1.right",{
        x:300,
        opacity:0,
        duration:1
    },"animation1")
    tl2.from(".box.serial2.left",{
        x:-300,
        opacity:0,
        duration:1
    },"animation2")
    tl2.from(".box.serial2.right",{
        x:300,
        opacity:0,
        duration:1
    },"animation2")
}
secondPage()