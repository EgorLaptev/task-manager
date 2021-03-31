'use strict';

function showTask(task) {
    
    const tasks = document.querySelector('#tasks');

    let taskEl = document.createElement('li');

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

    taskEl.innerHTML = `
    <label class="task">
        <input type="checkbox" class="check">
        <h3 class="title">` + task.title + `</h3>
        <span class="status today">` + status + `</span>
        <time class="date">` + task.date + `</time>
        <time class="time">` + task.time + `</time>
        <button class="delete">X</button>
        <ul class="subtasks">` + subtasks + `
        </ul>
    </label>`;

    tasks.append(taskEl);

}