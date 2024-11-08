document.addEventListener('DOMContentLoaded', () => {
    // Sign-in and login button handlers
    document.getElementById('signin').addEventListener('click', () => {
        window.location.href = 'signin';
        // Add your sign-in logic here
    });

    document.getElementById('login').addEventListener('click', () => {
        window.location.href = 'login';
        // Add your login logic here
    });

    // By default, the submit button is disabled
    const submitButton = document.querySelector('#submit');
    const newTaskInput = document.querySelector('#newtask');
    const taskList = document.querySelector('#tasks');

    newTaskInput.onkeyup = () => {
        submitButton.disabled = newTaskInput.value.length === 0;
    };

    document.querySelector('form').onsubmit = (event) => {
        event.preventDefault(); // Prevent the form from submitting normally

        const task = newTaskInput.value.trim();
        if (task) { // Only add if task is not empty
            // Create a new task element
            const taskDiv = document.createElement('div');
            taskDiv.className = 'task';
            taskDiv.innerHTML = `
                <span class="taskname">${task}</span>
                <button class="delete">delete</button>
            `;

            // Append the new task to the task list
            taskList.appendChild(taskDiv);

            // Clear the input and disable the submit button
            newTaskInput.value = '';
            submitButton.disabled = true;
        }
    };

    // Handle delete button click
    taskList.addEventListener('click', event => {
        if (event.target.classList.contains('delete')) {
            const taskElement = event.target.parentElement;
            taskElement.style.animationPlayState = 'running'; // Assuming you have an animation
            taskElement.addEventListener('animationend', () => {
                taskElement.remove();
            });
        }
    });
});
