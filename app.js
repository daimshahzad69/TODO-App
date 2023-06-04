window.onload = function() {
    var taskInput = document.getElementById('task-input');
    var addButton = document.getElementById('add-button');
    var taskList = document.getElementById('task-list');
  
    addButton.addEventListener('click', addTask);
  
    function createTaskElement(task) {
      var li = document.createElement('li');
      li.innerText = task;
      li.addEventListener('click', toggleTask);
      var deleteButton = document.createElement('span');
      deleteButton.innerHTML = '&#10005;';
      deleteButton.className = 'delete-button';
      deleteButton.addEventListener('click', deleteTask);
      li.appendChild(deleteButton);
      return li;
    }
  
    function addTask() {
      var task = taskInput.value.trim();
      if (task !== '') {
        var taskElement = createTaskElement(task);
        taskList.appendChild(taskElement);
        taskInput.value = '';
      }
    }
  
    function toggleTask() {
      this.classList.toggle('completed');
    }
  
    function deleteTask() {
      this.parentElement.remove();
    }
  };
  