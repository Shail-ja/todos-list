import React from 'react'
import {TodoItem} from "./TodoItem";

export const Todos = (props) => {
  let style = {
    minHeight: "85vh",
    margin: "50px auto"
    }
  return (
    <div className="container " style = {style}>
        <h3 className = "text-center my-3"> Todos List</h3>
        {props.todos.length===0? "No Todos to display" :
        props.todos.map((thistodo)=>{
            console.log(thistodo.sno);
            return(             
            <TodoItem todo = {thistodo} key={thistodo.sno} ondelete={props.ondelete}/>  //write the samething here as in that bracket
            )  
            
        })}        
    </div>
  )
}

