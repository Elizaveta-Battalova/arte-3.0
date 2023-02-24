const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  //Animate Links
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });

  //Hamburger Animation
  hamburger.classList.toggle("toggle");
});

function getWindowWidth() {
  return window.innerWidth || document.body.clientWidth;
}

if (getWindowWidth() <= 1200) {
  window.onload = function () {
    navLinks.addEventListener("click", () => {
      navLinks.classList.remove("open");
      links.forEach((link) => {
        link.classList.toggle("fade");
      });
      hamburger.classList.toggle("toggle");
    });
  };
}



let lastScroll = 0;
const defaultOffset = 150;
const header = document.querySelector(".header");

const scrollPosition = () =>
  window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains("hide");

window.addEventListener("scroll", () => {
  if (
    scrollPosition() > lastScroll &&
    !containHide() &&
    scrollPosition() > defaultOffset
  ) {
    //scroll down
    header.classList.add("hide");
  } else if (scrollPosition() < lastScroll && containHide()) {
    //scroll up
    header.classList.remove("hide");
  }

  lastScroll = scrollPosition();
});

$(function () {
    toggleMenu();
  
    function toggleMenu() {
      $(".menuTitle").click(function () {
        $(this).children().toggleClass("rotate");
        $(this).next().slideToggle();
      });
    }
  });
  