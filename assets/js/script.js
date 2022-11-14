'use strict';

// modal variables
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// modal function
const modalCloseFunc = function () { modal.classList.add('closed') }

// modal eventListener
modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);





// notification toast variables
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

// notification toast eventListener
toastCloseBtn.addEventListener('click', function () {
  notificationToast.classList.add('closed');
});





// mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

  // mobile menu function
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove('active');
    overlay.classList.remove('active');
  }

  mobileMenuOpenBtn[i].addEventListener('click', function () {
    mobileMenu[i].classList.add('active');
    overlay.classList.add('active');
  });

  mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
  overlay.addEventListener('click', mobileMenuCloseFunc);

}





// accordion variables
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {

  accordionBtn[i].addEventListener('click', function () {

    const clickedBtn = this.nextElementSibling.classList.contains('active');

    for (let i = 0; i < accordion.length; i++) {

      if (clickedBtn) break;

      if (accordion[i].classList.contains('active')) {

        accordion[i].classList.remove('active');
        accordionBtn[i].classList.remove('active');

      }

    }

    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');

  });

}

// countdown

const days = document.getElementById('days');
const hours = document.getElementById('hours');
const min = document.getElementById('min');
const sec = document.getElementById('sec');
//const year = document.getElementById('year');
const loading = document.getElementById('loading');
const countdown = document.getElementById('countdown');

const currentYear = new Date().getFullYear();
const newYearTime = new Date(`january 01 ${currentYear + 1} 202 00:00:00`); 

//Set year
//year.innerHTML = currentYear 
//updatecountdown time
function updateCountdown(){
  const currentTime = new Date(); 
  const diff = newYearTime - currentTime;
  
  // Add values to DOM
  const d = Math.floor(diff/1000/60/60/24)
  const h = Math.floor(diff/1000/60/60) % 24;
  const m = Math.floor(diff/1000/60) % 60;
  const s = Math.floor(diff/1000) % 60;

const md = d-40
days.innerHTML = md
hours.innerHTML = h < 10 ? '0' + h : h
min.innerHTML = m < 10 ? '0' + m : m
sec.innerHTML = s < 10 ? '0' + s : s
}

//show spinner
setTimeout(() =>{
  loading.remove();
  countdown.style.display = 'flex'
}, 1000)

// Run every second
setInterval(updateCountdown, 1000)




// CART TOGGLE
const popup = document.querySelector(".popup")
const close =document.querySelector(".close")
const cart = document.querySelector(".cart")

popup.addEventListener("click", () => {
  cart.style.display ="block"
})

close.addEventListener("click", () => {
  cart.style.display ="none"
})



