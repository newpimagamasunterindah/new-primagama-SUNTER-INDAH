/* ==========================================
   JS TAHAP 1
   NEW PRIMAGAMA SUNTER INDAH
========================================== */


/* ==========================
   MENU HAMBURGER MOBILE
========================== */

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");


if(hamburger && navMenu){

    hamburger.addEventListener("click", () => {

        navMenu.classList.toggle("active");
        hamburger.classList.toggle("active");

    });

}



/* ==========================
   NAVBAR SCROLL EFFECT
========================== */

const navbar = document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});



/* ==========================
   SMOOTH SCROLL
========================== */

const navLinks = document.querySelectorAll("#nav-menu a");


navLinks.forEach(link => {

    link.addEventListener("click", function(){

        navMenu.classList.remove("active");
        hamburger.classList.remove("active");

    });

});

/* ==========================================
   JS TAHAP 2
   SCROLL ANIMATION
========================================== */


/* ==========================
   ELEMENT YANG DI ANIMASI
========================== */

const revealElements = document.querySelectorAll(
    ".hero-content, .section-title, .card, .program-card, .facility-card, .about-content"
);



/* ==========================
   OBSERVER ANIMATION
========================== */

const revealObserver = new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){

            entry.target.classList.add("show");


        }


    });


},{
    threshold:0.15
});



/* ==========================
   JALANKAN ANIMASI
========================== */

revealElements.forEach(element=>{

    element.classList.add("hidden");

    revealObserver.observe(element);

});
