import { useState,useContext } from "react";
import todosContext from "../context/todosContext";

const EditTodo = ({id, text ,editShow,newTitle}) => {
    const [newText, setNewText] = useState(text)
    const [todos,setTodos] = useContext(todosContext)

    const edit = (id, text) => {
      const todoTarget = todos.find((item) => item.id == id);
      todoTarget.title = text;
      const newTodos = todos.filter((item) => item.id != id);
      setTodos([...newTodos, todoTarget]);
    }

  return (
    <div>
      <input 
        value={newText}
        onChange={(e)=> setNewText(e.target.value)}
      />
      <button type="button" className="btn btn-success btn-sm ml-1"
        onClick={()=>{
          edit(id,newText)
          editShow()
        }}
      >
        submit
      </button>
      <button type="button" className="btn btn-danger btn-sm ml-1"
        onClick={()=> editShow()}
      >
        cancel
      </button>
      {/* { todos.map(item => <div >salam</div>)} */}
    </div>
  );
};

export default EditTodo;
