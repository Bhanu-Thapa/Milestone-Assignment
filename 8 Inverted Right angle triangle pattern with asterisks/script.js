let i = document.querySelector('input');
let msg = document.querySelector('p');
let btn = document.querySelector('button');
btn.addEventListener('click', () => {
  msg.innerText = 'Check Console';
  let string = '';
  for (let n = 0; n < Number(i.value); n++) {
    for (let j = 0; j < Number(i.value) - n; j++) {
      string += '*';
    }
    string += '\n';
  }
  console.log(string);
});
