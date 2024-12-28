import React from 'react'

export const TodoItem = ({todo, ondelete}) => {
  return (
    <>
    <div className='my-3'>
      <h4 className>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className = "btn btn-sm btn-danger" onClick={()=>{ondelete(todo)}}>Delete</button>
    </div>
    <hr/>
    </>
  )
}


