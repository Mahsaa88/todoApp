import { useState, useContext } from "react";
import todosContext from "../context/todosContext";

function FormAddTodo(props) {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useContext(todosContext);

  const sendTodo = (event) => {
    event.preventDefault();
    if (value) {
      setTodos([...todos, { id: Date.now(), title: value, done: false }]);
      setValue("");
    }
  };

  return (
    <form className="form-inline" onSubmit={sendTodo}>
      <div className="form-group">
        <input
          type="text"
          className="form-control mx-sm-3"
          placeholder="i want to do ..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">
          add
        </button>
      </div>
    </form>
  );
}
export default FormAddTodo;
