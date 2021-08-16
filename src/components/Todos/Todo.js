import { useContext, useState } from "react";
import todosContext from "../../context/todosContext";
import EditTodo from "../EditTodo";

function Todo({ id, title, done }) {
  const [editShow, setEditShow] = useState(false);
  const [todos, setTodos] = useContext(todosContext);

  const deleteTodo = (id) => {
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  };

  const toggleDoneTodo = (id) => {
    const targetTodo = todos.find((item) => item.id === id);
    targetTodo.done = !targetTodo.done;
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos([...newTodos, targetTodo]);
  };

  return (
    <div className="col-6 mb-2" id={id}>
      <div className=" border rounded p-3">
        {editShow ? (
          <EditTodo id={id} text={title} editShow={() => setEditShow(false)} />
        ) : (
          <div className="d-flex justify-content-between align-items-center">
            <div id="title">{title}</div>
            <div>
              <button
                type="button"
                className="btn btn-info btn-sm"
                onClick={() => setEditShow(true)}
              >
                edit
              </button>
              <button
                type="button"
                className="btn btn-danger btn-sm ml-1"
                onClick={() => deleteTodo(id)}
              >
                delete
              </button>

              <button
                type="button"
                className={`btn btn-sm ml-1 ${
                  !done ? "btn-success" : "btn-warning"
                }`}
                onClick={() => toggleDoneTodo(id)}
              >
                {done ? "undone" : "done"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Todo;
