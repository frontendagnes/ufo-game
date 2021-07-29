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

squere.forEach((item) => {
    if (item.classList.contains("active")) {
      ball.push(item);
    }
  });
  console.log(ball);
  
  const restart = () => {
    // ball.forEach(item => {
    //     item.classList.remove("active")
    // })
    // console.log("restart>>>", ball)
    location.reload();
  };
  const mniamBall = () => {
    for (let i = 0; i < ball.length; i++) {
      // console.log(`left>> ${ball[i].offsetLeft} top>> ${ball[i].offsetTop} +10 ${ball[i].offsetTop + 10}`)
  
      let numberLeft = ball[i].offsetLeft;
      numberLeft += 5 - (numberLeft % 5);
  
      let numberTop = ball[i].offsetTop;
      numberTop += 5 - (numberTop % 5);
  
      // if (parseInt(moveEl.style.left) === ball[i].offsetLeft &&
      //     (parseInt(moveEl.style.top) === ball[i].offsetTop)) {
      //     ball[i].classList.remove("active")
      // }
      if (
        parseInt(moveEl.style.left) === numberLeft &&
        parseInt(moveEl.style.top) === numberTop
      ) {
        ball[i].classList.remove("active");
      }
    }
  };

  function moveLeft() {
    if (parseInt(moveEl.style.left) === 0) {
      moveEl.style.left = 0 + "px";
    } else {
      moveEl.style.left = parseInt(moveEl.style.left) - 5 + "px";
    }
    mniamBall();
  }
  
  function moveRight() {
    if (parseInt(moveEl.style.left) >= windowWidth) {
      moveEl.style.left = 0 + "px";
    } else {
      moveEl.style.left = parseInt(moveEl.style.left) + 5 + "px";
    }
    mniamBall();
  }
  
  function moveUp() {
    if (parseInt(moveEl.style.top) === 0) {
      moveEl.style.top = 0 + "px";
    } else {
      moveEl.style.top = parseInt(moveEl.style.top) - 5 + "px";
    }
    mniamBall();
  }
  
  function moveDown() {
    if (parseInt(moveEl.style.top) >= windowHeight) {
      moveEl.style.top = 0 + "px";
    } else {
      moveEl.style.top = parseInt(moveEl.style.top) + 5 + "px";
    }
    mniamBall();
  }

  function arrowSelection(e) {
    switch (e.keyCode) {
      case 37:
        moveLeft();
  
        break;
      case 39:
        moveRight();
  
        break;
      case 38:
        moveUp();
  
        break;
      case 40:
        moveDown();
  
        break;
    }
  }