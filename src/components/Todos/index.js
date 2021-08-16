import React, { useContext, useState } from "react";
import todosContext from "../../context/todosContext";
import Todo from "./Todo";
import "./todos.css";

const Index = () => {
  const [todos] = useContext(todosContext);
  const [typeList, setTypeList] = useState(false);

  // const doneTodos = todos.filter((item) => item.done === true);
  // const unDoneTodos = todos.filter((item) => item.done === false);
  const filterTodos = todos.filter((item) => item.done === typeList);

  return (
    <div className="todosList">
      <div className="container">
        <div className="d-flex flex-column align-items-center ">
          <nav className="col-6 mb-3">
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <span
                href="#" className={` nav-item nav-link font-weight-bold cursor-pointer ${
                  typeList ? "" : "active"
                }`}
                id="nav-home-tab"
                onClick={() => setTypeList(false)}
              >
                undone
                <span className="badge badge-secondary">
                  {typeList?todos.length-filterTodos.length:filterTodos.length}
                </span>
              </span>

              <span
                className={`nav-item nav-link font-weight-bold cursor-pointer ${
                  typeList ? "active" : ""
                }`}
                id="nav-profile-tab"
                onClick={() => setTypeList(true)}
              >
                done
                <span className="badge badge-success ">{typeList ? filterTodos.length:todos.length-filterTodos.length}</span>
              </span>
            </div>
          </nav>
            { filterTodos.map((todo) => <Todo key={todo.id} {...todo} />) }
        </div>
      </div>
    </div>
  );
};

export default Index;
