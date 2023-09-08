let str = document.querySelector('input');
let btn = document.querySelector('button');
let msg = document.querySelector('p');

btn.addEventListener('click', () => {
  let cap =
    str.value.charAt(0) === str.value.charAt(0).toUpperCase()
      ? str.value
      : str.value.charAt(0).toUpperCase();

  if (cap == str.value) {
    msg.innerText = str.value;
  } else {
    let sp = str.value.split('');
    sp[0] = cap;
    msg.innerText = sp.join('');
  }
});
