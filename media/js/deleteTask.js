'use strict';

{
    const taskList = document.querySelector('#tasks');

    const observer = new MutationObserver(mutations => {

        mutations.forEach(mutation => {

            if(mutation.removedNodes.length) return 0;

            let newTask = mutation.addedNodes[0];
            let delButton = newTask.querySelector('button.delete');

            delButton.addEventListener('click', deleteTask);

        });

    });

    observer.observe(taskList, {childList: true});

    function deleteTask() {

        let taskId = event.target.dataset.id;

        Task.remove(Task.list[taskId]);
        event.target.parentElement.parentElement.remove();

    }
}
