/* ==========================================
   NEW PRIMAGAMA SUNTER INDAH
   SCRIPT.JS
========================================== */

/* =============================
   NAVBAR SAAT SCROLL
============================= */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(94,43,151,0.98)";
        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.15)";

    } else {

        header.style.background = "rgba(94,43,151,.92)";
        header.style.boxShadow = "none";

    }

});


/* =============================
   SCROLL HALUS NAVBAR
============================= */

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const tujuan = document.querySelector(
            this.getAttribute("href")
        );

        if (tujuan) {

            tujuan.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


/* =============================
   MENU AKTIF SAAT SCROLL
============================= */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/* =============================
   ANIMASI HERO TEXT
============================= */

window.addEventListener("load", () => {

    const heroText = document.querySelector(".hero-text");

    if (heroText) {

        heroText.style.opacity = "0";
        heroText.style.transform = "translateY(40px)";
        heroText.style.transition = ".8s";

        setTimeout(() => {

            heroText.style.opacity = "1";
            heroText.style.transform = "translateY(0)";

        }, 300);

    }

});


/* =============================
   EFEK HOVER TOMBOL
============================= */

const tombol = document.querySelector(".btn");

if (tombol) {

    tombol.addEventListener("mouseenter", () => {

        tombol.style.transform = "scale(1.05)";

    });

    tombol.addEventListener("mouseleave", () => {

        tombol.style.transform = "scale(1)";

    });

}


/* =============================
   ANIMASI CARD SAAT SCROLL
============================= */

const reveal = document.querySelectorAll(
    ".program-card, .feature-card, .why-card, .fasilitas-card"
);

function revealElement() {

    const tinggiLayar = window.innerHeight;

    reveal.forEach(item => {

        const posisi = item.getBoundingClientRect().top;

        if (posisi < tinggiLayar - 100) {

            item.classList.add("muncul");

        }

    });

}

window.addEventListener("scroll", revealElement);

revealElement();


/* =============================
   TOMBOL SCROLL KE ATAS
============================= */

const scrollBtn = document.getElementById("scrollTopBtn");

if (scrollBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            scrollBtn.style.display = "block";

        } else {

            scrollBtn.style.display = "none";

        }

    });

    scrollBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}


/* =============================
   HAMBURGER MENU
============================= */

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

if (hamburger) {

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

}
