const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });

  hamburger.classList.toggle("toggle");
});

function getWindowWidth() {
  return window.innerWidth || document.body.clientWidth;
}

if (getWindowWidth() <= 1200) {
  window.onload = function(){
    navLinks.addEventListener("click", () => {
      navLinks.classList.remove("open");
      links.forEach((link) => {
        link.classList.toggle("fade");
      });
      hamburger.classList.toggle("toggle");
    });
}
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
// $(window).on("load", function () {
//   $(".preloader").fadeOut().end().delay(500).fadeOut("slow");
// });


const largeSlider = ()=>{
	let largeSliders = document.querySelectorAll('.large-swiper')
	let prevArrow = document.querySelectorAll('.prev')
	let nextArrow = document.querySelectorAll('.next')
	largeSliders.forEach((slider, index)=>{
    // this bit checks if there's more than 1 slide, if there's only 1 it won't loop
		let sliderLength = slider.children[0].children.length
		let result = (sliderLength > 1) ? true : false
		const swiper = new Swiper(slider, {
			direction: 'horizontal',
			loop: result,
			navigation: {
        // the 'index' bit below is just the order of the class in the queryselectorAll array, so the first one would be NextArrow[0] etc
				nextEl: nextArrow[index],
				prevEl: prevArrow[index],
			},
			speed: 1000,
		});	
	})
}
window.addEventListener('load', largeSlider)

// let sliders = document.querySelectorAll('.slider');

// for (let i = 0; i < sliders.length; i++) {
//   init_slider(sliders[i]);
// }

// function init_slider(slider) {
  
//   let slide = slider.querySelectorAll('.slide');
//   const reverseslide = Array.from(slide)
//   const reversed = reverseslide.reverse()
  
//   let next = slider.querySelector('.next');
//   let back = slider.querySelector('.back');

//   let i = 0;
  
//   next.addEventListener('click', function() {
//     slide[i].classList.remove('block');
    
//     i = (i + 1) % slide.length;
    
//     slide[i].classList.add('block');
//   });  

//   back.addEventListener('click', function() {
//     reversed[i].classList.remove('block');
    
//     i = (i + 1) % slide.length;
    
//     reversed[i].classList.add('block');
//   });  
// }

// let sliders = document.querySelectorAll('.slider');
// for (let i = 0; i < sliders.length; i++) {
//   console.log('sliders array length: ' + sliders.length);

//   changeSlide()
// }


// let slides = document.querySelectorAll(".slide");
// let index = 0;


// function prevSlide(n){
//   index+=n;
//   changeSlide();
// }

// function nextSlide(n){
//   index+=n;
//   changeSlide();
// }


// changeSlide();

// function changeSlide(){

//     if(index>slides.length-1)
//     index=0;
  
//    if(index<0)
//     index=slides.length-1;
//     for(let i=0;i<slides.length;i++){
//       slides[i].style.display = "none";
//     } if ($(window).width() > 960) {
//       slides[index].style = "display:flex; flex-direction:row";
  
//     } else {
//       slides[index].style = "display:block;";
//     }
    
// }

//sale button
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

//about us section
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


//partners logos section

if ($(".product-left").length) {
  let productSlider = new Swiper(".product-slider", {
    spaceBetween: 0,
    centeredSlides: false,
    loop: true,
    direction: "horizontal",
    loopedSlides: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    resizeObserver: true,
  });
  let productThumbs = new Swiper(".product-thumbs", {
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


