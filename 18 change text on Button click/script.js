function fun() {
  let heading = document.querySelector('h1');
  if (heading.innerText === 'The most affordable learning platform') {
    heading.innerText = 'PW Skills';
  } else {
    heading.innerText = 'The most affordable learning platform';
  }
}
