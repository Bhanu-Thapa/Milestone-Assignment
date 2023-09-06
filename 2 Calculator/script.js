let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');
let str = document.querySelector('#str');
let btn = document.querySelector('button');
let result = document.querySelector('p');

btn.addEventListener('click', () => {
  switch (str.value) {
    case '+':
      result.innerText = Number(num1.value) + Number(num2.value);
      break;
    case '-':
      result.innerText = Number(num1.value) - Number(num2.value);
      break;
    case '*':
      result.innerText = Number(num1.value) * Number(num2.value);
      break;
    case '/':
      result.innerText = Number(num1.value) / Number(num2.value);
      break;
    default:
      result.innerText = 'Invalid Operator';
  }
  console.log(result.innerText);
});
