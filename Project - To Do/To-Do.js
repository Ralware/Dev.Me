document.getElementById('Add').addEventListener("click", AddTask);

const Tasks = JSON.parse(localStorage.getItem("Tasks")) || [];

function AddTask() {
    const TaskValue = document.getElementById('Input').value;
    const DueDateValue = document.getElementById('DueDate').value;
    if (!TaskValue.trim()) {
        return;
    }
    Tasks.push({
        TaskName: TaskValue, DueDate: DueDateValue, done: false
    });
    localStorage.setItem("Tasks", JSON.stringify(Tasks));
    document.getElementById('Input').value = '';
    document.getElementById('DueDate').value = '';
    DisplayTasks();

}

function UpdateLocalStorage() {
    localStorage.setItem("Tasks", JSON.stringify(Tasks));
}

function DisplayTasks() {

    let InnerHTMLDiv = '';

    for (let i = 0; i < (Tasks.length); i++) {
        const TaskToPrint = Tasks[i]; // Object
        const TaskName = TaskToPrint.TaskName;
        const DueDate = TaskToPrint.DueDate;
        const isDone = TaskToPrint.done;

        const InnerHTML = `<div class="Task-Row">
                    <div class="Task-Input-Name ${isDone ? 'Done-Decoration' : ''}" id="Task-Text-${i}">
                        ${TaskName}
                    </div>
                    <div class="Date-Delete">
                        <div>${DueDate}</div>
                        <div>
                            <button onclick="Tasks.splice(${i},1); UpdateLocalStorage(); DisplayTasks();" class="Delete-Button">Delete</button>
                        </div>
                        <div>
                            <button class="Done-Button ${isDone ? 'Done-Color' : ''}" id="Done-${i}" onclick="ToggleDone(${i})">Done</button>
                        </div>
                    </div>
                </div>`;
        InnerHTMLDiv += InnerHTML;
    }

    document.getElementById('Tasks-Div').innerHTML = InnerHTMLDiv;
}
function ToggleDone(i) {
    Tasks[i].done = !Tasks[i].done; // Changing False -> True On Done Button Click
    UpdateLocalStorage();
    DisplayTasks();
}

DisplayTasks();

