const button = document.querySelector("button");
const input = document.querySelector("input");
const taskList = document.querySelector(".task-list");
const taskCount = document.querySelector(".task-count");

const tasks = [];


console.log(taskList.children.length);



function addTask(taskText) {
    const li = document.createElement("li");

    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    taskSpan.addEventListener("click", function () {
        taskSpan.classList.toggle("completed");
    });

    li.appendChild(taskSpan);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function () {
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

    tasks.push(taskText);
    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );


    console.log(tasks);

    addTask(taskText);
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

const savedTasks = JSON.parse(
    localStorage.getItem("tasks")
) || [];

savedTasks.forEach(function(task){
    addTask(task);
})


console.log(savedTasks);



updateTaskCount();

const testTasks = [
    "Study JavaScript",
    "Walk Mocha"
];

console.log(testTasks);

console.log(JSON.stringify(testTasks));