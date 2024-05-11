gsap.registerPlugin(ScrollTrigger);



let sections = gsap.utils.toArray(".gallery-image");
console.log(sections);

gsap.to(sections, {
  xPercent: -250 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".section2",
    pin: true,
    scrub: 1,
    snap: 2 / (sections.length - 1),
    end: () => "+=" + document.querySelector(".section2").offsetWidth
  }
});

window.onload = function() {
    document.querySelector('svg').style.opacity = 1;
  };