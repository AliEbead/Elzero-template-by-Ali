// animation welcome header
let fHead = document.getElementById('fHead')
let landP = document.getElementById('landP')
let imges = document.getElementById('imges')


setTimeout (function () {
  fHead.style.cssText = ' visibility: visible; top: 10px; opacity: 100%;'
  imges.style.cssText = ' visibility: visible; top: 5px; opacity: 100%;'
}, 300)

setTimeout (function () {
  landP.style.cssText = ' visibility: visible; top: 10px; opacity: 100%;'
}, 600)
// transition  of megamenu
let otherLinks = document.getElementById('mega-li')
let megaMune = document.getElementById('mega-menu')

otherLinks.onclick = function () {
  megaMune.style.cssText = ' visibility: visible; top: calc(100% + 1px); opacity: 1;'
}

document.addEventListener('click' , function (e) {
  if (!otherLinks.contains(e.target)&& !megaMune.contains(e.target)) {
    megaMune.style.cssText = ' visibility: hidden; transition: ;'
  }
})


// add transition for any element to show it smooth
const observer = new IntersectionObserver((entries) => { 
   entries.forEach((entry) => {
     if (entry.isIntersecting) { 
       entry.target.classList.add('active'); 
       
     }
    }); 
   
 }); 
 const hiddenElements = document.querySelectorAll('.reveal-element');
 hiddenElements.forEach((el) => observer.observe(el));
 
// add increase counter

let progressSpans = document.querySelectorAll(".the-progress span");
let sectionSkills = document.querySelector(".our-skills");

let nums = document.querySelectorAll(".skills .num ");

let sectionStats = document.querySelector(".stats");
let number = document.querySelectorAll(".stats .number ");

let started = false;
let end = false
window.onscroll = function () {
  if (window.scrollY >= sectionSkills.offsetTop - 400) {
    progressSpans.forEach((span) => {
      span.style.width = span.dataset.width
    })
    if (!started) {
      nums.forEach((num) => startCount(num))
    }
    started = true
  }
  if (window.scrollY >= sectionStats.offsetTop - 500) {
    if (!end) {
      number.forEach((nu) => startCount(nu))
    }
    end = true
  }
}


function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
// increace number
