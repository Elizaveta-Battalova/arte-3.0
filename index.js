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

const largeSlider = () => {
  let largeSliders = document.querySelectorAll(".large-swiper");
  let prevArrow = document.querySelectorAll(".prev");
  let nextArrow = document.querySelectorAll(".next");
  largeSliders.forEach((slider, index) => {
    // this bit checks if there's more than 1 slide, if there's only 1 it won't loop
    let sliderLength = slider.children[0].children.length;
    let result = sliderLength > 1 ? true : false;
    const swiper = new Swiper(slider, {
      direction: "horizontal",
      loop: result,
      navigation: {
        // the 'index' bit below is just the order of the class in the queryselectorAll array, so the first one would be NextArrow[0] etc
        nextEl: nextArrow[index],
        prevEl: prevArrow[index],
      },
      speed: 1000,
    });
  });
};
window.addEventListener("load", largeSlider);

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

Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
  get: function () {
      return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
  }
});

jQuery('body').on('click touchstart', function () {
          const videoElement = document.getElementById('myVideo');
          if (videoElement.playing) {
          }
          else {
              videoElement.play();
          }
  });
