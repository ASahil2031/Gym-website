// ================= BACK TO TOP BUTTON =================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    topBtn.style.display = "flex";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ================= SCROLL REVEAL ANIMATION =================

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", function () {
  reveals.forEach(function (element) {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      element.classList.add("active");
    }
  });
});
// for 3line menu button

// Run once when page loads
window.dispatchEvent(new Event("scroll"));
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {
  if (navMenu.style.display === "block") {
    navMenu.style.display = "none";
  } else {
    navMenu.style.display = "block";
  }
});
// for 3 line when click on any link in the nav menu, the menu will close
const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.style.display = "none";
  });
});
