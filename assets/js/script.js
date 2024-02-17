// DOM elements
const pushButton = document.getElementById('push')
pushButton.addEventListener('click', Tasks)

// Call Tasks by press enter
document.addEventListener('keydown', (event)=>{
    if (event.key === "Enter"){
        Tasks()
    }
})

// Functions
let tasksSet = new Set();
function Tasks(){
    const tasks = document.querySelector('.tasks')
    const input = document.getElementById('input')
    let taskName = input.value.trim()

    // Task is null?
    if(!taskName){
        alert("Please Enter a Task")
        return
    } 

    // Task already exists?
    if (tasksSet.has(taskName)){
        alert("Task already exists!") 
        return
    }

    // Add task to the container
    else {
        tasks.innerHTML += `<div class="task">
                            <span class="taskname">${taskName}</span>
                            <button class="delete">
                                <ion-icon name="trash-outline"></ion-icon>
                            </button>
                        </div>`;
        tasksSet.add(taskName) //Add task to set
    }

    // Deleting tasks
    let deleteTasks = document.querySelectorAll('.delete')
    for(let i = 0; i < deleteTasks.length; i++){
        let deleteTask = deleteTasks[i]
        deleteTask.onclick = ()=>{
            tasksSet.clear() //Clear de set
            deleteTask.parentNode.remove()
        };
    };

    // Mark tasks as Done    
    let currentTasks = document.querySelectorAll('.task')
    for (let i = 0; i < currentTasks.length; i++){
        let currentTask = currentTasks[i]
        currentTask.onclick = ()=>{
            currentTask.classList.add('completed')
        };
    };

    // Clear input value
    input.value = "";
};

