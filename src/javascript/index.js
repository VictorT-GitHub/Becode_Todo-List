import { pushTask, displayTask, clearValue } from './functions'


// ----------------------------------------
//                 VARIABLES
// ----------------------------------------
const taskInput = document.querySelector('#textInput');

const textIfEmptyList = "nothing to do, you can go to sleep";

let taskListSection = document.querySelector('.taskListSection');

// La liste est vide de base, donc texte présent par default a l ouverture de la page
taskListSection.textContent = textIfEmptyList;

let taskListArray = [];


// --------------------------------------------------------
//         CLICK EVENT LISTENER : ADD TASK BUTTON
// --------------------------------------------------------
addTaskBtn.addEventListener('click', () => {

    // Fonctionne uniquement si le input texte n'est pas vide (si input.value existe)
    if (taskInput.value) {

        // Si présent, retire le texte par default ainsi que son padding-top
        if (taskListSection.textContent === textIfEmptyList) {
            taskListSection.textContent = "";
            taskListSection.classList.toggle('paddingTop');
        }

        // Push new task (inputText.value) in [taskListArray]
        pushTask(taskListArray, taskInput.value);

        // Create text + btn for the new task and display them in <taskListSection>
        displayTask(taskListArray, taskListSection, textIfEmptyList);

        // Clear input value after use
        clearValue(taskInput);
    }
    
})