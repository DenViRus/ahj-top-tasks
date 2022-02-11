export default class TopTasksController {
  constructor(container) {
    this.container = container;
    this.tasksField = null;
    this.input = null;
    this.inputTooltip = null;
    this.allTasks = null;
    this.allTasksEmpty = true;
    this.pinnedTasks = null;
    this.pinnedEmptyElement = null;
    this.pinnedTasksEmpty = true;
    this.taskTemplate = null;
  }

  getTasksData() {
    this.tasksField = this.container.querySelector('.top-tasks-screen');
    this.input = this.container.querySelector('.top-tasks-input');
    this.inputTooltip = this.container.querySelector('.input-tooltip');
    this.allTasks = this.container.querySelector('.top-tasks-all-container');
    this.allEmptyElement = this.container.querySelector('.all-empty-element');
    this.pinnedTasks = this.container.querySelector('.top-tasks-pinned-container');
    this.pinnedEmptyElement = this.container.querySelector('.pinned-empty-element');
    this.taskTemplate = this.container.querySelector('.task-content');
  }

  addTasks() {
    const inputListener1 = (event) => {
      const currentEventKey = event.key;
      if (currentEventKey === 'Enter') {
        event.preventDefault();
        const input = event.target;
        const taskTextes = [...this.tasksField.querySelectorAll('.task-text')];
        if (/[а-яА-ЯёЁa-zA-Z0-9]+/g.test(input.value)) {
          if (taskTextes.length > 0) {
            const finded = taskTextes.find((taskText) => taskText.textContent === input.value.trim());
            if (finded) {
              this.input.value = finded.textContent;
              this.inputTooltip.style.display = 'block';
              this.inputTooltip.textContent = 'The same task is already exists!';
              setTimeout(() => {
                this.inputTooltip.style.display = 'none';
              }, 2000);
            } else {
              const newTask = this.taskTemplate.cloneNode(true);
              const newTaskText = newTask.querySelector('.task-text');
              const newTaskDate = newTask.querySelector('.task-date');
              newTaskText.textContent = input.value.trim();
              newTaskDate.textContent = TopTasksController.getDate();
              this.allTasks.append(newTask);
              this.input.value = '';
              this.allEmptyElement.style.display = 'none';
              this.allTasks.style.padding = '0';
              this.order();
            }
          } else {
            const newTask = this.taskTemplate.cloneNode(true);
            const newTaskText = newTask.querySelector('.task-text');
            const newTaskDate = newTask.querySelector('.task-date');
            newTaskText.textContent = input.value.trim();
            newTaskDate.textContent = TopTasksController.getDate();
            this.allTasks.append(newTask);
            this.input.value = '';
            this.allEmptyElement.style.display = 'none';
            this.allTasks.style.padding = '0';
            this.order();
          }
        } else {
          this.input.value = '';
          this.inputTooltip.style.display = 'block';
          this.inputTooltip.textContent = 'Task name must include letters or numbers!';
          setTimeout(() => {
            this.inputTooltip.style.display = 'none';
          }, 2000);
        }
      }
    };
    this.input.addEventListener('keydown', inputListener1);
  }

  addPinTasks() {
    const allTasksPinListener1 = (event) => {
      const aim = event.target;
      if (aim.className === 'task-pin') {
        const task = aim.closest('.task-content');
        this.pinnedTasks.append(task);
        aim.textContent = 'V';
        this.order();
      }
    };
    this.allTasks.addEventListener('click', allTasksPinListener1);
  }

  addAllTasks() {
    const pinnedTasksPinListener1 = (event) => {
      const aim = event.target;
      if (aim.className === 'task-pin') {
        const task = aim.closest('.task-content');
        this.allTasks.append(task);
        aim.textContent = '';
        this.order();
      }
    };
    this.pinnedTasks.addEventListener('click', pinnedTasksPinListener1);
  }

  filterAllTasks() {
    const inputListener1 = (event) => {
      const inputValue = event.target.value.trim().toLowerCase();
      const taskTextes = this.allTasks.querySelectorAll('.task-text');

      if (taskTextes.length === 0 && inputValue !== '') {
        this.allEmptyElement.style.display = 'block';
        this.allTasks.style.padding = '1%';
      } else if (taskTextes.length > 0 && inputValue !== '') {
        this.allEmptyElement.style.display = 'block';
        this.allTasks.style.padding = '1%';
        taskTextes.forEach((taskText) => {
          const taskValue = taskText;
          const task = taskValue.closest('.task-content');
          if (taskValue.textContent.startsWith(inputValue)) {
            task.style.display = 'flex';
            this.allEmptyElement.style.display = 'none';
          } else {
            task.style.display = 'none';
          }
        });
      } else if (taskTextes.length > 0 && inputValue === '') {
        this.allEmptyElement.style.display = 'none';
        taskTextes.forEach((taskText) => {
          const taskValue = taskText;
          const task = taskValue.closest('.task-content');
          task.style.display = 'flex';
        });
      }
    };

    this.input.addEventListener('keyup', inputListener1);
  }

  removeTasks() {
    const removeTaskListener1 = (event) => {
      const aim = event.target;
      if (aim.className === 'task-remove') {
        const task = aim.closest('.task-content');
        task.remove();
        this.order();
      }
    };
    this.tasksField.addEventListener('click', removeTaskListener1);
  }

  hovers() {
    const hoversListener1 = (event) => {
      const aim = event.target;
      if (aim.className === 'task-remove' || aim.className === 'task-pin') {
        aim.style.backgroundColor = 'lightgrey';
      }
    };
    this.tasksField.addEventListener('mouseover', hoversListener1);

    const hoversListener2 = (event) => {
      const aim = event.target;
      if (aim.className === 'task-remove' || aim.className === 'task-pin') {
        aim.style.backgroundColor = 'white';
      }
    };
    this.tasksField.addEventListener('mouseout', hoversListener2);
  }

  static getDate() {
    const date = new Date();
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const month = date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${day}.${month}.${year}, ${hours}:${minutes}`;
  }

  order() {
    const allTasksNumb = this.allTasks.querySelectorAll('.task-number');
    const pinnedTasksNumb = this.pinnedTasks.querySelectorAll('.task-number');
    let allNumb = 1;
    let pinnedNumb = 1;

    if (allTasksNumb.length > 0) {
      this.allTasksEmpty = false;
      allTasksNumb.forEach((element) => {
        const item = element;
        item.textContent = allNumb;
        allNumb++;
      });
    } else {
      this.allTasksEmpty = true;
    }
    this.allTasks.style.padding = this.allTasksEmpty === false ? '1%' : '0';

    if (pinnedTasksNumb.length > 0) {
      this.pinnedTasksEmpty = false;
      pinnedTasksNumb.forEach((element) => {
        const item = element;
        item.textContent = pinnedNumb;
        pinnedNumb++;
      });
    } else {
      this.pinnedTasksEmpty = true;
    }
    this.pinnedEmptyElement.style.display = this.pinnedTasksEmpty === false ? 'none' : 'block';
  }
}
