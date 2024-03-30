const form = document.getElementById('task-form')
const taskList = document.querySelector('.task-list')
const activeTasks = document.getElementById('active-tasks')
const completedTasks = document.getElementById('completed-tasks')

let id = 1

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const input = document.getElementById('taskName')
    const taskName = input.value
    
    const div = document.createElement('div')
    div.classList.add('task')
    div.setAttribute('id', id)
    id++;

    //Create a p tag to hold task name
    const p = document.createElement('p')
    p.innerHTML = taskName
    
    //Create a button
    const button = document.createElement('button')
    button.innerHTML = 'x'
    button.classList.add('delete')

    div.appendChild(p)
    div.appendChild(button)
    activeTasks.appendChild(div)
    input.value = ''

    checkActiveTasks()
})

taskList.addEventListener('click', (e) => {
    if(e.target.tagName === 'P') {
        e.target.classList.toggle('completed')
        if(e.target.classList.contains('completed')){
            completedTasks.appendChild(e.target.parentNode)
        } else {
            activeTasks.appendChild(e.target.parentNode)
        }
    }
    if(e.target.classList.contains('delete')){
        const parentElement = e.target.parentNode
        parentElement.remove()
    }
    checkActiveTasks()
    checkCompletedTasks()
})

// Check if activeTasks has no tasks
function checkActiveTasks(){

    // Remove the "No active tasks" message if it exists
    const noTasksMessage = activeTasks.querySelector('#active-tasks > p');

    if (!activeTasks.querySelector('.task')) {
        noTasksMessage.style.display = 'block';
    } else{
        noTasksMessage.style.display = 'none';
    }
}

// Check if completedTasks has no tasks
function checkCompletedTasks(){
    if (!completedTasks.querySelector('.task')) {
        completedTasks.style.display = 'none';
    } else{
        completedTasks.style.display = 'block'
    }
}



