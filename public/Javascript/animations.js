// Initialize GSAP animations
document.addEventListener("DOMContentLoaded", function () {
    // Initialize Locomotive Scroll
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
      multiplier: 1,
      lerp: 0.05,
      smartphone: {
        smooth: true
      },
      tablet: {
        smooth: true
      }
    });
  
    // Update scroll position for ScrollTrigger
    locoScroll.on("scroll", ScrollTrigger.update);
  
    // Tell ScrollTrigger to use these proxy methods for the '[data-scroll-container]' element
    ScrollTrigger.scrollerProxy('[data-scroll-container]', {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: document.querySelector('[data-scroll-container]').style.transform ? "transform" : "fixed"
    });
  
    // Hero section animations
    gsap.from("#hero-title", { 
      opacity: 0, 
      y: -50, 
      duration: 1, 
      ease: "power2.out" 
    });
  
    gsap.from(".hero-element", {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 1,
      ease: "back.out(1.7)"
    });
  
    // Project section animations
    gsap.from(".feature-card", {
      scrollTrigger: {
        trigger: "#project",
        scroller: '[data-scroll-container]',
        start: "top 80%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      y: 50,
      stagger: 0.1,
      duration: 0.8,
      ease: "power2.out"
    });
  
    // Team section animations
    gsap.from(".team-member", {
      scrollTrigger: {
        trigger: "#our-team",
        scroller: '[data-scroll-container]',
        start: "top 80%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      scale: 0.9,
      stagger: 0.1,
      duration: 0.8,
      ease: "back.out(1.7)"
    });
  
    // Each time the window updates, refresh ScrollTrigger and update LocomotiveScroll
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // After everything is set up, refresh ScrollTrigger
    ScrollTrigger.refresh();
  });