let str = 'hello@gamil.com';
let pas = 'asdf4fasdf';

for (let x of str) {
  if (x == '@' && pas.length > 8) {
    console.log('valid email and password');
  } else {
    console.log('Invalid email or password');
    break;
  }
}
