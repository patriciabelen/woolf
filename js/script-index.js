

/* --- Part One --- */
var vPartOne = gsap.timeline(), 
    PartOne = new SplitText(".textOne", {type:"words,chars"}), 
    chars = PartOne.chars;


vPartOne.from(chars, {
  duration: 2,
  opacity:0,
  y:0,
  ease:"circ.out",
  stagger: 0.02,
scrollTrigger: {
    trigger: ".textOne",
//markers:true,
    start: "top 25%",
   end: "bottom center",
    scrub:1
  }

}, "+=0");



gsap.set("#mark1", {xPercent: 0, yPercent: 0}),
gsap.to("#mark1", {scale: 50, x: "-180%", scrollTrigger: {
      trigger: "#mark1",
      start: "top 40%",
      end: "+=2000",
      //markers:true,
      pin:true,
      scrub: true
      }})





