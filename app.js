const form = document.querySelector('#add-task')

form.addEventListener('submit', addTask)

function addTask(event){
    const taskInput = document.querySelector('#task')
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(taskInput.value))
    li.className = 'collection-item'
    const x = document.createElement('a')
    x.appendChild(document.createTextNode('x'))
    x.setAttribute('href', '#')
    x.className = 'secondary-content'

    li.appendChild(x)

    const ul = document.querySelector('ul')
    ul.append(li)

    taskInput.value = ''
    event.preventDefault()
}


