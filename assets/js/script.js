const tasks = document.querySelector('.tasks')
// const task = document.getElementById('task')
const pushButton = document.getElementById('push')

pushButton.addEventListener('click', ()=>{
    let input = document.getElementById('input')
    // console.log(input.value)
    if(!input.value){
        alert("Please Enter a Task")
    } else {
        tasks.innerHTML += `<div class="task">
                            <span id="taskname">
                                ${input.value}  
                            </span>
                            <button class="delete">
                                <ion-icon name="trash-outline"></ion-icon>
                            </button>
                        </div>`
        let deleteTasks = document.querySelectorAll('.delete')
        for(let i = 0; i < deleteTasks.length; i++){
            let deleteTask = deleteTasks[i]
            deleteTask.onclick = ()=>{
                deleteTask.parentNode.remove()
                
            }}
        let currentTasks = document.querySelectorAll('.task')
        for (let i = 0; i < currentTasks.length; i++){
            let currentTask = currentTasks[i]
            currentTask.onclick = ()=>{
                currentTask.classList.add('completed')
            }
        }
        input.value = "";
    }
});

