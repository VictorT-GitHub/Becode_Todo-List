import { pushTask, displayTask, clearValue } from "./functions";

// ----------------------------------------
//                 VARIABLES
// ----------------------------------------
const addTaskBtn = document.querySelector("#addTaskBtn");

const taskInput = document.querySelector("#textInput");

const taskListSection = document.querySelector(".taskListSection");
const textIfEmptyList = "nothing to do, you can go to sleep";
taskListSection.textContent = textIfEmptyList; // Liste est vide de base, donc texte présent par default a ouverture de page

const taskListArray = [];

// --------------------------------------------------------
//         CLICK EVENT LISTENER : ADD TASK BUTTON
// --------------------------------------------------------
addTaskBtn.addEventListener("click", () => {
  // Fonctionne uniquement si le input texte n'est pas vide (si input.value existe)
  if (taskInput.value) {
    // Si texte par default présent, le retire ainsi que son padding-top
    if (taskListSection.textContent === textIfEmptyList) {
      taskListSection.textContent = "";
      taskListSection.classList.toggle("paddingTop");
    }

    // Push new task (inputText.value) in [taskListArray]
    pushTask(taskListArray, taskInput.value);

    // Create text + btn for the new task and display them in <taskListSection>
    displayTask(taskListArray, taskListSection, textIfEmptyList);

    // Clear input value
    clearValue(taskInput);
  }
});
