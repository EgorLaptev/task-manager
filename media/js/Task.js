'use strict';

class Task {

	static list = [];

	static add(title, date, time, subtasks=[])
	{

		const task = {};

		task.title 		= title;
		task.date  		= date;
		task.time 		= time;
		task.subtasks 	= subtasks;
		task._complete	= false;

		this.list.push(task);

		return task;

	}

	static remove(task) 
	{
		const index = this.list.indexOf(task);
		if(index != -1) this.list.splice(index, 1);

		return task;
	}

	static save()
	{
		localStorage.setItem('tasksList', JSON.stringify(this.list));
	}

	static pull() {

		const tasksList = localStorage.getItem('tasksList');

		if(tasksList) {
			Task.list = JSON.parse(localStorage.getItem('tasksList'));
			Task.list.forEach((task, id) => {
				showTask(task, id);
			});
		}

	}

	static complete(task)
	{
		const index = this.list.indexOf(task);
		this.list[index]._complete = true;

		return task;
	}


}

Task.pull();