'use strict';

{
    const taskList = document.querySelector('#tasks');

    const observer = new MutationObserver(mutation => {

        if(mutation[0].removedNodes.length) return 0;

        let newTask = mutation[0].addedNodes[0];

        let completeCheck = newTask.querySelector("input[type='checkbox']"),
            subtasks      = newTask.querySelectorAll(".subtasks input[type='checkbox']");

        subtasks.forEach(subtask => {
           subtask.addEventListener('change', evt => {
               let allowComplete = true;

               for(subtask of subtasks)
                   if(!subtask.checked) allowComplete = false;

               newTask.querySelector("input[type='checkbox']").disabled = (!allowComplete) ? true : false;
           });
        });

        completeCheck.addEventListener('change', completeTask);

    });

    observer.observe(taskList, {childList: true});

    function completeTask(evt) {

        let taskId = evt.target.dataset.id;

        Task.complete(Task.list[taskId]);
        evt.target.parentElement.remove();

    }

}

