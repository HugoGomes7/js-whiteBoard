let currentColor = 'black';
let canDraw = false;

let mouseX = 0;
let mouseY = 0;

let screen = document.querySelector('#screen');
let context = screen.getContext('2d');

document.querySelectorAll('.colorArea .color').forEach(item => {
  item.addEventListener('click', colorClickEvent);
});

screen.addEventListener('mousedown', mouseDownEvent);
screen.addEventListener('mousemove', mouseMoveEvent);
screen.addEventListener('mouseup', mouseUpEvent);

function colorClickEvent(event) {
  let color = event.target.getAttribute('data-color');
  currentColor = color;

  document.querySelector('.color.active').classList.remove('active');
  event.target.classList.add('active');
}

function mouseDownEvent(event) {
  canDraw = true;
  mouseX = event.pageX - screen.offsetLeft;
  mouseY = event.pageY - screen.offsetTop;
}

function mouseMoveEvent(event) {
  if (canDraw) {
    draw(event.pageX, event.pageY)
  }
}

function mouseUpEvent() {
  canDraw = false;
}

function draw(x, y) {
  let pointX = x - screen.offsetLeft;
  let pointY = y - screen.offsetTop;

  context.beginPath();
  context.lineWidth = 5;
  context.lineJoin = "round";
  context.moveTo(mouseX, mouseY);
  context.lineTo(pointX, pointY);
  context.closePath();
  context.strokeStyle = currentColor;
  context.stroke();

  mouseX = pointX;
  mouseY = pointY;


}