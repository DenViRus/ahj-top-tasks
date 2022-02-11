export default class TopTasks {
  constructor(container) {
    this.container = container;
    this.topTaskBox = null;
  }

  drawTopTasks() {
    this.topTasksBox = document.createElement('div');
    this.topTasksBox.className = 'top-tasks-box';

    this.topTasksBox.style.width = '100%';
    this.topTasksBox.style.maxWidth = '1000px';
    this.topTasksBox.style.minWidth = '500px';
    this.topTasksBox.style.height = '100%';
    this.topTasksBox.style.maxHeight = '1000px';
    this.topTasksBox.style.minHeight = '500px';
    this.topTasksBox.style.backgroundColor = 'violet';
    this.topTasksBox.style.padding = '2%';
    this.topTasksBox.style.borderRadius = '6%';

    this.topTasksScreen = document.createElement('div');
    this.topTasksScreen.className = 'top-tasks-screen';
    this.topTasksScreen.style.width = '100%';
    this.topTasksScreen.style.height = '100%';
    this.topTasksScreen.style.backgroundColor = 'lightblue';
    this.topTasksScreen.style.padding = '1%';
    this.topTasksScreen.style.borderRadius = '3%';

    this.topTasksInputBox = document.createElement('div');
    this.topTasksInputBox.className = 'top-tasks-input-box';
    this.topTasksInputBox.style.margin = '2%';

    this.topTasksInputHeading = document.createElement('h2');
    this.topTasksInputHeading.className = 'top-tasks-input-heading';
    this.topTasksInputHeading.textContent = 'TOP Tasks';
    this.topTasksInputHeading.style.marginBottom = '1%';

    this.topTasksInputForm = document.createElement('form');
    this.topTasksInputForm.className = 'top-tasks-input-form';
    this.topTasksInputForm.style.position = 'relative';

    this.topTasksInput = document.createElement('input');
    this.topTasksInput.className = 'top-tasks-input';
    this.topTasksInput.type = 'text';
    this.topTasksInput.autocomplete = 'off';
    this.topTasksInput.style.fontSize = '25px';
    this.topTasksInput.style.width = '100%';
    this.topTasksInput.style.padding = '5px 10px';
    this.topTasksInput.style.borderRadius = '30px';

    this.inputTooltip = document.createElement('div');
    this.inputTooltip.className = 'input-tooltip';
    this.inputTooltip.textContent = '';
    this.inputTooltip.style.display = 'none';
    this.inputTooltip.style.position = 'absolute';
    this.inputTooltip.style.width = '100%';
    this.inputTooltip.style.height = '100%';
    this.inputTooltip.style.fontSize = '25px';
    this.inputTooltip.style.fontWeight = 'bold';
    this.inputTooltip.style.color = 'red';
    this.inputTooltip.style.padding = '5px 10px';
    this.inputTooltip.style.textAlign = 'center';

    this.topTasksPinnedBox = document.createElement('div');
    this.topTasksPinnedBox.className = 'top-tasks-pinned-box';
    this.topTasksPinnedBox.style.margin = '2%';

    this.topTasksPinnedHeading = document.createElement('h2');
    this.topTasksPinnedHeading.className = 'top-tasks-pinned-heading';
    this.topTasksPinnedHeading.textContent = 'Pinned:';
    this.topTasksPinnedHeading.style.marginBottom = '1%';

    this.topTasksPinnedContainer = document.createElement('div');
    this.topTasksPinnedContainer.className = 'top-tasks-pinned-container';
    this.topTasksPinnedContainer.style.backgroundColor = 'white';
    this.topTasksPinnedContainer.style.padding = '1%';
    this.topTasksPinnedContainer.style.borderRadius = '30px';
    this.topTasksPinnedContainer.style.fontSize = '25px';
    this.topTasksPinnedContainer.style.maxHeight = '250px';
    this.topTasksPinnedContainer.style.overflow = 'auto';
    this.topTasksPinnedContainer.style.textAlign = 'center';
    this.topTasksPinnedContainer.textContent = '';

    this.pinnedEmptyElement = document.createElement('div');
    this.pinnedEmptyElement.className = 'pinned-empty-element';
    this.pinnedEmptyElement.textContent = 'No pinned tasks';

    this.topTasksAllBox = document.createElement('div');
    this.topTasksAllBox.className = 'top-tasks-all-box';
    this.topTasksAllBox.style.margin = '2%';

    this.topTasksAllHeading = document.createElement('h2');
    this.topTasksAllHeading.className = 'top-tasks-all-heading';
    this.topTasksAllHeading.textContent = 'All Tasks:';
    this.topTasksAllHeading.style.marginBottom = '1%';

    this.topTasksAllContainer = document.createElement('div');
    this.topTasksAllContainer.className = 'top-tasks-all-container';
    this.topTasksAllContainer.style.backgroundColor = 'white';
    this.topTasksAllContainer.style.borderRadius = '30px';
    this.topTasksAllContainer.style.fontSize = '25px';
    this.topTasksAllContainer.style.maxHeight = '300px';
    this.topTasksAllContainer.style.overflow = 'auto';
    this.topTasksAllContainer.style.textAlign = 'center';
    this.topTasksAllContainer.textContent = '';

    this.allEmptyElement = document.createElement('div');
    this.allEmptyElement.className = 'all-empty-element';
    this.allEmptyElement.textContent = 'No tasks found';
    this.allEmptyElement.style.display = 'none';

    this.taskTemplate = document.createElement('template');
    this.taskTemplate.className = 'task-template';

    this.taskContent = document.createElement('div');
    this.taskContent.className = 'task-content';
    this.taskContent.style.display = 'flex';
    this.taskContent.style.alignItems = 'center';
    this.taskContent.style.padding = '5px';
    this.taskContent.style.margin = '3px';
    this.taskContent.style.fontSize = '20px';
    this.taskContent.style.fontWeight = 'bold';
    this.taskContent.style.border = '2px solid black';
    this.taskContent.style.borderRadius = '20px';

    this.taskNumber = document.createElement('div');
    this.taskNumber.className = 'task-number';
    this.taskNumber.textContent = '';
    this.taskNumber.style.padding = '1px';
    this.taskNumber.style.margin = '1px 5px';
    this.taskNumber.style.width = '3%';

    this.taskText = document.createElement('div');
    this.taskText.className = 'task-text';
    this.taskText.textContent = '';
    this.taskText.style.padding = '1px';
    this.taskText.style.margin = '1px 5px';

    this.taskDate = document.createElement('div');
    this.taskDate.className = 'task-date';
    this.taskDate.style.color = 'blue';
    this.taskDate.textContent = '';
    this.taskDate.style.padding = '1px';
    this.taskDate.style.marginLeft = 'auto';
    this.taskDate.style.marginRight = '20px';

    this.taskPin = document.createElement('div');
    this.taskPin.className = 'task-pin';
    this.taskPin.style.color = 'green';
    this.taskPin.textContent = '';
    this.taskPin.style.fontSize = '25px';
    this.taskPin.style.padding = '1px';
    this.taskPin.style.marginLeft = '20px';
    this.taskPin.style.marginRight = '20px';
    this.taskPin.style.width = '30px';
    this.taskPin.style.height = '30px';
    this.taskPin.style.border = '3px solid black';
    this.taskPin.style.borderRadius = '50%';
    this.taskPin.style.borderRadius = '50%';
    this.taskPin.style.cursor = 'pointer';

    this.taskRemove = document.createElement('div');
    this.taskRemove.className = 'task-remove';
    this.taskRemove.style.color = 'red';
    this.taskRemove.textContent = 'Remove task';
    this.taskRemove.style.fontSize = '20px';
    this.taskRemove.style.padding = '1px 10px';
    this.taskRemove.style.marginLeft = '20px';
    this.taskRemove.style.marginRight = '20px';
    this.taskRemove.style.border = '3px solid black';
    this.taskRemove.style.borderRadius = '20px';
    this.taskRemove.style.cursor = 'pointer';

    this.topTasksInputForm.append(this.inputTooltip);
    this.topTasksInputForm.append(this.topTasksInput);
    this.topTasksInputBox.append(this.topTasksInputHeading);
    this.topTasksInputBox.append(this.topTasksInputForm);

    this.topTasksPinnedContainer.append(this.pinnedEmptyElement);
    this.topTasksPinnedBox.append(this.topTasksPinnedHeading);
    this.topTasksPinnedBox.append(this.topTasksPinnedContainer);

    this.topTasksAllContainer.append(this.allEmptyElement);
    this.topTasksAllBox.append(this.topTasksAllHeading);
    this.topTasksAllBox.append(this.topTasksAllContainer);

    this.taskContent.append(this.taskNumber);
    this.taskContent.append(this.taskText);
    this.taskContent.append(this.taskDate);
    this.taskContent.append(this.taskPin);
    this.taskContent.append(this.taskRemove);
    this.taskTemplate.append(this.taskContent);

    this.topTasksScreen.append(this.topTasksInputBox);
    this.topTasksScreen.append(this.topTasksPinnedBox);
    this.topTasksScreen.append(this.topTasksAllBox);

    this.topTasksBox.append(this.topTasksScreen);
    this.topTasksBox.append(this.taskTemplate);
    this.container.append(this.topTasksBox);
  }
}
