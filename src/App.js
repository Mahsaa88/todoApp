import Header from "./components/Header";
import Todos from "./components/Todos";
import FormAddTodo from "./components/FormAddTodo";
import todosContext from "./context/todosContext";

import "./App.css";

import { useState } from "react";
// import {todos as apiTodos} from './api/todosApi'

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <todosContext.Provider value={[todos, setTodos]}>
      <div className="app">
        <Header />
        <main>
          <section className="jumbotron">
            <div className="container d-flex flex-column align-items-center">
              <h1 className="jumbotron-heading">Welcome!</h1>
              <p className="lead text-muted">
                To get started, add some items to your list:
              </p>
              <FormAddTodo />
            </div>
          </section>
          <Todos />
        </main>
      </div>
    </todosContext.Provider>
  );
}

export default App;
