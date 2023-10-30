let text = document.querySelector('input');
let addTask = document.querySelector('button');
let task_details = document.querySelector('#td');

// TASK STORE
let array = [];

// TASK INDEX
let index = null;

// PUSHING VALUE IN ARRAY OBJECT

addTask.onclick = () => {
  if (index != null) {
    array.splice(index, 1, {
      task: text.value,
    });
    index = null;
    addTask.innerText = 'Add Task';
  } else if (text.value == '') {
    alert('Please Fill up your task');
  } else {
    array.push({ task: text.value });
  }
  display();
  text.value = '';
};
// DISPLAY FUCTION
function display() {
  // STORING DISPLAY VARIABLE
  let statement = '';

  array.forEach((arr, i) => {
    statement += `
    <tr>
    <td>${i + 1}</td>
    <td onClick='done(${i})' class="tk">${arr.task}</td>
    <td><ion-icon name="create" onClick='edit(${i})'></ion-icon></td>
    <td><ion-icon name="trash" onClick='del(${i})'></ion-icon></td>
    </tr>`;
  });
  task_details.innerHTML = statement;
}

function edit(i) {
  index = i;
  text.value = array[i].task;
  addTask.innerText += 'edit save';
}

function del(i) {
  array.splice(i, 1);
  display();
}

// let trow = document.querySelector('tr');

function done(i) {
  let tkk = document.querySelectorAll('.tk');
  tkk[i].classList.toggle('active');
}

// let objstr = localStorage.getItem('user');
// if (objstr != null) array = JSON.parse(objstr);

// function saveinfo(array) {
//   let str = JSON.stringify(array);
//   localStorage.setItem('user', str);
// }
