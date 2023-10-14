let textfield = document.querySelector('input');
let btn = document.querySelector('button');
let taskDetails = document.querySelector('#task_details');

let userArray = [];
let id = null;

btn.onclick = () => {
  let task = textfield.value;
  if (id != null) {
    let str = userArray.splice(id, 1, {
      taskname: task,
    });
    id = null;
  } else {
    userArray.push({ taskname: task });
    console.log(userArray);
  }

  display();
  textfield.value = '';
};

function display() {
  let statement = '';
  userArray.forEach((user, i) => {
    statement += `<td>${i + 1}</td>
    <td>${user.taskname}</td>
    <td><ion-icon name="create" onClick="edit(${i})"></ion-icon></td>
    <td><ion-icon name="trash" onClick ="deletee(${i})"></ion-icon></td>`;
  });
  taskDetails.innerHTML = statement;
}

function edit(i) {
  id = i;
  textfield.value = userArray[i].taskname;
  btn.innerText = 'Save Change';
}

function deletee(i) {
  userArray.splice(i, 1);
  display();
}
