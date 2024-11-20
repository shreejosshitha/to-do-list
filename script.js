document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText) {
        const li = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                li.classList.add('completed');
            } else {
                li.classList.remove('completed');
            }
        });

        const taskTextNode = document.createElement('span');
        taskTextNode.textContent = taskText;
        taskTextNode.classList.add('task-text');
        taskTextNode.contentEditable = true; // Make the task text editable

        const editBtn = document.createElement('button');
        editBtn.textContent = '✎';
        editBtn.classList.add('edit-button');
        editBtn.addEventListener('click', function() {
            // No need for prompt, user can directly edit in the task text
            taskTextNode.focus();
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '✖';
        deleteBtn.classList.add('delete-button');
        deleteBtn.addEventListener('click', function() {
            li.classList.add('fade-out');
            setTimeout(() => li.remove(), 300);
        });

        li.appendChild(checkbox);
        li.appendChild(taskTextNode);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        document.getElementById('taskList').appendChild(li);
        taskInput.value = '';
    }
});