import './App.css';
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import { AddTodo } from './MyComponents/AddTodo';
import { About } from "./MyComponents/About";
import React, { useState, useEffect} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  
  let initTodo;
  if (localStorage.getItem("todos")===null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const ondelete = (todo) => {
    console.log("i am deleting the todo", todo);
    //deleting this way doesn't work in react
    //let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(todos.filter((e) => {
      return e !== todo; //returns every todo except the one passed under this ondelete function
      //del==todo would return only the passed todo and delete every else todo
      //todo comes back on reloading
    }));
   //localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno = todos.length + 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <BrowserRouter>
        <Header title="My Todos List" searchBar={true} />
          <Routes>
            <Route path="/" element = {
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} ondelete={ondelete} />
              </>
            } />
            <Route path="/about" element={<About/>}/>
          </Routes>   
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
