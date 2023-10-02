let str = document.querySelector('#email');
let pas = document.querySelector('#password');
let msg = document.querySelector('p');
let sub = document.querySelector('button');

sub.addEventListener('click', () => {
  str.value.match('@') && pas.value.length > 8
    ? ((msg.innerText = 'Valid email and password!'),
      (msg.style.color = 'green'))
    : ((msg.style.color = 'red'),
      (msg.innerText = 'Invalid email or password!'));
});
