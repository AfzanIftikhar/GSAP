gsap.from(".page1 #box1", {
    scale:0,
    duration: 2,
    delay : 1
})
gsap.from(".page2 #box2", {
    scale:0,
    duration: 2,
    
    scrollTrigger: {
        trigger: ".page2 #box2",
        scrub:true,
        markers: false,
        start : "top 60%",
        end : "top 30%"
        
    }

})
gsap.from(".page2 h1", {
    opacity : 0,
    x: 400,
    duration: 2,
    
    scrollTrigger: {
        trigger: ".page2 h1",
        markers: false,
        start: "top 60%"
    }

})
gsap.from(".page2 h2", {
    opacity : 0,
    x: -400,
    duration: 2,
    
    scrollTrigger: {
        trigger: ".page2 h2",
        markers: false,
        start: "top 60%"
    }

})




gsap.to(".page3 h1", {

    transform : "translateX(-130%)",

    scrollTrigger:{
        trigger:".page3",
        markers:false,
        scroller : "body",
        start: "top 0%",
        end: "top -100%",
        scrub : 2,
        pin: true

    }

})