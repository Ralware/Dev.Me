document.getElementById('Add').addEventListener("click", AddTask);

const Tasks = JSON.parse(localStorage.getItem("Tasks")) || [];

function AddTask() {
    const TaskValue = document.getElementById('Input').value;
    const DueDateValue = document.getElementById('DueDate').value;
    if (!TaskValue.trim()) {  // Checks If The Input Field Is A Space OR Multiple Space (TaskValue.trim() = undefined Which Is A Falsy Value )
        return;
    }
    Tasks.push({
        TaskName: TaskValue, DueDate: DueDateValue, done: false
    });
    localStorage.setItem("Tasks", JSON.stringify(Tasks)); // Stores The Data
    document.getElementById('Input').value = ''; // Reset Input Field
    document.getElementById('DueDate').value = ''; // Reset Date Field
    DisplayTasks();

}

function UpdateLocalStorage() {
    localStorage.setItem("Tasks", JSON.stringify(Tasks));  // Updates Local Storage After Using The Delete Function To Update The Tasks Stored As Upon Refresh Will Display The Tasks Again
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
                            <button id="Delete-Task" onclick="DeleteTask(${i});" class="Delete-Button">Delete</button>
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

function DeleteTask(Index)
{
    Tasks.splice(Index,1);
    UpdateLocalStorage();
    DisplayTasks();
}

function ToggleDone(i) {
    Tasks[i].done = !Tasks[i].done; // Changing False -> True On Done Button Click
    UpdateLocalStorage();
    DisplayTasks();
}

DisplayTasks();

