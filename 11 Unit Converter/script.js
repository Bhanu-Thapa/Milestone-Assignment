let c = document.querySelector('input');
let btn = document.querySelector('button');
let msg = document.querySelector('h2');

btn.addEventListener('click', () => {
  let cel = Number(c.value);
  let f = cel * (9 / 5) + 32;
  msg.innerText = `${f} F`;
});
