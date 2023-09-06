let pass = document.querySelector('#pas');
let cmpass = document.querySelector('#cmpas');
let btn = document.querySelector('button');
let msg = document.querySelector('p');

btn.addEventListener('click', fun);

function fun() {
  let res =
    pass.value === cmpass.value
      ? 'Password Matched. Password Validation Successful'
      : "Password didn't match. Password validation unsuccessful";
  console.log(res);
  msg.innerText = res;
}
