import TopTasks from './TopTasks.js';
import TopTasksController from './TopTasksController.js';

const topTasksContainer = document.getElementById('mainContainer');
const topTasks1 = new TopTasks(topTasksContainer);
topTasks1.drawTopTasks();

const topTasksDataContainer = document.getElementById('mainContainer');
const topTasksController1 = new TopTasksController(topTasksDataContainer);
topTasksController1.getTasksData();
topTasksController1.addTasks();
topTasksController1.addPinTasks();
topTasksController1.addAllTasks();
topTasksController1.filterAllTasks();
topTasksController1.removeTasks();
topTasksController1.hovers();
