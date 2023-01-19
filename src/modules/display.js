const displayTodo = (todoList, todoDiv) => {
  const todoSorted = todoList.sort((a, b) => a.index - b.index);
  todoDiv.innerHTML = '';
  todoSorted.forEach((todo) => {
    const { description, index } = todo;
    todoDiv.innerHTML += `
    <div class="div-flex">
        <div class="activity-flex">
            <input type="checkbox"/>
            <p>${description}</p>
        </div>
        <i  id=${index} class="fa fa-ellipsis-v" aria-hidden="true"></i>
    </div>
      `;
  });
};
export default displayTodo;
