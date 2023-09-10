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
    qt.setAttribute('value', 1);
    qt.style.width = '35px';
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
    qt.setAttribute('value', 1);
    qt.style.width = '35px';
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
    qt.setAttribute('value', 1);
    qt.style.width = '35px';
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
  }
}
