$(function () {
  $(window).on("load", function () {
    $('#preloader').fadeOut('slow', function () {
      $(this).remove();
    });
  });
});

// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}

// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function () {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function () {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

var typed = new Typed(".typing", {
  strings: ["Web Developer !", "Programmer !", "Blogger !"],
  typeSpeed: 100,
  backSpeed: 80,
  loop: true
});

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}

// loader

var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});


// JQuery

jQuery(document).ready(function () {
  jQuery('.skillbar').each(function () {
    jQuery(this).find('.skillbar-bar').animate({
      width: jQuery(this).attr('data-percent')
    }, 6000);
  });
});



// Contact Form

const scriptURL = 'https://script.google.com/macros/s/AKfycbyKSv1x7WvRtYO4da4NdqECT_qH1rhqrvPUNutR84VwSZX82EYffNR9f68sU0XxsoGj/exec'
const form = document.forms['submit-to-google-sheet']
  
const msg = document.getElementById('msg')

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully !"

        setTimeout(() => {
          msg.innerHTML = ""
          
        }, 5000);
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })


// dark theme