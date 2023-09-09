let nam = document.querySelector('input');
let btn = document.querySelector('button');
let msg = document.querySelector('p');

btn.addEventListener('click', () => {
  let count = 0;
  for (let i = 0; i < nam.value.length; i++) {
    if (
      nam.value.charAt(i) == 'a' ||
      nam.value.charAt(i) == 'e' ||
      nam.value.charAt(i) == 'i' ||
      nam.value.charAt(i) == 'o' ||
      nam.value.charAt(i) == 'u' ||
      nam.value.charAt(i) == 'A' ||
      nam.value.charAt(i) == 'E' ||
      nam.value.charAt(i) == 'I' ||
      nam.value.charAt(i) == 'O' ||
      nam.value.charAt(i) == 'U'
    ) {
      count++;
    }
  }

  msg.innerText = `Vowel Count: ${count}`;
});

// 2nd method
// let nam = 'hello';
// let vowel = 'aeiou';
// let count = 0;
// for (let i = 0; i < nam.length; i++) {
//   if (vowel.indexOf(nam.charAt(i)) !== -1) {
//     count++;
//   }
// }
// console.log(count);
