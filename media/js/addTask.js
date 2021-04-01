'use strict';

const form  = document.querySelector('#create-task-form');

form.addEventListener('submit', evt => {

  evt.preventDefault();

  let title = form.querySelector('#name'),
      date  = form.querySelector('#date'),
      time  = form.querySelector('#time'),
      subtasks = form.querySelector('#subtasks');

  // Adding task
  Task.add(title.value, date.value, time.value, subtasks.value.trim().split('\n'));

  // Output
  let index = Task.list.length-1;
  showTask(Task.list[index], index);

  // Reset form values
  title.value    = '';
  date.value     = '';
  time.value     = '';
  subtasks.value = '';

});