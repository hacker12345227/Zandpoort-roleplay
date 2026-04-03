// SCROLL ANIMATIONS
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
  cards.forEach(card => {
    const pos = card.getBoundingClientRect().top;

    if (pos < window.innerHeight - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});

// NAVBAR SCROLL EFFECT
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(5,13,31,0.9)";
  } else {
    navbar.style.background = "rgba(10,20,50,0.6)";
  }
});
