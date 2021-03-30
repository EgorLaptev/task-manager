'use strict';

// Add task
const form  = document.querySelector('#create-task-form'),
      tasks = document.querySelector('#tasks');

form.addEventListener('submit', evt => {

  evt.preventDefault();

  let name = form.querySelector('#name').value,
      date = form.querySelector('#date').value,
      time = form.querySelector('#time').value,
      subt = (form.querySelector('#subtasks').value).trim();


  let dateDiff = Math.ceil((Date.parse(new Date(date)) - Date.parse(new Date())) / 1000 / 60 / 60 / 24);

  // Status
  let status;

  if(dateDiff < 0) status = 'Просрочено';
  else if(dateDiff == 0) status = 'Сегодня';
  else if(dateDiff == 1) status = 'Завтра';
  else status = `Через ${dateDiff} дней(я)`;

  // Subtasks
  let subtasksList = subt.split('\n');
  let subtasksHTML = '';

  if(subtasksList[0] == '') subtasksList = [];

  subtasksList.forEach(subtask => {
    subtasksHTML += `
      <li>
        <label>
          <input type="checkbox">
          ${subtask}
        </label>
      </li>
    `;
  });

  // Create task DOM Element
  let li = document.createElement('li');

  li.innerHTML = `
      <label class="task">
          <input type="checkbox" class="check" oninput='completeTask()'>
          <h3 class="title">${name}</h3>
          <span class="status today">${status}</span>
          <time class="date">${date}</time>
          <time class="time">${time}</time>
          <button class="delete" onclick="deleteTask()">X</button>
          <ul class="subtasks">${subtasksHTML}</ul>
      </label>
  `;

  tasks.append(li);


});

// Time limit
let dateInput = form.querySelector('#date'),
    timeInput = form.querySelector('#time');

dateInput.addEventListener('input', evt => {
  if((Math.ceil((Date.parse(new Date(dateInput.value)) - Date.parse(new Date())) / 1000 / 60 / 60 / 24)) != 0)
  {
    timeInput.min = '';
  } else {
    timeInput.min = `${(new Date()).getHours()}:${(new Date()).getMinutes()}`;
  }

});
