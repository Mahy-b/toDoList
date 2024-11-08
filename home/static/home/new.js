document.addEventListener('DOMContentLoaded', function(){
    // by default, submit button is disabled
    document.querySelector('#submit').disabled = true;
    document.querySelector('#newtask').onkeyup =()=>{
        if (document.querySelector('#newtask').value.length >0){
            document.querySelector('#submit').disabled = false;
        } else {
            document.querySelector('#submit').disabled = true
        }


    }

    document.querySelector('form').onsubmit = () => {

        const task = document.querySelector('#newtask').value;
        const li = document.createElement('li')
        li.innerHTML = task;

        document.querySelector('#tasks').innerHTML += `
        <div class="task">
            <span id="taskname">
                ${task}
            </span>
            <button class="delete">Delete</button>
        </div>
        `;
    }
})