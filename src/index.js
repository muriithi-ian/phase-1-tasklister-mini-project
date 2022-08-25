document.addEventListener("DOMContentLoaded", () => {
	// your code here
	const todo = document.getElementById("tasks");
	const form = document.getElementById("create-task-form");
	const task = document.getElementById("new-task-description");
	const addedTasks = [];

	form.addEventListener("submit", (e) => {
		e.preventDefault();
		task.value.length > 0 ? addedTasks.push(task.value) : null;
		addListItem();
		form.reset();
	});

	function addListItem() {
		todo.replaceChildren();

		addedTasks.forEach((task, index) => {
			let li = document.createElement("li");
			li.setAttribute("id", index);
			li.textContent = task;
			todo.appendChild(li);
		});
	}
});

