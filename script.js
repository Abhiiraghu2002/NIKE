var tl =gsap.timeline();


tl.from(".container",{
   
    duration:.6,
    scale:0,    
    delay:1,
    opacity:0,
})

tl.from(".child1",{
    y:130,
    duration:.2,
})
tl.from(".child2",{
    y:170,
    duration:.5,
})
tl.from(".child3",{
    y:150,
    duration:.3,
})
tl.from(".child4",{
    y:110,
    duration:.5,
})
tl.from(".child5",{
    y:180,
    duration:.2,
})
tl.from(".child6",{
    y:160,
    duration:.2,
})
tl.from(".child7",{
    y:110,
    duration:.6,
})