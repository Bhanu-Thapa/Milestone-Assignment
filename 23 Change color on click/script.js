let colorChange = document.querySelector('button');
let bdy = document.querySelector('body');
let arr = [
  'red',
  'green',
  'yellow',
  'blue',
  'purple',
  'black',
  'orange',
  'pink',
  'maroon',
  'brown',
];
colorChange.addEventListener('click', () => {
  let i = Math.floor(Math.random() * 10);
  bdy.style.backgroundColor = arr[i];
});
