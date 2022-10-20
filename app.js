const form = document.querySelector('#add-task')
const taskList = document.querySelector('#task-list')

form.addEventListener('submit', addTask)
taskList.addEventListener('click', deleteTask)

function addTask(event){
    const taskInput = document.querySelector('#task')
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(taskInput.value))
    li.className = 'collection-item'
    const x = document.createElement('a')
    x.appendChild(document.createTextNode('X'))
    x.setAttribute('href', '#')
    x.className = 'secondary-content'

    li.appendChild(x)

    const ul = document.querySelector('ul')
    ul.append(li)

    taskInput.value = ''
    event.preventDefault()
}

function deleteTask(event){
    if(event.target.textContent === 'X'){
        if(confirm('Are you sure you want to delete this task?')){
            event.target.parentElement.remove()
        }
    }
}