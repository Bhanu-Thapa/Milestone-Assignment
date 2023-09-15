let eco = {
  car: 'Economy',
  cost: 4000,
};

let mid = {
  car: 'Midsize',
  cost: 10000,
};

let lux = {
  car: 'Luxury',
  cost: 20000,
};

let ct = document.querySelector('select');
let nd = document.querySelector('input');
let btn = document.querySelector('button');
let msg = document.querySelector('h2');

btn.addEventListener('click', () => {
  fun(ct.value, nd.value);
});

function fun(ctype, nday) {
  nday = Number(nday);

  let tc = 0;

  if (ctype == eco.car) {
    tc = eco.cost * nday;
    msg.innerText = `Rs ${tc}`;
  } else if (ctype == mid.car) {
    tc = mid.cost * nday;
    msg.innerText = `Rs ${tc}`;
  } else if (ctype == lux.car) {
    tc = lux.cost * nday;
    msg.innerText = `Rs ${tc}`;
  } else {
    tc = console.log('invalid');
  }
}
