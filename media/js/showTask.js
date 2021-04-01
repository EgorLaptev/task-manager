'use strict';

function showTask(task, id) {

    const tasks = document.querySelector('#tasks');

    // Creating  task element
    let taskEl = document.createElement('li');

    // Creating subtasks
    let subtasks = '';

    if(task.subtasks[0] == '') task.subtasks = [];

    task.subtasks.forEach(subtask => {
    	subtasks += 
    	`
    	<li>
	    	<label>
	    		<input type="checkbox">
	    		${subtask}
	    	</label>
    	</li>
    	`;
    });

    let dateDiff = Math.ceil((Date.parse(new Date(task.date)) - Date.parse(new Date())) / 1000 / 60 / 60 / 24);

    let status = (dateDiff == 0) ? 'Сегодня' : (dateDiff < 0) ? 'Просрочено' : (dateDiff == 1) ? 'Завтра' : `Через ${dateDiff} дней(я)`;
    let disabled = (!task.subtasks.length) ? '' : 'disabled';


    // Filling task element
    taskEl.innerHTML = `
    <label class="task">
        <input type="checkbox" class="check" data-id='${id}' ${disabled}>
        <h3 class="title">` + task.title + `</h3>
        <span class="status today">` + status + `</span>
        <time class="date">` + task.date + `</time>
        <time class="time">` + task.time + `</time>
        <button class="delete" data-id='${id}'>X</button>
        <ul class="subtasks">` + subtasks + `
        </ul>
    </label>`;

    // Adding task element in tasks list
    tasks.append(taskEl);

}