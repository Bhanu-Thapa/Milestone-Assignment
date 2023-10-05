let arr = document.querySelectorAll('.ar');
let btn = document.querySelector('button');
let di = document.querySelector('.di');
let count = 0;

btn.addEventListener('click', () => {
  for (let i = 0; i < arr.length; i++) {
    if (count == i) {
      count++;
      arr[i].style.visibility = 'hidden';

      let para = document.createElement('p');
      para.textContent = arr[i].textContent;
      di.appendChild(para);

      break;
    }
  }
  if (count == arr.length) {
    count++;
  } else if (count > arr.length) {
    alert('all items added');
  }
});
