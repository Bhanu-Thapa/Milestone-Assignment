let marks = document.querySelectorAll('input');
let btn = document.querySelector('button');
let msg = document.querySelector('h2');

btn.addEventListener('click', () => {
  let grt = 0;
  for (let i = 0; i < marks.length; i++) {
    grt = Number(marks[i].value) > grt ? Number(marks[i].value) : grt;
  }

  console.log(grt);

  msg.innerText = grt;
});
