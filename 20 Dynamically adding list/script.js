let arr = document.querySelectorAll('arr');
let btn = document.querySelector('button');
let count = 0;
btn.addEventListener('click', () => {
  for (let i = 0; i < arr.length; i++) {
    if (count == i) {
      console.log(arr[i]);
      count++;
      break;
    }
  }
  if (arr.length <= count) {
    console.log(`No ITEM left `);
  }
});
