'use strict';


class Task {

	static list = [];

	static add(title, date, time, subtasks=[])
	{

		let task = {};

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
		let index = this.list.indexOf(task);
		if(!~~index) this.list.splice(index, 1);

		return task;
	}

	static save()
	{
		localStorage.setItem('tasksList', JSON.stringify(this.list));
		console.log(JSON.parse(localStorage.getItem('tasksList')));
	}

	static complete(task)
	{
		let index = this.list.indexOf(task);
		this.list[index]._complete = true;

		return task;
	}

	static edit(task, prop, value)
	{
		let index = this.list.indexOf(task);
		this.list[index][prop] = value;
	}

}