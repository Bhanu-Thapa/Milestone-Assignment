let msg = document.querySelector('h2');

(() => {
  let num = Math.floor(Math.random() * 100 + 1);
  console.log(num);
  msg.innerText = num;
})();
