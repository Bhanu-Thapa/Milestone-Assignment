let color1 = document.querySelector('#color1');
let color2 = document.querySelector('#color2');
let btn = document.querySelector('button');
let result = document.querySelector('p');

btn.addEventListener('click', () => {
  switch (fun(color1.value, color2.value)) {
    case 'case1':
      result.innerText = 'purple';
      result.style.color = 'purple';
      btn.style.backgroundColor = 'purple';
      btn.style.color = 'white';
      break;
    case 'case2':
      result.innerText = 'orange';
      result.style.color = 'orange';
      btn.style.backgroundColor = 'orange';
      btn.style.color = 'white';
      break;
    case 'case3':
      result.innerText = 'green';
      result.style.color = 'green';
      btn.style.backgroundColor = 'green';
      btn.style.color = 'white';
      break;
    default:
      result.innerText = 'Invalid color combination';
      result.style.color = 'black';
      btn.style.backgroundColor = 'black';
      btn.style.color = 'white';
  }
});

function fun(cl1, cl2) {
  let c =
    (cl1 == 'red' && cl2 == 'blue') || (cl1 == 'blue' && cl2 == 'red')
      ? 'case1'
      : (cl1 == 'red' && cl2 == 'yellow') || (cl1 == 'yellow' && cl2 == 'red')
      ? 'case2'
      : (cl1 == 'blue' && cl2 == 'yellow') || (cl1 == 'yellow' && cl2 == 'blue')
      ? 'case3'
      : '';
  return c;
}
