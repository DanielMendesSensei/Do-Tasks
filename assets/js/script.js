// document.querySelector('#push').onclick = ()=>{
//     let input = document.getElementById('input').value
//     if(!input){
//         alert("Please Enter a Task")
//     } else
//     {
        
//         let tasks = document.getElementById('tasks')
//         tasks.addEventListener('click', ()=>{

//         })
//     }
// }
const tasks = document.getElementById('tasks')
const task = document.getElementById('task')
const pushButton = document.getElementById('push')
pushButton.addEventListener('click', ()=>{
    console.log("AQUI")
    let input = document.getElementById('input').value
    if(!input){
        alert("Please Enter a Task")
    } else
    {
        task.style.display = 'block';
        // tasks.classList.add('task')
    }
});