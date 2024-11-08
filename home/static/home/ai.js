document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('signin').addEventListener('click', () => {
        window.location.href = 'signin';
        // Add your sign-in logic here
    });

    document.getElementById('login').addEventListener('click', () => {
        window.location.href = 'login';
        // Add your login logic here
    });

    // By default, submit button is disabled
    document.querySelector('#submit').disabled = true;

    document.querySelector('#newtask').onkeyup = () => {
        if (document.querySelector('#newtask').value.length > 0) {
            document.querySelector('#submit').disabled = false;
        } else {
            document.querySelector('#submit').disabled = true;
        }
    };

    document.querySelector('form').onsubmit = () => {
        const task = document.querySelector('#newtask').value;
        document.querySelector('#tasks').innerHTML += `
        <div class="task">
            <span id="taskname">
                ${task}
            </span>
            <button class="delete">Delete</button>
        </div>
        `;
    };

    document.addEventListener('click', event => {
        const element = event.target;
        if (element.className === 'delete') {
            element.parentElement.style.animationPlayState = 'running';
            element.parentElement.addEventListener('animationend', () => {
                element.parentElement.remove();
            });
        }
    });
});
