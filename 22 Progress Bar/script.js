let progressbar = document.querySelector('.probar');
// window.onscroll = () => {
//   console.log(scrollY);
// };

let dochigh = document.documentElement.scrollHeight;
let viewprot = document.documentElement.clientHeight;
window.addEventListener('scroll', () => {
  scroy = scrollY;
  let per = (scroy / (dochigh - viewprot)) * 100;
  progressbar.style.width = `${per}%`;
  progressbar.style.backgroundColor = 'red';
});
