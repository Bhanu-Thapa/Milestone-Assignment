let qty = 0;

function nikeshoe() {
  if (qty != 1) {
    qty++;

    let di = document.createElement('div');
    let ele = document.createElement('h1');
    let qt = document.createElement('input');
    let del = document.createElement('button');

    di.className = 'con';
    ele.textContent = 'Nike shoe';
    qt.setAttribute('type', 'number');
    qt.setAttribute('min', 1);
    qt.setAttribute('name', 'nik');
    qt.setAttribute('value', 0.5 * 2);
    qt.style.width = '35px';
    qt.className = 'nik';
    // qt.type = 'number';
    // qt.value = '1';
    del.textContent = 'delete';

    document.body.appendChild(di);

    di.appendChild(ele);
    di.appendChild(qt);
    di.appendChild(del);

    del.addEventListener('click', () => {
      qty = 0;
      di.remove();
    });
  } else {
    let vall = document.querySelector('.nik');
    let i = Number(vall.value);
    vall.value = i + 1;
  }
}

let qtyy = 0;
function adidasshoe() {
  if (qtyy != 1) {
    qtyy++;

    let di = document.createElement('div');
    let ele = document.createElement('h1');
    let qt = document.createElement('input');
    let del = document.createElement('button');

    di.className = 'con';
    ele.textContent = 'Adidas shoe';
    qt.setAttribute('type', 'number');
    qt.setAttribute('min', 1);
    qt.setAttribute('value', 0.5 * 2);
    qt.style.width = '35px';
    qt.className = 'adi';
    // qt.type = 'number';
    // qt.value = '1';
    del.textContent = 'delete';

    document.body.appendChild(di);
    di.appendChild(ele);
    di.appendChild(qt);
    di.appendChild(del);

    del.addEventListener('click', () => {
      qtyy = 0;
      di.remove();
    });
  } else {
    let vall = document.querySelector('.adi');
    let i = Number(vall.value);
    vall.value = i + 1;
  }
}

let qtyyy = 0;
function pumashoe() {
  if (qtyyy != 1) {
    qtyyy++;

    let di = document.createElement('div');
    let ele = document.createElement('h1');
    let qt = document.createElement('input');
    let del = document.createElement('button');

    di.className = 'con';
    ele.textContent = 'Puma shoe';
    qt.setAttribute('type', 'number');
    qt.setAttribute('min', 1);
    qt.setAttribute('value', 0.5 * 2);
    qt.style.width = '35px';
    qt.className = 'pum';
    // qt.type = 'number';
    // qt.value = '1';
    del.textContent = 'delete';

    document.body.appendChild(di);
    di.appendChild(ele);
    di.appendChild(qt);
    di.appendChild(del);

    del.addEventListener('click', () => {
      qtyyy = 0;
      di.remove();
    });
  } else {
    let vall = document.querySelector('.pum');
    let i = Number(vall.value);
    vall.value = i + 1;
  }
}
