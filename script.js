 const revealElements = document.querySelectorAll(".reveal");

window.addEventListener("scroll", function() {

    revealElements.forEach(function(element) {

        const position = element.getBoundingClientRect().top;

        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {

            element.classList.add("show");

        }

    });


    // Move the sun when scrolling

    const sun = document.querySelector(".sun");

    let scrollPosition = window.scrollY;

    sun.style.transform =
        "translateY(" + scrollPosition * 0.2 + "px)";

});