'use strict';

{
    const taskList = document.querySelector('#tasks');

    const observer = new MutationObserver(mutation => {

        if(mutation[0].removedNodes.length) return 0;

        let newTask = mutation[0].addedNodes[0];
        let editButton = newTask.querySelector('button.edit');

        editButton.addEventListener('click', editTask);

    });

    observer.observe(taskList, {childList: true});

    function editTask() {

        const task = Task.list[event.target.dataset.id];

        event.target.parentElement.parentElement.remove();

        const form = document.querySelector('#create-task-form');

        const title   = form.querySelector('#name'),
              date    = form.querySelector('#date'),
              time    = form.querySelector('#time'),
              subtasks = form.querySelector('#subtasks');

        title.value = task.title;
        date.value = task.date;
        time.value = task.time;
        subtasks.value = task.subtasks.join('\n');

    }
}
