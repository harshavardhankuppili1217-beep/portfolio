function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task === "") {
        alert("Enter a task!");
        return;
    }

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.innerText = task;

    // Mark complete
    span.onclick = function() {
        span.style.textDecoration = "line-through";
    };

    // Delete button
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.onclick = function() {
        li.remove();
    };

    li.appendChild(span);
    li.appendChild(delBtn);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}
document.getElementById("taskInput").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});
function saveTasks() {
    localStorage.setItem("tasks", document.getElementById("taskList").innerHTML);
}

function loadTasks() {
    document.getElementById("taskList").innerHTML = localStorage.getItem("tasks") || "";
}

document.getElementById("taskList").addEventListener("click", saveTasks);

window.onload = loadTasks;