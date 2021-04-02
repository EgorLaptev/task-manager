'use strict';

const search    = document.querySelector('#search'),
      taskList  = document.querySelector('#tasks');

search.addEventListener('input', evt => {

    let tasks = taskList.querySelectorAll('.task');

    tasks.forEach(task => task.parentElement.style.display = 'none');

    Task.list.forEach((task, id) => {
       for(let prop in task) {
           if((new RegExp(search.value, 'i')).test(task[prop])) {
               let isSearchedTask = taskList.querySelector(`.task[data-id='${id}']`).parentElement;
               isSearchedTask.style.display = 'block';
               break;
           }
       }
    });

});