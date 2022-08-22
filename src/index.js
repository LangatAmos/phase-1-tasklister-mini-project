document.addEventListener(DOMContentLoaded, () => {
    let form = doccument.querySelector('form')
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        bildTaskList(event.target.new-task-description.value);
        form.reset()
    })

})

function bildTaskList(task){
    let li = document.createElement('li');
    let btn = document.createElement('button');
    btn.addEventListener('click', handleDeleteTask);
    btn.textContent = 'Remove';
    li.textContent = `${task} `
    li.appendChild(btn);
    document.querySelector('#tasks').appendChild(li);
}

function handleDeleteTask(e) {
    e.target.parentNode.removeChild();

};
