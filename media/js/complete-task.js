'use strict';

function completeTask() {
  if(!event.target.checked) return 0;
  let subtasks = event.target.parentNode.querySelectorAll('.subtasks li input');

  let allowCheck = true;

  subtasks.forEach(subtask => {
    if(!subtask.checked) allowCheck = false;
  });

  if(allowCheck) event.target.parentNode.parentNode.remove();


}
