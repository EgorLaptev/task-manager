'use strict';

const activeTasks    = document.querySelector('#active-tasks'),
      completedTasks = document.querySelector('#completed-tasks');

activeTasks.addEventListener('click', evt => {
   activeTasks.classList.add('active');
   completedTasks.classList.remove('active');

   const tasks = document.querySelectorAll('.task');

   tasks.forEach(task => {
       let taskObj = Task.list[task.dataset.id];
       task.parentElement.style.display = (taskObj._complete) ? 'none' : 'block';
   });

});

completedTasks.addEventListener('click', evt => {
   completedTasks.classList.add('active');
   activeTasks.classList.remove('active');

   const tasks = document.querySelectorAll('.task');

   tasks.forEach(task => {
       let taskObj = Task.list[task.dataset.id];
       task.parentElement.style.display = (taskObj._complete) ? 'block' : 'none';
   });

});
