let pos = 0;
const pacArray = [
  ['./images/PacMan1.png', './images/PacMan2.png'],
  ['./images/PacMan3.png', './images/PacMan4.png'],
];
let direction = 0;
const pacMen = []; 


 function setToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale,
  };
 }


 function makePac() {

  let velocity = setToRandom(10); 
  let position = setToRandom(200);

  let game = document.getElementById('game');
  let newimg = document.createElement('img');
  newimg.style.position = 'absolute';

  newimg.src = pacArray[Math.floor(Math.random()*4)];
  newimg.width = 100;


  newimg.style.top = position.y;
  newimg.style.left = position.x;

  game.appendChild(newimg);


  return {
    position,
    velocity,
    newimg,
  };
}

function update() {
  
  pacMen.forEach((item) => {
    checkCollisions(item);
    item.position.x += item.velocity.x;
    item.position.y += item.velocity.y;

    item.newimg.style.left = item.position.x;
    item.newimg.style.top = item.position.y;
  });
  setTimeout(update, 20);
}

function checkCollisions(item) {
  const posX = item.position.x;
  const posY = item.position.y;

  if (posX <= 0 || posX >= window.innerWidth - item.newimg.width) {
    item.velocity.x *= -1;
  }
  if (posY<=0 || posY >= window.innerHeight - item.newimg.height){
    item.velocity.y *= -1
  }
}


function makeOne() {
  pacMen.push(makePac());
}

if (typeof module !== 'undefined') {
  module.exports = { checkCollisions, update, pacMen };
}
