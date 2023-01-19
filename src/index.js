import './style.css';
import todoList from './modules/todo.js';
import displayTodo from './modules/display.js';

const todoListDiv = document.getElementById('activity-div');

displayTodo(todoList, todoListDiv);
