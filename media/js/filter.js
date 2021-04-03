'use strict';

const search    = document.querySelector('#search'),
      taskList  = document.querySelector('#tasks');

search.addEventListener('input', evt => {

    let tasks = taskList.querySelectorAll('.task');

    tasks.forEach(task => task.parentElement.style.display = 'none');

    Task.list.forEach((task, id) => {
       for(let prop in task) {
           if((new RegExp(search.value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), 'i')).test(task[prop])) {
               let isSearchedTask = taskList.querySelector(`.task[data-id='${id}']`);
               if(isSearchedTask) isSearchedTask.parentElement.style.display = 'block';
               break;
           }
       }
    });

});