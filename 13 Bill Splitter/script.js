let price = document.querySelector('#price');
let num = document.querySelector('#num');
let btn = document.querySelector('button');
let msg = document.querySelector('h2');

btn.addEventListener('click', () => {
  let arr = price.value.split(' ');
  for (let i = 0; arr.length > i; i++) {
    arr[i] = Number(arr[i]);
  }

  let fun = (arr, num) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum / num;
  };

  let tc = fun(arr, num.value);
  msg.innerText = `Rs ${tc}/- Each`;
});
