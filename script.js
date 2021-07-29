let body = document.querySelector("body");
let moveEl = document.querySelector(".ufo__wrapper");
let squere = document.querySelectorAll(".squere div");
let squeres = document.querySelectorAll(".squere");
let reset = document.querySelector(".restart");
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
let ball = [];
let index = 0;
let activeIndex = 0
function randomActive() {
  for (let i = 0; i <= 8; i++) {
    activeIndex = Math.floor(Math.random() * squere.length);
    squere[activeIndex].classList.add("active");  
  }

  // let i = 0;
  //     do{
  //     i++;
  //     index = Math.floor(Math.random() * squere.length)
  //   } while(squere[index].classList.contains('ufo__wrapper')) //making sure apples dont appear on the snake
  //   squere[index].classList.add('active')
}
randomActive();