let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

function drawCircle(x, y, size) {
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.fillStyle = 'black';
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fill();
}

let x = 50;
let y = 50;
const size = 30;

drawCircle(x, y, size);

// Add your code here

//Create event listener to listen for keydown and activate event object

//Create a function for event object to activate

window.addEventListener('keydown', (e) => {

  //Create switch statement for the keys to be tracked and moved by two units

  switch(e.key) {
    
    case 'a':
      x -= 2;
      break;
    
    case 'w':
      y -= 2;
      break;

    case 'd':
      x += 2;
      break;

    case 's':
      y += 2;

  }

  //Add drawCircle function to draw circle in new position

  drawCircle(x, y, size);

})