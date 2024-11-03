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

        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(taskText));

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '✖';
        deleteBtn.addEventListener('click', function() {
            li.classList.add('fade-out');
            setTimeout(() => li.remove(), 300);
        });

        li.appendChild(deleteBtn);
        document.getElementById('taskList').appendChild(li);
        taskInput.value = '';
    }
});
