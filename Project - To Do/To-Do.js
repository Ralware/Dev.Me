document.getElementById('Add').addEventListener("click", AddTask);

const Tasks = [];

function AddTask() {
    const TaskValue = document.getElementById('Input').value;
    const DueDateValue = document.getElementById('DueDate').value;
    if(TaskValue === '') {
        return;
    }
    Tasks.push({
        TaskName: TaskValue,
        DueDate: DueDateValue
    });

    document.getElementById('Input').value = '';
    document.getElementById('DueDate').value = '';
    DisplayTasks();

}

function DisplayTasks() {

    let InnerHTMLDiv = '';

    for (let i = 0; i < (Tasks.length); i++) {
        const TaskToPrint = Tasks[i]; // Object
        const TaskName = TaskToPrint.TaskName;
        const DueDate = TaskToPrint.DueDate;
        const InnerHTML = `<div class="Task-Row">
                                      <div class="Task-Input-Name">
                                        ${TaskName}
                                      </div>
                                      <div class="Date-Delete">
                                         <div>${DueDate}</div>
                                      <div>
                                      <button onclick="Tasks.splice(${i},1); DisplayTasks();" class="Delete-Button">Delete</button>
                                      </div>
                                      </div>
                                   </div>`;
        InnerHTMLDiv += InnerHTML;
    }

    document.getElementById('Tasks-Div').innerHTML = InnerHTMLDiv;
}