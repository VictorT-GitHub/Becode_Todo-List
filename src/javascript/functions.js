// ---------------------------------------------------------------EXPORT------------
export function clearValue(elem) {
  elem.value = "";
}

// ---------------------------------------------------------------EXPORT------------
export function pushTask(array, elem) {
  array.push(elem);
}

// ---------------------------------------------------------------------------------
// Remove element (selected by his index) from his array
function spliceTask(array, taskText) {
  array.splice(array.indexOf(taskText.innerHTML), 1);
}

// ---------------------------------------------------------------------------------
// Add text and padding to an element if the [array] is empty
function addEmptyListText(array, listSection, emptyListText) {
  if (array.length === 0) {
    listSection.innerHTML = emptyListText;
    listSection.classList.toggle("paddingTop");
  }
}

// ---------------------------------------------------------------------------------
function removeTask(task, taskText, array, listSection, emptyListText) {
  task.remove(); // remove DOM element

  spliceTask(array, taskText);

  addEmptyListText(array, listSection, emptyListText);
}

// ----------------------------------------------------------------EXPORT-----------
export function displayTask(array, listSection, emptyListText) {
  const task = document.createElement("article");

  const taskText = document.createElement("p");
  taskText.innerHTML = array[array.length - 1];

  const taskBtn = document.createElement("button");
  taskBtn.innerHTML = "remove";
  taskBtn.addEventListener("click", () =>
    removeTask(task, taskText, array, listSection, emptyListText)
  );

  task.appendChild(taskText);
  task.appendChild(taskBtn);

  listSection.insertBefore(task, listSection.children[0]);
}

// ---------------------------------------------------------------------------
