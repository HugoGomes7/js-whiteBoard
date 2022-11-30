let currentColor = 'black';

let screen = document.querySelector('#screen');
let context = screen.getContext('2d');

document.querySelectorAll('.colorArea .color').forEach(item => {
  item.addEventListener('click', colorClickEvent);
});

function colorClickEvent(event) {
  let color = event.target.getAttribute('data-color');
  currentColor = color;

  document.querySelector('.color.active').classList.remove('active');
  event.target.classList.add('active');
}