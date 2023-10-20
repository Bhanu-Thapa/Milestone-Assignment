let para = document.querySelector('p');

let spli = para.innerText.split(' ');

let highl = spli.map((ele) => {
  return ele.length > 8
    ? `<span style=" background-color:Yellow">${ele}</span>`
    : ele;
});

para.innerHTML = highl.join(' ');
