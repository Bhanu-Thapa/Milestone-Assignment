let str = document.querySelector('input');
let btn = document.querySelector('button');
let msg = document.querySelector('p');

btn.addEventListener('click', () => {
  let strarr = str.value.split(' ');

  let numarr = [];
  for (let i = 0; i < strarr.length; i++) {
    numarr[i] = Number(strarr[i]);
  }

  let res = [];
  for (let i = 0; i < numarr.length; i++) {
    if (numarr[i] % 2 == 0) {
      continue;
    } else if (numarr[i] % 3 == 0) {
      res[i] = numarr[i];
    }
  }

  res = res.join(' ');

  msg.innerText = res;
});
