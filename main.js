let swiper = new Swiper(".blog-slider", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  mousewheel: {
    invert: false,
  },
  // autoHeight: true,
  pagination: {
    el: ".blog-slider__pagination",
    clickable: true,
  },
});

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

$(document).ready(function () {
  setInterval(function () {
    $("#kupasen-ugakimev>span").addClass("blink_on");
    setTimeout(function () {
      $("#kupasen-ugakimev>span").removeClass("blink_on");
    }, 1500);
  }, 6000);
});

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

$(window).on("load", function () {
  $(".preloader").fadeOut().end().delay(500).fadeOut("slow");
});

function reveal() {
  let reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 15,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

$(document).ready(function () {
  $("#biografy-btn").click(function () {
    $("#sidebar-biography").toggleClass("visible");
  });
});

$(document).ready(function () {
  $("#biography-sidebar-btn").click(function () {
    $("#sidebar-biography").toggleClass("visible");
  });
});

/* product left start */
if ($(".product-left").length) {
  var productSlider = new Swiper(".product-slider", {
    spaceBetween: 0,
    centeredSlides: false,
    loop: true,
    direction: "horizontal",
    loopedSlides: 5,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    resizeObserver: true,
  });
  var productThumbs = new Swiper(".product-thumbs", {
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    slideToClickedSlide: true,
    direction: "horizontal",
    slidesPerView: 5,
    loopedSlides: 5,
  });
  productSlider.controller.control = productThumbs;
  productThumbs.controller.control = productSlider;
}
/* 	product left end */
