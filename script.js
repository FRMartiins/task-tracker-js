const button = document.querySelector(".add-btn");
const input = document.querySelector("input");
const taskList = document.querySelector(".task-list");
const taskCount = document.querySelector(".task-count");
const filterButtons = document.querySelectorAll(".filter-btn")

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];







function addTask(taskText, completed, index) {
    const li = document.createElement("li");

    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    if(completed){
        taskSpan.classList.add("completed");
    }

    taskSpan.addEventListener("click", function () {
        taskSpan.classList.toggle("completed");

        tasks[index].completed = !tasks[index].completed;

        localStorage.setItem(
            "tasks",
            JSON.stringify(tasks)
        );

    });

    li.appendChild(taskSpan);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function () {
        tasks.splice(index, 1);

        localStorage.setItem(
            "tasks",
            JSON.stringify(tasks)
        );

        li.remove();
        updateTaskCount();
    });

    li.appendChild(deleteButton);

    taskList.appendChild(li);
    updateTaskCount();
}

function handleAddTask(){
    const taskText = input.value.trim();

    if(taskText === ""){
        return;
    }

    tasks.push({
        text: taskText,
        completed: false
    });

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );


    console.log(tasks);

    addTask(taskText, false, tasks.length -1);
    input.value = "";
}


function updateTaskCount(){
    taskCount.textContent = "Tasks: " + taskList.children.length;
}



button.addEventListener("click", handleAddTask);

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        handleAddTask();
    }
});

tasks.forEach(function(task, index){
    addTask(task.text, task.completed, index);
});





updateTaskCount();




filterButtons.forEach(function(button){

    button.addEventListener("click", function(){
        console.log(button.textContent);
    });

    
});