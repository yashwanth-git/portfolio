//DOM
const toggler = document.querySelector(".Toggler");
const navLinks = document.querySelectorAll(".Navbar__Link");
const logo = document.querySelector(".Logo");

//Menu Toggler
toggler.addEventListener("click", () => {
  toggler.classList.toggle("active");
});

logo.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

//Close Header on click for Mobile
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    if (toggler.classList.contains("active")) {
      toggler.classList.remove("active");
    }
  });
});

//Header on Scroll
const header = document.querySelector("header");
const main = document.querySelector("main").offsetHeight;
const socialIconsHeight = document.querySelector(".social-icons").offsetHeight;
let lastOffsetY = window.pageYOffset;
const socialIcons = document.querySelector(".social-icons");
window.onscroll = function () {
  if (window.pageYOffset > lastOffsetY) {
    header.classList.remove("top");
    header.classList.add("hide");
  } else if (window.pageYOffset < 600) {
    header.classList.remove("top");
    header.classList.remove("hide");
  } else {
    header.classList.add("top");
    header.classList.remove("hide");
  }
  //Fixed Social Icons
  lastOffsetY = pageYOffset;
  if (window.pageYOffset > main - socialIconsHeight) {
    socialIcons.classList.add("change");
  } else {
    socialIcons.classList.remove("change");
  }
};
