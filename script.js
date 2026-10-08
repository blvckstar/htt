// ============================================
// HATTIE — THE SIDE OF ME YOU FOUND
// ============================================


// ============================================
// BEGIN BUTTON
// ============================================

const beginButton = document.getElementById("beginBtn");

if (beginButton) {

    beginButton.addEventListener("click", () => {

        const firstSection = document.querySelector(".section");

        if (firstSection) {

            firstSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

}


// ============================================
// SCROLL REVEAL
// ============================================

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


// ============================================
// PARALLAX AMBIENT LIGHT
// ============================================

const ambient =
    document.querySelector(".ambient");


if (ambient) {

    let ticking = false;

    window.addEventListener("scroll", () => {

        if (!ticking) {

            window.requestAnimationFrame(() => {

                const scrollY = window.scrollY;

                ambient.style.transform =
                    `translateX(-50%) translateY(${scrollY * 0.08}px)`;

                ticking = false;

            });

            ticking = true;

        }

    });

}


// ============================================
// SUBTLE MOUSE MOVEMENT
// ============================================

const heroContent =
    document.querySelector(".hero-content");


if (heroContent) {

    window.addEventListener("mousemove", (event) => {

        if (window.innerWidth < 700) return;

        const x =
            (event.clientX / window.innerWidth - 0.5) * 8;

        const y =
            (event.clientY / window.innerHeight - 0.5) * 8;

        heroContent.style.transform =
            `translate(${x}px, ${y}px)`;

    });

}


// ============================================
// HEART INTERACTION
// ============================================

const heart =
    document.querySelector(".heart");


if (heart) {

    heart.addEventListener("click", () => {

        heart.style.transform = "scale(1.5)";

        setTimeout(() => {

            heart.style.transform = "";

        }, 300);

    });

}


// ============================================
// CONSOLE MESSAGE
// ============================================

console.log(
    "%cFor Hattie ♥",
    "font-size: 24px; font-family: Georgia; color: #9d2929;"
);

console.log(
    "Some stories don't start perfectly. They just get better."
);